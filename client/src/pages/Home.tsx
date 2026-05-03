/**
 * モグビジ LP
 * Design Philosophy: Dark Navy (#0a0a1a) × Purple (#9333ea) × Amber (#f59e0b)
 * - Community-first, honest, growth-oriented
 * - Clean dark layout with warm accent highlights
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
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronRight,
  Clock,
  HelpCircle,
  MessageCircle,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
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

const LINE_URL = "https://lin.ee/mogbiz";

const imageV2 = {
  hero: "/images/v2/hero-ai-partner-v2.png",
  mopico: "/images/v2/mopico-ai-support-v2.png",
  dashboard: "/images/v2/asp-dashboard-v2.png",
  community: "/images/v2/community-247-v2.png",
  transition: "/images/v2/anxiety-to-confidence-v2.png",
  cta: "/images/v2/cta-join-v2.png",
};

// CTA Button Component - LINE green for trust and recognition
function CTAButton({
  variant = "primary",
  children,
  className = "",
  pulse = false,
  href = LINE_URL,
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
            <ChevronRight className="h-5 w-5 opacity-80" />
          </span>
          <span className="text-[10px] md:text-xs font-normal opacity-80 mt-0.5">（登録は60秒。しつこい勧誘は一切なし）</span>
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
  return (
    <div className="min-h-screen bg-background">

      {/* S0. 固定ヘッダーバナー */}
      <section className="fixed top-0 left-0 right-0 z-50 brand-gradient text-white py-3 md:py-4 shadow-lg">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span className="text-sm md:text-base font-medium">
                【無料】LINE友だち追加でAIアシスタント「モピコ」を体験
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
              <Users className="h-4 w-4" />
              <span className="text-sm font-semibold">現在15名の少人数制</span>
            </div>
          </div>
        </div>
      </section>

      {/* S1. ヒーローセクション */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-[60px] md:pt-[68px]">
        {/* Dark navy gradient background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #12122a 50%, #0f0a1e 100%)' }} />
          {/* Glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #9333ea 0%, transparent 70%)', filter: 'blur(60px)' }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)', filter: 'blur(60px)' }} />
        </div>

        <div className="container relative z-10 py-16 md:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Logo badge */}
            <motion.div variants={fadeInUp} className="mb-8 inline-flex">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border" style={{ background: 'rgba(147, 51, 234, 0.15)', borderColor: 'rgba(147, 51, 234, 0.4)' }}>
                <Bot className="h-5 w-5" style={{ color: '#a855f7' }} />
                <span className="text-sm font-semibold" style={{ color: '#a855f7' }}>AIアシスタント「モピコ」搭載</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              副業アフィリエイト、
              <br />
              <span className="brand-gradient-text">もう一人で悩まなくていい。</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto"
            >
              AIが24時間そばにいて、収益データが自動で集まる。
              <br className="hidden md:block" />
              はじめての副業でも、着実に前に進めるコミュニティがここにあります。
            </motion.p>

            {/* 3 keywords */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                { icon: Bot, label: 'AI個別サポート「モピコ」' },
                { icon: BarChart3, label: '3大ASP収益の自動集計' },
                { icon: Users, label: '30〜40代 少人数制コミュニティ（15名）' },
              ].map((kw, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white/80" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <kw.icon className="h-4 w-4 text-amber-400" />
                  {kw.label}
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton variant="primary" pulse>
                LINE友だち追加で無料相談する
              </CTAButton>
            </motion.div>

            {/* Trust note */}
            <motion.p variants={fadeInUp} className="text-xs text-white/40 mt-4">
              登録は60秒。しつこい勧誘は一切しません。入会するかどうかは話を聞いてから決めてください。
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 mx-auto max-w-sm md:max-w-md">
              <img
                src={imageV2.hero}
                alt="AIアシスタントのモピコと一緒に副業へ前向きに進むイメージ"
                loading="eager"
                className="w-full rounded-3xl shadow-2xl"
                style={{ border: '1px solid rgba(255,255,255,0.16)' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* S2. お悩みセクション */}
      <section className="section-spacing section-gray">
        <div className="container">
          <SectionHeading
            subtitle="こんなお悩みありませんか？"
            title="副業アフィリエイトを始めたけど、こんな壁にぶつかっていませんか？"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
          >
            {[
              {
                icon: HelpCircle,
                title: '何から手をつければいいか、わからない',
                desc: 'ブログを書けばいい、SNSを使えばいい……情報が多すぎて、かえって混乱。',
              },
              {
                icon: TrendingUp,
                title: '記事を書いても、全然成果が出ない',
                desc: '時間をかけた記事が検索に出てこない。何が悪いのか、自分では判断できない。',
              },
              {
                icon: BarChart3,
                title: 'ASPの管理画面を行ったり来たりして疲れる',
                desc: 'A8・もしも・レントラックス、それぞれログインして確認。収益把握だけで30分かかる。',
              },
              {
                icon: MessageCircle,
                title: '質問できる相手がいない',
                desc: '家族に話しても「怪しい」と言われる。ネット情報は古かったり状況と合わない。',
              },
              {
                icon: Clock,
                title: '本業が忙しくて学習の時間がとれない',
                desc: '限られた時間で何を優先すべきかわからない。効率よく動けている実感がない。',
              },
              {
                icon: Shield,
                title: 'コミュニティに入ったが放置された経験がある',
                desc: '大人数のコミュニティで「結局、誰にも気にされなかった」という経験をした。',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="brand-card p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(245, 158, 11, 0.15)' }}>
                    <item.icon className="h-4 w-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">「{item.title}」</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </div>
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
            <p className="text-lg md:text-xl text-white font-bold">
              モグビジは、その悩みを一緒に解決するために作られました。
            </p>
          </motion.div>
        </div>
      </section>

      {/* S3. 選ばれる3つの理由セクション */}
      <section className="section-spacing">
        <div className="container">
          <SectionHeading
            subtitle="選ばれる理由"
            title='モグビジが「ただのコミュニティ」と違う理由'
          />

          <div className="max-w-5xl mx-auto space-y-8">

            {/* 強み1: モピコ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="brand-card p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center glow-purple" style={{ background: 'linear-gradient(135deg, #9333ea, #7e22ce)' }}>
                    <Bot className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-center mt-2">
                    <span className="brand-gradient-text font-bold text-xs font-display">REASON 01</span>
                  </div>
                </div>
                <div className="flex-1">
                  <span className="badge-brand text-xs mb-3 inline-block">AIアシスタント</span>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    24時間365日、個別対応のAIパートナー「モピコ」
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    一般的なコミュニティは「みんなへの情報発信」が中心です。でもモグビジでは、AIアシスタント「モピコ」があなたの状況・ジャンル・収益データを把握した上で、あなた専用のアドバイスを返します。
                    <br /><br />
                    「この記事、どこを直せばいい？」「このASP案件、自分のブログに合う？」——そんな細かい相談も、深夜でも即答。人間メンターには頼みにくい些細な疑問も、モピコには遠慮なく聞けます。
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      '記事レビュー・改善提案',
                      'ASP案件の適性分析',
                      '月次収益レポートへのAIコメント',
                    ].map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: '#9333ea' }} />
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-64 lg:w-72 flex-shrink-0">
                  <img
                    src={imageV2.mopico}
                    alt="スマートフォンを持つAIアシスタントのモピコ"
                    loading="lazy"
                    className="w-full rounded-2xl object-cover shadow-xl"
                  />
                </div>
              </div>
            </motion.div>

            {/* 強み2: ダッシュボード */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="brand-card p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center glow-amber" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                    <BarChart3 className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-center mt-2">
                    <span className="brand-gradient-text font-bold text-xs font-display">REASON 02</span>
                  </div>
                </div>
                <div className="flex-1">
                  <span className="badge-brand text-xs mb-3 inline-block">3ASP自動連携</span>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    A8.net・もしも・レントラックスの収益を一画面で確認
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    毎日3つのASPにログインして収益を確認する手間は、もう必要ありません。モグビジのダッシュボードに連携すれば、3つのASPの収益データがリアルタイムで自動集計されます。
                    <br /><br />
                    「今月いくら稼げているか」が、1秒でわかる。数字を見るのが楽しくなります。
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      'リアルタイム収益グラフ',
                      'ASP別・案件別の内訳表示',
                      'AIによる成長トレンド分析',
                    ].map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: '#f59e0b' }} />
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-64 lg:w-72 flex-shrink-0">
                  <img
                    src={imageV2.dashboard}
                    alt="3つのASP収益をまとめて確認できるダッシュボード画面"
                    loading="lazy"
                    className="w-full rounded-2xl object-cover shadow-xl"
                  />
                </div>
              </div>
            </motion.div>

            {/* 強み3: コミュニティ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="brand-card p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #9333ea, #f59e0b)' }}>
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-center mt-2">
                    <span className="brand-gradient-text font-bold text-xs font-display">REASON 03</span>
                  </div>
                </div>
                <div className="flex-1">
                  <span className="badge-brand text-xs mb-3 inline-block">少人数制コミュニティ</span>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    今15名。あなたの顔と状況を、みんなが知っている。
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    大人数のコミュニティに入って「結局、自分は誰にも気にされなかった」という経験はありませんか？
                    <br /><br />
                    モグビジは少人数制を意図的に守っています。メンバー同士がDiscordやLINEで活発に交流し、質問すれば誰かが答えてくれる。成果が出たら一緒に喜んでくれる人がいる。副業は孤独になりがちですが、モグビジでは一人じゃありません。
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      '30〜40代中心のメンバー構成',
                      'Discord + LINE で活発交流',
                      '一人ひとりが置いていかれない',
                    ].map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: '#9333ea' }} />
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-64 lg:w-72 flex-shrink-0">
                  <img
                    src={imageV2.community}
                    alt="自宅やカフェで支え合いながら副業に取り組むコミュニティ"
                    loading="lazy"
                    className="w-full rounded-2xl object-cover shadow-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* S4. モピコ機能5選セクション */}
      <section className="section-spacing section-gray">
        <div className="container">
          <SectionHeading
            subtitle="モピコができること"
            title="モピコに頼めること、こんなにあります"
            description="モピコは「アフィリエイト専門」のAIです。副業初心者の質問から、中級者の戦略相談まで幅広く対応します。"
          />

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src={imageV2.transition}
                alt="一人で悩む状態から収益改善へ前向きに進む変化のイメージ"
                loading="lazy"
                className="w-full max-h-[420px] object-cover"
              />
            </motion.div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block" style={{ background: 'linear-gradient(to bottom, #9333ea, #f59e0b, rgba(147,51,234,0.3))' }} />

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "記事の改善点を具体的に指摘してくれる",
                    description: '「この記事、読んでもらえてるのに申し込みにつながらない」——そんなときにURLを貼るだけで、構成・見出し・CTAの問題点と改善案を教えてくれます。感覚ではなく、根拠をもとにしたフィードバックです。',
                    tags: ['記事レビュー', '改善提案', 'CTA最適化'],
                  },
                  {
                    step: "02",
                    title: "あなたのジャンルに合ったASP案件を提案してくれる",
                    description: 'ジャンルと読者層を伝えると、A8・もしも・レントラックスの中から相性のよい案件を絞り込んでくれます。「とりあえず何でも貼る」より、集中して取り組む案件が明確になります。',
                    tags: ['案件提案', 'ASP分析', 'ジャンルマッチング'],
                  },
                  {
                    step: "03",
                    title: "月次収益レポートを分析して、次のアクションを教えてくれる",
                    description: 'ダッシュボードのデータをもとに「今月はこのASPのクリック率が下がっています」「このカテゴリの記事を増やすと収益が伸びる可能性があります」など、数字から読み取れることを言語化してくれます。',
                    tags: ['収益分析', 'インサイト', '次のアクション'],
                  },
                  {
                    step: "04",
                    title: "キーワード選定のサポートをしてくれる",
                    description: '「どんなキーワードで記事を書けばいい？」という悩みに、競合状況・検索意図・アフィリエイトとの相性を踏まえて答えてくれます。書いても評価されないキーワード選びのミスを防げます。',
                    tags: ['キーワード選定', '競合分析', '検索意図'],
                  },
                  {
                    step: "05",
                    title: 'アフィリエイト初心者の「そもそも」な疑問に答えてくれる',
                    description: '「承認率ってどういう意味？」「クッキーの有効期限って何日が多いの？」——基礎的な疑問ほど、人には聞きにくいもの。モピコには何度聞いても、嫌な顔をしません。',
                    tags: ['初心者対応', '基礎知識', '何度でもOK'],
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
                      <h4 className="text-lg md:text-xl font-bold text-foreground mb-3">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="text-xs px-3 py-1 rounded-full"
                            style={{ background: 'rgba(147, 51, 234, 0.15)', color: '#a855f7', border: '1px solid rgba(147, 51, 234, 0.2)' }}
                          >
                            {tag}
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

      {/* S5. 会員の声セクション */}
      <section className="section-spacing">
        <div className="container">
          <SectionHeading
            subtitle="会員の声"
            title="モグビジのメンバーからの声"
            description="※個人の感想であり、成果を保証するものではありません"
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Aさん",
                age: "38歳・メーカー勤務",
                genre: "保険・金融",
                period: "副業歴7ヶ月",
                result: "月3万円達成",
                stars: 5,
                quote: "入会前は「副業ってよくわからないし、怪しいかな」と思っていました。でも実際に入ってみたら、みんな普通に働きながら真剣にやっている人たちで安心しました。モピコに記事を見てもらうようになってから、自分では気づかなかった「読者目線のズレ」を指摘してもらえて、記事の質が変わった気がします。まだ月3万円ですが、数字が動くことが純粋に楽しいです。",
              },
              {
                name: "Bさん",
                age: "42歳・IT系",
                genre: "転職・キャリア",
                period: "副業歴1年3ヶ月",
                result: "収益管理が劇的改善",
                stars: 5,
                quote: "以前は3つのASPを毎日確認するのが面倒で、週1回まとめて見るようにしていました。でも気づいたらデータが分散していて、何が伸びているか把握できていなかった。ダッシュボードで一元管理できるようになってから、数字を見る頻度が増えて、自然と「じゃあ次はこうしよう」という思考になれています。",
              },
              {
                name: "Cさん",
                age: "35歳・営業職",
                genre: "ライフスタイル・健康",
                period: "副業歴4ヶ月",
                result: "一人じゃなくなった",
                stars: 4,
                quote: "最初は「AIに相談するって、なんか変な感じ」と思っていたんですが、モピコはちゃんと私の状況を覚えてくれているので、毎回説明し直さなくていいのが楽です。Discordでも同じ30〜40代の方と情報交換できて、同世代がどう動いているか参考になっています。副業を「一人で黙々とやるもの」から「一緒に進めるもの」に変えてもらえた感じです。",
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
                      className={`h-4 w-4 ${j < testimonial.stars ? 'fill-amber-400 text-amber-400' : 'fill-gray-700 text-gray-700'}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed quote-brand">
                  {testimonial.quote}
                </p>
                <div className="border-t pt-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}（{testimonial.age}）</p>
                  <p className="text-xs text-muted-foreground mt-1">ジャンル：{testimonial.genre}　／　{testimonial.period}</p>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24' }}>
                    <Zap className="h-3 w-3" />
                    {testimonial.result}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* S6. 料金セクション */}
      <section className="section-spacing section-gray">
        <div className="container">
          <SectionHeading
            subtitle="料金プラン"
            title="シンプルな料金体系"
            description="複雑なプランや追加課金はありません。一つのプランで、全ての機能をお使いいただけます。"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="brand-card overflow-hidden" style={{ border: '1px solid rgba(147, 51, 234, 0.4)' }}>
              {/* Plan header */}
              <div className="p-8 text-center brand-gradient">
                <span className="text-white/80 text-sm font-medium tracking-wider uppercase">スタンダードプラン</span>
                <div className="mt-4 flex items-end justify-center gap-1">
                  <span className="text-white/70 text-lg">月額</span>
                  <span className="text-white text-5xl font-bold font-display">¥22,000</span>
                  <span className="text-white/70 text-lg mb-1">（税込）</span>
                </div>
                <p className="text-white/70 text-sm mt-2">いつでも解約可能 · 最低契約期間なし</p>
              </div>

              {/* Features */}
              <div className="p-8">
                <p className="text-sm font-semibold text-foreground mb-4">含まれるもの：</p>
                <ul className="space-y-3">
                  {[
                    'AIアシスタント「モピコ」との無制限チャット',
                    '3ASP自動連携ダッシュボード（A8.net・もしもアフィリエイト・レントラックス）',
                    'Discordコミュニティへのアクセス',
                    '月1回のグループ勉強会（録画視聴可）',
                    'モピコによる月次収益レポート分析',
                    '記事レビュー（月3本まで）',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#9333ea' }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t text-center" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <CTAButton variant="primary" className="w-full md:w-auto" pulse>
                    LINE友だち追加で無料相談する
                  </CTAButton>
                  <p className="text-xs text-muted-foreground mt-3">
                    まずは無料相談から。入会するかどうかは、話を聞いてから決めてください。
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing FAQs */}
            <div className="mt-8 space-y-4">
              {[
                {
                  q: '最低契約期間はありますか？',
                  a: 'いいえ。月単位でのご利用が可能です。合わないと感じたら、いつでも解約できます。',
                },
                {
                  q: '途中で解約した場合、データは引き継げますか？',
                  a: '解約後はダッシュボードへのアクセスができなくなりますが、再入会時にはデータを復元できます。',
                },
              ].map((item, i) => (
                <div key={i} className="brand-card p-5">
                  <p className="font-semibold text-foreground text-sm mb-2 flex items-start gap-2">
                    <span style={{ color: '#a855f7' }}>Q.</span>
                    {item.q}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-5">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* S7. FAQ Section */}
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
                  q: "アフィリエイトの経験がまったくありません。それでも大丈夫ですか？",
                  a: "はい、むしろ副業初心者の方を主な対象にしています。ASPへの登録方法から、記事の書き方、案件の選び方まで、モピコへの質問やコミュニティでのサポートを通じて一から学んでいただけます。「何もわからない状態」でご入会されている方も多くいます。",
                },
                {
                  q: "副業を家族に内緒にしています。バレる可能性はありますか？",
                  a: "モグビジの利用自体が外部に通知されることはありません。ただし、アフィリエイト収益が年間20万円を超えると確定申告が必要になります。収益が増えてきたタイミングで税務面の対応を考えるようにしてください（詳細はモピコにご相談いただけます）。",
                },
                {
                  q: "本業が忙しく、毎日時間が取れません。それでも成果は出ますか？",
                  a: "週に2〜3時間でも、継続できれば成果につながっている会員の方がいます。モグビジでは「何に時間を使うか」の優先順位をAIがサポートするため、限られた時間を無駄にしにくい設計になっています。量より「何をやるか」の判断精度を上げることを重視しています。",
                },
                {
                  q: "どのASPに登録していなくてもサービスは使えますか？",
                  a: "はい。ダッシュボードのASP連携機能はオプションです。ASPに未登録の状態でもモピコの利用やコミュニティへの参加は可能です。ASP登録のサポートもモピコが行います。",
                },
                {
                  q: "コミュニティの活動はどんな感じですか？毎日参加しないといけませんか？",
                  a: "Discordメインのコミュニティですが、毎日参加の義務はありません。自分のペースで投稿・閲覧できます。週1回のグループ勉強会は参加任意で、録画もご覧いただけます。「見るだけ」でも、他の会員の取り組みから学べることが多いと言っていただいています。",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="brand-card px-6">
                  <AccordionTrigger className="text-left py-5 hover:no-underline">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#9333ea' }} />
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

      {/* S8. 会社概要セクション */}
      <section className="section-spacing section-gray">
        <div className="container">
          <SectionHeading
            subtitle="運営会社"
            title="会社概要"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto brand-card overflow-hidden"
          >
            <table className="w-full">
              <tbody>
                {[
                  { label: '会社名', value: '株式会社タルムード' },
                  { label: '設立', value: '2021年9月' },
                  { label: '事業内容', value: 'アフィリエイトマーケティング支援、AIアシスタントサービスの開発・運営' },
                  { label: '主要サービス', value: 'モグビジ（副業アフィリエイトコミュニティ）' },
                  { label: 'コミュニケーション', value: 'Discord・LINE' },
                  { label: 'お問い合わせ', value: 'info@talmudo9.com' },
                ].map((row, i) => (
                  <tr key={i} className="border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-foreground w-1/3" style={{ background: 'rgba(147,51,234,0.06)' }}>
                      {row.label}
                    </th>
                    <td className="py-4 px-6 text-sm text-muted-foreground">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* S9. 最終CTAセクション */}
      <section className="section-spacing" style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #12122a 50%, #0f0a1e 100%)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="brand-gradient-text text-sm font-semibold tracking-wider uppercase">一歩踏み出すなら、今日がいい。</span>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mt-4 mb-6">
              副業を「いつか始めよう」と思ったまま、
              <br className="hidden md:block" />
              <span className="brand-gradient-text">1年が過ぎていませんか？</span>
            </h2>

            <p className="text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
              モグビジでは、LINE友だち追加後に無料で現状の相談ができます。
              「入会するかどうかは、話を聞いてから決めてください」というスタンスです。
            </p>

            <div className="mb-8 mx-auto max-w-md overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={imageV2.cta}
                alt="モグビジのコミュニティへ入る温かな入口のイメージ"
                loading="lazy"
                className="w-full object-cover"
              />
            </div>

            {/* Offer Card */}
            <div className="rounded-2xl shadow-2xl overflow-hidden mb-8" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(147, 51, 234, 0.35)' }}>
              <div className="brand-gradient p-6">
                <span className="text-white/80 text-sm font-medium">まず無料で相談する</span>
                <h3 className="text-xl md:text-2xl font-bold text-white mt-1">
                  LINE友だち追加 → 無料相談
                </h3>
              </div>
              <div className="p-8">
                <CTAButton variant="primary" className="w-full" pulse>
                  LINE友だち追加で、無料相談する
                </CTAButton>

                {/* Trust badges */}
                <ul className="mt-6 space-y-2">
                  {[
                    '登録は60秒、無料',
                    'しつこい勧誘・セールス電話は一切なし',
                    '入会するかどうかは、ご自身のペースで決めてください',
                    '運営：株式会社タルムード',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: '#9333ea' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* How to join flow */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { step: '01', title: 'LINE登録', desc: 'ボタンからLINE公式アカウントを友だち追加' },
                { step: '02', title: '無料相談', desc: '現在の状況や悩みをLINEでお聞かせください' },
                { step: '03', title: '体験', desc: 'モピコとのやりとりをお試しいただけます' },
                { step: '04', title: 'ご判断', desc: '納得いただけた方のみお申し込みください' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="text-xs font-bold mb-2 font-display" style={{ color: '#a855f7' }}>STEP {item.step}</div>
                  <p className="font-bold text-white text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-white/50">{item.desc}</p>
                  {i < 3 && (
                    <ArrowRight className="h-4 w-4 text-white/30 mx-auto mt-2 hidden md:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#07070f' }} className="text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <div>
              <p className="font-bold text-lg brand-gradient-text">モグビジ</p>
              <p className="text-sm text-white/50 mt-1">
                副業アフィリエイト × AI × コミュニティ
              </p>
              <p className="text-xs text-white/40 mt-1">運営：株式会社タルムード</p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
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

          <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-xs text-white/30">
              © 2026 株式会社タルムード / モグビジ All Rights Reserved.
            </p>
            <p className="text-xs text-white/30 mt-2">
              ※当サイトに掲載されている成果は個人の感想であり、成果を保証するものではありません。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
