import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </header>

      <main className="container py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-xl md:text-2xl font-bold text-foreground mb-8 text-center">
            プライバシーポリシー
          </h1>

          <div className="prose prose-gray max-w-none space-y-8" style={{fontSize: '13px'}}>
            <p className="text-muted-foreground">
              株式会社タルムード（以下「当社」といいます）は、当社が提供するサービス「成約の方程式」（以下「本サービス」といいます）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
            </p>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第1条（個人情報）
              </h2>
              <p className="text-muted-foreground">
                「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報および容貌、指紋、声紋にかかるデータ、および健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第2条（取得する個人情報の項目）
              </h2>
              <p className="text-muted-foreground mb-2">当社は、本サービスの提供にあたり、以下の個人情報を取得することがあります。</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>氏名</li>
                <li>メールアドレス</li>
                <li>電話番号</li>
                <li>住所</li>
                <li>会社名・屋号</li>
                <li>職業・業種</li>
                <li>決済に関する情報（クレジットカード情報等）</li>
                <li>本サービスの利用履歴</li>
                <li>お問い合わせ内容</li>
                <li>その他当社が定める入力フォームにユーザーが入力する情報</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第3条（個人情報の利用目的）
              </h2>
              <p className="text-muted-foreground mb-2">当社は、取得した個人情報を以下の目的で利用します。</p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>本サービスの提供・運営のため</li>
                <li>ユーザーからのお問い合わせに回答するため</li>
                <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等のご案内のため</li>
                <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                <li>利用料金の請求・決済処理のため</li>
                <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
                <li>本サービスの改善・新サービスの開発のため</li>
                <li>上記の利用目的に付随する目的</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第4条（利用目的の変更）
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。</li>
                <li>利用目的の変更を行った場合には、変更後の目的について、当社所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第5条（第三者提供）
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>法令に基づく場合</li>
                    <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                    <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                    <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                  </ul>
                </li>
                <li>前項の定めにかかわらず、以下の場合には、当該情報の提供先は第三者に該当しないものとします。
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</li>
                    <li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第6条（個人情報の管理）
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>当社は、個人情報の正確性を保ち、これを安全に管理いたします。</li>
                <li>当社は、個人情報の紛失、破壊、改ざんおよび漏洩などを防止するため、適正な情報セキュリティ対策を講じます。</li>
                <li>当社は、個人情報を取り扱う従業員や委託先に対して、個人情報保護のための適切な監督を行います。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第7条（開示・訂正・利用停止等）
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>当社は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあります。
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
                    <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                    <li>その他法令に違反することとなる場合</li>
                  </ul>
                </li>
                <li>ユーザーは、当社の保有する自己の個人情報が誤った情報である場合には、当社が定める手続きにより、当社に対して個人情報の訂正、追加または削除（以下「訂正等」といいます）を請求することができます。</li>
                <li>当社は、ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第8条（Cookie（クッキー）の利用）
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>当社のウェブサイトでは、ユーザーの利便性向上およびサービス改善のため、Cookieを使用しています。</li>
                <li>Cookieとは、ウェブサイトがユーザーのコンピュータに送信する小さなテキストファイルで、ユーザーのブラウザに保存されます。</li>
                <li>ユーザーは、ブラウザの設定によりCookieの受け取りを拒否することができますが、その場合、本サービスの一部の機能が利用できなくなる可能性があります。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第9条（アクセス解析ツールの利用）
              </h2>
              <p className="text-muted-foreground">
                当社は、本サービスの利用状況を把握するためにアクセス解析ツールを利用しています。これらのツールは、Cookieを使用して、個人を特定する情報を含まずにデータを収集します。収集されるデータには、ユーザーの本サービスの利用状況、アクセス元の情報などが含まれます。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第10条（未成年者の利用）
              </h2>
              <p className="text-muted-foreground">
                未成年者が本サービスを利用する場合は、法定代理人（親権者等）の同意を得た上でご利用ください。法定代理人の同意なく未成年者が個人情報を当社に提供した場合、法定代理人は当社に対し、当該個人情報の閲覧、訂正、削除を請求することができます。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第11条（プライバシーポリシーの変更）
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。</li>
                <li>当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第12条（お問い合わせ窓口）
              </h2>
              <p className="text-muted-foreground mb-4">
                本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
              </p>
              <div className="bg-gray-50 p-6 rounded-lg text-muted-foreground">
                <p className="font-semibold text-foreground mb-2">株式会社タルムード</p>
                <p>〒105-0004 東京都港区新橋4丁目14番1 新橋AUN BLDGビル</p>
                <p>代表取締役：弓田大幾</p>
                <p>メール：info@talmudo9.com</p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground text-right">
                制定日：2026年2月1日
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
