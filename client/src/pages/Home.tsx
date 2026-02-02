/**
 * 成約の方程式 LP
 * Design Philosophy: Brand Design (Red to Orange Gradient)
 * - Professional, trustworthy, growth-oriented
 * - Clean whitespace with warm brand accents
 * - Typography: Noto Sans JP + Montserrat
 */

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  HelpCircle,
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
import { Link } from "wouter";

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
          <div className="brand-gradient text-white px-3 py-2 md:px-4 md:py-3 rounded-lg min-w-[50px] md:min-w-[60px] shadow-lg">
            <span className="text-xl md:text-2xl font-bold tabular-nums font-display">
              {String(item.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs md:text-sm text-muted-foreground mt-1 block">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

// CTA Button Component - LINE想起のグリーンで視認性最大化
function CTAButton({
  variant = "primary",
  children,
  className = "",
  pulse = false,
  href = "https://lin.ee/ugwzBPH",
}: {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
  pulse?: boolean;
  href?: string;
}) {
  const baseStyles = "group relative overflow-hidden font-bold transition-all duration-300";
  const variants = {
    primary: "cta-button-line",
    secondary: "cta-button-outline",
    outline: "cta-button-outline",
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      <Button
        size="lg"
        className={`${baseStyles} ${variants[variant]} ${pulse ? "pulse-line" : ""} ${className} px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-2xl min-h-[52px] md:min-h-[60px]`}
      >
        <span className="flex flex-col items-center justify-center">
          <span className="flex items-center gap-2">
            {children}
            <span className="text-lg md:text-xl opacity-90" role="img" aria-label="指">👉</span>
          </span>
          <span className="text-[10px] md:text-xs font-normal opacity-80 mt-0.5">（30秒で完了）</span>
        </span>
      </Button>
    </a>
  );
}

// Section Heading Component
function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  dark = false,
}: {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      {subtitle && (
        <span className={`inline-block text-sm md:text-base font-semibold tracking-wider uppercase mb-3 ${dark ? "text-white/70" : "brand-gradient-text"}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight ${dark ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg max-w-2xl ${align === "center" ? "mx-auto" : ""} leading-relaxed ${dark ? "text-white/80" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
      <div className={`divider-brand mt-6 ${align === "center" ? "" : "mx-0"}`} />
    </div>
  );
}

// Step Number Component
function StepNumber({ number }: { number: string }) {
  return (
    <div className="step-number">
      {number}
    </div>
  );
}

// Icon Wrapper Component
function IconWrapper({ children, size = "md" }: { children: React.ReactNode; size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-16 h-16",
  };
  return (
    <div className={`icon-brand ${sizes[size]} p-3`}>
      {children}
    </div>
  );
}

export default function Home() {
  // Campaign deadline (7 days from now for demo)
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 7);

  return (
    <div className="min-h-screen bg-background">
      {/* S0. ファーストビュー：キャンペーンバナー */}
      <section className="brand-gradient text-white py-3 md:py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center">
            <div className="flex items-center gap-2">
              🎁
              <span className="text-sm md:text-base font-medium">
                【期間限定】無料個別相談 + 7大特典プレゼント
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-semibold">残り枠：先着10名様</span>
            </div>
          </div>
        </div>
      </section>

      {/* S1. ヒーローセクション */}
      <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/hero-bg-sales.jpg)',
              opacity: 1
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/55" />
        </div>

        <div className="container relative z-10 py-16 md:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            {/* Logo */}
            <motion.div variants={fadeInUp} className="mb-8">
              <img
                src="/images/logo.png"
                alt="成約の方程式"
                className="h-16 md:h-20 w-auto"
              />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              はじめにお聞きします。
              <br />
              <span className="relative inline-block">
                <span className="brand-gradient-text">"営業は得意"</span>
              </span>
              ですか？
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl" style={{fontWeight: '500'}}
            >
              感覚や才能に頼らない、再現性のある「成約の方程式」。
              <br className="hidden md:block" />
              ６ヶ月で商談が前に進む力を身につける。
            </motion.p>

            {/* Countdown */}
            <motion.div variants={fadeInUp} className="mb-8">
              <p className="text-sm text-muted-foreground mb-3">
                キャンペーン終了まで
              </p>
              <CountdownTimer targetDate={deadline} />
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <CTAButton variant="primary" pulse>
                LINEで無料相談を予約する
              </CTAButton>
              <Button
                size="lg"
                variant="outline"
                className="group px-8 py-6 text-base md:text-lg rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                onClick={() => document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                まずは動画を見る
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                売り込み一切なし
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                所要時間：約60分
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                オンライン完結
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* S2. 動画導線セクション */}
      <section id="video-section" className="section-spacing section-gray">
        <div className="container">
          <SectionHeading
            subtitle="まずは3分で理解"
            title="なぜ今、営業力が必要なのか"
            description="時代背景から、「なぜ今の時代営業なのか？」を分かりやすく解説しています。"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl brand-card">
              <video
                src="/images/lp-video.mov"
                controls
                playsInline
                poster="/images/success-vision.png"
                className="w-full h-full object-cover"
              >
                お使いのブラウザは動画タグをサポートしていません。
              </video>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-4">
              ※動画は無料でご覧いただけます
            </p>
          </motion.div>
        </div>
      </section>

      {/* S3. 世界観セクション */}
      <section className="section-spacing">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            {/* Timeline */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Past */}
              <motion.div variants={fadeInUp} className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 brand-gradient text-white rounded-full flex items-center justify-center text-sm font-bold font-display">1</span>
                  <span className="text-sm font-semibold text-muted-foreground" style={{color: '#0d0c0c'}}>過去</span>
                </div>
                <p className="text-foreground leading-relaxed">
                  「足で稼ぐ」「根性で売る」が通用した時代
                </p>
              </motion.div>

              {/* Present */}
              <motion.div variants={fadeInUp} className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 brand-gradient text-white rounded-full flex items-center justify-center text-sm font-bold font-display">2</span>
                  <span className="text-sm font-semibold text-muted-foreground" style={{color: '#000000'}}>現在</span>
                </div>
                <p className="text-foreground leading-relaxed">
                  情報過多の時代、「選ばれる理由」がなければ売れない
                </p>
              </motion.div>

              {/* Conclusion */}
              <motion.div variants={fadeInUp} className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 brand-gradient text-white rounded-full flex items-center justify-center text-sm font-bold font-display">3</span>
                  <span className="text-sm font-semibold text-muted-foreground" style={{color: '#080808'}}>結論</span>
                </div>
                <p className="text-foreground leading-relaxed">
                  だからこそ、「型」を持つ人だけが再現性を持って成約できる
                </p>
              </motion.div>
            </div>

            {/* Formula */}
            <motion.div
              variants={fadeInUp}
              className="brand-card p-8 md:p-12 text-center"
            >
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-6">
                成約の方程式
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-lg md:text-2xl font-bold">
                <span className="brand-gradient-text">信頼構築</span>
                <span className="text-muted-foreground">×</span>
                <span className="brand-gradient-text">課題発見</span>
                <span className="text-muted-foreground">×</span>
                <span className="brand-gradient-text">提案力</span>
                <span className="text-muted-foreground">×</span>
                <span className="brand-gradient-text">タイミング</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* S4. If you have - 未来像セクション */}
      <section className="section-spacing section-gray">
        <div className="container">
          <SectionHeading
            subtitle="6ヶ月後のあなた"
            title="この「型」を手に入れると"
          />

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="brand-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-400 text-2xl">😔</span>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Before</span>
                  <h4 className="font-bold text-foreground">現在の状態</h4>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "商談が進まず、いつも「検討します」で終わる",
                  "価格競争に巻き込まれ、値引きでしか勝てない",
                  "紹介が増えず、新規開拓に疲弊している",
                  "営業トークに自信がなく、提案が弱い",
                  "成約率が安定せず、売上が読めない",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3" style={{color: '#1a1a1a'}}>
                    <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-gray-400 rounded-full" />
                    </span>
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
              className="brand-card p-8 border-2 border-primary/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 brand-gradient rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">😊</span>
                </div>
                <div>
                  <span className="text-sm brand-gradient-text font-semibold">After</span>
                  <h4 className="font-bold text-foreground">6ヶ月後の姿</h4>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "商談の主導権を握り、クロージングまで導ける",
                  "価値で選ばれ、適正価格で成約できる",
                  "紹介が自然と生まれ、営業コストが下がる",
                  "自信を持って提案でき、相手の心を動かせる",
                  "成約率が安定し、売上の予測が立つ",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3" style={{color: '#000000'}}>
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* S5. 権威付けセクション */}
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid lg:grid-cols-5 gap-8 items-center"
            >
              {/* Image */}
              <motion.div variants={fadeInUp} className="lg:col-span-2">
                <div className="relative">
                  <img
                    src="/images/instructor.jpg"
                    alt="代表者"
                    className="w-full aspect-square object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 brand-gradient text-white px-6 py-3 rounded-xl shadow-lg">
                    <span className="text-sm font-bold">代表講師</span>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div variants={fadeInUp} className="lg:col-span-3 space-y-6">
                <div>
                  <span className="brand-gradient-text text-sm font-semibold tracking-wider">
                    なぜ私がこれを言えるのか
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
                    hiro                  </h3>
                  
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    私自身、かつては「営業が苦手」でした。人と話すことが苦手で、売り込むことに抵抗があり、商談では常に受け身。成約率は20%を切っていました。
                  </p>
                  <p>
                    しかし、ある「型」に出会い、営業の本質を理解してからは、成約率が3倍以上に。
                  </p>
                  <p className="font-semibold text-foreground">
                    営業は才能ではなく、技術です。正しい型を学べば、誰でも成果を出せる。
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {[
                    { value: "受講者数 +20", label: "" },
                    { value: "成約率 90%", label: "" },
                    { value: "継続率 95%", label: "" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center brand-card p-4">
                      <div className="text-2xl md:text-3xl font-bold brand-gradient-text font-display">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
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
      <section className="section-spacing brand-gradient text-white">
        <div className="container">
          <SectionHeading
            subtitle="こんなこと思っていませんか？"
            title="もしかして、こう感じていませんか"
            dark
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
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                  <p className="text-white/90">{concern}</p>
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
            <p className="text-xl md:text-2xl text-white font-bold">
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

          <div className="max-w-4xl mx-auto space-y-6">
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
                className="brand-card p-6 md:p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 hidden md:block">
                    <IconWrapper size="lg">
                      <point.icon className="h-8 w-8" />
                    </IconWrapper>
                    <div className="text-center mt-2 brand-gradient-text font-bold text-sm font-display">
                      POINT {point.num}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4 md:hidden">
                      <IconWrapper size="sm">
                        <point.icon className="h-5 w-5" />
                      </IconWrapper>
                      <span className="brand-gradient-text font-bold text-sm font-display">
                        POINT {point.num}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-4">
                      {point.title}
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <span className="brand-gradient-text font-semibold min-w-[60px]">
                          特徴
                        </span>
                        <span className="text-muted-foreground">{point.feature}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="brand-gradient-text font-semibold min-w-[60px]">
                          利点
                        </span>
                        <span className="text-muted-foreground">{point.advantage}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="brand-gradient-text font-semibold min-w-[60px]">
                          成果
                        </span>
                        <span className="text-foreground font-semibold">
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
      <section className="section-spacing section-gray">
        <div className="container">
          <SectionHeading
            subtitle="カリキュラム"
            title="成約までの5ステップ"
            description="段階的に学び、実践し、成果を出す。3ヶ月で営業力を身につけるプログラム。"
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 hidden md:block" />

              <div className="space-y-6">
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
                      <StepNumber number={item.step} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 brand-card p-6 md:p-8">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h4 className="text-lg md:text-xl font-bold text-foreground">
                          {item.title}
                        </h4>
                        <span className="badge-brand text-xs">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.outputs.map((output, j) => (
                          <span
                            key={j}
                            className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
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
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-secondary rounded-tl-xl">比較項目</th>
                  <th className="p-4 bg-secondary text-center">独学</th>
                  <th className="p-4 bg-secondary text-center">他社スクール</th>
                  <th className="p-4 brand-gradient text-white text-center rounded-tr-xl">成約の方程式</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "再現性", a: "△ 個人差大", b: "○ 一定あり", c: "◎ 型で再現" },
                  { item: "サポート", a: "× なし", b: "△ 大人数", c: "◎ 少人数制" },
                  { item: "実践機会", a: "× 自己流", b: "○ あり", c: "◎ 毎週実践" },
                  { item: "コミュニティ", a: "× なし", b: "○ あり", c: "◎ 卒業後も" },
                  { item: "投資対効果", a: "△ 時間浪費", b: "○ 相応", c: "◎ 高ROI" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="p-4 font-semibold text-foreground">{row.item}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.a}</td>
                    <td className="p-4 text-center text-muted-foreground">{row.b}</td>
                    <td className="p-4 text-center font-bold brand-gradient-text">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* S11. サポートセクション */}
      <section className="section-spacing section-gray">
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
                description: "同じ志を持つ仲間と切磋琢磨。オンラインコミュニティで日々の学びを共有し、モチベーションを維持。",
                features: ["専用オープンチャット", "週1回の勉強会", "成功事例の共有"],
              },
              {
                icon: MessageCircle,
                title: "講師への直接相談",
                description: "少人数制だからこそ実現する、講師との距離の近さ。個別の課題に合わせたアドバイスを受けられます。",
                features: ["無制限の個別面談", "チャットでの質問対応"],
              },
              {
                icon: TrendingUp,
                title: "継続的なフォロー",
                description: "卒業後もコミュニティに参加可能。長期的なキャリア形成をサポートし、成長を見守ります。",
                features: ["卒業生限定イベント", "最新ノウハウの共有", "紹介ネットワーク"],
              },
            ].map((support, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="brand-card p-8 text-center"
              >
                <div className="w-16 h-16 brand-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <support.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">
                  {support.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {support.description}
                </p>
                <ul className="space-y-2">
                  {support.features.map((feature, j) => (
                    <li key={j} className="flex items-center justify-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
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

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Sさん",
                role: "女性",
                quote: "営業経験ゼロから始めましたが、3ヶ月で初成約。型があるから自信を持って商談に臨めます。",
                result: "成約率 20%→70%",
                stars: 4,
                image: "https://private-us-east-1.manuscdn.com/sessionFile/M1bAAzRicI7311tVVClw23/sandbox/Xf7f5m9oGSS55o5ZfcZ2nv-img-1_1770034267000_na1fn_dGVzdGltb25pYWwtcy1mZW1hbGU.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTTFiQUF6UmljSTczMTF0VlZDbHcyMy9zYW5kYm94L1hmN2Y1bTlvR1NTNTVvNVpmY1oybnYtaW1nLTFfMTc3MDAzNDI2NzAwMF9uYTFmbl9kR1Z6ZEdsdGIyNXBZV3d0Y3kxbVpXMWhiR1UucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rTFuVS3voVnxWz1KVHSR5EhC7DYTWShyxtIcynvVpqMFCOEQ8-jNJ1CNN6XREvRrQY29~LfWRHuTWmQ3AuCrNKheLXLDMtMiqBYyQOQCK-h3nBoZacws8Uu8s9IoLMcllzbdt1D3Kf-wvI3yK4epHZEszRezx5tPPRG1PeylPrHUrE2v2lTcgSCkrK~ygEpcqs6-p8V7IhYaY9c~qC0JJtrqIV8Bd6gbYrIuRcnRSWNfM3-U9PeKZORZerZlyp2LMUkdA-xrHct9qPfZhBXbB7AkScqhSnMMYxrxwCPZIKQFlZF7LVnziMYmXUvTGQRKfUOyAfV9wsV3eDsirRA7uw__",
              },
              {
                name: "Yさん",
                role: "男性",
                quote: "価格競争から抜け出せず悩んでいましたが、価値で選ばれる提案ができるようになりました。",
                result: "単価 1.5倍",
                stars: 4.5,
                image: "https://private-us-east-1.manuscdn.com/sessionFile/M1bAAzRicI7311tVVClw23/sandbox/Xf7f5m9oGSS55o5ZfcZ2nv-img-2_1770034261000_na1fn_dGVzdGltb25pYWwteS1tYWxl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTTFiQUF6UmljSTczMTF0VlZDbHcyMy9zYW5kYm94L1hmN2Y1bTlvR1NTNTVvNVpmY1oybnYtaW1nLTJfMTc3MDAzNDI2MTAwMF9uYTFmbl9kR1Z6ZEdsdGIyNXBZV3d0ZVMxdFlXeGwucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=csjXA-n4hg68UHKMWPTqlfj7lnqgvtmM-Z6dD7rBuWW-zsv6j0vSpNtdGAfxUQQMgIW9PHcC3uaGtuh1fnQESj3hQ~81qsTqcEE8Thou3D3shpqFzoql76CGaxvUhsuV4GPQFiwfBZsMCX3lg7YWPiU5IivzdtnxFUvfe-v9fcwuu8o7NEQ93XQXTn-Up8bBSduIyYTXlTX5InSkalmC0LGbm93Hnova9CygFvoZu9SvRVuYgUaaov0HbMP9JabdrpN8~KzzcKeOeHwJ6Z4t6jDojlUJnU9jj90Ldmz3-xmH5XKavib3AvZK21c~PqmmD3ujbwt8NW7m1N~SpmXcyA__",
              },
              {
                name: "Nさん",
                role: "女性",
                quote: "紹介が増え、営業にかける時間が半分に。その分、本業に集中できるようになりました。",
                result: "紹介率 3倍",
                stars: 5,
                image: "https://private-us-east-1.manuscdn.com/sessionFile/M1bAAzRicI7311tVVClw23/sandbox/Xf7f5m9oGSS55o5ZfcZ2nv-img-3_1770034262000_na1fn_dGVzdGltb25pYWwtbi1mZW1hbGU.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTTFiQUF6UmljSTczMTF0VlZDbHcyMy9zYW5kYm94L1hmN2Y1bTlvR1NTNTVvNVpmY1oybnYtaW1nLTNfMTc3MDAzNDI2MjAwMF9uYTFmbl9kR1Z6ZEdsdGIyNXBZV3d0YmkxbVpXMWhiR1UucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=inBsCxk8Vw5cvt~pXLL22mV6u5cdSZ7eTiTJqccmFtDP92CLjNbLGe2int4fpzclkczKRxlq9CuqblOuCtEfhyM8~8zlxpVPn3yVXoPAQpfXuKds0vW6tJ6KjWR~vKVK3yCs9MwjY7qAkLNHCqx13rGLqsgGZLS5iYsAripjWjdy4cJ~bfkvfhqdjjfqGf32tmPXnlAMkEI6eVjc-3sUfAZTM8L4eGuioC2VrDSuvhVCVCx8xb9JHsKX-9OsH~zlwBqbf8ExBlyQgM96lIEpjMP5LlIQpJBJ9E-Xmg~cyFubqanB7ReOGZp-loLW3pmU42vIZvy1MyAVlpLNQueOng__",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="brand-card p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`h-4 w-4 ${j < Math.floor(testimonial.stars) ? 'fill-accent text-accent' : j < testimonial.stars ? 'fill-accent/50 text-accent' : 'fill-gray-200 text-gray-200'}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed quote-brand">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}　{testimonial.role}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-xs text-muted-foreground">成果</p>
                      <p className="text-sm font-bold brand-gradient-text">
                        {testimonial.result}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8">
            
          </p>
        </div>
      </section>

      {/* S13. 講義チラ見せセクション */}
      <section className="section-spacing section-gray">
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
                className="brand-card p-4 hover:border-primary/30 transition-colors"
              >
                <span className="brand-gradient-text text-xs font-bold font-display">
                  Lecture {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-foreground mt-1 font-medium">
                  {lecture}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing">
        <div className="container">
          <SectionHeading
            subtitle="よくある質問"
            title="FAQ"
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "営業経験がまったくないのですが、大丈夫ですか？",
                  a: "はい、大丈夫です。むしろ営業経験がない方のほうが、変な癖がついていないため、正しい型を素直に吸収できます。受講者の約60%は営業未経験からスタートしています。",
                },
                {
                  q: "忙しくて時間が取れないのですが、続けられますか？",
                  a: "週に2〜3時間程度の学習時間を確保できれば十分です。動画講義は隙間時間に視聴でき、ライブセッションは録画も提供しています。",
                },
                {
                  q: "他の営業講座と何が違いますか？",
                  a: "最大の違いは「再現性」です。感覚的なノウハウではなく、誰でも使える「型」として体系化しています。また、少人数制で個別フィードバックが充実している点も特徴です。",
                },
                {
                  q: "返金保証はありますか？",
                  a: "はい、初回講義から8日以内であれば全額返金いたします。まずは講座の内容を体験していただき、ご自身に合うかどうかをご判断ください。",
                },
                {
                  q: "オンラインだけで本当に成果が出ますか？",
                  a: "はい、オンラインでも十分に成果を出していただけます。むしろ、移動時間がなく効率的に学べる点がメリットです。ロールプレイングもオンラインで実施し、実践的なスキルを身につけられます。",
                },
                {
                  q: "分割払いは可能ですか？",
                  a: "はい、クレジットカードでの分割払いに対応しています。月額約2万円〜からご参加いただけます。詳細は個別相談でご案内いたします。",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="brand-card px-6">
                  <AccordionTrigger className="text-left py-5 hover:no-underline">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-semibold text-foreground">{faq.q}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pl-8 text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* S14. 最終の鼓舞セクション */}
      <section className="section-spacing section-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
              営業力は、
              <br />
              <span className="brand-gradient-text">一生モノの資産</span>
              になる
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p style={{color: '#0a0a0a'}}>
                AIが進化しても、人と人との信頼関係は変わりません。
                <br />
                むしろ、「選ばれる力」はますます重要になっていきます。
              </p>
              <p style={{color: '#f70202'}}>
                今、この「型」を身につけることは、
                <br />
                将来の自分への最高の投資です。
              </p>
              <p className="text-lg font-semibold text-foreground">
                あなたも、「売れる側」に回りませんか？
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* S15. 申込フローセクション */}
      <section className="section-spacing brand-gradient text-white">
        <div className="container">
          <SectionHeading
            subtitle="ご参加の流れ"
            title="4ステップで始められます"
            dark
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
                <div className="w-16 h-16 bg-white text-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <item.icon className="h-8 w-8" />
                </div>
                <div className="text-white/80 font-bold text-sm mb-2 font-display">
                  STEP {item.step}
                </div>
                <h4 className="font-bold mb-2 text-lg">{item.title}</h4>
                <p className="text-sm text-white/80">
                  {item.description}
                </p>
                {i < 3 && (
                  <ArrowRight className="h-6 w-6 text-white/60 mx-auto mt-4 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* S16. クロージングCTAセクション */}
      <section className="section-spacing section-gradient">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            {/* Offer Card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-primary/20">
              {/* Header */}
              <div className="brand-gradient text-white p-6 text-center">
                <span className="text-white/80 text-sm font-medium">
                  期間限定オファー
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2">
                  無料個別相談 + 7大特典
                </h3>
              </div>

              {/* Body */}
              <div className="p-8">
                {/* Countdown */}
                <div className="text-center mb-8">
                  <p className="text-sm text-muted-foreground mb-3">
                    キャンペーン終了まで
                  </p>
                  <CountdownTimer targetDate={deadline} />
                </div>

                {/* Bonuses */}
                <div className="space-y-3 mb-8">
                  <p className="text-sm font-semibold text-foreground">
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
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span style={{color: '#1a1a1a'}}>
                        特典{i + 1}：{bonus}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Scarcity */}
                <div className="bg-secondary p-4 rounded-xl mb-8 text-center">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-bold brand-gradient-text">
                      残り枠：先着10名様
                    </span>
                    <br />
                    ※定員に達し次第、募集を締め切ります
                  </p>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <CTAButton variant="primary" className="w-full md:w-auto" pulse>
                    LINEで無料相談を予約する
                  </CTAButton>
                  <p className="text-xs text-muted-foreground mt-4">
                    ※売り込みは一切ありません。お気軽にご相談ください。
                  </p>
                </div>

                {/* Guarantee */}
                <div className="mt-8 pt-6 border-t border-border text-center">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>全額返金保証付</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* S17. フッターセクション */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <img
                src="/images/logo.png"
                alt="成約の方程式"
                className="h-12 w-auto brightness-0 invert"
              />
              <div>
                <p className="font-bold">成約の方程式</p>
                <p className="text-sm text-white/60">
                  営業が苦手でも"売れる型"が手に入る
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
              <Link href="/terms" className="hover:text-white transition-colors">
                利用規約
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/tokushoho" className="hover:text-white transition-colors">
                特定商取引法に基づく表記
              </Link>
              <Link href="/company" className="hover:text-white transition-colors">
                運営会社
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-xs text-white/40">
              © 2026 成約の方程式 All Rights Reserved.
            </p>
            <p className="text-xs text-white/40 mt-2">
              ※当サイトに掲載されている成果は個人の感想であり、成果を保証するものではありません。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
