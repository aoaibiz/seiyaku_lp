/**
 * 成約の方程式 LP
 * Design Philosophy: Gold Standard (黄金基準)
 * - Luxury Minimalism × Japanese Modern
 * - Off-white backgrounds with gold accents
 * - Generous whitespace (Ma - 間)
 */

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  MessageCircle,
  Play,
  Shield,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Countdown Timer Component
function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-3 md:gap-4">
      {[
        { value: timeLeft.days, label: "日" },
        { value: timeLeft.hours, label: "時間" },
        { value: timeLeft.minutes, label: "分" },
        { value: timeLeft.seconds, label: "秒" },
      ].map((item, i) => (
        <div key={i} className="text-center">
          <div className="bg-[oklch(0.25_0.01_65)] text-white px-3 py-2 md:px-4 md:py-3 rounded-lg min-w-[50px] md:min-w-[60px]">
            <span className="text-xl md:text-2xl font-bold tabular-nums">
              {String(item.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs md:text-sm text-[oklch(0.55_0.02_65)] mt-1 block">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

// CTA Button Component
function CTAButton({
  variant = "primary",
  children,
  className = "",
}: {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
}) {
  const baseStyles = "group relative overflow-hidden font-medium transition-all duration-300";
  const variants = {
    primary:
      "bg-[oklch(0.25_0.01_65)] text-white hover:bg-[oklch(0.20_0.01_65)] shadow-lg hover:shadow-xl",
    secondary:
      "bg-[oklch(0.75_0.12_85)] text-[oklch(0.20_0.01_65)] hover:bg-[oklch(0.70_0.12_85)] shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-[oklch(0.75_0.12_85)] text-[oklch(0.25_0.01_65)] hover:bg-[oklch(0.75_0.12_85)] hover:text-[oklch(0.20_0.01_65)]",
  };

  return (
    <Button
      size="lg"
      className={`${baseStyles} ${variants[variant]} ${className} px-8 py-6 text-base md:text-lg rounded-lg`}
    >
      {children}
      <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
    </Button>
  );
}

// Section Heading Component
function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
}: {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      {subtitle && (
        <span className="inline-block text-[oklch(0.75_0.12_85)] text-sm md:text-base font-medium tracking-wider uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-[oklch(0.25_0.01_65)] leading-tight"
        style={{ fontFamily: "var(--font-mincho)" }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[oklch(0.55_0.02_65)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  // Campaign deadline (7 days from now for demo)
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 7);

  return (
    <div className="min-h-screen bg-[oklch(0.98_0.005_90)]">
      {/* S0. ファーストビュー：キャンペーンバナー */}
      <section className="bg-[oklch(0.25_0.01_65)] text-white py-3 md:py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[oklch(0.75_0.12_85)]" />
              <span className="text-sm md:text-base font-medium">
                【期間限定】無料個別相談 + 7大特典プレゼント
              </span>
            </div>
            <div className="flex items-center gap-2 text-[oklch(0.75_0.12_85)]">
              <Clock className="h-4 w-4" />
              <span className="text-sm">残り枠：先着10名様</span>
            </div>
          </div>
        </div>
      </section>

      {/* S1. ヒーローセクション */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.png"
            alt=""
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.98_0.005_90)]/80 via-transparent to-[oklch(0.98_0.005_90)]" />
        </div>

        <div className="container relative z-10 py-16 md:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-[oklch(0.75_0.12_85)]/20 text-[oklch(0.55_0.14_85)] px-4 py-2 rounded-full text-sm font-medium">
                <Target className="h-4 w-4" />
                営業コミュニティ・講座
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[oklch(0.25_0.01_65)] leading-tight mb-6"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              営業が苦手でも、
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">"売れる型"</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[oklch(0.75_0.12_85)]/30 -z-0" />
              </span>
              が手に入る
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-[oklch(0.45_0.02_65)] mb-8 leading-relaxed max-w-2xl"
            >
              感覚や才能に頼らない、再現性のある「成約の方程式」。
              <br className="hidden md:block" />
              3ヶ月で商談が前に進む力を身につける。
            </motion.p>

            {/* Countdown */}
            <motion.div variants={fadeInUp} className="mb-8">
              <p className="text-sm text-[oklch(0.55_0.02_65)] mb-3">
                キャンペーン終了まで
              </p>
              <CountdownTimer targetDate={deadline} />
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <CTAButton variant="primary">
                無料で個別相談を予約する
              </CTAButton>
              <Button
                size="lg"
                variant="outline"
                className="group px-8 py-6 text-base md:text-lg rounded-lg border-2 border-[oklch(0.25_0.01_65)] text-[oklch(0.25_0.01_65)] hover:bg-[oklch(0.25_0.01_65)] hover:text-white"
              >
                まずは動画を見る
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[oklch(0.55_0.02_65)]"
            >
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-[oklch(0.75_0.12_85)]" />
                売り込み一切なし
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[oklch(0.75_0.12_85)]" />
                所要時間：約60分
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[oklch(0.75_0.12_85)]" />
                オンライン完結
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* S2. 動画導線セクション */}
      <section className="section-spacing bg-[oklch(0.96_0.01_85)]">
        <div className="container">
          <SectionHeading
            subtitle="まずは3分で理解"
            title="なぜ今、営業力が必要なのか"
            description="多くの方が見落としている「売れる人」と「売れない人」の決定的な違いをお伝えします"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <img
                src="/images/success-vision.png"
                alt="動画サムネイル"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[oklch(0.25_0.01_65)]/40 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/90 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-8 w-8 md:h-10 md:w-10 text-[oklch(0.25_0.01_65)] ml-1" />
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-[oklch(0.55_0.02_65)] mt-4">
              ※動画は無料でご覧いただけます
            </p>
          </motion.div>
        </div>
      </section>

      {/* S3. 世界観セクション */}
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-12"
            >
              {/* 昔 */}
              <motion.div variants={fadeInUp} className="text-center">
                <span className="text-[oklch(0.75_0.12_85)] text-sm font-medium tracking-wider">
                  かつての営業
                </span>
                <h3
                  className="text-xl md:text-2xl text-[oklch(0.45_0.02_65)] mt-2"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  「足で稼ぐ」「根性で売る」が通用した時代
                </h3>
              </motion.div>

              {/* 矢印 */}
              <motion.div variants={fadeInUp} className="flex justify-center">
                <div className="w-px h-16 bg-gradient-to-b from-[oklch(0.75_0.12_85)] to-[oklch(0.90_0.01_85)]" />
              </motion.div>

              {/* 今 */}
              <motion.div variants={fadeInUp} className="text-center">
                <span className="text-[oklch(0.75_0.12_85)] text-sm font-medium tracking-wider">
                  現代の営業
                </span>
                <h3
                  className="text-xl md:text-2xl text-[oklch(0.25_0.01_65)] mt-2"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  情報過多の時代、「選ばれる理由」がなければ売れない
                </h3>
              </motion.div>

              {/* 矢印 */}
              <motion.div variants={fadeInUp} className="flex justify-center">
                <div className="w-px h-16 bg-gradient-to-b from-[oklch(0.75_0.12_85)] to-[oklch(0.90_0.01_85)]" />
              </motion.div>

              {/* 結論 */}
              <motion.div
                variants={fadeInUp}
                className="bg-[oklch(0.25_0.01_65)] text-white p-8 md:p-12 rounded-2xl text-center"
              >
                <span className="text-[oklch(0.75_0.12_85)] text-sm font-medium tracking-wider">
                  だからこそ
                </span>
                <h3
                  className="text-2xl md:text-3xl mt-4 leading-relaxed"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  「型」を持つ人だけが
                  <br />
                  再現性を持って成約できる
                </h3>
                <p className="mt-4 text-[oklch(0.85_0.005_90)] text-base md:text-lg">
                  成約の方程式 = 信頼構築 × 課題発見 × 提案力 × タイミング
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* S4. If you have - 未来像セクション */}
      <section className="section-spacing bg-[oklch(0.96_0.01_85)]">
        <div className="container">
          <SectionHeading
            subtitle="6ヶ月後のあなた"
            title="この「型」を手に入れると"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl border border-[oklch(0.90_0.01_85)]"
            >
              <h4 className="text-lg font-bold text-[oklch(0.55_0.02_65)] mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-[oklch(0.90_0.01_85)] rounded-full flex items-center justify-center text-sm">
                  今
                </span>
                現在の状態
              </h4>
              <ul className="space-y-4">
                {[
                  "商談が進まず、いつも「検討します」で終わる",
                  "価格競争に巻き込まれ、値引きでしか勝てない",
                  "紹介が増えず、新規開拓に疲弊している",
                  "営業トークに自信がなく、提案が弱い",
                  "成約率が安定せず、売上が読めない",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[oklch(0.55_0.02_65)]">
                    <span className="text-[oklch(0.75_0.12_85)] mt-1">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[oklch(0.25_0.01_65)] text-white p-8 rounded-2xl"
            >
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-[oklch(0.75_0.12_85)] text-[oklch(0.25_0.01_65)] rounded-full flex items-center justify-center text-sm">
                  後
                </span>
                6ヶ月後の姿
              </h4>
              <ul className="space-y-4">
                {[
                  "商談の主導権を握り、クロージングまで導ける",
                  "価値で選ばれ、適正価格で成約できる",
                  "紹介が自然と生まれ、営業コストが下がる",
                  "自信を持って提案でき、相手の心を動かせる",
                  "成約率が安定し、売上の予測が立つ",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.75_0.12_85)] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Transformation Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex justify-center"
          >
            <img
              src="/images/transformation.png"
              alt="変革のイメージ"
              className="max-h-[400px] object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* S5. 権威付けセクション */}
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-5 gap-8 items-center"
            >
              {/* Image */}
              <motion.div variants={fadeInUp} className="md:col-span-2">
                <div className="relative">
                  <img
                    src="/images/success-vision.png"
                    alt="代表者"
                    className="w-full rounded-2xl shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-[oklch(0.75_0.12_85)] text-[oklch(0.20_0.01_65)] px-4 py-2 rounded-lg text-sm font-medium">
                    代表・講師
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div variants={fadeInUp} className="md:col-span-3 space-y-6">
                <div>
                  <span className="text-[oklch(0.75_0.12_85)] text-sm font-medium tracking-wider">
                    なぜ私がこれを言えるのか
                  </span>
                  <h3
                    className="text-2xl md:text-3xl text-[oklch(0.25_0.01_65)] mt-2"
                    style={{ fontFamily: "var(--font-mincho)" }}
                  >
                    {"{founder_name}"}
                  </h3>
                  <p className="text-[oklch(0.55_0.02_65)] mt-1">
                    {"{founder_credibility}"}
                  </p>
                </div>

                <div className="space-y-4 text-[oklch(0.45_0.02_65)] leading-relaxed">
                  <p>
                    私自身、かつては「営業が苦手」でした。制作畑出身で、売り込むことに抵抗があり、商談では常に受け身。成約率は20%を切っていました。
                  </p>
                  <p>
                    しかし、ある「型」に出会い、営業の本質を理解してからは、成約率が3倍以上に。今では年間{"{受講者数}"}名以上の方に、この方程式をお伝えしています。
                  </p>
                  <p className="font-medium text-[oklch(0.25_0.01_65)]">
                    営業は才能ではなく、技術です。正しい型を学べば、誰でも成果を出せる。
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {[
                    { value: "{受講者数}+", label: "受講者数" },
                    { value: "{成約率}%", label: "平均成約率UP" },
                    { value: "{継続率}%", label: "継続率" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-[oklch(0.75_0.12_85)]">
                        {stat.value}
                      </div>
                      <div className="text-xs text-[oklch(0.55_0.02_65)] mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* S7. 不安喚起セクション */}
      <section className="section-spacing bg-[oklch(0.25_0.01_65)] text-white">
        <div className="container">
          <SectionHeading
            subtitle="こんなこと思っていませんか？"
            title="もしかして、こう感じていませんか"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              "営業経験がないから、自分には無理だと思う",
              "話すのが苦手で、商談が怖い",
              "今さら営業を学んでも、遅いのでは",
              "高額な講座に投資して、元が取れるか不安",
              "忙しくて、学ぶ時間が取れない",
              "他の講座で失敗した経験がある",
            ].map((concern, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10"
              >
                <div className="flex items-start gap-3">
                  <span className="text-[oklch(0.75_0.12_85)] text-lg">?</span>
                  <p className="text-[oklch(0.92_0.005_90)]">{concern}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-xl md:text-2xl text-[oklch(0.75_0.12_85)]">
              ご安心ください。
              <br className="md:hidden" />
              その不安、すべて解消できます。
            </p>
          </motion.div>
        </div>
      </section>

      {/* S8. 5つの理由セクション */}
      <section className="section-spacing">
        <div className="container">
          <SectionHeading
            subtitle="選ばれる5つの理由"
            title="なぜ「成約の方程式」で結果が出るのか"
          />

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                num: "01",
                title: "再現性のある「型」を体系化",
                feature: "感覚や才能に頼らない、誰でも使える営業フレームワーク",
                advantage: "属人的なスキルではなく、ステップバイステップで学べる",
                benefit: "未経験でも3ヶ月で成約率が向上する",
                icon: Target,
              },
              {
                num: "02",
                title: "実践重視のカリキュラム",
                feature: "座学だけでなく、実際の商談で使えるロールプレイング",
                advantage: "学んだことをすぐに現場で試せる",
                benefit: "理論と実践のギャップがなく、成果に直結する",
                icon: Zap,
              },
              {
                num: "03",
                title: "少人数制の手厚いサポート",
                feature: "講師との距離が近く、個別のフィードバックが充実",
                advantage: "大人数の講座では得られない、きめ細かい指導",
                benefit: "自分の課題に合わせた改善ができる",
                icon: Users,
              },
              {
                num: "04",
                title: "仲間との切磋琢磨",
                feature: "同じ志を持つコミュニティで学び合える環境",
                advantage: "モチベーションを維持しやすく、孤独にならない",
                benefit: "継続率が高く、長期的な成長につながる",
                icon: MessageCircle,
              },
              {
                num: "05",
                title: "卒業後も続くサポート",
                feature: "講座終了後もコミュニティに参加可能",
                advantage: "一度きりの学びで終わらない、継続的な成長環境",
                benefit: "長期的なキャリア形成をサポート",
                icon: TrendingUp,
              },
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-[oklch(0.90_0.01_85)] hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[oklch(0.75_0.12_85)]/10 rounded-xl flex items-center justify-center">
                      <point.icon className="h-8 w-8 text-[oklch(0.75_0.12_85)]" />
                    </div>
                    <div className="text-center mt-2 text-[oklch(0.75_0.12_85)] font-bold text-sm">
                      POINT {point.num}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4
                      className="text-xl font-bold text-[oklch(0.25_0.01_65)] mb-4"
                      style={{ fontFamily: "var(--font-mincho)" }}
                    >
                      {point.title}
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-[oklch(0.75_0.12_85)] font-medium min-w-[60px]">
                          特徴
                        </span>
                        <span className="text-[oklch(0.45_0.02_65)]">{point.feature}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[oklch(0.75_0.12_85)] font-medium min-w-[60px]">
                          利点
                        </span>
                        <span className="text-[oklch(0.45_0.02_65)]">{point.advantage}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[oklch(0.75_0.12_85)] font-medium min-w-[60px]">
                          成果
                        </span>
                        <span className="text-[oklch(0.25_0.01_65)] font-medium">
                          {point.benefit}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* S9. カリキュラムSTEPセクション */}
      <section className="section-spacing bg-[oklch(0.96_0.01_85)]">
        <div className="container">
          <SectionHeading
            subtitle="カリキュラム"
            title="成約までの5ステップ"
            description="段階的に学び、実践し、成果を出す。3ヶ月で営業力を身につけるプログラム。"
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-[oklch(0.75_0.12_85)]/30 hidden md:block" />

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "マインドセット構築",
                    period: "Week 1-2",
                    description: "営業の本質を理解し、「売り込み」から「価値提供」へマインドをシフト",
                    outputs: ["営業哲学の確立", "自己分析ワーク", "目標設定"],
                  },
                  {
                    step: "02",
                    title: "信頼構築の技術",
                    period: "Week 3-4",
                    description: "初対面から信頼を勝ち取るコミュニケーション術を習得",
                    outputs: ["ラポール構築法", "傾聴スキル", "質問設計"],
                  },
                  {
                    step: "03",
                    title: "課題発見と提案設計",
                    period: "Week 5-6",
                    description: "顧客の真のニーズを引き出し、刺さる提案を作る",
                    outputs: ["ヒアリングシート", "提案書テンプレート", "価値訴求法"],
                  },
                  {
                    step: "04",
                    title: "クロージング技術",
                    period: "Week 7-8",
                    description: "自然に成約へ導く、押し売りにならないクロージング",
                    outputs: ["クロージングトーク", "反論処理", "価格交渉術"],
                  },
                  {
                    step: "05",
                    title: "実践とフィードバック",
                    period: "Week 9-12",
                    description: "実際の商談で実践し、講師からのフィードバックで改善",
                    outputs: ["ロールプレイング", "商談分析", "改善サイクル"],
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative flex gap-6 md:gap-8"
                  >
                    {/* Step number */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 bg-[oklch(0.25_0.01_65)] text-white rounded-xl flex items-center justify-center">
                        <span className="text-lg font-bold">STEP</span>
                      </div>
                      <div className="text-center mt-1 text-[oklch(0.75_0.12_85)] font-bold">
                        {item.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white p-6 rounded-xl border border-[oklch(0.90_0.01_85)]">
                      <div className="flex items-center gap-3 mb-3">
                        <h4
                          className="text-lg font-bold text-[oklch(0.25_0.01_65)]"
                          style={{ fontFamily: "var(--font-mincho)" }}
                        >
                          {item.title}
                        </h4>
                        <span className="text-xs bg-[oklch(0.75_0.12_85)]/20 text-[oklch(0.55_0.14_85)] px-2 py-1 rounded">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-[oklch(0.45_0.02_65)] text-sm mb-4">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.outputs.map((output, j) => (
                          <span
                            key={j}
                            className="text-xs bg-[oklch(0.96_0.01_85)] text-[oklch(0.45_0.02_65)] px-3 py-1 rounded-full"
                          >
                            {output}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Methodology Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 flex justify-center"
            >
              <img
                src="/images/methodology.png"
                alt="メソドロジー"
                className="max-w-md w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* S10. 比較セクション */}
      <section className="section-spacing">
        <div className="container">
          <SectionHeading
            subtitle="比較"
            title="他の選択肢との違い"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-[oklch(0.96_0.01_85)] border-b border-[oklch(0.90_0.01_85)]">
                    比較項目
                  </th>
                  <th className="p-4 text-center bg-[oklch(0.96_0.01_85)] border-b border-[oklch(0.90_0.01_85)]">
                    独学
                  </th>
                  <th className="p-4 text-center bg-[oklch(0.96_0.01_85)] border-b border-[oklch(0.90_0.01_85)]">
                    他社スクール
                  </th>
                  <th className="p-4 text-center bg-[oklch(0.25_0.01_65)] text-white border-b border-[oklch(0.90_0.01_85)]">
                    成約の方程式
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    item: "再現性",
                    self: "△ 個人差大",
                    other: "○ 一定あり",
                    ours: "◎ 型で再現",
                  },
                  {
                    item: "サポート",
                    self: "× なし",
                    other: "△ 大人数",
                    ours: "◎ 少人数制",
                  },
                  {
                    item: "実践機会",
                    self: "× 自己流",
                    other: "○ あり",
                    ours: "◎ 毎週実践",
                  },
                  {
                    item: "コミュニティ",
                    self: "× なし",
                    other: "○ あり",
                    ours: "◎ 卒業後も",
                  },
                  {
                    item: "投資対効果",
                    self: "△ 時間浪費",
                    other: "○ 相応",
                    ours: "◎ 高ROI",
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[oklch(0.90_0.01_85)]">
                    <td className="p-4 font-medium text-[oklch(0.25_0.01_65)]">
                      {row.item}
                    </td>
                    <td className="p-4 text-center text-[oklch(0.55_0.02_65)]">
                      {row.self}
                    </td>
                    <td className="p-4 text-center text-[oklch(0.55_0.02_65)]">
                      {row.other}
                    </td>
                    <td className="p-4 text-center font-medium text-[oklch(0.75_0.12_85)] bg-[oklch(0.75_0.12_85)]/5">
                      {row.ours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* S11. サポートセクション */}
      <section className="section-spacing bg-[oklch(0.96_0.01_85)]">
        <div className="container">
          <SectionHeading
            subtitle="サポート体制"
            title="あなたを支える3つの柱"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: "仲間との学び合い",
                description:
                  "同じ志を持つ仲間と切磋琢磨。オンラインコミュニティで日々の学びを共有し、モチベーションを維持。",
                details: ["専用Slackチャンネル", "週1回の勉強会", "成功事例の共有"],
              },
              {
                icon: MessageCircle,
                title: "講師への直接相談",
                description:
                  "少人数制だからこそ実現する、講師との距離の近さ。個別の課題に合わせたアドバイスを受けられます。",
                details: ["月2回の個別面談", "チャットでの質問対応", "商談同席サポート"],
              },
              {
                icon: Calendar,
                title: "継続的なフォロー",
                description:
                  "卒業後もコミュニティに参加可能。長期的なキャリア形成をサポートし、成長を見守ります。",
                details: ["卒業生限定イベント", "最新ノウハウの共有", "紹介ネットワーク"],
              },
            ].map((support, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-[oklch(0.90_0.01_85)] text-center"
              >
                <div className="w-16 h-16 bg-[oklch(0.75_0.12_85)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <support.icon className="h-8 w-8 text-[oklch(0.75_0.12_85)]" />
                </div>
                <h4
                  className="text-lg font-bold text-[oklch(0.25_0.01_65)] mb-3"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  {support.title}
                </h4>
                <p className="text-[oklch(0.55_0.02_65)] text-sm mb-4">
                  {support.description}
                </p>
                <ul className="space-y-2">
                  {support.details.map((detail, j) => (
                    <li
                      key={j}
                      className="text-xs text-[oklch(0.45_0.02_65)] flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="h-3 w-3 text-[oklch(0.75_0.12_85)]" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Community Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <img
              src="/images/community.png"
              alt="コミュニティ"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* S12. 社会的証明セクション */}
      <section className="section-spacing">
        <div className="container">
          <SectionHeading
            subtitle="受講者の声"
            title="実際に成果を出した方々"
            description="※個人の感想であり、成果を保証するものではありません"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "{case_1_name}",
                role: "{case_1_role}",
                quote:
                  "営業経験ゼロから始めましたが、3ヶ月で初成約。型があるから自信を持って商談に臨めます。",
                result: "成約率 0% → 40%",
              },
              {
                name: "{case_2_name}",
                role: "{case_2_role}",
                quote:
                  "価格競争から抜け出せず悩んでいましたが、価値で選ばれる提案ができるようになりました。",
                result: "単価 1.5倍UP",
              },
              {
                name: "{case_3_name}",
                role: "{case_3_role}",
                quote:
                  "紹介が増え、営業にかける時間が半分に。その分、本業に集中できるようになりました。",
                result: "紹介率 3倍",
              },
              {
                name: "{case_4_name}",
                role: "{case_4_role}",
                quote:
                  "商談が怖かったのが嘘のよう。今では商談が楽しみになりました。",
                result: "商談数 2倍",
              },
              {
                name: "{case_5_name}",
                role: "{case_5_role}",
                quote:
                  "仲間との学び合いがモチベーションに。一人では続かなかったと思います。",
                result: "継続6ヶ月",
              },
              {
                name: "{case_6_name}",
                role: "{case_6_role}",
                quote:
                  "卒業後もコミュニティで繋がれるのが嬉しい。長期的な成長を実感しています。",
                result: "年商 2倍",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-6 rounded-xl border border-[oklch(0.90_0.01_85)]"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-[oklch(0.75_0.12_85)] text-[oklch(0.75_0.12_85)]"
                    />
                  ))}
                </div>
                <p className="text-[oklch(0.45_0.02_65)] text-sm mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-[oklch(0.25_0.01_65)] text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[oklch(0.55_0.02_65)]">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[oklch(0.55_0.02_65)]">成果</p>
                    <p className="text-sm font-bold text-[oklch(0.75_0.12_85)]">
                      {testimonial.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-[oklch(0.55_0.02_65)] mt-8">
            ※上記は仮置きです。実際の受講者様の声に差し替えてください。
          </p>
        </div>
      </section>

      {/* S13. 講義チラ見せセクション */}
      <section className="section-spacing bg-[oklch(0.96_0.01_85)]">
        <div className="container">
          <SectionHeading
            subtitle="講義内容"
            title="カリキュラムの一部をご紹介"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              "第1講：営業の本質とマインドセット",
              "第2講：信頼を勝ち取る初対面の技術",
              "第3講：ニーズを引き出す質問設計",
              "第4講：刺さる提案書の作り方",
              "第5講：反論処理の黄金パターン",
              "第6講：自然なクロージング術",
              "第7講：紹介を生む関係構築",
              "第8講：継続的な成長サイクル",
            ].map((lecture, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-4 rounded-lg border border-[oklch(0.90_0.01_85)] hover:border-[oklch(0.75_0.12_85)] transition-colors"
              >
                <span className="text-xs text-[oklch(0.75_0.12_85)] font-medium">
                  Lecture {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-[oklch(0.25_0.01_65)] mt-1 font-medium">
                  {lecture}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* S14. 最終の鼓舞セクション */}
      <section className="section-spacing">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[oklch(0.25_0.01_65)] leading-tight mb-6"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              営業力は、
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">一生モノの資産</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[oklch(0.75_0.12_85)]/30 -z-0" />
              </span>
              になる
            </h2>

            <div className="space-y-4 text-[oklch(0.45_0.02_65)] leading-relaxed">
              <p>
                AIが進化しても、人と人との信頼関係は変わりません。
                <br />
                むしろ、「選ばれる力」はますます重要になっていきます。
              </p>
              <p>
                今、この「型」を身につけることは、
                <br />
                将来の自分への最高の投資です。
              </p>
              <p className="text-lg font-medium text-[oklch(0.25_0.01_65)]">
                あなたも、「売れる側」に回りませんか？
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* S15. 申込フローセクション */}
      <section className="section-spacing bg-[oklch(0.25_0.01_65)] text-white">
        <div className="container">
          <SectionHeading
            subtitle="ご参加の流れ"
            title="4ステップで始められます"
          />

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "LINE登録",
                description: "下のボタンからLINE公式アカウントを友だち追加",
                icon: MessageCircle,
              },
              {
                step: "02",
                title: "日程調整",
                description: "ご都合の良い日時を選択して予約",
                icon: Calendar,
              },
              {
                step: "03",
                title: "個別相談",
                description: "オンラインで60分の無料相談（売り込みなし）",
                icon: Users,
              },
              {
                step: "04",
                title: "ご希望の方のみ",
                description: "納得いただけた方のみお申し込み",
                icon: CheckCircle2,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[oklch(0.75_0.12_85)] text-[oklch(0.20_0.01_65)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <div className="text-[oklch(0.75_0.12_85)] font-bold text-sm mb-2">
                  STEP {item.step}
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-[oklch(0.85_0.005_90)]">
                  {item.description}
                </p>
                {i < 3 && (
                  <ArrowRight className="h-6 w-6 text-[oklch(0.75_0.12_85)] mx-auto mt-4 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* S16. クロージングCTAセクション */}
      <section className="section-spacing bg-gradient-to-b from-[oklch(0.96_0.01_85)] to-[oklch(0.98_0.005_90)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            {/* Offer Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[oklch(0.75_0.12_85)]/30">
              {/* Header */}
              <div className="bg-[oklch(0.25_0.01_65)] text-white p-6 text-center">
                <span className="text-[oklch(0.75_0.12_85)] text-sm font-medium">
                  期間限定オファー
                </span>
                <h3
                  className="text-2xl md:text-3xl font-bold mt-2"
                  style={{ fontFamily: "var(--font-mincho)" }}
                >
                  無料個別相談 + 7大特典
                </h3>
              </div>

              {/* Body */}
              <div className="p-8">
                {/* Countdown */}
                <div className="text-center mb-8">
                  <p className="text-sm text-[oklch(0.55_0.02_65)] mb-3">
                    キャンペーン終了まで
                  </p>
                  <CountdownTimer targetDate={deadline} />
                </div>

                {/* Bonuses */}
                <div className="space-y-3 mb-8">
                  <p className="text-sm font-medium text-[oklch(0.25_0.01_65)]">
                    今だけの7大特典：
                  </p>
                  {[
                    "成約率を2倍にする商談チェックリスト（PDF）",
                    "初対面で信頼を勝ち取る自己紹介テンプレート",
                    "反論処理の黄金スクリプト集",
                    "提案書テンプレート（Canva版）",
                    "営業マインドセット音声講座（30分）",
                    "卒業生限定コミュニティへの招待",
                    "初回講義の無料体験",
                  ].map((bonus, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-[oklch(0.45_0.02_65)]"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[oklch(0.75_0.12_85)] flex-shrink-0" />
                      <span>
                        特典{i + 1}：{bonus}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Scarcity */}
                <div className="bg-[oklch(0.96_0.01_85)] p-4 rounded-lg mb-8 text-center">
                  <p className="text-sm text-[oklch(0.55_0.02_65)]">
                    <span className="font-bold text-[oklch(0.75_0.12_85)]">
                      残り枠：先着10名様
                    </span>
                    <br />
                    ※定員に達し次第、募集を締め切ります
                  </p>
                </div>

                {/* CTA */}
                <div className="text-center space-y-4">
                  <CTAButton variant="secondary" className="w-full">
                    今すぐ無料で相談を予約する
                  </CTAButton>
                  <p className="text-xs text-[oklch(0.55_0.02_65)]">
                    ※売り込みは一切ありません。お気軽にご相談ください。
                  </p>
                </div>

                {/* Guarantee */}
                <div className="mt-8 pt-6 border-t border-[oklch(0.90_0.01_85)] text-center">
                  <div className="flex items-center justify-center gap-2 text-sm text-[oklch(0.55_0.02_65)]">
                    <Shield className="h-4 w-4 text-[oklch(0.75_0.12_85)]" />
                    <span>{"{guarantee}"}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* S17. フッター */}
      <footer className="bg-[oklch(0.25_0.01_65)] text-white py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Logo */}
            <div className="text-center mb-8">
              <h4
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                成約の方程式
              </h4>
              <p className="text-sm text-[oklch(0.75_0.12_85)] mt-1">
                営業が苦手でも"売れる型"が手に入る
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[oklch(0.85_0.005_90)] mb-8">
              <a href="{links_terms}" className="hover:text-[oklch(0.75_0.12_85)] transition-colors">
                利用規約
              </a>
              <a href="{links_privacy}" className="hover:text-[oklch(0.75_0.12_85)] transition-colors">
                プライバシーポリシー
              </a>
              <a href="{links_tokusho}" className="hover:text-[oklch(0.75_0.12_85)] transition-colors">
                特定商取引法に基づく表記
              </a>
              <a href="{links_company}" className="hover:text-[oklch(0.75_0.12_85)] transition-colors">
                運営会社
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center text-xs text-[oklch(0.65_0.02_65)]">
              <p>© 2026 成約の方程式 All Rights Reserved.</p>
              <p className="mt-2">
                ※当サイトに掲載されている成果は個人の感想であり、成果を保証するものではありません。
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
