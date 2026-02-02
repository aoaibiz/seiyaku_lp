import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Terms() {
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
            利用規約
          </h1>

          <div className="prose prose-gray max-w-none space-y-8" style={{fontSize: '13px'}}>
            <p className="text-muted-foreground">
              本利用規約（以下「本規約」といいます）は、株式会社タルムード（以下「当社」といいます）が提供するオンライン講座・コミュニティサービス「成約の方程式」（以下「本サービス」といいます）の利用条件を定めるものです。ご利用の皆様（以下「ユーザー」といいます）には、本規約に同意いただいた上で、本サービスをご利用いただきます。
            </p>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第1条（適用範囲）
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>本規約は、本サービスの提供条件および当社とユーザーとの間の権利義務関係を定めることを目的とし、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。</li>
                <li>当社が本サービス上で掲載する諸規定は、本規約の一部を構成するものとします。</li>
                <li>本規約の内容と、前項の諸規定その他の本規約外における本サービスの説明等とが異なる場合は、本規約の規定が優先して適用されるものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第2条（定義）
              </h2>
              <p className="text-muted-foreground mb-2">本規約において使用する以下の用語は、各々以下に定める意味を有するものとします。</p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>「本サービス」とは、当社が提供する「成約の方程式」という名称のオンライン講座・コミュニティサービス（理由の如何を問わずサービスの名称または内容が変更された場合は、当該変更後のサービスを含みます）を意味します。</li>
                <li>「ユーザー」とは、本規約に同意の上、本サービスを利用する個人または法人を意味します。</li>
                <li>「コンテンツ」とは、本サービスにおいて提供される動画、テキスト、画像、音声、資料その他一切の情報を意味します。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第3条（利用登録）
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>本サービスの利用を希望する者は、本規約を遵守することに同意し、かつ当社の定める一定の情報を当社の定める方法で当社に提供することにより、当社に対し、本サービスの利用の登録を申請することができます。</li>
                <li>当社は、当社の基準に従って、登録申請者の登録の可否を判断し、当社が登録を認める場合にはその旨を登録申請者に通知します。</li>
                <li>当社は、登録申請者が以下の各号のいずれかの事由に該当する場合は、登録を拒否することがあります。
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>当社に提供した登録事項の全部または一部につき虚偽、誤記または記載漏れがあった場合</li>
                    <li>過去に本規約に違反したことがある場合</li>
                    <li>その他、当社が登録を適当でないと判断した場合</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第4条（アカウント管理）
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>ユーザーは、自己の責任において、本サービスに関するアカウント情報を適切に管理および保管するものとします。</li>
                <li>ユーザーは、いかなる場合にも、アカウント情報を第三者に譲渡または貸与し、もしくは第三者と共用することはできません。</li>
                <li>アカウント情報の管理不十分、使用上の過誤、第三者の使用等によって生じた損害に関する責任はユーザーが負うものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第5条（料金および支払方法）
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>ユーザーは、本サービスの有料部分の対価として、当社が別途定め、本サービス上に表示する利用料金を、当社が指定する支払方法により支払うものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第6条（禁止事項）
              </h2>
              <p className="text-muted-foreground mb-2">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社、本サービスの他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>当社のサービスの運営を妨害するおそれのある行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>不正アクセスをし、またはこれを試みる行為</li>
                <li>他のユーザーに成りすます行為</li>
                <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>当社、本サービスの他のユーザーまたは第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
                <li>本サービスで提供されるコンテンツの無断複製、転載、配布、販売、改変等の行為</li>
                <li>本サービスで知り得た情報を、本サービスの目的外で使用する行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第7条（本サービスの提供の停止等）
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                    <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                    <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                    <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                  </ul>
                </li>
                <li>当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第8条（知的財産権）
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>本サービスにおいて提供されるコンテンツに関する著作権その他の知的財産権は、当社または当社にライセンスを許諾している者に帰属します。</li>
                <li>ユーザーは、本サービスを通じて提供されるコンテンツを、当社の事前の書面による承諾なく、複製、転載、改変、販売、出版その他の二次利用をすることはできません。</li>
                <li>本条の規定に違反して問題が発生した場合、ユーザーは、自己の費用と責任において当該問題を解決するとともに、当社に何等の迷惑または損害を与えないものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第9条（退会）
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>ユーザーは、当社の定める退会手続により、本サービスから退会できるものとします。</li>
                <li>退会後も、既に支払済みの利用料金の返金は行わないものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第10条（利用制限および登録抹消）
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>本規約のいずれかの条項に違反した場合</li>
                    <li>登録事項に虚偽の事実があることが判明した場合</li>
                    <li>料金等の支払債務の不履行があった場合</li>
                    <li>当社からの連絡に対し、一定期間返答がない場合</li>
                    <li>その他、当社が本サービスの利用を適当でないと判断した場合</li>
                  </ul>
                </li>
                <li>当社は、本条に基づき当社が行った行為によりユーザーに生じた損害について、一切の責任を負いません。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第11条（免責事項）
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます）がないことを明示的にも黙示的にも保証しておりません。</li>
                <li>当社は、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし、本サービスに関する当社とユーザーとの間の契約が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。</li>
                <li>当社は、本サービスを通じて得られる成果（売上向上、成約率向上等）を保証するものではありません。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第12条（サービス内容の変更等）
              </h2>
              <p className="text-muted-foreground">
                当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第13条（利用規約の変更）
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。</li>
                <li>変更後の利用規約は、当社ウェブサイトに掲載したときから効力を生じるものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第14条（個人情報の取扱い）
              </h2>
              <p className="text-muted-foreground">
                当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第15条（通知または連絡）
              </h2>
              <p className="text-muted-foreground">
                ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。当社は、ユーザーから当社が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは発信時にユーザーへ到達したものとみなします。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第16条（権利義務の譲渡の禁止）
              </h2>
              <p className="text-muted-foreground">
                ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-foreground border-l-4 border-primary pl-4 mb-4">
                第17条（準拠法および裁判管轄）
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
                <li>本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</li>
              </ol>
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
