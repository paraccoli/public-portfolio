import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

interface IdleWarningProps {
  warningTime: number; // 警告を表示するまでの時間（ミリ秒）
  logoutTime: number;  // 実際にログアウトするまでの時間（ミリ秒）
  onLogout: () => Promise<void>;
}

const IdleWarning: React.FC<IdleWarningProps> = ({ warningTime, logoutTime, onLogout }) => {
  const [showWarning, setShowWarning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const router = useRouter();

  // ユーザーのアクティビティを検出してタイマーをリセット
  const resetTimer = useCallback(() => {
    setShowWarning(false);
  }, []);

  useEffect(() => {
    let idleTimer: NodeJS.Timeout;
    let warningTimer: NodeJS.Timeout;
    let countdownInterval: NodeJS.Timeout;

    // 警告タイマーの開始
    const startWarningTimer = () => {
      idleTimer = setTimeout(() => {
        setShowWarning(true);
        setRemainingTime(Math.floor((logoutTime - warningTime) / 1000));
        
        // カウントダウン開始
        countdownInterval = setInterval(() => {
          setRemainingTime(prev => {
            if (prev <= 1) {
              clearInterval(countdownInterval);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
        
        // ログアウトタイマーの開始
        warningTimer = setTimeout(async () => {
          await onLogout();
        }, logoutTime - warningTime);
        
      }, warningTime);
    };

    // アクティビティイベントの監視
    const resetTimerAndRestart = () => {
      clearTimeout(idleTimer);
      clearTimeout(warningTimer);
      clearInterval(countdownInterval);
      setShowWarning(false);
      startWarningTimer();
    };

    // イベントリスナーの登録
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, resetTimerAndRestart);
    });

    // 初期タイマーの開始
    startWarningTimer();

    // クリーンアップ
    return () => {
      events.forEach(event => {
        document.removeEventListener(event, resetTimerAndRestart);
      });
      clearTimeout(idleTimer);
      clearTimeout(warningTimer);
      clearInterval(countdownInterval);
    };
  }, [warningTime, logoutTime, onLogout]);

  if (!showWarning) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
        <h3 className="text-xl font-bold text-red-500 mb-2">セッションタイムアウト警告</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {remainingTime}秒後に自動的にログアウトされます。操作を続けますか？
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-colors"
          >
            ログアウト
          </button>
          <button
            onClick={resetTimer}
            className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors"
          >
            続ける
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdleWarning;