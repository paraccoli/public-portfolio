import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import CyberCar from '../components/UI/CyberCar';

export default function Custom404() {
  return (
    <Layout 
      title="404 - ページが見つかりません" 
      description="お探しのページが見つかりませんでした。"
    >
      <>
        <Head>
          <title>404 - ページが見つかりません | Paraccoli Portfolio</title>
          <meta name="robots" content="noindex, follow" />
        </Head>

        {/* LiDARスタイルの3D車両（背景として使用） */}
        <CyberCar viewAngle={45} rotationSpeed={0.3} />
        
        <main className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-8xl md:text-9xl font-bold mb-6 cyber-glitch" data-text="404">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">404</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 cyber-glow-text">
                システムエラー: ページが見つかりませんでした
              </h2>
              
              <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-300">
                リクエストされたリソースは存在しないか、別の次元に移動しました。ホームに戻るか、以下のリンクからナビゲートしてください。
              </p>
              
              <div className="cyber-horizontal-line my-8 opacity-60"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <motion.div
                  className="cyber-card p-6 cyber-corner"
                  whileHover={{ y: -5, boxShadow: "0 0 20px rgba(56, 189, 248, 0.3)" }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">主要リンク</h3>
                  <div className="flex flex-col space-y-2">
                    <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      ホーム
                    </Link>
                    <Link href="/projects" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      プロジェクト
                    </Link>
                    <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      ブログ
                    </Link>
                  </div>
                </motion.div>
                
                <motion.div
                  className="cyber-card p-6 cyber-corner"
                  whileHover={{ y: -5, boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">サポート</h3>
                  <div className="flex flex-col space-y-2">
                    <Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">
                      自己紹介
                    </Link>
                    <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                      お問い合わせ
                    </Link>
                    <Link href="/resume" className="text-gray-300 hover:text-purple-400 transition-colors">
                      履歴書
                    </Link>
                  </div>
                </motion.div>
              </div>
              
              {/* ここが問題の箇所: motion.aとLinkの組み合わせがハイドレーションエラーを引き起こしている */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/" className="cyber-button primary inline-flex">
                  <span>ホームに戻る</span>
                  <span className="cyber-button-glitch"></span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="absolute bottom-12 left-0 right-0 text-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            エラーコード: 404_PAGE_NOT_FOUND
          </motion.div>
        </main>
        
        {/* スキャンラインエフェクト */}
        <div className="cyber-scanlines fixed inset-0 pointer-events-none z-20 opacity-20"></div>
      </>
    </Layout>
  );
}