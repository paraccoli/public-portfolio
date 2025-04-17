import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useReCaptcha } from '../hooks/useReCaptcha';

export default function ContactForm() {
  // フォームの状態
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // 送信状態
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  // reCAPTCHA
  const { executeReCaptcha } = useReCaptcha();
  
  // 入力変更ハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  // フォーム送信処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 基本的なバリデーション
    if (!formState.name || !formState.email || !formState.subject || !formState.message) {
      setSubmitStatus('error');
      setErrorMessage('すべての必須項目を入力してください');
      return;
    }
    
    // メールアドレスのフォーマットチェック
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formState.email)) {
      setSubmitStatus('error');
      setErrorMessage('有効なメールアドレスを入力してください');
      return;
    }
    
    // 送信中状態に設定
    setSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      // reCAPTCHAトークンを取得
      console.log('Attempting to get reCAPTCHA token...');
      let recaptchaToken = null;
      
      if (executeReCaptcha) {
        recaptchaToken = await executeReCaptcha();
        console.log('reCAPTCHA token received:', recaptchaToken ? 'success' : 'failed');
      } else {
        console.log('executeReCaptcha function is not available');
      }
      
      // APIを使ってデータ送信
      console.log('Submitting form data to API...');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formState,
          recaptchaToken
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        // 成功
        console.log('Form submission successful');
        setSubmitStatus('success');
        // フォームをリセット
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        // エラー
        console.error('Form submission failed:', data.error);
        setSubmitStatus('error');
        setErrorMessage(data.error || 'お問い合わせの送信に失敗しました');
      }
    } catch (error) {
      console.error('送信エラー:', error);
      setSubmitStatus('error');
      setErrorMessage('通信エラーが発生しました。しばらく経ってからもう一度お試しください');
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      {/* 成功メッセージ */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-3 bg-green-600 bg-opacity-20 border border-green-400 rounded-md text-green-400"
        >
          メッセージを送信しました。ありがとうございます！
        </motion.div>
      )}
      
      {/* エラーメッセージ */}
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-3 bg-red-600 bg-opacity-20 border border-red-400 rounded-md text-red-400"
        >
          <p>エラーが発生しました：</p>
          <p>{errorMessage}</p>
        </motion.div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-2">お名前</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formState.name}
            onChange={handleChange}
            disabled={submitting}
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-300 mb-2">メールアドレス</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            disabled={submitting}
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-gray-300 mb-2">件名</label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formState.subject}
            onChange={handleChange}
            disabled={submitting}
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-gray-300 mb-2">メッセージ</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            disabled={submitting}
            required
            rows={5}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white resize-y"
          ></textarea>
        </div>
        
        <div className="text-xs text-gray-400 mt-2">
          このサイトはreCAPTCHAによって保護されており、
          Googleの<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">プライバシーポリシー</a>と
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">利用規約</a>が適用されます。
        </div>
        
        <div>
          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-3 rounded-lg transition-all ${
              submitting
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'
            } text-white font-medium`}
          >
            {submitting ? '送信中...' : '送信する'}
          </button>
        </div>
      </form>
    </div>
  );
}