"use client";

import React, { useEffect, useState } from "react";

const translations = {
  en: {
    sections: [
      { label: "About", link: "about" },
      { label: "Skills", link: "skills" },
      { label: "Contact", link: "contact" },
      { label: "GitHub", link: "https://github.com/ValoiUA" },
      { label: "Projects", link: "projects" },
    ],
    title: "QuantCoder",
  },
  ua: {
    sections: [
      { label: "Про мене", link: "about" },
      { label: "Навички", link: "skills" },
      { label: "Контакти", link: "contact" },
      { label: "GitHub", link: "https://github.com/ValoiUA" },
      { label: "Проєкти", link: "projects" },
    ],
    title: "QuantCoder",
  },
};

const cityLights = [
  { left: "10vw", top: "82vh", color: "#1affc9", size: 120, blur: 60, delay: 0 },
  { left: "30vw", top: "87vh", color: "#f3f312", size: 80, blur: 38, delay: 1.2 },
  { left: "52vw", top: "80vh", color: "#39ff14", size: 140, blur: 70, delay: 2.1 },
  { left: "75vw", top: "90vh", color: "#00f0ff", size: 100, blur: 50, delay: 2.8 },
  { left: "60vw", top: "92vh", color: "#ff2fd6", size: 80, blur: 36, delay: 3.4 },
];

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  // Зберігати мову в localStorage
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("main_lang") : null;
    if (saved && (saved === "en" || saved === "ua")) setLang(saved);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("main_lang", lang);
  }, [lang]);

  // Parallax effect for city lights
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      document.querySelectorAll(".city-glow").forEach((el, i) => {
        el.style.transform = `translate(${x * (i + 1) * 12}px, ${y * (i + 1) * 10}px) scale(1)`;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Glitch effect animation loop for the title
  useEffect(() => {
    let timeout;
    const glitch = () => {
      const title = document.querySelector(".glitch-title");
      if (!title) return;
      title.classList.add("glitch-anim");
      timeout = setTimeout(() => {
        title.classList.remove("glitch-anim");
        timeout = setTimeout(glitch, 2200 + Math.random() * 1200);
      }, 140 + Math.random() * 120);
    };
    glitch();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="site-main">
      {/* Language Switcher */}
      <div className="lang-switcher">
        <button
          className={lang === "ua" ? "active" : ""}
          onClick={() => setLang("ua")}
          aria-label="Українська"
          type="button"
        >🇺🇦</button>
        <button
          className={lang === "en" ? "active" : ""}
          onClick={() => setLang("en")}
          aria-label="English"
          type="button"
        >🇬🇧</button>
      </div>
      {/* Animated background gradients */}
      <div className="bg-anim"></div>
      <div className="bg-anim2"></div>
      {/* Parallax city lights */}
      <div className="city-lights">
        {cityLights.map((l, i) => (
          <div
            key={i}
            className="city-glow"
            style={{
              left: l.left,
              top: l.top,
              width: l.size,
              height: l.size * 0.55,
              background: l.color,
              filter: `blur(${l.blur}px) brightness(1.4)`,
              animationDelay: `${l.delay}s`,
            }}
          />
        ))}
      </div>
      {/* Main content */}
      <section className="content">
        <h1 className="glitch-title" data-text={t.title}>
          <span className="glitch-main">{t.title}</span>
          <span className="glitch-shadow">{t.title}</span>
        </h1>
        <nav className="sections-nav">
          {t.sections.map((section, idx) => (
            <a
              key={section.label}
              href={section.link}
              className="fancy-btn"
              style={{ animationDelay: `${0.1 + idx * 0.13}s` }}
            >
              <span>{section.label}</span>
            </a>
          ))}
        </nav>
      </section>
      {/* Micro floating particles */}
      <div className="particles">
        {Array.from({ length: 22 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              animationDelay: `${Math.random() * 7}s`,
              background: `radial-gradient(circle, #fff 0%, #39ff14 50%, transparent 100%)`,
              opacity: 0.15 + Math.random() * 0.2,
              width: `${6 + Math.random() * 10}px`,
              height: `${6 + Math.random() * 10}px`,
              filter: `blur(${1 + Math.random() * 2}px)`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        .lang-switcher {
          position: absolute;
          top: 22px;
          right: 38px;
          z-index: 50;
          display: flex;
          gap: 0.5em;
        }
        .lang-switcher button {
          background: none;
          border: none;
          font-size: 1.7em;
          cursor: pointer;
          filter: grayscale(0.4) brightness(0.95);
          opacity: 0.7;
          transition: filter 0.2s, opacity 0.2s, transform 0.18s;
          outline: none;
        }
        .lang-switcher button.active, .lang-switcher button:hover {
          filter: none;
          opacity: 1;
          transform: scale(1.14);
          text-shadow: 0 0 7px #39ff14cc;
        }
        .site-main {
          min-height: 100vh;
          width: 100vw;
          overflow: hidden;
          background: #0a101a;
          position: relative;
          font-family: 'JetBrains Mono', 'Fira Mono', 'Consolas', monospace;
        }
        .bg-anim, .bg-anim2 {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.85;
        }
        .bg-anim {
          background: radial-gradient(ellipse at 60% 40%, #1e2a4d 0%, #0a101a 85%);
          animation: bgmove 18s ease-in-out infinite alternate;
        }
        .bg-anim2 {
          background: conic-gradient(from 190deg, #181c37 0%, #0a101a 60%, #232942 100%);
          mix-blend-mode: lighten;
          opacity: 0.45;
          animation: bgmove2 24s ease-in-out infinite alternate;
        }
        @keyframes bgmove {
          0% { background-position: 60% 40%; }
          100% { background-position: 40% 60%; }
        }
        @keyframes bgmove2 {
          0% { background-position: 70% 30%; }
          100% { background-position: 30% 70%; }
        }
        .city-lights {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }
        .city-glow {
          position: absolute;
          border-radius: 50%;
          opacity: 0.75;
          mix-blend-mode: screen;
          animation: cityPulse 7s ease-in-out infinite alternate;
        }
        @keyframes cityPulse {
          0% { opacity: 0.6; transform: scale(1);}
          50% { opacity: 1; transform: scale(1.07);}
          100% { opacity: 0.7; transform: scale(1);}
        }
        .particles {
          position: fixed;
          inset: 0;
          z-index: 2;
          pointer-events: none;
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          animation: floaty 9s linear infinite;
        }
        @keyframes floaty {
          0% { transform: translateY(0) scale(1);}
          50% { transform: translateY(-18px) scale(1.12);}
          100% { transform: translateY(0) scale(1);}
        }
        .content {
          position: relative;
          z-index: 10;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .glitch-title {
          position: relative;
          font-size: 3.2rem;
          font-weight: 800;
          letter-spacing: 0.13em;
          color: #e3f6ff;
          text-align: center;
          margin-bottom: 2.8rem;
          line-height: 1.1;
          filter: drop-shadow(0 8px 32px #0a101a);
        }
        .glitch-title .glitch-main {
          position: relative;
          z-index: 2;
          background: linear-gradient(90deg, #e3f6ff 60%, #39ff14 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          filter: drop-shadow(0 0 18px #23294288);
          animation: shimmer 2.8s linear infinite;
        }
        .glitch-title .glitch-shadow {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 1;
          color: #232942;
          opacity: 0.35;
          filter: blur(3.5px);
          pointer-events: none;
        }
        .glitch-title.glitch-anim .glitch-main {
          animation: glitch 0.18s steps(2, end) infinite;
        }
        .glitch-title.glitch-anim .glitch-shadow {
          animation: glitchShadow 0.18s steps(2, end) infinite;
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes glitch {
          0% { transform: translate(0, 0);}
          20% { transform: translate(-2px, 1px);}
          40% { transform: translate(2px, -2px);}
          60% { transform: translate(-1px, 2px);}
          80% { transform: translate(1px, -1px);}
          100% { transform: translate(0, 0);}
        }
        @keyframes glitchShadow {
          0% { transform: translate(0, 0);}
          20% { transform: translate(2px, -1px);}
          40% { transform: translate(-2px, 2px);}
          60% { transform: translate(1px, -2px);}
          80% { transform: translate(-1px, 1px);}
          100% { transform: translate(0, 0);}
        }
        .sections-nav {
          display: flex;
          flex-direction: column;
          gap: 2.2rem;
          margin-top: 1.1rem;
          align-items: center;
        }
        .fancy-btn {
          position: relative;
          display: inline-block;
          padding: 1.1rem 2.5rem;
          font-size: 1.14rem;
          font-family: inherit;
          font-weight: 600;
          letter-spacing: 1.2px;
          color: #e3f6ff;
          background: rgba(18,22,38,0.92);
          border: none;
          border-radius: 14px;
          box-shadow:
            0 0 0 2.5px #232942cc,
            0 2px 18px 0 #23294299,
            0 0 0 0 #fff0;
          text-shadow:
            0 0 2px #232942cc,
            0 0 1px #fff1;
          cursor: pointer;
          overflow: hidden;
          outline: none;
          transition:
            background 0.19s,
            color 0.17s,
            box-shadow 0.22s,
            transform 0.16s;
          backdrop-filter: blur(2.5px) saturate(1.2);
          z-index: 1;
          animation: btnFadeIn 0.7s cubic-bezier(0.3,0.8,0.3,1.1) both;
        }
        .fancy-btn span {
          position: relative;
          z-index: 2;
        }
        .fancy-btn::before {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: 18px;
          background: linear-gradient(120deg,#39ff1422 0%,#00f0ff22 60%,#ff2fd622 100%);
          opacity: 0.36;
          filter: blur(2.5px);
          z-index: 0;
          pointer-events: none;
          transition: opacity 0.23s;
          animation: btnAura 2.8s ease-in-out infinite alternate;
        }
        .fancy-btn:hover,
        .fancy-btn:focus-visible {
          background: rgba(32,38,61,0.98);
          color: #39ff14;
          box-shadow:
            0 0 32px 8px #39ff1444,
            0 0 0 3px #39ff14cc,
            0 4px 18px 0 #23294299;
          transform: translateY(-2.5px) scale(1.045);
        }
        .fancy-btn:active {
          background: rgba(18,22,38,1);
          color: #fff;
          box-shadow:
            0 0 10px 2px #232942cc,
            0 0 0 2px #232942cc;
          transform: scale(0.98);
        }
        @keyframes btnAura {
          0% { opacity: 0.36; }
          100% { opacity: 0.58; }
        }
        @keyframes btnFadeIn {
          0% { opacity: 0; transform: translateY(22px) scale(0.94);}
          100% { opacity: 1; transform: translateY(0) scale(1);}
        }
        @media (max-width: 600px) {
          .glitch-title {
            font-size: 2.1rem;
          }
          .fancy-btn {
            padding: 0.9rem 1.5rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </main>
  );
}