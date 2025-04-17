import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Terms() {
  return (
    <Layout title="利用規約 | Paraccoli Portfolio">
      <Head>
        <meta name="description" content="Paraccoliポートフォリオサイトの利用規約について詳しく解説しています。" />
      </Head>

      <main className="bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 shadow-xl mb-8"
          >
            <h1 className="text-3xl font-bold text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">利用規約</h1>
            <p className="text-gray-300 mb-6">
              最終更新日: {new Date().toISOString().split('T')[0]}
            </p>
            
            <div className="prose prose-invert max-w-none">
              <p>
                本利用規約（以下「本規約」）は、Paraccoli（以下「当サイト」）の利用条件を定めるものです。
                訪問者（以下「ユーザー」）は本規約に同意した上で当サイトを利用するものとします。
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">第1条（適用範囲）</h2>
              <p>
                本規約は、ユーザーと当サイトの間の当サイトの利用に関わる一切の関係に適用されるものとします。
                当サイトは本サイトに関し、本規約のほか、ご利用にあたってのルール等、各種の定めをすることがあります。
                これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">第2条（禁止事項）</h2>
              <p>
                ユーザーは、当サイトの利用にあたり、以下の行為をしてはなりません。
              </p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当サイト、他のユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>当サイトのサービスの運営を妨害するおそれのある行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>不正アクセスをし、またはこれを試みる行為</li>
                <li>他のユーザーに成りすます行為</li>
                <li>当サイトのサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>当サイト、他のユーザーまたは第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
                <li>当サイトのネットワークまたはシステム等への不正アクセス</li>
                <li>その他、当サイトが不適切と判断する行為</li>
              </ul>

              <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">第3条（当サイトの提供の停止等）</h2>
              <p>
                当サイトは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく当サイトの全部または一部の提供を停止または中断することができるものとします。
              </p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>当サイトにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                <li>地震、落雷、火災、停電または天災などの不可抗力により、当サイトの提供が困難となった場合</li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他、当サイトが当サイトの提供が困難と判断した場合</li>
              </ul>
              <p>
                当サイトは、当サイトの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">第4条（著作権）</h2>
              <p>
                当サイトに掲載されているコンテンツ（テキスト、画像、動画、コード等）の著作権は、特に明記がない限り当サイトに帰属します。
                無断での複製、転載、改変、販売等は禁止します。
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">第5条（免責事項）</h2>
              <p>
                当サイトの情報の正確性、完全性、有用性等について、いかなる保証もするものではありません。
                当サイトに掲載された内容によってユーザーに生じた損害について、当サイトは一切の責任を負いません。
                当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">第6条（サービス内容の変更・停止）</h2>
              <p>
                当サイトは、ユーザーに通知することなく、当サイトの内容を変更または当サイトの提供を中止することができるものとします。
                当サイトは、これによってユーザーに生じた損害について一切の責任を負いません。
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">第7条（利用規約の変更）</h2>
              <p>
                当サイトは、必要と判断した場合には、ユーザーに通知することなく本規約を変更することができるものとします。
                本規約の変更後、当サイトの利用を継続した場合、ユーザーは変更後の規約に同意したものとみなされます。
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">第8条（準拠法・裁判管轄）</h2>
              <p>
                本規約の解釈にあたっては、日本法を準拠法とします。
                当サイトに関して紛争が生じた場合には、当サイトの所在地を管轄する裁判所を専属的合意管轄とします。
              </p>

              <div className="text-center mt-12">
                <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
                  プライバシーポリシー
                </Link>
                <span className="mx-3 text-gray-500">|</span>
                <Link href="/" className="text-cyan-400 hover:text-cyan-300 underline">
                  ホームに戻る
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </Layout>
  );
}