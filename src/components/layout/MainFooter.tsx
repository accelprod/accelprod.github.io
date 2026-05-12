export default function MainFooter() {
  return (
    <footer
      className="footer-fade"
      style={{
        background: "var(--bg)",
        padding: "50px 6vw 28px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient orb */}
      <div style={{
        position: "absolute",
        bottom: -60,
        left: "50%",
        transform: "translateX(-50%)",
        width: 500,
        height: 200,
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: -20,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "clamp(80px, 14vw, 160px)",
          fontWeight: 800,
          fontFamily: "'Space Grotesk', system-ui, sans-serif",
          letterSpacing: "-4px",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(99,102,241,0.07)",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        ACCELPROD
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 36,
            paddingBottom: 36,
            borderBottom: "1px solid var(--b)",
            marginBottom: 24,
          }}
          className="max-nav:grid-cols-1"
        >
          {/* Brand */}
          <div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>
              Accel<span className="gt2">prod</span>
            </div>
            <div style={{ fontSize: 13, color: "var(--text3)", lineHeight: 1.6, marginBottom: 6, fontWeight: 400 }}>
              AI-powered product engineering.
            </div>
            <div style={{ fontSize: 13, color: "var(--text3)", lineHeight: 1.6, marginBottom: 12, fontWeight: 400 }}>
              Accelprod is an AI-powered product engineering company helping startups and businesses build scalable modern software faster.
            </div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text3)", marginBottom: 12 }}>
              Chennai, Tamil Nadu, India
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { label: "Mithun", href: "https://linkedin.com/in/mithunchandar" },
                { label: "Ramachandran", href: "https://linkedin.com/in/ramachandrank" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text3)", textDecoration: "none", display: "flex", alignItems: "center", gap: 4, transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text3)")}
                >
                  ↗ {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.1em", color: "var(--text3)", marginBottom: 14, textTransform: "uppercase" }}>
              Services
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { href: "#what-we-build", label: "Product MVPs" },
                { href: "#what-we-build", label: "SaaS platforms" },
                { href: "#what-we-build", label: "AI agents" },
                { href: "#what-we-build", label: "Workflow automation" },
              ].map((s) => (
                <li key={s.label} style={{ marginBottom: 9 }}>
                  <a href={s.href} style={{ fontSize: 13, color: "var(--text2)", textDecoration: "none", fontWeight: 400 }}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.1em", color: "var(--text3)", marginBottom: 14, textTransform: "uppercase" }}>
              Company
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { href: "#process", label: "Our process" },
                { href: "#projects", label: "Projects" },
                { href: "#about", label: "About" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href} style={{ marginBottom: 9 }}>
                  <a href={l.href} style={{ fontSize: 13, color: "var(--text2)", textDecoration: "none", fontWeight: 400 }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.1em", color: "var(--text3)", marginBottom: 14, textTransform: "uppercase" }}>
              Contact
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { href: "#contact", label: "Discuss your product idea" },
                { href: "#contact", label: "Book a consult" },
                { href: "mailto:sales@accelprod.com", label: "sales@accelprod.com" },
              ].map((l) => (
                <li key={l.label} style={{ marginBottom: 9 }}>
                  <a href={l.href} style={{ fontSize: 13, color: "var(--text2)", textDecoration: "none", fontWeight: 400 }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text3)", textAlign: "center" }}>
          © 2026 Accelprod · AI-powered product engineering · Chennai, India
        </div>
      </div>
    </footer>
  );
}
