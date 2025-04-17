import Head from 'next/head'
import Layout from '../components/Layout';
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <Layout title="お問い合わせ" description="MLエンジニアParaccoliへのお問い合わせページ。プロジェクトの依頼や共同研究のご相談などお気軽にどうぞ。">
    <>
      <Head>
        <title>お問い合わせ | Paraccoli Portfolio</title>
        <meta name="description" content="MLエンジニアParaccoliへのお問い合わせページ。プロジェクトの依頼や共同研究のご相談などお気軽にどうぞ。" />
      </Head>

      <main className="min-h-screen bg-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
          >
            お問い合わせ
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-center mb-12 text-gray-300 max-w-3xl mx-auto"
          >
            お気軽にお問い合わせください
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* コンタクトフォーム */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 shadow-xl"
            >
              {/* ContactFormコンポーネントに置き換え */}
              <ContactForm />
            </motion.div>
            
            {/* 連絡先情報 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 shadow-xl mb-6">
                <h2 className="text-2xl font-semibold mb-6 text-purple-400">連絡先</h2>
                
                <div className="space-y-6">
                  <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-medium text-gray-200 mb-2">メール</h3>
                    <p className="text-cyan-400 font-medium">contact@paraccoli.com</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-200 mb-3">ソーシャルメディア</h3>
                    <div className="flex flex-col space-y-3">
                      <a 
                        href="https://github.com/Paraccoli" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors p-3 rounded-md hover:bg-gray-800"
                      >
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                      <a 
                        href="https://twitter.com/Paraccoli" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors p-3 rounded-md hover:bg-gray-800"
                      >
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 14.01-7.5 14.01-14.001 0-.213-.005-.426-.015-.637.96-.695 1.795-1.562 2.455-2.549z" />
                        </svg>
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 shadow-xl">
                <h3 className="text-xl font-medium text-gray-200 mb-4">お気軽にご連絡ください</h3>
                <p className="text-gray-300 leading-relaxed">
                  プロジェクトの依頼、技術的な質問、共同研究など、どんなことでもお気軽にお問い合わせください。
                </p>
                <div className="mt-4 p-4 bg-purple-900/20 border border-purple-800/30 rounded-lg">
                  <p className="text-gray-300 text-sm">
                    通常、24時間以内にご返信いたしますが、
                    休日や繁忙期などの影響で、場合によってはお時間をいただくことがあります。
                    何卒ご了承ください。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
    </Layout>
  );
}