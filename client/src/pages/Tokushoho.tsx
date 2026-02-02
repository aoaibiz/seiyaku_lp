import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Tokushoho() {
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
            特定商取引法に基づく表記
          </h1>

          <div className="prose prose-gray max-w-none" style={{fontSize: '13px'}}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-left bg-gray-50 w-1/3 font-semibold text-foreground">
                      販売業者
                    </th>
                    <td className="py-4 px-4 text-muted-foreground">
                      株式会社タルムード
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-left bg-gray-50 font-semibold text-foreground">
                      販売責任者
                    </th>
                    <td className="py-4 px-4 text-muted-foreground">
                      弓田大幾
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-left bg-gray-50 font-semibold text-foreground">
                      法人番号
                    </th>
                    <td className="py-4 px-4 text-muted-foreground">
                      5030001144425
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-left bg-gray-50 font-semibold text-foreground">
                      所在地
                    </th>
                    <td className="py-4 px-4 text-muted-foreground">
                      〒105-0004<br />
                      東京都港区新橋4丁目14番1 新橋AUN BLDGビル
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-left bg-gray-50 font-semibold text-foreground">
                      電話番号
                    </th>
                    <td className="py-4 px-4 text-muted-foreground">
                      お問い合わせはメールにてお願いいたします
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-left bg-gray-50 font-semibold text-foreground">
                      メールアドレス
                    </th>
                    <td className="py-4 px-4 text-muted-foreground">
                      info@talmudo9.com
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-left bg-gray-50 font-semibold text-foreground">
                      販売URL
                    </th>
                    <td className="py-4 px-4 text-muted-foreground">
                      本ウェブサイト
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-left bg-gray-50 font-semibold text-foreground">
                      販売価格
                    </th>
                    <td className="py-4 px-4 text-muted-foreground">
                      398,000円（税込）<br />
                      ※分割払い可能（詳細はお申し込み時にご案内いたします）
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-left bg-gray-50 font-semibold text-foreground">
                      商品代金以外の必要料金
                    </th>
                    <td className="py-4 px-4 text-muted-foreground">
                      <ul className="list-disc list-inside space-y-1">
                        <li>決済手数料（分割払いの場合、決済会社所定の手数料がかかります）</li>
                        <li>インターネット接続に必要な通信費</li>
                        <li>AIサービス等のオプションアップグレード費用（任意）</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-left bg-gray-50 font-semibold text-foreground">
                      支払方法
                    </th>
                    <td className="py-4 px-4 text-muted-foreground">
                      <ul className="list-disc list-inside space-y-1">
                        <li>クレジットカード決済（VISA、MasterCard、JCB、American Express、Diners Club）</li>
                        <li>銀行振込</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-left bg-gray-50 font-semibold text-foreground">
                      支払時期
                    </th>
                    <td className="py-4 px-4 text-muted-foreground">
                      <ul className="list-disc list-inside space-y-1">
                        <li>クレジットカード決済：お申し込み時に即時決済</li>
                        <li>銀行振込：お申し込み後7日以内にお振込みください</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-left bg-gray-50 font-semibold text-foreground">
                      商品の引き渡し時期
                    </th>
                    <td className="py-4 px-4 text-muted-foreground">
                      決済確認後2営業日以内に、会員サイトへのアクセス情報をメールにてお届けいたします。<br />
                      デジタルコンテンツのため、物理的な配送はございません。
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-left bg-gray-50 font-semibold text-foreground">
                      返品・キャンセルについて
                    </th>
                    <td className="py-4 px-4 text-muted-foreground">
                      <p className="mb-2">
                        <strong>クーリングオフ制度について</strong><br />
                        特定商取引法に基づき、契約書面を受領した日から起算して8日以内であれば、書面により契約の解除（クーリングオフ）が可能です。
                      </p>
                      <p className="mb-2">
                        <strong>クーリングオフ期間経過後</strong><br />
                        デジタルコンテンツという商品の性質上、コンテンツ提供開始後の返品・返金には原則として応じかねます。
                      </p>
                      <p>
                        <strong>クーリングオフの手続き</strong><br />
                        クーリングオフをご希望の場合は、契約書面受領日から8日以内に、書面（ハガキ可）にて当社宛にご連絡ください。
                      </p>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-left bg-gray-50 font-semibold text-foreground">
                      動作環境
                    </th>
                    <td className="py-4 px-4 text-muted-foreground">
                      <ul className="list-disc list-inside space-y-1">
                        <li>インターネット接続環境</li>
                        <li>パソコン、スマートフォン、タブレット等のデバイス</li>
                        <li>最新版のGoogle Chrome、Safari、Firefox、Microsoft Edge等のブラウザ</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-left bg-gray-50 font-semibold text-foreground">
                      販売数量
                    </th>
                    <td className="py-4 px-4 text-muted-foreground">
                      各期の募集人数に限りがございます。詳細は募集ページをご確認ください。
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-left bg-gray-50 font-semibold text-foreground">
                      特別条件
                    </th>
                    <td className="py-4 px-4 text-muted-foreground">
                      本サービスは、成果を保証するものではありません。効果には個人差があり、ご自身の努力や実践が必要です。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

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
