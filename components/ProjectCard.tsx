import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * プロジェクトのプロパティ型
 */
export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  repoUrl?: string;
  demoUrl?: string;
};

/**
 * プロジェクトカードコンポーネントのプロパティ型
 */
interface ProjectCardProps {
  project: Project;
  index?: number;
}

/**
 * プロジェクトを表示するカードコンポーネント
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  return (
    <motion.div 
      className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 flex flex-col h-full hover:border-cyan-500 transition-colors"
      whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(8, 145, 178, 0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-56 bg-gray-700 relative">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-900/40 to-purple-900/40">
            <span className="text-4xl">🔬</span>
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-cyan-400">{project.title}</h3>
        <p className="text-gray-300 mb-5">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs px-2 py-1 bg-gray-700 text-cyan-300 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6 pt-0 mt-auto flex justify-between">
        {project.repoUrl && (
          <a href={project.repoUrl} className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
            <span className="inline-flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"></path>
              </svg>
              コード
            </span>
          </a>
        )}
        
        {project.demoUrl && (
          <a href={project.demoUrl} className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
            <span className="inline-flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 01-1.48-8.36l-1.63-1.63c-.39-.39-.39-1.03 0-1.42.39-.39 1.03-.39 1.42 0l1.63 1.63c2.77-2.02 6.64-1.8 9.13.69 2.49 2.49 2.71 6.36.69 9.13l1.63 1.63c.39.39.39 1.03 0 1.42-.39.39-1.03.39-1.42 0l-1.63-1.63c-2.29 1.58-5.32 1.4-7.3-.58l1.38-1.38zM8 12a4 4 0 118 0 4 4 0 01-8 0z"></path>
              </svg>
              デモ
            </span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;