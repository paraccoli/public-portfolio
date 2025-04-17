import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import CyberBackground from '../components/UI/CyberBackground';
import CyberCar from '../components/UI/CyberCar';

export default function HomePage() {
  return (
    <Layout title="ホーム" description="Paraccoliのポートフォリオサイトへようこそ">
      {/* サイバーパンク環境エフェクト */}
      <CyberBackground />
      
      {/* LiDARスタイルの3D車両 */}
      <CyberCar color="rgba(56, 189, 248, 0.8)" rotationSpeed={0.3} />
      
      {/* メインコンテンツ */}
      <main className="relative z-10">
        {/* ヒーローセクション */}
        <section className="h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
          {/* サイバーリングエフェクト */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="cyber-ring-container">
              <div className="cyber-ring"></div>
              <div className="cyber-ring"></div>
              <div className="cyber-ring"></div>
            </div>
            <div className="cyber-grid"></div>
          </div>
          
          {/* ヒーローコンテンツ */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 text-center max-w-4xl"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 glitch-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="glitch" data-text="Paraccoli">Paraccoli</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-10 text-cyan-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              ML Engineer | CARLA Simulator Researcher
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.a 
                href="/about"
                className="cyber-button primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>自己紹介</span>
                <span className="cyber-button-glitch"></span>
              </motion.a>
              
              <motion.a 
                href="/projects"
                className="cyber-button secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>プロジェクト</span>
                <span className="cyber-button-glitch"></span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* スクロールインジケーター */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          >
            <span className="text-cyan-400 text-sm">スクロール</span>
            <div className="mt-2 w-6 h-10 border-2 border-cyan-400 rounded-full mx-auto relative">
              <span className="absolute top-1 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 animate-pulse"></span>
            </div>
          </motion.div>
        </section>

        {/* プロジェクトセクション */}
        <section className="py-20 px-4 backdrop-blur-sm bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-12 text-center cyber-heading"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-gradient">Research & Projects</span>
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              {/* CARLAシミュレータ研究 */}
              <motion.div 
                className="cyber-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                whileHover={{ y: -10, boxShadow: "0 0 25px rgba(56, 189, 248, 0.3)" }}
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-400 glitch-small" data-text="CARLAシミュレータ研究">
                  CARLAシミュレータ研究
                </h3>
                <p className="text-gray-300">
                  ニューラルネットワークを活用した物体検出システムの研究。自動運転シミュレーションにおける高精度な認識モデルを開発しています。
                </p>
                <div className="cyber-card-horizontal-line"></div>
                <div className="cyber-card-vertical-line"></div>
              </motion.div>

              {/* オープンソースプロジェクト */}
              <motion.div 
                className="cyber-card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 0 25px rgba(147, 51, 234, 0.3)" }}
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-400 glitch-small" data-text="オープンソース活動">
                  オープンソース活動
                </h3>
                <p className="text-gray-300">
                  GitHubを通じた技術共有とコミュニティ貢献。機械学習モデルや自動運転関連のライブラリを公開しています。
                </p>
                <div className="cyber-card-horizontal-line"></div>
                <div className="cyber-card-vertical-line"></div>
              </motion.div>
            </div>
            
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="/projects" className="cyber-button primary">
                <span>すべてのプロジェクトを見る</span>
                <span className="cyber-button-glitch"></span>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
}