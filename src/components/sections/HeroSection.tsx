import { Lock, Rocket, Zap, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import GradientOrbs from "@/components/layout/GradientOrbs";
import HeroCockpit from "@/components/sections/HeroCockpit";
import { VALUE_PROPS } from "@/constants";

const PROP_ICONS = [Rocket, Zap, Users] as const;

export default function HeroSection() {
  const stripRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "128px 6vw 92px",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 0%, rgba(99,102,241,0.16), transparent 34%), radial-gradient(circle at 85% 18%, rgba(6,182,212,0.10), transparent 28%), var(--bg)",
      }}
    >
      <GradientOrbs variant="hero" />
      <div className="hero-grid" />

      <div style={{ maxWidth: 1240, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        {/* Two-column layout: text left, cockpit right */}
        <div
          className="max-nav:!grid-cols-1"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "start",
            marginBottom: 68,
          }}
        >
          <div>
            <div
              className="grad-border-anim hero-in"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--mono)",
                fontSize: 11,
                color: "var(--text2)",
                borderRadius: 999,
                padding: "7px 13px",
                marginBottom: 30,
                letterSpacing: "0.08em",
                animationDelay: "0ms",
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "var(--g2)",
                  animation: "pulse-dot 2s infinite",
                  flexShrink: 0,
                }}
              />
              AI-Powered Product Engineering
            </div>

            <h1
              className="font-display"
              style={{
                fontSize: "clamp(42px, 6.4vw, 82px)",
                fontWeight: 760,
                lineHeight: 0.98,
                letterSpacing: "-3.4px",
                color: "var(--text)",
                marginBottom: 26,
              }}
            >
              {["Build", "Production-Grade", "Solutions"].map((word, i) => (
                <span
                  key={word}
                  className="word-in"
                  style={{ animationDelay: `${150 + i * 65}ms`, marginRight: "0.25em" }}
                >
                  {word}
                </span>
              ))}
              <br />
              <span className="gt-anim word-in" style={{ animationDelay: "480ms" }}>
                Faster.
              </span>
            </h1>

            <p
              className="hero-in"
              style={{
                fontSize: 18,
                color: "var(--text)",
                maxWidth: 590,
                lineHeight: 1.7,
                marginBottom: 10,
                fontWeight: 400,
                opacity: 0.88,
                animationDelay: "600ms",
              }}
            >
              We help startups and businesses turn product ideas into scalable software using modern product engineering and AI-accelerated development.
            </p>
            <p className="hero-in" style={{ fontSize: 14, color: "var(--text2)", marginBottom: 34, fontWeight: 400, animationDelay: "650ms" }}>
              MVPs, SaaS platforms, workflow systems, AI integrations, and production launches.
            </p>

            <div className="hero-in" style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", marginBottom: 12, animationDelay: "720ms" }}>
              <a href="#contact" className="btn-hero">
                Discuss Your Product Idea{" "}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#process" className="btn-hero-o">
                Plan Your MVP Build →
              </a>
            </div>
            <div className="hero-in" style={{ display: "flex", flexDirection: "column", gap: 6, animationDelay: "780ms" }}>
              <p style={{ fontSize: 12, color: "var(--text3)", fontWeight: 400, fontFamily: "var(--mono)", margin: 0 }}>
                Clear scope · Practical architecture · Built for real usage
              </p>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 8, maxWidth: 560 }}>
                <Lock size={12} color="#22c55e" strokeWidth={2} style={{ flexShrink: 0, marginTop: 3 }} />
                <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "#22c55e", letterSpacing: "0.01em", lineHeight: 1.6, whiteSpace: "nowrap" }}>
                  Enterprise security · Private codebase · HIL review · No model training
                </span>
              </div>
            </div>
          </div>

          <div className="hero-in pt-[62px] max-nav:!pt-0" style={{ animationDelay: "850ms" }}>
            <HeroCockpit />
          </div>

        </div>

        {/* Value-prop strip */}
        <div
          ref={stripRef}
          className="rev hero-value-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 18,
            overflow: "hidden",
            background: "rgba(255,255,255,0.055)",
            gap: 1,
            boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
          }}
        >
          {VALUE_PROPS.map((s, i) => {
            const Icon = PROP_ICONS[i];
            return (
              <div key={s.n} style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.018))", padding: "22px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 6, background: "linear-gradient(135deg, rgba(99,102,241,0.14), rgba(168,85,247,0.10))", border: "1px solid rgba(99,102,241,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={13} color="#8b8ff7" strokeWidth={1.8} />
                  </div>
                  <div className="gt3" style={{ fontSize: 13, fontWeight: 700, letterSpacing: -0.3, lineHeight: 1.2 }}>
                    {s.n}
                  </div>
                </div>
                <div style={{ fontSize: 12, color: "var(--text2)", lineHeight: 1.5, fontWeight: 400 }}>
                  {s.l}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
