import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  hideHeader?: boolean;
  hideFooter?: boolean;
  className?: string;
}

const Layout = ({ 
  children, 
  title, 
  description, 
  ogImage,
  ogType = 'website',
  canonicalUrl,
  hideHeader = false,
  hideFooter = false,
  className = ''
}: LayoutProps) => {
  // サイトのデフォルト値
  const siteTitle = 'Paraccoli Portfolio';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio.paraccoli.com';
  const siteDescription = description || 'Paraccoliのポートフォリオサイトです。Webアプリケーション開発、機械学習の研究などの実績を紹介しています。';
  const siteImage = ogImage || '/images/og-image.jpg'; // デフォルト画像のパス

  // 画像URLが絶対パスでない場合は絶対パスに変換
  const absoluteImageUrl = siteImage.startsWith('http') 
    ? siteImage 
    : `${siteUrl}${siteImage}`;

  // 正規URLの設定
  const fullCanonicalUrl = canonicalUrl 
    ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${siteUrl}${canonicalUrl}`)
    : siteUrl;

  return (
    <>
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <meta name="description" content={description || siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={fullCanonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
        <meta property="og:description" content={description || siteDescription} />
        <meta property="og:image" content={absoluteImageUrl} />
        <meta property="og:url" content={fullCanonicalUrl} />
        <meta property="og:site_name" content="Paraccoli" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
        <meta name="twitter:description" content={description || siteDescription} />
        <meta name="twitter:image" content={absoluteImageUrl} />
      </Head>

      <div className={`cyberpunk-bg min-h-screen flex flex-col ${className}`}>
        {!hideHeader && <Header />}
        {children}
        {!hideFooter && <Footer />}
        <div className="cyber-noise"></div>
        <div className="cyber-scanlines fixed inset-0 pointer-events-none z-20 opacity-10"></div>
      </div>
    </>
  );
};

export default Layout;