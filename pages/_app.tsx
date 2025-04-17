import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'prismjs/themes/prism-tomorrow.css'; // Prism.jsのテーマ
import '../styles/markdown.css'; // マークダウン用のカスタムスタイル

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;