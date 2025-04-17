import Head from 'next/head'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ProjectCard, { Project } from '../components/ProjectCard';
import Layout from '../components/Layout';
import AnimatedOnScroll from '../components/UI/AnimatedOnScroll';
import { fadeInUp } from '../components/animations';
import { FadeInUp, StaggerContainer } from '../components/UI/ScrollAnimations';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // プロジェクトをAPIから取得
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/projects');
        if (response.ok) {
          const data = await response.json();
          setProjects(data.projects || []);
        } else {
          setError('プロジェクトの取得に失敗しました');
        }
      } catch (err) {
        console.error('データ取得エラー:', err);
        setError('プロジェクトの取得中にエラーが発生しました');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Layout title="プロジェクト | My Portfolio">
      <div className="container mx-auto px-4 py-10">
        <FadeInUp className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-cyan-400">プロジェクト</h1>
          <p className="text-gray-300 mt-2">私が手がけた主要なプロジェクト一覧です</p>
        </FadeInUp>

        {isLoading ? (
          <div className="flex justify-center py-10">
            <div className="animate-pulse text-cyan-400">読み込み中...</div>
          </div>
        ) : error ? (
          <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 p-4 rounded">
            {error}
          </div>
        ) : (
          <StaggerContainer 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.1}
            containerDelay={0.2}
          >
            {projects.map((project, index) => (
              <motion.div key={project.id || index} variants={fadeInUp}>
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </StaggerContainer>
        )}
      </div>
    </Layout>
  );
}