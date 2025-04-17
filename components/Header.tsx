import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  
  // スクロール検出
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // スクロール位置に基づくアニメーションの設定
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 50], [1, 0.98]);
  const headerBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(5px)"]);
  
  // ナビゲーションリンク
  const navigationLinks = [
    { name: 'ホーム', href: '/' },
    { name: '自己紹介', href: '/about' },
    { name: 'プロジェクト', href: '/projects' },
    { name: 'ブログ', href: '/blog' },
    { name: 'お問い合わせ', href: '/contact' }
  ];

  // アクティブなリンクかどうかを判定する関数
  const isActive = (path: string) => router.pathname === path;

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      } transition-all duration-300`}
      style={{
        opacity: headerOpacity,
        backdropFilter: headerBlur
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* ロゴ */}
          <Link 
            href="/" 
            className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
          >
            Paraccoli
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex space-x-6">
            {navigationLinks.map(link => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`transition-colors ${
                  isActive(link.href) 
                    ? 'text-cyan-400' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 mt-0.5"
                    layoutId="activeTab"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gray-800 shadow-lg px-4 pt-2 pb-4">
              <nav className="flex flex-col space-y-3">
                {navigationLinks.map(link => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className={`px-3 py-2 rounded transition-colors ${
                      isActive(link.href) 
                        ? 'text-cyan-400 bg-gray-700' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;