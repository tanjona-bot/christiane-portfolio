import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// ─── Palette rose/mauve élégante ─────────────────────────────────────────────
// --rose-deep:   #8B1A5C  (mauve profond — titres, accents forts)
// --rose-mid:    #B5477A  (rose moyen — hover, badges)
// --rose-soft:   #F2D7E5  (rose très pâle — fonds sections alternées)
// --cream:       #FDF6F0  (crème — fond principal)
// --text-dark:   #2C1A26  (quasi-noir rosé)

const NAV = ["Accueil", "Services", "Pourquoi moi", "Offre", "Contact"];

const SERVICES = [
  {
    title: "Administration",
    subtitle: "Faciliter la gestion du quotidien",
    color: "#8B1A5C",
    bg: "#F9EEF4",
    icon: "🗂️",
    tools: "Mail, Excel, Word, PowerPoint, Dreeven, Maestro, Outils de gestion",
    items: [
      "Organisation et classification",
      "Prise de rendez-vous",
      "Traitement de mails",
      "Suivi des livraisons",
      "Réservation",
      "Recherches d'informations",
      "Relation avec les fournisseurs",
      "Facturation",
      "Planification des évènements",
    ],
  },
  {
    title: "Saisie de données",
    subtitle: "Précision & fiabilité avant tout",
    color: "#8B1A5C",
    bg: "#F2D7E5",
    icon: "⌨️",
    tools: "Excel, Word, Ciel Compta, Outlook",
    items: [
      "Saisie et vérification de données",
      "Mise à jour des bases de données",
      "Traitement de documents",
      "Classement et archivage",
      "Rédaction de rapports",
      "Suivi de dossiers",
    ],
  },
  {
    title: "Gestion documentaire",
    subtitle: "Rigueur & organisation",
    color: "#8B1A5C",
    bg: "#F9EEF4",
    icon: "📋",
    tools: "Word, Excel, Google Drive, Outlook",
    items: [
      "Rédaction de devis et factures",
      "Gestion des congés et absences",
      "Suivi des stocks et commandes",
      "Archivage numérique",
      "Correspondance administrative",
      "Rapports opérationnels",
    ],
  },
];

const VALUES = [
  { icon: "💡", label: "Expertise", desc: "Maîtrise le rôle de seconder" },
  { icon: "⏱️", label: "Gain de temps", desc: "Externalisez vos tâches" },
  { icon: "✅", label: "Efficacité", desc: "Un travail de qualité, exécuté avec professionnalisme" },
  { icon: "😊", label: "Bonne humeur", desc: "Ramener un bon environnement au travail est important" },
];

const MES_VALEURS = [
  { icon: "💡", label: "Professionnalisme" },
  { icon: "⏳", label: "Réussite" },
  { icon: "🤝", label: "Engagement" },
];

