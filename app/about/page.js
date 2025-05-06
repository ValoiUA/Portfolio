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
    intro: "Hi, I'm",
    experience: "Commercial experience:",
    aboutText: `
      My coding journey started with simple <b>console applications</b> and experimenting with <b>game development</b> on my old PC. The magic of seeing code come to life in the form of a game or a tool instantly hooked me. I quickly moved on to building more complex projects — from small games and desktop utilities to backend services and web apps.<br /><br />
      I have hands-on experience with a wide range of technologies: <b>JavaScript</b> (and TypeScript), <b>Java</b>, <b>C#</b>, <b>C++</b>, and even some Python and Go for scripting and automation. My favorite playgrounds are <b>React</b>, <b>Node.js</b>, and <b>Next.js</b>, but I'm always curious to try new frameworks and stacks.<br /><br />
      As a <b>freelancer</b>, I've worked on everything from interactive web dashboards and multiplayer game servers to custom desktop tools and automation scripts. I love the challenge of jumping into a new codebase, understanding the client's vision, and delivering real value — whether it's a fast prototype or a production-ready system.<br /><br />
      <b>Game development</b> taught me the importance of performance and optimization, while building <b>console utilities</b> and <b>server-side apps</b> sharpened my skills in system design and debugging. I enjoy switching between frontend and backend, and I'm comfortable working with both <b>SQL</b> and <b>NoSQL</b> databases, deploying apps on cloud servers, and integrating third-party APIs.<br /><br />
      My approach is simple: <b>solve real problems, write clean code, and never stop learning</b>. I believe that the best solutions come from a mix of curiosity, persistence, and a bit of creative chaos. I love collaborating with other developers, sharing ideas, and building products that make a difference.<br /><br />
      Whether it's designing a scalable backend, building a pixel-perfect UI, or optimizing a database query, I always strive to push the boundaries of what's possible with code. If you're looking for someone who can bring both technical expertise and creative energy to your project — let's connect!
    `,
    dbTitle: "Databases",
    dbDesc: `
      Confident with both <b>SQL</b> &amp; <b>NoSQL</b> databases.<br />
      Experienced in data modeling, query optimization, migrations, and integrating DBs with Node.js, Java, and C# backends.<br />
      Love building scalable architectures and tuning performance for high-load systems.
    `,
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
    intro: "Привіт, я",
    experience: "Комерційний досвід:",
    aboutText: `
      Моя подорожь у програмуванні почалась з простих <b>консольних програм</b> та експериментів з <b>розробкою ігор</b> на моєму старому комп'ютері. Магія бачення коду, що оживає у формі ігри або інструменту, вразу захопила мене. Я швидко перейшов до створення більш складних проектів - від маленьких ігор та десктопних утиліт до серверних сервісів та веб-додатків.<br /><br />
      У мене є практичний досвід роботи з широким спектром технологій: <b>JavaScript</b> (та TypeScript), <b>Java</b>, <b>C#</b>, <b>C++</b>, а також Python та Go для скриптів та автоматизації. Мої улюблені місця для експериментів - це <b>React</b>, <b>Node.js</b> та <b>Next.js</b>, але я завжди зацікавлений спробувати нові фреймворки та стеки.<br /><br />
      Як <b>фрилансер</b>, я працював над усім - від інтерактивних веб-панелей та серверів для ігор до спеціалізованих десктопних інструментів та скриптів для автоматизації. Я люблю виклик, який приносить робота з новим кодом, розуміння візіону клієнта та надання реальної цінності - чи то швидкий прототип, чи готова до випуску система.<br /><br />
      <b>Розробка ігор</b> навчала мене важливості продуктивності та оптимізації, поки розробка <b>консольних утиліт</b> та <b>серверних додатків</b> не зміцнювала мої навички в системному дизайні та дебагінгу. Я насолоджуюся перемиканням між фронтендом та бекендом, і я вільно працюю з обома <b>SQL</b> та <b>NoSQL</b> базами даних, розгортанням додатків на хмарних серверах та інтеграцією зовнішніх API.<br /><br />
      Мій підхід простий: <b>розв'язувати реальні проблеми, писати чистий код та ніколи не зупинятися в навчанні</b>. Я вірю, що найкращі рішення приходять від змішання любопитства, наполегливості та трохи креативного хаосу. Я люблю співпрацювати з іншими розробниками, ділитися ідеями та створювати продукти, які роблять різницю.<br /><br />
      Незалежно від того, чи це дизайн масштабного бекенду, створення піксельно-точного UI чи оптимізація запиту до бази даних, я завжди намагаюся висунути межі того, що можливо з кодом. Якщо ви шукаєте когось, хто може принести як технічну експертизу, так і креативну енергію до вашого проекту - давайте зв'яжемось!
    `,
    dbTitle: "Бази даних",
    dbDesc: `
      Впевнена робота з обоєю <b>SQL</b> та <b>NoSQL</b> базами даних.<br />
      Досвід моделювання даних, оптимізації запитів, міграцій та інтеграції БД з Node.js, Java та C# бекендами.<br />
      Люблю створювати масштабні архітектури та налаштовувати продуктивність для систем з високою навантаженістю.
    `,
  }
};

