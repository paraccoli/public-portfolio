import { useState, useEffect } from 'react';

// グローバル宣言を追加
declare global {
  interface Window {
    grecaptcha: any;
    _reCaptchaCallback: () => void;
    _reCaptchaToken: string | null;
  }
}

// 環境変数からサイトキーを取得
const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

export function useReCaptcha() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // reCAPTCHAスクリプトを読み込む
  useEffect(() => {
    // reCAPTCHAが無効な場合は何もしない
    if (!SITE_KEY) {
      console.log('reCAPTCHA site key is not configured, skipping reCAPTCHA');
      return;
    }
    
    if (typeof window !== 'undefined' && !window.grecaptcha) {
      // コールバック関数を設定
      window._reCaptchaCallback = () => {
        setIsLoaded(true);
        executeReCaptcha();
      };
      
      // スクリプトを動的に読み込み
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}&onload=_reCaptchaCallback`;
      script.async = true;
      script.defer = true;
      
      document.head.appendChild(script);
      
      return () => {
        // クリーンアップ
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
        window._reCaptchaCallback = () => {};
        window._reCaptchaToken = null;
      };
    } else if (typeof window !== 'undefined' && window.grecaptcha) {
      setIsLoaded(true);
      executeReCaptcha();
    }
  }, []);
  
  // reCAPTCHA実行関数
  const executeReCaptcha = async () => {
    if (!SITE_KEY) {
      console.log('reCAPTCHA site key is not configured, skipping verification');
      return null;
    }
    
    if (!window.grecaptcha || !isLoaded) {
      console.log('reCAPTCHA is not loaded yet');
      return null;
    }

    try {
      console.log('Executing reCAPTCHA...');
      const token = await window.grecaptcha.execute(SITE_KEY, { action: 'contact_submit' });
      console.log('reCAPTCHA token generated');
      setToken(token);
      return token;
    } catch (err) {
      console.error('reCAPTCHA実行エラー:', err);
      setError('reCAPTCHAの実行に失敗しました');
      return null;
    }
  };
  
  return {
    isLoaded,
    token,
    error,
    executeReCaptcha
  };
}