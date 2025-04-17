import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';
import { withAuth } from '../../../utils/authMiddleware';

// データ保存先のファイルパス
const DATA_FILE = path.join(process.cwd(), 'data', 'blog.json');

// GETリクエストは認証なしでもアクセス可能に修正
// ブログ記事を取得するAPIハンドラ
async function getBlogPosts(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { category } = req.query;
    
    // データファイルから記事を読み込む
    let posts = [];
    const data = await fs.readFile(DATA_FILE, 'utf8');
    posts = JSON.parse(data);
    
    // カテゴリによるフィルタリング
    if (category && category !== 'all') {
      posts = posts.filter((post: any) => post.category === category);
    }
    
    // 管理者向けかどうかのクエリパラメータを確認
    const isAdmin = req.query.admin === 'true';
    
    // 管理者でない場合は、公開されている記事のみを返す
    posts = isAdmin ? posts : posts.filter((post: any) => post.published);
    
    return res.status(200).json({ posts });
  } catch (error) {
    console.error('ブログ記事の取得エラー:', error);
    
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
      await fs.writeFile(DATA_FILE, JSON.stringify([]), 'utf8');
      return res.status(200).json({ posts: [] });
    }
    
    return res.status(500).json({ message: 'ブログ記事の取得に失敗しました' });
  }
}

// ハンドラー関数を修正：GETリクエストは認証をスキップ
async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return await getBlogPosts(req, res);
      
    case 'POST':
      // 認証が必要なケース
      return await createBlogPost(req, res);
      
    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
}

// ブログ記事の作成
async function createBlogPost(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { title, excerpt, content, category, tags: rawTags, imagePath, url, published = false } = req.body;
    
    // 必須フィールドのバリデーション
    if (!title || !excerpt || !content || !category) {
      return res.status(400).json({ message: 'タイトル、概要、本文、カテゴリは必須です' });
    }
    
    // タグを配列に変換
    const tags = Array.isArray(rawTags) ? rawTags : rawTags ? rawTags.split(',').map((tag: string) => tag.trim()) : [];
    
    // スラッグ生成（URLに使用する識別子）
    const slug = url 
      ? url.replace(/^\/blog\//, '').trim() 
      : title
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')  // 特殊文字を削除
          .replace(/\s+/g, '-')      // スペースをハイフンに変換
          .replace(/-+/g, '-')       // 連続ハイフンを単一に
          + '-' + Date.now().toString().slice(-6);  // 重複防止のためのID
    
    // 既存データ読み込み
    let posts = [];
    try {
      const data = await fs.readFile(DATA_FILE, 'utf8');
      posts = JSON.parse(data);
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
      } else {
        throw error;
      }
    }
    
    // 現在の日時
    const now = new Date().toISOString();
    
    // 新しい記事の作成
    const newPost = {
      id: Date.now(),
      title,
      excerpt,
      content,
      date: now.split('T')[0], // YYYY-MM-DD形式
      published: published,  // 公開状態
      publishedAt: published ? now : null, // 公開日時
      category,
      tags,
      imagePath: imagePath || null,
      slug: slug,
    };
    
    // データに追加して保存
    posts.push(newPost);
    await fs.writeFile(DATA_FILE, JSON.stringify(posts, null, 2), 'utf8');
    
    return res.status(201).json({ post: newPost });
  } catch (error) {
    console.error('ブログ作成エラー:', error);
    return res.status(500).json({ message: '記事の作成に失敗しました' });
  }
}

// GETリクエストは認証なしで、POSTは認証ありで処理
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return getBlogPosts(req, res);
  } else {
    return withAuth(handler)(req, res);
  }
};