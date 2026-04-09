"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";

function Section({
  title,
  number,
  badge,
  badgeColor,
  children,
}: {
  title: string;
  number: string;
  badge: string;
  badgeColor: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <div className="flex items-baseline gap-4 mb-6">
        <span
          className="text-5xl font-bold text-primary/20"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {number}
        </span>
        <div className="flex items-center gap-3">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase font-body ${badgeColor}`}
          >
            {badge}
          </span>
          <h2
            className="text-2xl md:text-3xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h2>
        </div>
      </div>
      <div className="pl-0 md:pl-16">{children}</div>
    </motion.section>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-card rounded-xl p-6 border border-border shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function Tag({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${className}`}>
      {children}
    </span>
  );
}

function ConceptBox({
  title,
  children,
  borderColor = "border-ai-purple",
  titleColor = "text-ai-purple",
}: {
  title: string;
  children: React.ReactNode;
  borderColor?: string;
  titleColor?: string;
}) {
  return (
    <div className={`bg-muted border-l-4 ${borderColor} rounded-r-xl p-5 mb-4`}>
      <h3
        className={`text-sm font-bold ${titleColor} mb-2`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>
      <div
        className="text-sm text-muted-foreground"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {children}
      </div>
    </div>
  );
}

export default function AIHubPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-background/80 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <a
            href="https://le-village-marseille.fr"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("Retour", "Back")}
          </a>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <a
              href="https://le-village-marseille.fr"
              className="text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full hover:opacity-90 transition-opacity"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Le Village
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-ai-blue-light via-ai-purple-light to-ai-green-light opacity-60" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6 font-body">
              AI Hub
            </span>
            <h1
              className="text-4xl md:text-6xl font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("AI Hub", "AI Hub")}
            </h1>
            <p
              className="text-lg md:text-xl italic text-primary mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t(
                "Apprendre l'IA ensemble, au village",
                "Learning AI together, in the village"
              )}
            </p>
            <p
              className="text-muted-foreground max-w-2xl mx-auto mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t(
                "Un espace pour d\u00e9couvrir, comprendre et utiliser l\u2019intelligence artificielle. Des ressources cr\u00e9\u00e9es par notre communaut\u00e9, pour notre communaut\u00e9.",
                "A space to discover, understand and use artificial intelligence. Resources created by our community, for our community."
              )}
            </p>
            <p className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
              Le Village Marseille
            </p>
          </motion.div>
        </div>
      </header>

      {/* Author Attribution */}
      <div className="max-w-5xl mx-auto px-4 -mt-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-ai-blue-light border-ai-blue/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
                JD
              </div>
              <div className="flex-1">
                <p className="font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                  {t("Contenu par", "Content by")}{" "}
                  <a
                    href="https://www.linkedin.com/in/jdavies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    John Davis <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
                <p className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                  {t(
                    "Session IA \u2014 Avril 2026 \u2014 Guide de r\u00e9f\u00e9rence pour les apprenants",
                    "AI Session \u2014 April 2026 \u2014 Quick reference for learners"
                  )}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      <main className="max-w-5xl mx-auto px-4 pb-16">
        {/* Section 01 — AI Landscape */}
        <Section
          number="01"
          badge={t("Paysage", "Landscape")}
          badgeColor="bg-ai-blue text-white"
          title={t("Comparaison des outils IA", "AI Tools Comparison")}
        >
          <Card className="overflow-x-auto">
            <table className="w-full text-sm" style={{ fontFamily: "var(--font-body)" }}>
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-3 px-3 text-xs uppercase tracking-wider text-primary font-semibold">
                    {t("Outil / Mod\u00e8le", "Tool / Model")}
                  </th>
                  <th className="text-left py-3 px-3 text-xs uppercase tracking-wider text-primary font-semibold">
                    {t("Entreprise", "Company")}
                  </th>
                  <th className="text-left py-3 px-3 text-xs uppercase tracking-wider text-primary font-semibold">
                    {t("Origine", "Origin")}
                  </th>
                  <th className="text-left py-3 px-3 text-xs uppercase tracking-wider text-primary font-semibold">
                    {t("Id\u00e9al pour", "Best For")}
                  </th>
                  <th className="text-left py-3 px-3 text-xs uppercase tracking-wider text-primary font-semibold">
                    {t("Prix", "Price")}
                  </th>
                  <th className="text-left py-3 px-3 text-xs uppercase tracking-wider text-primary font-semibold">
                    {t("Vie priv\u00e9e", "Privacy")}
                  </th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 px-3 font-semibold">ChatGPT</td>
                  <td className="py-3 px-3">OpenAI</td>
                  <td className="py-3 px-3"><Tag className="bg-ai-blue-light text-ai-blue">US</Tag></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("Chat, Q&R g\u00e9n\u00e9rales", "Social chat, general Q&A")}</td>
                  <td className="py-3 px-3"><Tag className="bg-ai-pink-light text-ai-pink">$20-200/mo</Tag></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("Donn\u00e9es utilis\u00e9es pour l'entra\u00eenement", "Data used for training")}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-3 font-semibold">Claude (3.x / 4.x)</td>
                  <td className="py-3 px-3">Anthropic</td>
                  <td className="py-3 px-3"><Tag className="bg-ai-blue-light text-ai-blue">US</Tag></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("Code, raisonnement, longs docs", "Coding, reasoning, long docs")}</td>
                  <td className="py-3 px-3"><Tag className="bg-ai-pink-light text-ai-pink">~$4/mo</Tag></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("Plus priv\u00e9, pas sur le site web", "Not put on website, more private")}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-3 font-semibold">Mistral / LeChat</td>
                  <td className="py-3 px-3">Mistral AI</td>
                  <td className="py-3 px-3"><Tag className="bg-ai-green-light text-ai-green">EU (FR)</Tag></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("Docs juridiques, conformit\u00e9 UE", "Legal docs, EU compliance")}</td>
                  <td className="py-3 px-3"><Tag className="bg-ai-green-light text-ai-green">{t("Gratuit", "Free")}</Tag></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("R\u00e9sidence des donn\u00e9es en UE", "EU data residency")}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-3 font-semibold">Gemini</td>
                  <td className="py-3 px-3">Google</td>
                  <td className="py-3 px-3"><Tag className="bg-ai-blue-light text-ai-blue">US</Tag></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("Multilingue, recherche", "Multilingual, search")}</td>
                  <td className="py-3 px-3"><Tag className="bg-ai-green-light text-ai-green">{t("Gratuit", "Free")}</Tag></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("\u00c9cosyst\u00e8me Google", "Google ecosystem")}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-3 font-semibold">Copilot</td>
                  <td className="py-3 px-3">Microsoft</td>
                  <td className="py-3 px-3"><Tag className="bg-ai-blue-light text-ai-blue">US</Tag></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("Compl\u00e9tion de code, Office", "Code completion, Office")}</td>
                  <td className="py-3 px-3"><Tag className="bg-ai-pink-light text-ai-pink">{t("Variable", "Varies")}</Tag></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("Plusieurs backends", "Uses multiple backends")}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-3 font-semibold">Deepseek</td>
                  <td className="py-3 px-3">Deepseek</td>
                  <td className="py-3 px-3"><Tag className="bg-ai-orange-light text-ai-orange">CN</Tag></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("Open-source, code", "Open-source, coding")}</td>
                  <td className="py-3 px-3"><Tag className="bg-ai-green-light text-ai-green">{t("Gratuit / OSS", "Free / OSS")}</Tag></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("Poids ouverts", "Open weights")}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-3 font-semibold">Qwen</td>
                  <td className="py-3 px-3">Alibaba</td>
                  <td className="py-3 px-3"><Tag className="bg-ai-orange-light text-ai-orange">CN</Tag></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("Multilingue, optimisation", "Multilingual, output optimization")}</td>
                  <td className="py-3 px-3"><Tag className="bg-ai-green-light text-ai-green">{t("Gratuit / OSS", "Free / OSS")}</Tag></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("Poids ouverts", "Open weights")}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-3 font-semibold">Kimi (k2.5)</td>
                  <td className="py-3 px-3">Moonshot AI</td>
                  <td className="py-3 px-3"><Tag className="bg-ai-orange-light text-ai-orange">CN</Tag></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("Long contexte, comp\u00e9titif", "Long context, competitive perf")}</td>
                  <td className="py-3 px-3"><Tag className="bg-ai-green-light text-ai-green">{t("Gratuit", "Free")}</Tag></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("H\u00e9berg\u00e9 en Chine", "Chinese hosted")}</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold">Liquid AI</td>
                  <td className="py-3 px-3">Liquid AI</td>
                  <td className="py-3 px-3"><Tag className="bg-ai-blue-light text-ai-blue">US</Tag></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("Architecture alternative", "Alternative architecture")}</td>
                  <td className="py-3 px-3"><Tag className="bg-ai-pink-light text-ai-pink">{t("Variable", "Varies")}</Tag></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("Nouvel entrant", "Newer entrant")}</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </Section>

        {/* Section 02 — Claude Ecosystem */}
        <Section
          number="02"
          badge={t("\u00c9cosyst\u00e8me", "Ecosystem")}
          badgeColor="bg-ai-purple text-white"
          title={t("Produits Claude", "Claude Products")}
        >
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card className="bg-ai-blue-light border-ai-blue/20 text-center">
              <p className="text-xs uppercase tracking-wider text-primary font-bold mb-2" style={{ fontFamily: "var(--font-body)" }}>
                Claude Desktop
              </p>
              <p className="font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-display)" }}>
                {t("Chat dans le navigateur", "Browser-based chat")}
              </p>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                {t("Pour tous \u2014 Q&R, r\u00e9daction, analyse", "For everyone \u2014 Q&A, writing, analysis")}
              </p>
            </Card>
            <Card className="bg-ai-purple-light border-ai-purple/20 text-center">
              <p className="text-xs uppercase tracking-wider text-ai-purple font-bold mb-2" style={{ fontFamily: "var(--font-body)" }}>
                Claude Code
              </p>
              <p className="font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-display)" }}>
                {t("Outil terminal pour d\u00e9veloppeurs", "Terminal developer tool")}
              </p>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                {t("Votre \u00ab employ\u00e9 IA \u00bb \u2014 code, construit, d\u00e9ploie", "Your AI \"employee\" \u2014 codes, builds, deploys")}
              </p>
            </Card>
          </div>

          <Card className="bg-ai-blue-light border-ai-blue/20 mb-6">
            <h3 className="text-lg font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Claude Code = {t("Votre employ\u00e9 IA", "Your AI Employee")}
            </h3>
            <ul className="space-y-2 text-foreground" style={{ fontFamily: "var(--font-body)" }}>
              <li>{t("\u2022 Travaille 24h/24, 7j/7", "\u2022 Works 24/7, constantly on")}</li>
              <li>{t("\u2022 Fonctionne depuis le terminal (ligne de commande)", "\u2022 Runs from terminal (command line)")}</li>
              <li>{t("\u2022 Lit, \u00e9crit et ex\u00e9cute votre code", "\u2022 Reads, writes, and runs your code")}</li>
              <li>{t("\u2022 Acc\u00e8de aux fichiers, API et outils avec votre permission", "\u2022 Access files, APIs, and tools with your permission")}</li>
              <li>{t("\u2022 Mod\u00e8le par d\u00e9faut : Sonnet (rapide + \u00e9conomique)", "\u2022 Default model: Sonnet (fast + cheap)")}</li>
            </ul>
          </Card>

          <p className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
            <strong>{t("Aussi mentionn\u00e9s", "Also mentioned")} :</strong> Cody, OpenCode, OpenClaw, Hermes Agent \u2014 {t("autres assistants de code open-source", "other open coding assistants in this space")}.
          </p>
        </Section>

        {/* Section 03 — Tool Calling */}
        <Section
          number="03"
          badge={t("Concept cl\u00e9", "Core Concept")}
          badgeColor="bg-ai-green text-white"
          title={t("Appel d'outils (Tool Calling)", "Tool Calling")}
        >
          <ConceptBox
            title={t("Qu'est-ce que l'appel d'outils ?", "What is Tool Calling?")}
            borderColor="border-ai-green"
            titleColor="text-ai-green"
          >
            <p>
              {t(
                "Tous les LLM modernes peuvent faire des choses en dehors du mod\u00e8le \u2014 ouvrir des fichiers, chercher sur internet, ex\u00e9cuter du code, appeler des API. C'est l'appel d'outils (aussi : appel de fonctions).",
                "All modern LLMs can do things outside the model \u2014 open files, search the internet, run code, call APIs. This is called tool calling (also: function calling)."
              )}
            </p>
          </ConceptBox>

          <ConceptBox
            title={t("Comment \u00e7a marche", "How it Works")}
            borderColor="border-ai-green"
            titleColor="text-ai-green"
          >
            <p>
              {t(
                "Le mod\u00e8le ne \u00ab sait \u00bb pas la r\u00e9ponse \u2192 il appelle un outil \u2192 obtient le r\u00e9sultat \u2192 vous r\u00e9pond.",
                "The model doesn't \"know\" the answer \u2192 it calls a tool \u2192 gets the result \u2192 responds to you."
              )}
            </p>
          </ConceptBox>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <Card className="bg-ai-green-light border-ai-green/20">
              <h3 className="text-sm font-bold text-ai-green mb-3" style={{ fontFamily: "var(--font-display)" }}>
                {t("Int\u00e9gr\u00e9s", "Built-in")}
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm" style={{ fontFamily: "var(--font-body)" }}>
                <li>{t("\u2022 Lire/\u00e9crire des fichiers sur votre machine", "\u2022 Read/write files on your machine")}</li>
                <li>{t("\u2022 Ouvrir un fichier Excel", "\u2022 Open Excel file on desktop")}</li>
                <li>{t("\u2022 Chercher sur internet", "\u2022 Search the internet")}</li>
                <li>{t("\u2022 Ex\u00e9cuter du code (Python, JS...)", "\u2022 Run code (Python, JS...)")}</li>
              </ul>
            </Card>
            <Card className="bg-ai-purple-light border-ai-purple/20">
              <h3 className="text-sm font-bold text-ai-purple mb-3" style={{ fontFamily: "var(--font-display)" }}>
                {t("Ajoutez les v\u00f4tres !", "Add Your Own!")}
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm" style={{ fontFamily: "var(--font-body)" }}>
                <li>{t("\u2022 Appeler des personnes (API t\u00e9l\u00e9phone)", "\u2022 Call people (phone APIs)")}</li>
                <li>{t("\u2022 Cloner des voix", "\u2022 Clone voices")}</li>
                <li>{t("\u2022 Outils juridiques (OpenLaw)", "\u2022 Legal tools (OpenLaw)")}</li>
                <li>{t("\u2022 N'importe quelle API imaginable", "\u2022 Any API you can imagine")}</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* Section 04 — Claude Code Commands */}
        <Section
          number="04"
          badge={t("Commandes", "Commands")}
          badgeColor="bg-ai-orange text-white"
          title={t("Actions cl\u00e9s de Claude Code", "Claude Code Key Actions")}
        >
          <Card className="mb-6">
            <table className="w-full text-sm" style={{ fontFamily: "var(--font-body)" }}>
              <thead>
                <tr className="border-b-2 border-ai-orange">
                  <th className="text-left py-3 px-3 text-xs uppercase tracking-wider text-ai-orange font-semibold">
                    {t("Commande / Fonction", "Command / Feature")}
                  </th>
                  <th className="text-left py-3 px-3 text-xs uppercase tracking-wider text-ai-orange font-semibold">
                    {t("Ce que \u00e7a fait", "What it Does")}
                  </th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 px-3"><code className="bg-muted text-ai-green px-2 py-0.5 rounded text-xs font-mono">/init</code></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("D\u00e9marre un nouveau projet \u2014 cr\u00e9e README, structure, config", "Start a new project \u2014 creates README, structure, config")}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-3"><code className="bg-muted text-ai-green px-2 py-0.5 rounded text-xs font-mono">plan mode</code></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("Claude planifie avant de coder \u2014 pose des questions si quelque chose manque", "Claude plans before coding \u2014 asks you questions if anything is missing")}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-3"><code className="bg-muted text-ai-green px-2 py-0.5 rounded text-xs font-mono">skills.md</code></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("D\u00e9finir des comp\u00e9tences r\u00e9utilisables comme outils", "Define reusable skills as tools in a file")}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-3"><code className="bg-muted text-ai-green px-2 py-0.5 rounded text-xs font-mono">permissions</code></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("Contr\u00f4ler ce que Claude peut acc\u00e9der (fichiers, API, commandes)", "Control what Claude can access (files, APIs, commands)")}</td>
                </tr>
                <tr>
                  <td className="py-3 px-3"><code className="bg-muted text-ai-green px-2 py-0.5 rounded text-xs font-mono">settings.json</code></td>
                  <td className="py-3 px-3 text-muted-foreground">{t("Config persistante \u2014 d\u00e9finir une fois, appliqu\u00e9 \u00e0 toutes les sessions", "Persistent config \u2014 set once, applies to all sessions")}</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <p className="font-bold text-ai-orange text-sm mb-3" style={{ fontFamily: "var(--font-body)" }}>
            {t("Flux typique :", "Typical Workflow:")}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {[
              t("D\u00e9crire l'id\u00e9e", "Describe idea"),
              t("Mode plan", "Plan mode"),
              t("\u00c9crire le code", "Write code"),
              t("Lancer & tester", "Run & test"),
              t("D\u00e9ployer", "Deploy"),
            ].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-2">
                <span className="bg-card border border-border px-4 py-2 rounded-lg text-sm font-semibold" style={{ fontFamily: "var(--font-body)" }}>
                  {step}
                </span>
                {i < arr.length - 1 && <span className="text-primary font-bold text-lg">&rarr;</span>}
              </span>
            ))}
          </div>
        </Section>

        {/* Section 05 — Building Apps */}
        <Section
          number="05"
          badge={t("Construire", "Build")}
          badgeColor="bg-ai-pink text-white"
          title={t("Cr\u00e9er des apps avec Claude Code", "Creating Apps with Claude Code")}
        >
          <ConceptBox
            title={t("L'approche MVP", "The MVP Approach")}
            borderColor="border-ai-pink"
            titleColor="text-ai-pink"
          >
            <p>
              {t(
                "Commencez avec une description \u2014 pensez le site entier. Listez les fonctionnalit\u00e9s (ex. mode sombre). Claude le construit localement. D\u00e9ployez quand c'est pr\u00eat.",
                "Start with a description \u2014 think the entire website. List features (e.g. dark mode). Claude builds it locally. Deploy when ready."
              )}
            </p>
          </ConceptBox>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-ai-blue-light border-ai-blue/20">
              <h3 className="text-sm font-bold text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>
                {t("Exemple de site web", "Website Example")}
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm" style={{ fontFamily: "var(--font-body)" }}>
                <li>{t("\u2022 Cr\u00e9\u00e9 localement \u2192 HTML servi", "\u2022 Locally created \u2192 served HTML")}</li>
                <li>{t("\u2022 Cliquer pour pr\u00e9visualiser", "\u2022 Click to preview in browser")}</li>
                <li>{t("\u2022 Connecter \u00e0 une base de donn\u00e9es", "\u2022 Connect to database (server \u2192 DB)")}</li>
                <li>{t("\u2022 D\u00e9ployer quand c'est pr\u00eat", "\u2022 Deploy when ready")}</li>
              </ul>
            </Card>
            <Card className="bg-ai-pink-light border-ai-pink/20">
              <h3 className="text-sm font-bold text-ai-pink mb-3" style={{ fontFamily: "var(--font-display)" }}>
                {t("Au-del\u00e0 du MVP", "Beyond MVP")}
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm" style={{ fontFamily: "var(--font-body)" }}>
                <li>{t("\u2022 Vues multiples / vues d'app", "\u2022 Multiple views / app views")}</li>
                <li>{t("\u2022 Tech pour guider l'it\u00e9ration", "\u2022 Tech to guide iteration")}</li>
                <li>{t("\u2022 Production pr\u00eate pour le marketing", "\u2022 Marketing-ready output")}</li>
              </ul>
            </Card>
          </div>

        </Section>

        {/* Section 06 — Getting Started */}
        <Section
          number="06"
          badge={t("Installation", "Setup")}
          badgeColor="bg-ai-green text-white"
          title={t("D\u00e9marrer", "Getting Started")}
        >
          <Card className="mb-6">
            <table className="w-full text-sm" style={{ fontFamily: "var(--font-body)" }}>
              <thead>
                <tr className="border-b-2 border-ai-green">
                  <th className="text-left py-3 px-3 text-xs uppercase tracking-wider text-ai-green font-semibold">
                    {t("\u00c9tape", "Step")}
                  </th>
                  <th className="text-left py-3 px-3 text-xs uppercase tracking-wider text-ai-green font-semibold">
                    {t("D\u00e9tails", "Details")}
                  </th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 px-3 font-semibold">1. {t("Installer", "Install")}</td>
                  <td className="py-3 px-3 text-muted-foreground">Mac: <code className="bg-muted text-ai-green px-2 py-0.5 rounded text-xs font-mono">brew install claude-code</code> {t("\u00b7 N\u00e9cessite Node.js", "\u00b7 Needs Node.js")}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-3 font-semibold">2. {t("Langage", "Language")}</td>
                  <td className="py-3 px-3 text-muted-foreground">{t("Python, JS, ou n'importe quel langage \u2014 simple pour d\u00e9marrer", "Uses Python, JS, or any language \u2014 simple to start")}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-3 font-semibold">3. {t("Outils", "Tools")}</td>
                  <td className="py-3 px-3 text-muted-foreground">{t("Claude peut avoir besoin d'outils suppl\u00e9mentaires : API, outils audio, processeurs de fichiers", "Claude may need extra tools: APIs, audio tools, file processors")}</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold">4. Permissions</td>
                  <td className="py-3 px-3 text-muted-foreground">{t("Configurer dans", "Configure in")} <code className="bg-muted text-ai-green px-2 py-0.5 rounded text-xs font-mono">~/.claude/settings.json</code></td>
                </tr>
              </tbody>
            </table>
          </Card>

          <Card className="bg-ai-green-light border-ai-green/20">
            <h3 className="text-sm font-bold text-ai-green mb-3" style={{ fontFamily: "var(--font-display)" }}>
              {t("Outils suppl\u00e9mentaires que Claude peut utiliser", "Extra Tools Claude Can Use")}
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
              <div><strong>Audio:</strong> ffmpeg, Audacity CLI, TTS APIs</div>
              <div><strong>Images:</strong> sips, ImageMagick</div>
              <div><strong>{t("Donn\u00e9es", "Data")}:</strong> xargs, jq, APIs</div>
              <div><strong>{t("Vid\u00e9o", "Video")}:</strong> snapshots, processing</div>
            </div>
          </Card>
        </Section>

        {/* Section 07 — Privacy */}
        <Section
          number="07"
          badge={t("Vie priv\u00e9e", "Privacy")}
          badgeColor="bg-ai-orange text-white"
          title={t("Donn\u00e9es & vie priv\u00e9e", "Data & Privacy Considerations")}
        >
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card className="border-ai-orange/30 bg-ai-orange-light text-center">
              <p className="font-bold text-ai-orange mb-1" style={{ fontFamily: "var(--font-display)" }}>OpenAI</p>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                {t("Donn\u00e9es utilis\u00e9es pour l'entra\u00eenement", "Data used for training")}
              </p>
            </Card>
            <Card className="border-ai-green/30 bg-ai-green-light text-center">
              <p className="font-bold text-ai-green mb-1" style={{ fontFamily: "var(--font-display)" }}>Claude</p>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                {t("Plus priv\u00e9, pas sur le site web", "More private, not put on website")}
              </p>
            </Card>
          </div>

          <ConceptBox
            title={t("Point cl\u00e9", "Key Takeaway")}
            borderColor="border-ai-orange"
            titleColor="text-ai-orange"
          >
            <p>
              {t(
                "V\u00e9rifiez toujours la politique de donn\u00e9es du fournisseur. Les mod\u00e8les open-source (Deepseek, Qwen) permettent une ex\u00e9cution locale pour une confidentialit\u00e9 totale. Les outils europ\u00e9ens comme Mistral/LeChat peuvent convenir aux besoins RGPD.",
                "Always check the provider's data policy. Open-source models (Deepseek, Qwen) let you run locally for full privacy. EU-based tools like Mistral/LeChat may suit GDPR needs."
              )}
            </p>
          </ConceptBox>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card className="bg-ai-green-light border-ai-green/20">
              <h3 className="text-sm font-bold text-ai-green mb-2" style={{ fontFamily: "var(--font-display)" }}>Claude Code</h3>
              <p className="text-foreground font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>~$4/{t("mois", "month")}</p>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>Skills, coding, deploy</p>
            </Card>
            <Card className="bg-ai-orange-light border-ai-orange/20">
              <h3 className="text-sm font-bold text-ai-orange mb-2" style={{ fontFamily: "var(--font-display)" }}>OpenAI Pro</h3>
              <p className="text-foreground font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>$200/{t("mois", "month")}</p>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>{t("Acc\u00e8s complet, tous les mod\u00e8les", "Full access, all models")}</p>
            </Card>
          </div>

          <ConceptBox
            title={t("Cr\u00e9ations amusantes avec l'IA", "Fun Outputs from AI")}
            borderColor="border-ai-pink"
            titleColor="text-ai-pink"
          >
            <p>
              {t(
                "Donnez vos notes \u00e0 ces outils pour cr\u00e9er : podcasts, pr\u00e9sentations, antisèches, captures vid\u00e9o \u2014 comme NotebookLM mais \u00e0 travers le code !",
                "Feed your notes into tools to create: podcasts, presentations, cheatsheets, video snapshots \u2014 like NotebookLM but through code!"
              )}
            </p>
          </ConceptBox>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-2" style={{ fontFamily: "var(--font-body)" }}>
            {t("Contenu cr\u00e9\u00e9 par", "Content created by")}{" "}
            <a
              href="https://www.linkedin.com/in/jdavies/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              John Davis <ExternalLink className="w-3 h-3" />
            </a>
            {" \u2014 "}
            {t("Session IA, Avril 2026", "AI Session, April 2026")}
          </p>
          <p className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
            AI Hub / Le Village Marseille
          </p>
        </div>
      </footer>
    </div>
  );
}
