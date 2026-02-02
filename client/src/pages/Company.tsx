import { motion } from "framer-motion";
import { ArrowLeft, Building2, Mail, MapPin, Calendar, Briefcase, Hash } from "lucide-react";
import { Link } from "wouter";

export default function Company() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>トップページに戻る</span>
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
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            運営会社
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Company Information
          </p>

          {/* Company Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-primary" />
              会社概要
            </h2>
            
            <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-border">
                    <th className="py-4 px-6 text-left bg-gray-50 w-1/3 font-semibold text-foreground">
                      会社名
                    </th>
                    <td className="py-4 px-6 text-muted-foreground">
                      株式会社タルムード
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <th className="py-4 px-6 text-left bg-gray-50 font-semibold text-foreground">
                      代表者
                    </th>
                    <td className="py-4 px-6 text-muted-foreground">
                      代表取締役 弓田大幾
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <th className="py-4 px-6 text-left bg-gray-50 font-semibold text-foreground">
                      法人番号
                    </th>
                    <td className="py-4 px-6 text-muted-foreground">
                      5030001144425
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <th className="py-4 px-6 text-left bg-gray-50 font-semibold text-foreground">
                      設立
                    </th>
                    <td className="py-4 px-6 text-muted-foreground">
                      2021年9月
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <th className="py-4 px-6 text-left bg-gray-50 font-semibold text-foreground">
                      所在地
                    </th>
                    <td className="py-4 px-6 text-muted-foreground">
                      〒105-0004<br />
                      東京都港区新橋4丁目14番1<br />
                      新橋AUN BLDGビル
                    </td>
                  </tr>
                  <tr>
                    <th className="py-4 px-6 text-left bg-gray-50 font-semibold text-foreground">
                      お問い合わせ
                    </th>
                    <td className="py-4 px-6 text-muted-foreground">
                      info@talmudo9.com
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Business Description */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" />
              事業内容
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-border"
              >
                <div className="w-12 h-12 brand-gradient rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">AI事業</h3>
                <p className="text-sm text-muted-foreground">
                  最新のAI技術を活用したソリューションの開発・提供。業務効率化や新たな価値創造を支援します。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-border"
              >
                <div className="w-12 h-12 brand-gradient rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Webマーケティング事業</h3>
                <p className="text-sm text-muted-foreground">
                  デジタルマーケティング戦略の立案から実行まで。集客・成約率向上を実現するWebマーケティング支援。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-border"
              >
                <div className="w-12 h-12 brand-gradient rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">オンラインコミュニティ運営</h3>
                <p className="text-sm text-muted-foreground">
                  「成約の方程式」をはじめとするオンライン講座・コミュニティの企画・運営。学びと成長の場を提供。
                </p>
              </motion.div>
            </div>
          </section>

          {/* Mission */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-2xl p-8 md:p-12 border border-primary/10">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                私たちのミッション
              </h2>
              <p className="text-lg text-center text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                「学びを通じて、一人ひとりの可能性を最大化する」
              </p>
              <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
                私たちは、最新のテクノロジーと実践的な知識を融合させ、
                ビジネスパーソンの成長と成功を支援することを使命としています。
                「成約の方程式」は、その理念を体現するサービスの一つです。
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Mail className="w-6 h-6 text-primary" />
              お問い合わせ
            </h2>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
              <p className="text-muted-foreground mb-6">
                サービスに関するご質問、取材・提携のご依頼など、お気軽にお問い合わせください。
              </p>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">メール</p>
                    <a href="mailto:info@talmudo9.com" className="text-primary hover:underline">
                      info@talmudo9.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">所在地</p>
                    <p className="text-muted-foreground">
                      〒105-0004<br />
                      東京都港区新橋4丁目14番1<br />
                      新橋AUN BLDGビル
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container text-center">
          <p className="text-sm text-gray-400">
            © 2025 株式会社タルムード All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
