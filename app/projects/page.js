"use client";
import React, { useState, useEffect } from "react";

const translations = {
  en: {
    title: "Projects",
    text: "Here are some of my featured projects. More on my GitHub!",
  },
  ua: {
    title: "Проєкти",
    text: "Тут представлені деякі з моїх проєктів. Більше — на GitHub!",
  },
};

export default function Projects() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("projects_lang") : null;
    if (saved && (saved === "en" || saved === "ua")) setLang(saved);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("projects_lang", lang);
  }, [lang]);

  return (
    <section className="projects-section-tw min-h-screen flex flex-col items-center justify-center font-mono bg-transparent">
      <div className="lang-switcher">
        <button className={lang === "ua" ? "active" : ""} onClick={() => setLang("ua")} aria-label="Українська" type="button">🇺🇦</button>
        <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")} aria-label="English" type="button">🇬🇧</button>
      </div>
      <div className="projects-card-tw bg-[#181c37ee] rounded-2xl px-8 py-12 max-w-2xl text-[#e3f6ff] shadow-lg">
        <h2 className="text-3xl font-bold mb-7 text-[#39ff14] text-center">{t.title}</h2>
        <div className="text-xl text-center">{t.text}</div>
      </div>
      <style jsx>{`
        .lang-switcher {
          position: absolute; top: 22px; right: 38px; z-index: 50;
          display: flex; gap: 0.5em;
        }
        .lang-switcher button {
          background: none; border: none; font-size: 1.7em; cursor: pointer;
          filter: grayscale(0.4) brightness(0.95); opacity: 0.7;
          transition: filter 0.2s, opacity 0.2s, transform 0.18s; outline: none;
        }
        .lang-switcher button.active, .lang-switcher button:hover {
          filter: none; opacity: 1; transform: scale(1.14);
          text-shadow: 0 0 7px #39ff14cc;
        }
      `}</style>
    </section>
  );
}