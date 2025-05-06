"use client";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const translations = {
    en: {
        contactMe: "Contact Me",
        intro: "If you want to collaborate, discuss a project, or just chat about tech & development — feel free to reach out!",
        mainContact: "Main contact:",
        discord: "Discord:",
        orForm: "Or use the quick contact form below (goes to",
        yourName: "Your name",
        yourEmail: "Your email",
        yourMessage: "Your message",
        send: "Send",
        sent: "Message sent successfully!",
        error: "Failed to send 😢",
        spam: "Spam detected.",
        tooFast: "Too fast! Please wait a bit before submitting.",
        email: "email",
    },
    ua: {
        contactMe: "Звʼязатися зі мною",
        intro: "Якщо хочеш співпрацювати, обговорити проект або просто поспілкуватися про технології — пиши сміливо!",
        mainContact: "Основний контакт:",
        discord: "Дискорд:",
        orForm: "Або скористайся швидкою формою нижче (повідомлення на",
        yourName: "Твоє імʼя",
        yourEmail: "Твій email",
        yourMessage: "Твоє повідомлення",
        send: "Відправити",
        sent: "Повідомлення успішно надіслано!",
        error: "Не вдалося надіслати 😢",
        spam: "Виявлено спам.",
        tooFast: "Занадто швидко! Почекай трохи перед відправкою.",
        email: "пошта",
    }
};

