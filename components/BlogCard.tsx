import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp } from './animations';

/**
 * ブログ記事のプロパティ型
 */
export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content?: string; // Markdown形式の本文
  date: string;
  category: string;
  tags?: string[]; // タグ一覧
  imagePath?: string;
  slug?: string; // URLスラッグ（一意な識別子）
  url?: string;  // 後方互換性のため
};

/**
 * ブログカードコンポーネントのプロパティ型
 */
interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

/**
 * ブログ記事を表示するカードコンポーネント
 */
const BlogCard: React.FC<BlogCardProps> = ({ post, index = 0 }) => {
  // 記事へのリンク先を決定
  const postUrl = post.slug ? `/blog/${post.slug}` : post.url || '#';
  
  return (
    <motion.article
      key={post.id}
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 flex flex-col h-full hover:border-cyan-500 transition-colors"
    >
      {post.imagePath ? (
        <div className="h-48 overflow-hidden">
          <img
            src={post.imagePath}
            alt={post.title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
      ) : (
        <div className="h-32 bg-gradient-to-br from-cyan-900/40 to-purple-900/40 flex items-center justify-center">
          <span className="text-4xl">📝</span>
        </div>
      )}
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-2 flex items-center">
          <span className="inline-block px-2 py-1 bg-gray-700 text-cyan-400 text-xs rounded">
            {post.category}
          </span>
          <span className="text-gray-400 text-sm ml-auto">{post.date}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
        
        <p className="text-gray-300 mb-4 flex-grow">{post.excerpt}</p>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {post.tags.slice(0, 3).map((tag, i) => (
              <span 
                key={i} 
                className="px-2 py-0.5 bg-gray-700 text-gray-300 text-xs rounded-full"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-gray-400 text-xs self-center">+{post.tags.length - 3}</span>
            )}
          </div>
        )}
        
        <Link
          href={postUrl}
          className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center text-sm font-medium"
        >
          続きを読む
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;