import Head from 'next/head'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import BlogCard, { BlogPost } from '../components/BlogCard';
import Layout from '../components/Layout';

// カテゴリの型定義
interface Category {
  id: string;
  name: string;
  count: number;
}

export default function Blog() {
  const [filter, setFilter] = useState<string>('all');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  // ブログ記事をAPIから取得
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/blog');
        
        if (response.ok) {
          const data = await response.json();
          setPosts(data.posts || []);
        } else {
          setError('ブログ記事の取得に失敗しました');
        }
      } catch (err) {
        console.error('データ取得エラー:', err);
        setError('ブログ記事の取得中にエラーが発生しました');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // カテゴリデータの取得
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/categories');
        if (res.ok) {
          const data = await res.json();
          setCategories(data.categories || []);
        }
      } catch (err) {
        console.error('カテゴリ取得エラー:', err);
      }
    };
    
    fetchCategories();
  }, []);

  const sortedPosts = posts.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const filteredPosts = (filter === 'all' || filter === 'すべて'
    ? [...posts] 
    : [...posts.filter(post => post.category === filter)]).reverse();

  return (
    <Layout title="技術ブログ" description="MLエンジニアParaccoliの機械学習、自動運転、CARLAシミュレータに関する技術ブログ記事一覧です。">
      <>
        <Head>
          <title>ブログ | Paraccoli Portfolio</title>
          <meta name="description" content="MLエンジニアParaccoliの機械学習、自動運転、CARLAシミュレータに関する技術ブログ記事一覧です。" />
        </Head>

        <main className="min-h-screen bg-gray-900 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
            >
              ブログ
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-center mb-12 text-gray-300 max-w-3xl mx-auto"
            >
              ディープラーニングなどのAI技術から日常の出来事などを自由に発信しています
            </motion.p>

            {/* カテゴリーフィルター */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map(category => (
                <button 
                  key={category.id}
                  onClick={() => setFilter(category.name)}
                  className={`px-4 py-2 rounded-full ${filter === category.name 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'} transition-colors`}
                >
                  {category.id === 'all' ? 'すべて' : category.name}
                </button>
              ))}
            </motion.div>

            {isLoading ? (
              <div className="flex justify-center py-20">
                <div className="text-cyan-400 text-xl">ブログ記事を読み込み中...</div>
              </div>
            ) : error ? (
              <div className="bg-red-900/30 border border-red-500 text-red-200 px-4 py-3 rounded mb-6 text-center">
                {error}
              </div>
            ) : filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-400 py-12">
                この条件に一致する記事はありません
              </div>
            )}
          </div>
        </main>
      </>
    </Layout>
  );
}