function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const variants = {
    hidden: { opacity: 0, y: direction === "up" ? 30 : direction === "down" ? -30 : 0, x: direction === "left" ? 40 : direction === "right" ? -40 : 0 },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"}
      variants={variants} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(253,246,240,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid #F2D7E5" : "none",
      transition: "all 0.3s ease",
      padding: scrolled ? "14px 0" : "22px 0",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo HT stylisé */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1 }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700, color: "#8B1A5C", letterSpacing: "0.05em" }}>CR</span>
          <span style={{ fontSize: "0.55rem", letterSpacing: "0.2em", color: "#B5477A", textTransform: "uppercase", marginTop: 1 }}>Assistante Virtuelle</span>
        </motion.div>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {NAV.map((l) => (
            <a key={l} href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "#2C1A26", textDecoration: "none", fontWeight: 500 }}
              onMouseEnter={e => e.target.style.color = "#8B1A5C"}
              onMouseLeave={e => e.target.style.color = "#2C1A26"}>
              {l}
            </a>
          ))}
          <a href="mailto:Chrisvictoria36@gmail.com"
            style={{ padding: "8px 22px", borderRadius: 50, background: "#8B1A5C", color: "#fff", textDecoration: "none", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", fontWeight: 600 }}>
            Me contacter
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="accueil" style={{ minHeight: "100vh", background: "#C9748F", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>
      {/* Decorative circles */}
      <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(139,26,92,0.15)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 2rem 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", width: "100%" }}>
        {/* LEFT */}
        <div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", marginBottom: "1.5rem" }}>
            GAGNER EN CLARTÉ, EN FLUIDITÉ, ET EN SÉRÉNITÉ.
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 900, color: "#fff", lineHeight: 1.0, marginBottom: "1rem", letterSpacing: "0.02em" }}>
            CHRISTIANE<br />RANDRIANJAFY
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)", marginBottom: "1.8rem" }}>
            ASSISTANTE VIRTUELLE
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.8, marginBottom: "1.2rem", maxWidth: 420 }}>
            Je vous accompagne pour optimiser votre temps, alléger votre charge mentale et renforcer votre efficacité.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: 420 }}>
            Parce qu'une entreprise bien secondée, c'est une entreprise qui avance plus vite et plus loin.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#contact" style={{ padding: "14px 36px", borderRadius: 50, background: "#fff", color: "#8B1A5C", fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1rem", textDecoration: "none", letterSpacing: "0.05em" }}>
              Me contacter
            </a>
            <a href="#services" style={{ padding: "14px 36px", borderRadius: 50, border: "2px solid rgba(255,255,255,0.7)", color: "#fff", fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1rem", textDecoration: "none" }}>
              Mes services
            </a>
          </motion.div>
        </div>

        {/* RIGHT — photo placeholder */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
            style={{ position: "relative" }}>
            {/* Decorative arch behind photo */}
            <div style={{
              position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
              width: 320, height: 380, borderRadius: "160px 160px 0 0",
              background: "rgba(139,26,92,0.25)", zIndex: 0,
            }} />
            <div style={{
              position: "relative", zIndex: 1, width: 300, height: 360,
              borderRadius: "150px 150px 0 0", overflow: "hidden",
              border: "4px solid rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {/* Image chris1 */}
              <img src="/chris1.jpg" alt="Christiane Randrianjafy"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                onError={e => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }} />
              <div style={{ display: "none", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                <span style={{ fontSize: "5rem" }}>👩‍💼</span>
                <p style={{ color: "#fff", fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", marginTop: "1rem" }}>Christiane R.</p>
              </div>
            </div>
            {/* Floating badge */}
            <motion.div animate={{ y: [-4, 4, -4] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              style={{ position: "absolute", top: 20, right: -20, background: "#fff", borderRadius: 16, padding: "10px 18px", boxShadow: "0 8px 24px rgba(139,26,92,0.2)" }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: "#8B1A5C", fontSize: "0.8rem", letterSpacing: "0.1em", margin: 0 }}>3 ANS D'EXPÉRIENCE</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(139,26,92,0.3)", backdropFilter: "blur(8px)", padding: "1.5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem", textAlign: "center" }}>
          {[
            { n: "3+", l: "Ans d'expérience" },
            { n: "100%", l: "Confidentialité" },
            { n: "24h", l: "Délai de réponse" },
            { n: "∞", l: "Disponibilité" },
          ].map((s) => (
            <div key={s.l}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "#fff", margin: 0 }}>{s.n}</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", margin: 0 }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Travailler ensemble ──────────────────────────────────────────────────────

function About() {
  return (
    <section style={{ background: "#FDF6F0", padding: "100px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
        <FadeIn direction="right">
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#8B1A5C", marginBottom: "2rem", fontWeight: 400 }}>
              Travailler ensemble
            </h2>
            <div style={{ width: 60, height: 3, background: "#8B1A5C", borderRadius: 2, marginBottom: "2rem" }} />
            {[
              "Cette collaboration repose sur la confiance, la communication et l'efficacité.",
              "Vous pourriez alors optimiser votre temps, et développer efficacement votre entreprise.",
              "L'objectif est de vous assister dans la gestion quotidienne de vos tâches administratives et organisationnelles.",
              "Parce qu'une entreprise bien secondée, c'est une entreprise qui avance plus vite et plus loin.",
            ].map((t, i) => (
              <p key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: i === 1 ? "#8B1A5C" : "#5C3A4A", lineHeight: 1.9, marginBottom: "1rem", fontStyle: i === 1 ? "italic" : "normal" }}>
                {t}
              </p>
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.15}>
          <div style={{ position: "relative" }}>
            <div style={{
              width: "100%", aspectRatio: "4/5", borderRadius: "12px", overflow: "hidden",
              background: "#F2D7E5", boxShadow: "20px 20px 0 #F2D7E5",
            }}>
              <img src="/chris2.jpg" alt="Christiane au travail"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                onError={e => {
                  e.target.style.display = "none";
                  e.target.parentElement.style.display = "flex";
                  e.target.parentElement.style.alignItems = "center";
                  e.target.parentElement.style.justifyContent = "center";
                  e.target.parentElement.innerHTML = '<span style="font-size:5rem">💼</span>';
                }}
              />
            </div>
            {/* Logo HT overlay */}
            <div style={{ position: "absolute", top: -20, right: -20, background: "#fff", borderRadius: 12, padding: "12px 16px", boxShadow: "0 4px 20px rgba(139,26,92,0.15)", textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 900, color: "#8B1A5C", letterSpacing: "0.05em", lineHeight: 1 }}>CR</div>
              <div style={{ fontSize: "0.5rem", letterSpacing: "0.15em", color: "#B5477A", textTransform: "uppercase", marginTop: 2 }}>Assistante<br/>Virtuelle</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="services" style={{ background: "#C9748F", padding: "100px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#fff", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
              MES SERVICES
            </h2>
            <div style={{ width: 60, height: 3, background: "rgba(255,255,255,0.5)", borderRadius: 2, margin: "0 auto 1rem" }} />
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "rgba(255,255,255,0.85)" }}>
              Des solutions complètes pour propulser votre activité
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
          {SERVICES.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.12}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }}
                style={{ background: "#FDF6F0", borderRadius: 20, padding: "2.5rem 2rem", height: "100%", boxShadow: "0 8px 32px rgba(139,26,92,0.15)" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{s.icon}</div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8B1A5C", marginBottom: "0.5rem" }}>
                  {s.subtitle}
                </p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "#2C1A26", marginBottom: "1.5rem", fontWeight: 700 }}>
                  {s.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.5rem" }}>
                  {s.items.map((it) => (
                    <li key={it} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", color: "#5C3A4A", padding: "4px 0", display: "flex", alignItems: "baseline", gap: "8px" }}>
                      <span style={{ color: "#8B1A5C", fontWeight: 700 }}>·</span> {it}
                    </li>
                  ))}
                </ul>
                <div style={{ borderTop: "1px solid #F2D7E5", paddingTop: "1rem" }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8B1A5C" }}>
                    {s.tools}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pourquoi moi ─────────────────────────────────────────────────────────────

function WhyMe() {
  return (
    <section id="pourquoi-moi" style={{ background: "#FDF6F0", padding: "100px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#2C1A26", textAlign: "center", marginBottom: "3rem", fontWeight: 400 }}>
            Pourquoi me choisir ?
          </h2>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "4rem" }}>
          {/* Left arch */}
          <FadeIn direction="right" delay={0.1}>
            <div style={{
              background: "#8B1A5C", borderRadius: "140px 140px 20px 20px",
              padding: "3rem 2.5rem", color: "#fff", textAlign: "center",
              boxShadow: "0 12px 40px rgba(139,26,92,0.25)",
            }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", fontWeight: 700, color: "#fff", margin: "0 0 0.5rem" }}>3 ans</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.9)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
                dans l'Assistance Virtuelle.<br />
                Spécialisée en tant qu'assistante administrative
              </p>
              <div style={{ width: 40, height: 2, background: "rgba(255,255,255,0.4)", margin: "1.5rem auto" }} />
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.9)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
                Titulaire d'une Licence en<br /><strong>Administration des affaires</strong>
              </p>
              <div style={{ width: 40, height: 2, background: "rgba(255,255,255,0.4)", margin: "1.5rem auto" }} />
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
                Je tiens à la confidentialité de mes clients et je ferai de même pour vous.
              </p>
            </div>
          </FadeIn>

          {/* Right arch */}
          <FadeIn direction="left" delay={0.15}>
            <div style={{
              background: "#F2D7E5", borderRadius: "140px 140px 20px 20px",
              padding: "3rem 2.5rem", textAlign: "center",
              boxShadow: "0 12px 40px rgba(139,26,92,0.1)",
            }}>
              <div style={{ marginBottom: "2rem" }}>
                {VALUES.map((v) => (
                  <div key={v.label} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "1.2rem", textAlign: "left" }}>
                    <span style={{ color: "#8B1A5C", fontWeight: 700, fontSize: "1.1rem", marginTop: 2 }}>✓</span>
                    <div>
                      <strong style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#2C1A26" }}>{v.label} : </strong>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "#5C3A4A" }}>{v.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: "1px solid #D4A0BB", paddingTop: "1.5rem" }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: "#8B1A5C", marginBottom: "1rem" }}>Mes Valeurs</p>
                {MES_VALEURS.map((v) => (
                  <p key={v.label} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", color: "#5C3A4A", margin: "0.3rem 0" }}>
                    {v.icon} {v.label}
                  </p>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Photo chris3 */}
        <FadeIn delay={0.2}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: 280, height: 320, borderRadius: "140px 140px 20px 20px", overflow: "hidden", border: "4px solid #F2D7E5", boxShadow: "0 12px 40px rgba(139,26,92,0.15)" }}>
              <img src="/chris3.jpg" alt="Christiane Randrianjafy"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                onError={e => { e.target.parentElement.innerHTML = '<div style="width:100%;height:100%;background:#F2D7E5;display:flex;align-items:center;justify-content:center;font-size:4rem">👩‍💼</div>'; }} />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Offre ────────────────────────────────────────────────────────────────────

function Offre() {
  return (
    <section id="offre" style={{ background: "#FDF6F0", padding: "100px 0", borderTop: "1px solid #F2D7E5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#8B1A5C", textAlign: "center", marginBottom: "3.5rem", fontWeight: 400, fontStyle: "italic" }}>
            Offre
          </h2>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <FadeIn direction="right" delay={0.1}>
            <div style={{ borderRadius: 16, overflow: "hidden", background: "#F2D7E5", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* Laptop illustration placeholder */}
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <span style={{ fontSize: "5rem" }}>💻</span>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", color: "#8B1A5C", marginTop: "1rem", fontSize: "1rem" }}>Espace de travail professionnel</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.15}>
            <div>
              <motion.div whileHover={{ scale: 1.02 }} style={{
                background: "#8B1A5C", borderRadius: 20, padding: "3rem",
                textAlign: "center", marginBottom: "2rem",
                boxShadow: "0 12px 40px rgba(139,26,92,0.25)",
              }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 700, color: "#fff", margin: "0 0 0.5rem" }}>10 €<span style={{ fontSize: "1.2rem", fontWeight: 400 }}>/heure</span></p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,255,255,0.9)", fontSize: "1rem", letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>
                  Tarif transparent & flexible
                </p>
              </motion.div>

              <div style={{ background: "#F2D7E5", borderRadius: 16, padding: "2rem", textAlign: "center" }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8B1A5C", lineHeight: 2 }}>
                  VOUS AUREZ UN SERVICE PROFESSIONNEL ET DES RÉSULTATS VISIBLES SUR VOTRE ACTIVITÉ
                </p>
              </div>

              <motion.a href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                style={{ display: "block", marginTop: "1.5rem", padding: "16px", borderRadius: 50, background: "#8B1A5C", color: "#fff", textAlign: "center", textDecoration: "none", fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.05em" }}>
                Commencer maintenant →
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" style={{ background: "#FDF6F0", padding: "100px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
        <FadeIn direction="right">
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#8B1A5C", marginBottom: "2.5rem", fontWeight: 400 }}>
              Travaillons ensemble
            </h2>

            {[
              { icon: "✉️", label: "Mail", value: "Chrisvictoria36@gmail.com", href: "mailto:Chrisvictoria36@gmail.com" },
              { icon: "📱", label: "WhatsApp", value: "+261 38 159 3749 / +261 32 513 3860", href: "tel:+261381593749" },
              { icon: "💼", label: "LinkedIn", value: "Christiane Randrianjafy", href: "https://www.linkedin.com/in/christiane-randrianjafy/" },
            ].map((c) => (
              <motion.a key={c.label} href={c.href} whileHover={{ x: 6 }}
                style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: "1.5rem", textDecoration: "none", padding: "1rem 1.5rem", background: "#F9EEF4", borderRadius: 12, border: "1px solid #F2D7E5" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#8B1A5C", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8B1A5C", margin: 0 }}>{c.label}</p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", color: "#8B1A5C", margin: 0, textDecoration: "underline" }}>{c.value}</p>
                </div>
                <span style={{ marginLeft: "auto", color: "#8B1A5C" }}>→</span>
              </motion.a>
            ))}

            <motion.a href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{ display: "inline-block", marginTop: "1rem", padding: "14px 36px", borderRadius: 50, background: "#2C1A26", color: "#fff", textDecoration: "none", fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              CONTACTEZ MOI
            </motion.a>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.15}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: 300, height: 380, borderRadius: "150px 150px 20px 20px", overflow: "hidden", boxShadow: "0 12px 40px rgba(139,26,92,0.2)", border: "4px solid #F2D7E5" }}>
              <img src="/chris3.jpg" alt="Christiane Randrianjafy"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                onError={e => { e.target.parentElement.innerHTML = '<div style="width:100%;height:100%;background:#F2D7E5;display:flex;align-items:center;justify-content:center;font-size:5rem">👩‍💼</div>'; }} />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ background: "#8B1A5C", padding: "2.5rem 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}>CR</span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", marginLeft: "1rem" }}>Christiane Randrianjafy — Assistante Virtuelle</span>
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          {NAV.map((l) => (
            <a key={l} href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyMe />
      <Offre />
      <Contact />
      <Footer />
    </div>
  );
}
