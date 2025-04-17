import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import { sendContactNotification, sendAutoReply } from '../../utils/emailService';

// データファイルのパス
const CONTACTS_FILE = path.join(process.cwd(), 'data', 'contacts.json');

// 問い合わせデータ型
interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  isRead: boolean;
  isArchived: boolean;
  replies?: {
    id: number;
    to: string;
    name: string;
    subject: string;
    message: string;
    sentAt: string;
  }[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // POSTリクエストのみ許可
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    // リクエストボディから問い合わせデータを取得
    const { name, email, subject, message, recaptchaToken } = req.body;

    // 必須フィールドのバリデーション
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        error: '必須項目が入力されていません' 
      });
    }

    // reCAPTCHAトークンの検証（省略可能）
    if (process.env.VERIFY_RECAPTCHA === 'true' && !await verifyRecaptcha(recaptchaToken)) {
      return res.status(400).json({ 
        success: false, 
        error: 'reCAPTCHA検証に失敗しました' 
      });
    }

    // 問い合わせデータを作成
    const newContact: Contact = {
      id: Date.now(),
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString(),
      isRead: false,
      isArchived: false
    };

    // データをファイルに保存
    await saveContact(newContact);

    try {
      // 管理者への通知メールを送信
      const notificationResult = await sendContactNotification({
        name,
        email,
        subject,
        message
      });
      
      if (!notificationResult.success) {
        console.error('管理者通知メール送信失敗:', notificationResult.error);
        // エラーをログに記録するが、処理は続行する
      }
      
      // 問い合わせ者への自動返信
      const autoReplyResult = await sendAutoReply({
        name,
        email,
        subject
      });
      
      if (!autoReplyResult.success) {
        console.error('自動返信メール送信失敗:', autoReplyResult.error);
        // エラーをログに記録するが、処理は続行する
      }
    } catch (emailError) {
      console.error('メール送信処理エラー:', emailError);
      // メール送信エラーでもフォーム送信自体は成功とする
    }

    // 成功レスポンスを返す
    res.status(200).json({ 
      success: true, 
      message: 'お問い合わせが送信されました',
      id: newContact.id
    });
  } catch (error) {
    console.error('問い合わせ処理エラー:', error);
    res.status(500).json({ 
      success: false, 
      error: '問い合わせ処理中にエラーが発生しました' 
    });
  }
}

// 問い合わせデータをJSONファイルに保存
async function saveContact(contact: Contact) {
  try {
    // 既存の問い合わせデータを読み込む
    let contacts: Contact[] = [];
    try {
      const data = await fs.readFile(CONTACTS_FILE, 'utf8');
      contacts = JSON.parse(data);
    } catch (error) {
      // ファイルが存在しない場合は空の配列を使用
      contacts = [];
    }

    // 新しい問い合わせを追加
    contacts.unshift(contact); // 先頭に追加（新しい順）

    // data ディレクトリが存在しない場合は作成
    try {
      await fs.mkdir(path.dirname(CONTACTS_FILE), { recursive: true });
    } catch (error) {
      // ディレクトリがすでに存在する場合はエラーを無視
    }

    // ファイルに保存
    await fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2), 'utf8');
    
    return true;
  } catch (error) {
    console.error('問い合わせデータの保存に失敗:', error);
    throw error;
  }
}

// reCAPTCHA検証関数
async function verifyRecaptcha(token?: string): Promise<boolean> {
  // reCAPTCHA検証が無効の場合は常にtrue
  if (process.env.VERIFY_RECAPTCHA !== 'true') {
    return true;
  }
  
  if (!token) {
    console.log('reCAPTCHAトークンが提供されていません');
    return false;
  }
  
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEYが設定されていません');
    // 開発環境では検証をスキップできるようにする
    return process.env.NODE_ENV === 'development';
  }
  
  try {
    console.log('reCAPTCHAトークンを検証中...');
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`
    });
    
    const data = await response.json();
    console.log('reCAPTCHA検証結果:', {
      success: data.success,
      score: data.score,
      action: data.action,
      hostname: data.hostname
    });
    
    // スコアが0.5以上であれば人間と判断（スコアは0.0～1.0の間）
    const isHuman = data.success && data.score >= 0.5;
    return isHuman;
  } catch (error) {
    console.error('reCAPTCHA検証エラー:', error);
    return false;
  }
}