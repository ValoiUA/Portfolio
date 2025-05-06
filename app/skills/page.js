"use client";
import React from "react";

export default function Skills() {
    return (
        <section className="skills-section-tw relative min-h-screen w-full flex items-center justify-center font-mono overflow-hidden bg-transparent">
            {/* Neon animated background */}
            <div className="fixed inset-0 z-0 pointer-events-none skills-bg-anim-tw"></div>
            <div className="fixed inset-0 z-0 pointer-events-none skills-bg-anim2-tw"></div>
            <div className="skills-card-tw relative z-10 bg-gradient-to-br from-[#181c37ee] to-[#232942ee] rounded-2xl shadow-[0_8px_48px_0_#181c37cc,0_0_0_2.5px_#39ff1466] px-8 py-12 max-w-2xl w-[96vw] text-[#e3f6ff] overflow-hidden animate-skillsFadeIn">
                <h2 className="text-3xl font-bold mb-7 text-[#39ff14] drop-shadow-[0_0_12px_#39ff14cc] tracking-wide text-center">Skills</h2>
                <div className="skills-list-tw flex flex-col gap-3 text-lg">
                    <div>
                        <span className="skill-label">Java:</span>
                        <span className="skill-desc">
                            Core (basics, OOP, multithreading), <b>AWT/Swing</b> (GUI, custom tools)
                            <span className="skill-level"> — confident</span>
                        </span>
                    </div>
                    <div>
                        <span className="skill-label">C#:</span>
                        <span className="skill-desc">
                            Basement (patterns & basics), <b>Unity</b> (games, UI), <b>Unreal Engine</b> (fundamentals)
                            <span className="skill-level"> — confident</span>
                        </span>
                    </div>
                    <div>
                        <span className="skill-label">C++:</span>
                        <span className="skill-desc">
                            Base (OOP, STL), <b>Unreal Engine</b> (plugin development, gameplay logic)
                            <span className="skill-level"> — basic level</span>
                        </span>
                    </div>
                    <div>
                        <span className="skill-label">WEB:</span>
                        <span className="skill-desc">
                            <b>HTML</b> (semantic, responsive), <b>CSS</b> (Tailwind, SCSS)
                            <span className="skill-level"> — production</span>
                        </span>
                    </div>
                    <div>
                        <span className="skill-label">JS/TS:</span>
                        <span className="skill-desc">
                            <b>TypeScript</b>, ES6+, async, fetch, API integrations
                            <span className="skill-level"> — confident</span>
                        </span>
                    </div>
                    <div>
                        <span className="skill-label">Node.js:</span>
                        <span className="skill-desc">
                            Express, REST, WebSocket, MongoDB/Postgres integration
                            <span className="skill-level"> — confident</span>
                        </span>
                    </div>
                    <div>
                        <span className="skill-label">React:</span>
                        <span className="skill-desc">
                            Hooks, state management, custom components
                            <span className="skill-level"> — production</span>
                        </span>
                    </div>
                    <div>
                        <span className="skill-label">Next.js:</span>
                        <span className="skill-desc">
                            SSR, API routes, optimization
                            <span className="skill-level"> — production</span>
                        </span>
                    </div>
                </div>
            </div>
            <style jsx>{`
       @media (max-width: 700px) {
    .skills-card-tw {
      padding: 1.5rem 0.5rem;
      max-width: 98vw;
      border-radius: 1.2rem;
    }
    .skills-list-tw > div {
      font-size: 0.98em;
      gap: 0.7em;
      padding: 0.35em 0;
    }
    .skill-label {
      min-width: 70px;
      font-size: 1em;
    }
    .skills-card-tw h2 {
      font-size: 2em;
    }
  }
  @media (max-width: 430px) {
    .skills-card-tw {
      padding: 1rem 0.2rem;
      border-radius: 0.7rem;
    }
    .skills-card-tw h2 {
      font-size: 1.2em;
    }
    .skills-list-tw > div {
      font-size: 0.92em;
      gap: 0.4em;
    }
    .skill-label {
      min-width: 54px;
      font-size: 0.95em;
    }
  }
        .skills-bg-anim-tw {
          background: radial-gradient(ellipse at 60% 40%, #1e2a4dcc 0%, #0a101a 85%);
          opacity: 0.95;
          animation: skillsBgMove 18s ease-in-out infinite alternate;
        }
        .skills-bg-anim2-tw {
          background: conic-gradient(from 190deg, #181c37 0%, #0a101a 60%, #232942 100%);
          mix-blend-mode: lighten;
          opacity: 0.38;
          animation: skillsBgMove2 24s ease-in-out infinite alternate;
        }
        @keyframes skillsBgMove {
          0% { background-position: 60% 40%; }
          100% { background-position: 40% 60%; }
        }
        @keyframes skillsBgMove2 {
          0% { background-position: 70% 30%; }
          100% { background-position: 30% 70%; }
        }
        .skills-card-tw::before {
          content: "";
          position: absolute;
          inset: -16px;
          border-radius: 2rem;
          background: radial-gradient(circle at 60% 20%, #39ff1422 0%, #00f0ff22 80%, transparent 100%);
          z-index: 0;
          pointer-events: none;
          animation: skillsAura 3.4s ease-in-out infinite alternate;
        }
        .skills-card-tw::after {
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
        @keyframes skillsAura {
          0% { opacity: 0.16; }
          100% { opacity: 0.32; }
        }
        .animate-skillsFadeIn {
          animation: skillsFadeIn 1.1s cubic-bezier(.4,1.4,.5,1) both;
        }
        @keyframes skillsFadeIn {
          0% { opacity: 0; transform: translateY(32px) scale(0.97);}
          100% { opacity: 1; transform: translateY(0) scale(1);}
        }
        .skills-list-tw > div {
          display: flex;
          gap: 1.2em;
          align-items: flex-start;
          font-size: 1.1em;
          padding: 0.5em 0;
          border-bottom: 1px solid #23294255;
        }
        .skills-list-tw > div:last-child {
          border-bottom: none;
        }
        .skill-label {
          color: #39ff14;
          font-weight: 700;
          min-width: 100px;
          letter-spacing: 0.03em;
          text-shadow: 0 0 8px #39ff1433;
        }
        .skill-desc {
          flex: 1;
        }
        .skill-desc b {
          color: #00f0ff;
          font-weight: 600;
          text-shadow: 0 0 8px #00f0ff55;
        }
        .skill-level {
          color: #f3f312;
          font-size: 0.98em;
          margin-left: 0.7em;
          font-weight: 500;
          text-shadow: 0 0 6px #f3f31244;
        }
      `}</style>
        </section>
    );
}