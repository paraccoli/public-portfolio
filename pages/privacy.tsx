import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Privacy() {
  return (
    <Layout title="プライバシーポリシー | Paraccoli Portfolio">
      <Head>
        <meta name="description" content="Paraccoliポートフォリオサイトのプライバシーポリシーについて詳しく解説しています。" />
      </Head>

      <main className="bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 shadow-xl mb-8"
          >
            <h1 className="text-3xl font-bold text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">プライバシーポリシー</h1>
            <p className="text-gray-300 mb-6">
              最終更新日: {new Date().toISOString().split('T')[0]}
            </p>
            
            <div className="prose prose-invert max-w-none">
              <p>
                Paraccoli（以下「当サイト」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。
                本プライバシーポリシーでは、当サイトの利用に関して収集する情報と、その取り扱いについて説明します。
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">1. 収集する情報</h2>
              <p>
                当サイトでは、以下の情報を収集する場合があります：
              </p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>お問い合わせフォームから提供される情報（氏名、メールアドレス、お問い合わせ内容など）</li>
                <li>アクセス解析ツールによって自動的に収集される情報（IPアドレス、ブラウザの種類、訪問ページ、アクセス日時など）</li>
                <li>当サイトを経由して利用する第三者サービス（Google reCAPTCHAなど）によって収集される情報</li>
              </ul>

              <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">2. 情報の利用目的</h2>
              <p>
                収集した情報は、以下の目的で利用します：
              </p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>お問い合わせへの回答や対応</li>
                <li>サイトの利用状況の分析および改善</li>
                <li>セキュリティ確保およびスパム防止</li>
                <li>新機能やサービスに関する情報提供（同意を得た場合のみ）</li>
              </ul>

              <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">3. 情報の管理と保護</h2>
              <p>
                当サイトは、収集した個人情報の安全管理のために、必要かつ適切な措置を講じます。
                第三者による不正アクセスや情報の漏洩、紛失、破壊などのリスクから保護するよう努めます。
                ただし、インターネット上での完全なセキュリティを保証することはできません。
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">4. Cookie（クッキー）の使用について</h2>
              <p>
                当サイトでは、ユーザーエクスペリエンスの向上やサイト利用状況の分析のため、Cookieを使用しています。
                Cookieは、ウェブブラウザを通じてユーザーのコンピュータに保存される小さなテキストファイルです。
              </p>
              <p>
                ブラウザの設定により、Cookieの受け入れを拒否することが可能ですが、その場合、当サイトの一部機能が正常に動作しない可能性があります。
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">5. Google reCAPTCHAの使用</h2>
              <p>
                当サイトのフォームでは、スパム防止のためにGoogle reCAPTCHAを使用しています。
                reCAPTCHAの使用により、Googleによってユーザーのデータが収集・処理される場合があります。
                詳細については、Googleの<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">プライバシーポリシー</a>および<a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">利用規約</a>をご確認ください。
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">6. アクセス解析ツール</h2>
              <p>
                当サイトでは、サイトの利用状況を分析するため、アクセス解析ツールを使用しています。
                このツールはCookieを使用してデータを収集しますが、個人を特定する情報は含まれていません。
                収集されたデータは、サイトの改善と最適化の目的にのみ使用されます。
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">7. 第三者への情報提供</h2>
              <p>
                当サイトは、以下の場合を除き、ユーザーの個人情報を第三者に提供することはありません：
              </p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>ユーザーの同意がある場合</li>
                <li>法律に基づき開示が求められた場合</li>
                <li>人の生命、身体または財産の保護のために必要な場合</li>
                <li>サイト運営に関わる業務委託先に対して、必要最小限の範囲で提供する場合（その場合、委託先に対して適切な管理を求めます）</li>
              </ul>

              <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">8. お問い合わせデータの保管期間</h2>
              <p>
                お問い合わせフォームを通じて提供された個人情報は、お問い合わせ対応が完了してから一定期間（最大1年間）保管した後、安全に削除されます。
                ただし、継続的なサポートが必要な場合や法令に基づく保管義務がある場合は、必要な期間保管することがあります。
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">9. ユーザーの権利</h2>
              <p>
                ユーザーは、当サイトが保持する自分の個人情報について、開示、訂正、削除、利用停止を求める権利があります。
                これらの権利を行使したい場合は、当サイトのお問い合わせフォームからご連絡ください。
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">10. プライバシーポリシーの変更</h2>
              <p>
                当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。
                重要な変更がある場合は、当サイト上で通知します。
                変更後のプライバシーポリシーは、当サイト上に掲載した時点から効力を生じるものとします。
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mt-8 mb-4">11. お問い合わせ</h2>
              <p>
                本プライバシーポリシーに関するご質問やご意見は、当サイトの<Link href="/contact" className="text-cyan-400 hover:underline">お問い合わせフォーム</Link>からお寄せください。
              </p>

              <div className="text-center mt-12">
                <Link href="/terms" className="text-cyan-400 hover:text-cyan-300 underline">
                  利用規約
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