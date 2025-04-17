import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* サイト情報 */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Paraccoli Portfolio</h3>
            <p className="text-gray-400 mb-4">
              Paraccoliのポートフォリオサイト。
              機械学習、深層学習、自動運転に関するプロジェクトと個人的なブログを紹介しています。
            </p>
            <div className="flex space-x-4">
              {/* ソーシャルメディアリンク */}
              <a 
                href="https://github.com/Paraccoli" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path 
                    fillRule="evenodd" 
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </a>
              <a 
                href="https://twitter.com/Paraccoli" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* サイトマップ */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">サイトマップ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  プロフィール
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  プロジェクト
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  ブログ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* お問い合わせ */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">お問い合わせ</h3>
            <p className="text-gray-400 mb-4">
              お仕事のご依頼やご質問などがございましたら、お気軽にご連絡ください。
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
            >
              お問い合わせフォーム
            </Link>
          </div>
        </div>
        
        {/* コピーライト */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>© {new Date().getFullYear()} Paraccoli. All rights reserved.</p>
              <div className="mt-4 md:mt-0 text-sm text-gray-400 flex items-center space-x-4">
                <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                  利用規約
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                  プライバシーポリシー
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;