export default function About() {
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

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center font-mono overflow-hidden bg-transparent">
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

      {/* Animated neon background */}
      <div className="fixed inset-0 z-0 pointer-events-none about-bg-anim-tw"></div>
      <div className="fixed inset-0 z-0 pointer-events-none about-bg-anim2-tw"></div>
      <div className="about-card-tw relative z-10 bg-gradient-to-br from-[#181c37ee] to-[#232942ee] rounded-2xl shadow-[0_8px_48px_0_#181c37cc,0_0_0_2.5px_#39ff1466] px-8 py-12 max-w-2xl w-[96vw] text-center text-[#e3f6ff] overflow-hidden animate-aboutFadeIn">
        <h2 className="text-4xl font-bold mb-4 tracking-wide text-shadow-lg relative z-10">
          {t.intro} <span className="text-[#39ff14] drop-shadow-[0_0_16px_#39ff14cc]">{t.title}</span>
        </h2>
        <p className="text-lg mb-6 text-[#00f0ff] font-semibold tracking-wide relative z-10">
          {t.experience} <b>1.5 years</b>
        </p>
        <p className="about-desc-tw text-lg text-[#e3f6ffcc] leading-8 relative z-10 animate-aboutTextFade" dangerouslySetInnerHTML={{ __html: t.aboutText }} />

        {/* Databases Block */}
        <div className="db-card-tw relative mx-auto mt-10 mb-6 px-6 py-7 max-w-md bg-gradient-to-br from-[#161d2b] to-[#232942] rounded-xl shadow-[0_0_36px_0_#39ff1433,0_0_0_2.5px_#39ff14cc] text-[#e3f6ff] text-center text-base overflow-hidden">
          <div className="db-title-tw text-lg font-bold text-[#39ff14] mb-3 tracking-wide drop-shadow-[0_0_12px_#39ff14cc] relative z-10">
            {t.dbTitle}
          </div>
          <div className="db-list-tw flex flex-wrap gap-x-4 gap-y-2 justify-center mb-3 relative z-10">
            <span className="db-badge-tw">PostgreSQL</span>
            <span className="db-badge-tw">MySQL</span>
            <span className="db-badge-tw">MongoDB</span>
            <span className="db-badge-tw">SQLite</span>
          </div>
          <div className="db-desc-tw text-[#e3f6ffcc] text-sm mt-2 leading-relaxed relative z-10" dangerouslySetInnerHTML={{ __html: t.dbDesc }} />
        </div>
      </div>

      {/* Custom styles for pseudo-elements and animation */}
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
        /* Neon animated backgrounds */
        .about-bg-anim-tw {
          background: radial-gradient(ellipse at 60% 40%, #1e2a4dcc 0%, #0a101a 85%);
          opacity: 0.95;
          animation: aboutBgMove 18s ease-in-out infinite alternate;
        }
        .about-bg-anim2-tw {
          background: conic-gradient(from 190deg, #181c37 0%, #0a101a 60%, #232942 100%);
          mix-blend-mode: lighten;
          opacity: 0.38;
          animation: aboutBgMove2 24s ease-in-out infinite alternate;
        }
        @keyframes aboutBgMove {
          0% { background-position: 60% 40%; }
          100% { background-position: 40% 60%; }
        }
        @keyframes aboutBgMove2 {
          0% { background-position: 70% 30%; }
          100% { background-position: 30% 70%; }
        }
        /* About card pseudo-elements for neon glow */
        .about-card-tw::before {
          content: "";
          position: absolute;
          inset: -16px;
          border-radius: 2rem;
          background: radial-gradient(circle at 70% 30%, #39ff1422 0%, #00f0ff22 80%, transparent 100%);
          z-index: 0;
          pointer-events: none;
          animation: aboutAura 3.4s ease-in-out infinite alternate;
        }
        .about-card-tw::after {
          content: "";
          position: absolute;
          inset: -12px;
          border-radius: 2.2rem;
          border: 2.5px solid #39ff14cc;
          opacity: 0.13;
          filter: blur(1.5px);
          z-index: 0;
          pointer-events: none;
        }
        @keyframes aboutAura {
          0% { opacity: 0.16; }
          100% { opacity: 0.32; }
        }
        /* About card fade-in */
        .animate-aboutFadeIn {
          animation: aboutFadeIn 1.1s cubic-bezier(.4,1.4,.5,1) both;
        }
        @keyframes aboutFadeIn {
          0% { opacity: 0; transform: translateY(32px) scale(0.97);}
          100% { opacity: 1; transform: translateY(0) scale(1);}
        }
        .about-desc-tw {
          animation: aboutTextFade 1.8s cubic-bezier(.4,1.4,.5,1) both;
        }
        @keyframes aboutTextFade {
          0% { opacity: 0; transform: translateY(18px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        /* DB card pseudo-elements for neon glow */
        .db-card-tw::before,
        .db-card-tw::after {
          content: "";
          position: absolute;
          inset: -7px;
          border-radius: 1.25rem;
          pointer-events: none;
          z-index: 0;
          transition: opacity 0.26s;
        }
        .db-card-tw::before {
          background: linear-gradient(120deg, #39ff14 0%, #00f0ff 80%, #ff2fd6 100%);
          opacity: 0.18;
          filter: blur(7px);
          animation: dbAura 3.5s ease-in-out infinite alternate;
        }
        .db-card-tw::after {
          border: 2.5px solid #39ff14cc;
          opacity: 0.24;
          filter: blur(1.5px);
        }
        @keyframes dbAura {
          0% { opacity: 0.14; }
          100% { opacity: 0.32; }
        }
        .db-badge-tw {
          background: rgba(57,255,20,0.11);
          border: 1.2px solid #39ff14cc;
          border-radius: 0.5rem;
          padding: 0.25em 1em;
          color: #39ff14;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.2em;
          box-shadow: 0 0 6px #39ff1433;
          transition: background 0.18s, color 0.18s;
          cursor: pointer;
          display: inline-block;
        }
        .db-badge-tw:hover {
          background: #39ff14;
          color: #181c37;
        }
      `}</style>
    </section>
  );
}