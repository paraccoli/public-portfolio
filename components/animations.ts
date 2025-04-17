import { Variants } from 'framer-motion';

/**
 * 基本的なフェードイン（下から）
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * 基本的なフェードイン（上から）
 */
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -60
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * 左からスライドイン
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -100
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * 右からスライドイン
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 100
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * スケールアップ
 */
export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * スタガー効果用の関数（子要素に遅延をつける）
 * @param staggerChildren 子要素間の遅延時間
 * @param delayChildren 全体の遅延時間
 * @returns Variants オブジェクト
 */
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  };
};

/**
 * サイバーパンク風グリッチ効果
 */
export const glitchEffect: Variants = {
  hidden: {
    opacity: 0,
    x: 0
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      before: {
        x: [-5, 5, -3, 3, 0],
        opacity: [0.3, 0.6, 0.7, 0.8, 1],
        transition: { duration: 0.4 }
      }
    }
  }
};