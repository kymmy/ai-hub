"use client";

import { useLanguage } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-border bg-card/80 backdrop-blur-sm p-1 shadow-sm font-body">
      <button
        onClick={() => setLang("fr")}
        className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-200 ${
          lang === "fr"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-200 ${
          lang === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
}
