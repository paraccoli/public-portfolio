import { useRouter } from 'next/router';
import { useState, useEffect, memo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { BlogPost } from '../../components/BlogCard';
import dynamic from 'next/dynamic';

// 重いコンポーネントだけを動的インポート
const ReactMarkdown = dynamic(() => import('react-markdown'), {
  loading: () => <div className="animate-pulse bg-gray-700 h-96 rounded-md"></div>,
  ssr: false
});

// プラグインは通常のimportを使用
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      try {
        setIsLoading(true);
        const res = await fetch(`/api/blog/slug/${slug}`);
        
        if (res.ok) {
          const data = await res.json();
          setPost(data.post);
        } else {
          const errorData = await res.json();
          setError(errorData.message || 'ブログ記事の取得に失敗しました');
        }
      } catch (err) {
        console.error('データ取得エラー:', err);
        setError('ブログ記事の取得中にエラーが発生しました');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPost();
  }, [slug]);
  
  if (isLoading) {
    return (
      <Layout title="読み込み中..." description="ブログ記事を読み込んでいます。">
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-cyan-400 text-xl">記事を読み込み中...</div>
        </div>
      </Layout>
    );
  }
  
  if (error || !post) {
    return (
      <Layout title="エラー" description="ブログ記事の取得中にエラーが発生しました。">
        <div className="min-h-screen bg-gray-900 text-white py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-red-500 mb-6">記事が見つかりません</h1>
            <p className="text-lg text-gray-300 mb-8">{error || '指定された記事が存在しないか、削除された可能性があります。'}</p>
            <Link 
              href="/blog" 
              className="px-6 py-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors"
            >
              ブログ一覧へ戻る
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout
      title={post.title}
      description={post.excerpt}
      ogImage={post.imagePath || '/images/og-image.jpg'}
    >
      <div className="py-20 px-4">
        <article className="max-w-3xl mx-auto">
          {/* ヘッダー部分 */}
          <header className="mb-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                href="/blog" 
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                ブログ一覧へ戻る
              </Link>
            
              {post.imagePath && (
                <div className="mb-8 rounded-xl overflow-hidden">
                  <img 
                    src={post.imagePath} 
                    alt={post.title} 
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </div>
              )}
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-gray-400 mb-6">
                <span className="mr-4">
                  <span className="text-gray-500 mr-2">公開日:</span>
                  {post.date}
                </span>
                
                <span className="mr-4">
                  <span className="text-gray-500 mr-2">カテゴリ:</span>
                  <span className="text-cyan-400">{post.category}</span>
                </span>
              </div>
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </header>
          
          {/* 記事本文 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="prose prose-lg prose-invert max-w-none markdown-body"
          >
            <BlogContent content={post.content} />
          </motion.div>
          
          {/* フッター部分 */}
          <footer className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex flex-wrap justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">
                <span className="text-gray-500">公開日: </span>
                {post.date}
              </div>
              
              <Link 
                href="/blog" 
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                ブログ一覧へ戻る
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </Layout>
  );
}

// Markdownコンテンツをメモ化
const BlogContent = memo(({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, [rehypePrism, { showLineNumbers: true }]]}
      components={{
        img: imageRenderer
      }}
    >
      {content}
    </ReactMarkdown>
  );
});
BlogContent.displayName = 'BlogContent';

// 画像レンダラーを最適化
const imageRenderer = ({ src, alt, title }: { src?: string, alt?: string, title?: string }) => {
  const widthMatch = title?.match(/=(\d+)x/);
  
  if (widthMatch) {
    const width = parseInt(widthMatch[1]);
    const height = Math.floor(width * 9/16); // アスペクト比を仮定
    
    return (
      <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
        <Image 
          src={src || ''} 
          alt={alt || ''} 
          fill
          sizes={`(max-width: 768px) 100vw, ${width}px`}
          className="object-cover"
          loading="lazy"
        />
      </div>
    );
  }
  
  // 通常の画像
  return (
    <div className="relative w-full aspect-video">
      <Image 
        src={src || ''} 
        alt={alt || ''} 
        fill
        sizes="(max-width: 768px) 100vw, 800px"
        className="object-cover"
        loading="lazy"
      />
    </div>
  );
};