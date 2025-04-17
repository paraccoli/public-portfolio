import Head from 'next/head'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import Image from 'next/image'
import { fadeInUp, staggerContainer } from '../components/animations'

export default function About() {
  const skills = [
    { name: "C", level: 60 },
    { name: "Python", level: 70 },
    { name: "HTML", level: 65 },
    { name: "CSS", level: 65 },
    { name: "JavaScript", level: 60 },
    { name: "TypeScript", level: 55 },
    { name: "PHP", level: 50 },
    { name: "R", level: 45 },
    { name: "Java", level: 40 },
    { name: "React", level: 65 },
    { name: "Next.js", level: 60 },
    { name: "Vue.js", level: 45 },
    { name: "Flask", level: 60 },
    { name: "TensorFlow/PyTorch", level: 65 },
    { name: "CARLA Simulator", level: 65 },
  ]

  const pcSpecs = [
    {
      name: "PCスペック①",
      specs: [
        {
          name: "CPU: Ryzen 7 5800X3D",
          url: "https://shop.tsukumo.co.jp/goods/0730143313797/"
        },
        {
          name: "CPUクーラー: ProArtist GRATIFY AIO5 White",
          url: "https://shop.tsukumo.co.jp/goods/4571225059235/"
        },
        {
          name: "マザボ: MSI B550 Tomahawk",
          url: "https://shop.tsukumo.co.jp/goods/4526541740589/"
        },
        {
          name: "RAM: Crucial CT2K8G4DFRA32A 16GB × 2",
          url: "https://shop.tsukumo.co.jp/goods/0649528903631/"
        },
        {
          name: "SSD①: XLR8 CD3040 1TB",
          url: "https://kakaku.com/item/K0001369135/"
        },
        {
          name: "SSD②: Crucial P3 plus 2TB",
          url: "https://shop.tsukumo.co.jp/goods/0649528918994/"
        },
        {
          name: "VRAM: TUF Gaming GeForce RTX 3060Ti 8G OC",
          url: "https://kakaku.com/item/K0001366237/"
        },
        {
          name: "PWU: TUF Gaming 1000 White",
          url: "https://shop.tsukumo.co.jp/goods/0197105276048/"
        },
        {
          name: "ケース: DF800 FLUX WHITE",
          url: "https://kakaku.com/item/K0001449104/"
        },
        {
          name: "モニター: TUF Gaming VG249Q1A 23.8in",
          url: "hhttps://shop.tsukumo.co.jp/goods/4718017921992/"
        },
        {
          name: "キーボード: Steelseries APEX pro tkl wireless",
          url: "https://shop.tsukumo.co.jp/goods/4517832178884/"
        },
        {
          name: "マウス: Steelseries Prime mini wireless",
          url: "https://shop.tsukumo.co.jp/goods/4517832149785/"
        },
        {
          name: "マイク: HyperX QuadCaat S white",
          url: "https://shop.tsukumo.co.jp/goods/0196188736036/"
        },
      ],
    },
    {
      name: "PCスペック②",
      specs: [
        {
          name: "CPU: Ryzen 7 5700X",
          url: "https://shop.tsukumo.co.jp/goods/0401549620016/"
        },
        {
          name: "CPUクーラー: DeepCool AK400",
          url: "https://shop.tsukumo.co.jp/goods/6933412727446/"
        },
        {
          name: "マザボ: TUF-GAMING B550 PLUS",
          url: "https://shop.tsukumo.co.jp/goods/0192876749432/"
        },
        {
          name: "RAM: Crucial CT2K8G4DFRA32A 16GB × 2",
          url: "https://shop.tsukumo.co.jp/goods/0649528903631/"
        },
        {
          name: "SSD①: XLR8 CD3040 1TB",
          url: "https://kakaku.com/item/K0001369135/"
        },
        {
          name: "SSD②: Crucial T500 2TB",
          url: "https://shop.tsukumo.co.jp/goods/0649528939999/"
        },
        {
          name: "VRAM: PNY GeFORCE RTX 4060 8GB",
          url: "https://shop.tsukumo.co.jp/goods/0751492780009/"
        },
        {
          name: "PWU: NZXT C750 Gold",
          url: "https://shop.tsukumo.co.jp/goods/4943508301858/"
        },
        {
          name: "ケース: CPS C3T500 ARGB",
          url: "https://shop.tsukumo.co.jp/goods/6940526106722/"
        },
        {
          name: "モニター: Pixio PX27U Wave White",
          url: "https://shop.tsukumo.co.jp/goods/4522327820766/"
        },
        {
          name: "キーボード: ATTACK SHARK X68HE",
          url: "https://amzn.asia/d/94OskXY"
        },
        {
          name: "マウス: ATTACK SHARK×MAMBASNAKE R6 39g",
          url: "https://amzn.asia/d/cauX37r"
        },
        {
          name: "マイク: FIFINE ダイナミックマイク USB/XLRマイク",
          url: "https://amzn.asia/d/9pCPtAg"
        },
        {
          name: "マイクケーブル: Audio Technica BX3/3.0 WH",
          url: "https://amzn.asia/d/idujvwZ"
        },
        {
          name: "ミキサー: FIFINE ゲーミングオーディオミキサー",
          url: "https://amzn.asia/d/f9AwVqm"
        },
      ],
    },
  ]

  return (
    <Layout title="自己紹介" description="MLエンジニアParaccoliの経歴、スキル、技術的関心領域について紹介します。">
      <>
        <Head>
          <title>自己紹介 | Paraccoli Portfolio</title>
          <meta name="description" content="MLエンジニアParaccoliの経歴、スキル、技術的関心領域について紹介します。" />
        </Head>

        <main className="min-h-screen bg-gray-900 text-white py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
            >
              About Me
            </motion.h1>

            {/* プロフィールセクション */}
            <motion.section 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-20"
            >
              <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg hologram">
                  <div className="absolute inset-0 cyber-scanlines opacity-20 z-10"></div>
                  <Image
                    src="/images/hatsune-miku.gif"
                    alt="Hatsune Miku Profile"
                    fill
                    sizes="(max-width: 768px) 264px, 288px"
                    style={{ objectFit: "cover" }}
                    className="rounded-full"
                  />
                  <div className="absolute inset-0 cyber-glow"></div>
                </div>
                
                <div className="md:flex-1">
                  <h2 className="text-3xl font-semibold mb-4 text-cyan-400">Paraccoli</h2>
                  <p className="text-lg text-gray-200 mb-4 leading-relaxed">
                    データモビリティ活用の研究の一環としてCARLAシミュレーターを用いた物体検出や認識の研究をしています。
                    自動運転システムの研究開発に従事し、特にCARLAシミュレータを用いたニューラルネットワークによる
                    物体検出・認識システムの開発に取り組んでいます。
                  </p>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    技術ブログでの情報発信や、GitHubでのオープンソースプロジェクトを通じて、ML/AI技術の知見共有にも力を入れています。
                    好きな食べ物は炒飯で、好きなキャラクターは初音ミクです。
                  </p>
                </div>
              </div>
            </motion.section>

            {/* スキルセクション */}
            <motion.section 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold mb-8 border-b-2 border-cyan-500 pb-3">
                <span className="cyber-glitch" data-text="スキルセット">スキルセット</span>
              </h2>
              
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                variants={staggerContainer(0.05, 0.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="mb-4"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="bg-gray-800 p-3 rounded-lg border border-gray-700 text-center hover:border-cyan-500 transition-colors duration-300">
                      <div className="text-lg font-medium text-cyan-400 mb-1">{skill.name}</div>
                      <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div 
                          className="bg-gradient-to-r from-cyan-500 to-purple-600 h-1 rounded-full cyber-scan"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* 経歴セクション */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold mb-8 border-b-2 border-cyan-500 pb-3">経歴・研究</h2>
              
              <div className="space-y-8">
                <motion.div 
                  className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 cyber-card-advanced relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(56, 189, 248, 0.2)" }}
                >
                  <div className="flex justify-between mb-3">
                    <h3 className="text-xl font-medium text-purple-400">CARLA研究プロジェクト</h3>
                    <span className="text-gray-300">2024年 - 現在</span>
                  </div>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    自動運転シミュレーションにおける物体検出モデルの精度向上研究。
                    深層学習を用いた効率的な認識システムを開発し、実環境への適用を目指しています。
                  </p>
                </motion.div>

                <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700">
                  <div className="flex justify-between mb-3">
                    <h3 className="text-xl font-medium text-purple-400">技術ブログ執筆</h3>
                    <span className="text-gray-300">2024年 - 現在</span>
                  </div>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Zennとnoteで機械学習・自動運転に関する技術記事を定期的に執筆。
                    最新技術のトレンドや実装方法、研究内容の解説などを行っています。
                  </p>
                </div>
              </div>
            </motion.section>

            {/* PCスペックセクション */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold mb-8 border-b-2 border-cyan-500 pb-3">PCスペック</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pcSpecs.map((pc, index) => (
                  <motion.div 
                    key={index} 
                    className="cyber-corner bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.2 }}
                    whileHover={{ y: -5, boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}
                  >
                    <h3 className="text-xl font-medium text-purple-400 mb-4 cyber-glow-text">{pc.name}</h3>
                    <ul className="list-disc list-inside text-gray-200 text-lg space-y-2">
                      {pc.specs.map((spec, i) => (
                        <li key={i} className="hover:text-cyan-400 transition-colors group">
                          <a 
                            href={spec.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center transition-colors duration-300"
                          >
                            {spec.name}
                            <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          <div className="fixed bottom-20 right-20 opacity-20 pointer-events-none z-0">
            <div className="cyber-radar"></div>
          </div>
        </main>
      </>
    </Layout>
  )
}