export default function Contact() {
    const [lang, setLang] = useState("en");
    const t = translations[lang];

    // Зберігати мову в localStorage
    useEffect(() => {
        const saved = typeof window !== "undefined" ? localStorage.getItem("contact_lang") : null;
        if (saved && (saved === "en" || saved === "ua")) setLang(saved);
    }, []);
    useEffect(() => {
        if (typeof window !== "undefined") localStorage.setItem("contact_lang", lang);
    }, [lang]);

    const formRef = useRef(null);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showFly, setShowFly] = useState(false);
    const [startTime, setStartTime] = useState(Date.now());

    useEffect(() => {
        setStartTime(Date.now());
    }, [lang]);

    function handleSubmit(e) {
        e.preventDefault();
        setSent(false);
        setError(null);

        // Honeypot (антиспам)
        const hp = formRef.current["website"]?.value;
        if (hp) {
            setError(t.spam);
            return;
        }

        // Таймер (мінімум 3 секунди на сторінці)
        if (Date.now() - startTime < 3000) {
            setError(t.tooFast);
            return;
        }

        setLoading(true);

        emailjs.sendForm(
            "service_4sj0hhl",
            "template_sdufiof", // <-- твій Template ID
            formRef.current,
            "pmv_WD8vPPXrqoUbg"
        ).then(
            (result) => {
                setSent(true);
                setLoading(false);
                setShowFly(true);
                formRef.current.reset();
                setTimeout(() => setShowFly(false), 1800);
            },
            (error) => {
                setError(t.error);
                setLoading(false);
            }
        );
    }

    return (
        <section className="contact-section-tw relative min-h-screen w-full flex items-center justify-center font-mono overflow-hidden bg-transparent">
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
            {/* Neon animated background */}
            <div className="fixed inset-0 z-0 pointer-events-none contact-bg-anim-tw"></div>
            <div className="fixed inset-0 z-0 pointer-events-none contact-bg-anim2-tw"></div>
            <div className="contact-card-tw relative z-10 bg-gradient-to-br from-[#181c37ee] to-[#232942ee] rounded-2xl shadow-[0_8px_48px_0_#181c37cc,0_0_0_2.5px_#39ff1466] px-10 py-16 max-w-2xl w-[96vw] text-[#e3f6ff] overflow-hidden animate-contactFadeIn">
                <h2 className="text-4xl font-bold mb-7 text-[#39ff14] drop-shadow-[0_0_14px_#39ff14cc] tracking-wide text-center">{t.contactMe}</h2>
                <div className="contact-text-tw text-xl md:text-2xl leading-relaxed text-center mb-8">
                    {t.intro}<br /><br />
                    <span className="contact-tg-label">{t.mainContact}</span>
                    <a
                        href="https://t.me/Vladio8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-tg-link"
                    >
                        <span className="contact-tg-at">@Vladio8</span>
                    </a>
                    <br />
                    <span className="contact-ds-label">{t.discord}</span>
                    <span className="contact-ds-link">
                        <span className="contact-ds-at">valo1ua</span>
                    </span>
                    <br /><br />
                    {t.orForm} <b>vladychiop368@gmail.com</b>):
                </div>
                <form ref={formRef} onSubmit={handleSubmit} className="contact-form-tw flex flex-col gap-4 items-center mx-auto max-w-md">
                    <input
                        name="name"
                        type="text"
                        required
                        placeholder={t.yourName}
                        className="contact-input-tw"
                        autoComplete="off"
                    />
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder={t.yourEmail}
                        className="contact-input-tw"
                        autoComplete="off"
                    />
                    <textarea
                        name="message"
                        required
                        placeholder={t.yourMessage}
                        rows={4}
                        className="contact-input-tw resize-none"
                    />
                    {/* Honeypot hidden field */}
                    <input
                        type="text"
                        name="website"
                        style={{ display: "none" }}
                        tabIndex={-1}
                        autoComplete="off"
                    />
                    <button
                        type="submit"
                        className={`contact-btn-tw interactive-btn ${loading ? "loading" : ""}`}
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="spinner"></span>
                        ) : (
                            t.send
                        )}
                    </button>
                    {sent && <div style={{ color: "#39ff14", marginTop: "1em" }}>{t.sent}</div>}
                    {error && <div style={{ color: "#ff3939", marginTop: "1em" }}>{error}</div>}
                    {/* Emoji анімація */}
                    {showFly && (
                        <span className="fly-emoji" aria-label="sent" role="img">✉️</span>
                    )}
                </form>
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
                .contact-bg-anim-tw {
                    background: radial-gradient(ellipse at 60% 40%, #1e2a4dcc 0%, #0a101a 85%);
                    opacity: 0.95;
                    animation: contactBgMove 18s ease-in-out infinite alternate;
                }
                .contact-bg-anim2-tw {
                    background: conic-gradient(from 190deg, #181c37 0%, #0a101a 60%, #232942 100%);
                    mix-blend-mode: lighten;
                    opacity: 0.38;
                    animation: contactBgMove2 24s ease-in-out infinite alternate;
                }
                @keyframes contactBgMove {
                    0% { background-position: 60% 40%; }
                    100% { background-position: 40% 60%; }
                }
                @keyframes contactBgMove2 {
                    0% { background-position: 70% 30%; }
                    100% { background-position: 30% 70%; }
                }
                .contact-card-tw::before {
                    content: "";
                    position: absolute;
                    inset: -16px;
                    border-radius: 2rem;
                    background: radial-gradient(circle at 60% 20%, #39ff1422 0%, #00f0ff22 80%, transparent 100%);
                    z-index: 0;
                    pointer-events: none;
                    animation: contactAura 3.4s ease-in-out infinite alternate;
                }
                .contact-card-tw::after {
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
                @keyframes contactAura {
                    0% { opacity: 0.16; }
                    100% { opacity: 0.32; }
                }
                .animate-contactFadeIn {
                    animation: contactFadeIn 1.1s cubic-bezier(.4,1.4,.5,1) both;
                }
                @keyframes contactFadeIn {
                    0% { opacity: 0; transform: translateY(32px) scale(0.97);}
                    100% { opacity: 1; transform: translateY(0) scale(1);}
                }
                .contact-tg-label, .contact-ds-label {
                    color: #39ff14;
                    font-weight: 700;
                    font-size: 1.1em;
                    letter-spacing: 0.03em;
                    text-shadow: 0 0 8px #39ff1433;
                    margin-right: 0.3em;
                }
                .contact-tg-link {
                    color: #00f0ff;
                    font-weight: 700;
                    font-size: 1.2em;
                    text-decoration: none;
                    margin-left: 0.2em;
                    text-shadow: 0 0 10px #00f0ff99;
                    transition: color 0.2s;
                }
                .contact-tg-link:hover .contact-tg-at {
                    color: #f3f312;
                    text-shadow: 0 0 18px #f3f31299;
                }
                .contact-tg-at {
                    font-family: 'JetBrains Mono', 'Fira Mono', 'Consolas', monospace;
                    letter-spacing: 0.04em;
                }
                .contact-ds-link {
                    color: #7289da;
                    font-weight: 700;
                    font-size: 1.2em;
                    margin-left: 0.2em;
                    text-shadow: 0 0 10px #7289da99;
                    font-family: 'JetBrains Mono', 'Fira Mono', 'Consolas', monospace;
                }
                .contact-ds-at {
                    letter-spacing: 0.04em;
                }
                .contact-ds-link:hover .contact-ds-at {
                    color: #f3f312;
                    text-shadow: 0 0 18px #f3f31299;
                }
                .contact-form-tw {
                    width: 100%;
                    margin-top: 1.5em;
                }
                .contact-input-tw {
                    width: 100%;
                    background: #14182e;
                    color: #e3f6ff;
                    border: 1.5px solid #39ff14cc;
                    border-radius: 0.6em;
                    padding: 0.85em 1em;
                    font-size: 1.09em;
                    font-family: inherit;
                    outline: none;
                    transition: border 0.2s, box-shadow 0.2s;
                    box-shadow: 0 0 0 0 #39ff1444;
                }
                .contact-input-tw:focus {
                    border-color: #00f0ff;
                    box-shadow: 0 0 12px 0 #00f0ff55;
                }
                .contact-btn-tw {
                    background: linear-gradient(90deg, #39ff14 0%, #00f0ff 100%);
                    color: #181c37;
                    font-weight: 700;
                    font-size: 1.15em;
                    border: none;
                    border-radius: 0.7em;
                    padding: 0.75em 2.5em;
                    cursor: pointer;
                    box-shadow: 0 0 14px 0 #39ff1466;
                    transition: background 0.2s, color 0.2s, box-shadow 0.2s;
                    margin-top: 0.4em;
                }
                .contact-btn-tw:hover {
                    background: linear-gradient(90deg, #00f0ff 0%, #39ff14 100%);
                    color: #232942;
                    box-shadow: 0 0 22px 0 #00f0ff99;
                }
                .interactive-btn {
                    transition: transform 0.13s cubic-bezier(.7,1.4,.5,1), box-shadow 0.2s;
                }
                .interactive-btn:hover:not(:disabled) {
                    transform: scale(1.08) rotate(-2deg);
                    box-shadow: 0 0 32px 0 #39ff14cc;
                }
                .interactive-btn.loading {
                    background: #181c37;
                    color: #aaa;
                    cursor: wait;
                }
                .spinner {
                    display: inline-block;
                    width: 1.2em;
                    height: 1.2em;
                    border: 2.5px solid #39ff14;
                    border-top: 2.5px solid #00f0ff;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                    vertical-align: middle;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg);}
                    100% { transform: rotate(360deg);}
                }
                .fly-emoji {
                    display: inline-block;
                    position: absolute;
                    left: 50%;
                    bottom: 30px;
                    font-size: 2.3em;
                    transform: translateX(-50%) translateY(0);
                    animation: flyUp 1.7s cubic-bezier(.4,1.4,.5,1) forwards;
                    pointer-events: none;
                    z-index: 30;
                }
                @keyframes flyUp {
                    0% { opacity: 0; transform: translateX(-50%) translateY(0) scale(0.7);}
                    15% { opacity: 1;}
                    80% { opacity: 1;}
                    100% { opacity: 0; transform: translateX(-50%) translateY(-110px) scale(1.3);}
                }
                @media (max-width: 700px) {
                    .contact-card-tw {
                        padding: 1.5rem 0.5rem;
                        max-width: 98vw;
                        border-radius: 1.2rem;
                    }
                    .contact-text-tw {
                        font-size: 1.07em;
                    }
                    .contact-card-tw h2 {
                        font-size: 2em;
                    }
                    .contact-form-tw {
                        max-width: 99vw;
                    }
                }
                @media (max-width: 430px) {
                    .contact-card-tw {
                        padding: 1rem 0.2rem;
                        border-radius: 0.7rem;
                    }
                    .contact-card-tw h2 {
                        font-size: 1.2em;
                    }
                    .contact-text-tw {
                        font-size: 0.98em;
                    }
                }
            `}</style>
        </section>
    );
}