import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

// データ保存先のファイルパス
const DATA_FILE = path.join(process.cwd(), 'data', 'projects.json');

// プロジェクトAPIハンドラ
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return await getProjects(req, res);
  }
  
  return res.status(405).json({ message: 'Method not allowed' });
}

// プロジェクト情報を取得
async function getProjects(_: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    const projects = JSON.parse(data);
    
    return res.status(200).json({ projects });
  } catch (error) {
    console.error('プロジェクト取得エラー:', error);
    
    // ファイルがなければ空の配列を返す
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
      await fs.writeFile(DATA_FILE, JSON.stringify([]), 'utf8');
      return res.status(200).json({ projects: [] });
    }
    
    return res.status(500).json({ message: 'プロジェクトの取得に失敗しました' });
  }
}

// プロジェクトの作成
async function createProject(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { title, description, tags, image, repoUrl, demoUrl } = req.body;
    
    // 必須フィールドのバリデーション
    if (!title || !description) {
      return res.status(400).json({ message: 'タイトルと説明は必須です' });
    }
    
    // 既存データ読み込み
    let projects = [];
    try {
      const data = await fs.readFile(DATA_FILE, 'utf8');
      projects = JSON.parse(data);
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
      } else {
        throw error;
      }
    }
    
    // 新しいプロジェクトの作成
    const newProject = {
      id: Date.now(),
      title,
      description,
      tags: tags || [],
      image: image || null,
      repoUrl: repoUrl || null,
      demoUrl: demoUrl || null,
    };
    
    // データに追加して保存
    projects.push(newProject);
    await fs.writeFile(DATA_FILE, JSON.stringify(projects, null, 2), 'utf8');
    
    return res.status(201).json({ project: newProject });
  } catch (error) {
    console.error('プロジェクト作成エラー:', error);
    return res.status(500).json({ message: 'プロジェクトの作成に失敗しました' });
  }
}

// GETリクエストは認証なしでもアクセス可能に修正
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return getProjects(req, res);
  } else {
    return withAuth(handler)(req, res);
  }
};