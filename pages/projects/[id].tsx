import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Project } from '../../components/ProjectCard';

// プロジェクト詳細ページ
export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // IDを使ってプロジェクトを取得
  useEffect(() => {
    const fetchProject = async () => {
      if (!id) return;
      
      try {
        setIsLoading(true);
        const response = await fetch(`/api/projects/${id}`);
        
        if (response.ok) {
          const data = await response.json();
          setProject(data.project);
        } else {
          setError('プロジェクトの取得に失敗しました');
          console.error('プロジェクト取得エラー:', response.statusText);
        }
      } catch (err) {
        console.error('データ取得エラー:', err);
        setError('プロジェクトの取得中にエラーが発生しました');
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  // ローディング中の表示
  if (isLoading) {
    return (
      <Layout title="読み込み中...">
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-center">
            <div className="animate-pulse text-cyan-400">読み込み中...</div>
          </div>
        </div>
      </Layout>
    );
  }

  // エラー時の表示
  if (error || !project) {
    return (
      <Layout title="エラー">
        <div className="container mx-auto px-4 py-16">
          <div className="bg-red-900/30 border border-red-500 text-red-200 p-4 rounded">
            {error || 'プロジェクトが見つかりません'}
          </div>
          <div className="mt-8 text-center">
            <Link href="/projects" className="cyber-button secondary">
              <span>プロジェクト一覧に戻る</span>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout 
      title={project.title}
      description={project.description?.substring(0, 160) || `${project.title} - プロジェクト詳細`}
      ogImage={project.image}
      ogType="article"
      canonicalUrl={`/projects/${project.id}`}
    >
      <main className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* プロジェクトヘッダー */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">{project.title}</h1>
            
            {/* タグ */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags && project.tags.map((tag, index) => (
                <span key={index} className="bg-gray-800 text-cyan-300 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* プロジェクト画像 */}
          {project.image && (
            <div className="mb-10 relative overflow-hidden rounded-lg border border-gray-700 shadow-lg">
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                />
              </div>
            </div>
          )}
          
          {/* 詳細説明 */}
          <div className="prose prose-invert prose-cyan max-w-none mb-10">
            <h2 className="text-2xl font-bold mb-4 text-white">詳細</h2>
            <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
              {project.description}
            </div>
          </div>
          
          {/* リンク */}
          <div className="flex flex-wrap gap-4 mt-10">
            {project.repoUrl && (
              <a 
                href={project.repoUrl}
                target="_blank" 
                rel="noreferrer"
                className="cyber-button primary"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
                  </svg>
                  GitHubリポジトリ
                </span>
              </a>
            )}
            
            {project.demoUrl && (
              <a 
                href={project.demoUrl}
                target="_blank" 
                rel="noreferrer"
                className="cyber-button secondary"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  デモを見る
                </span>
              </a>
            )}
            
            <Link href="/projects" className="cyber-button">
              <span>一覧に戻る</span>
            </Link>
          </div>
        </motion.div>
      </main>
    </Layout>
  );
}