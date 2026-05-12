import { Bot, ClipboardList, GitBranch, Layers, Rocket, Send } from "lucide-react";

const PIPELINE = [
  { label: "Idea", icon: ClipboardList },
  { label: "Scope", icon: Layers },
  { label: "Architecture", icon: GitBranch },
  { label: "Build", icon: Rocket },
  { label: "Launch", icon: Send },
] as const;

export default function HeroCockpit() {
  return (
    <div
      className="ai-cockpit premium-panel"
      style={{
        position: "relative",
        borderRadius: 28,
        overflow: "hidden",
        background:
          "radial-gradient(circle at 20% 0%, rgba(99,102,241,0.18), transparent 34%), radial-gradient(circle at 82% 16%, rgba(6,182,212,0.13), transparent 30%), linear-gradient(180deg, rgba(14,18,31,0.98), rgba(5,7,12,0.96))",
        boxShadow: "0 38px 120px rgba(0,0,0,0.48), 0 0 0 1px rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "36px 36px", maskImage: "linear-gradient(to bottom, black, transparent 88%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(129,140,248,0.95), rgba(6,182,212,0.8), transparent)" }} />

      <div style={{ position: "relative", padding: 28 }}>
        <div style={{ fontSize: 25, color: "#f8fafc", fontWeight: 740, letterSpacing: "-0.7px", lineHeight: 1.14, marginBottom: 24, textAlign: "center" }}>
          Idea → Launch, accelerated.
        </div>

        <div
          style={{
            borderRadius: 22,
            padding: 22,
            background: "rgba(5,8,16,0.76)",
            border: "1px solid rgba(99,102,241,0.18)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, borderRadius: 999, padding: "9px 12px", marginBottom: 16, background: "linear-gradient(90deg, rgba(99,102,241,0.18), rgba(6,182,212,0.12))", border: "1px solid rgba(129,140,248,0.24)", color: "#c4b5fd", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.04em" }}>
            <Bot size={13} color="#bfdbfe" strokeWidth={1.8} />
            AI-accelerated delivery layer
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10, marginBottom: 18 }} className="max-nav:!grid-cols-5">
            {PIPELINE.map(({ label, icon: Icon }, i) => (
              <div key={label} style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 9, padding: "16px 8px", borderRadius: 14, background: "rgba(15,23,42,0.72)", border: "1px solid rgba(148,163,184,0.12)" }}>
                {i < PIPELINE.length - 1 && (
                  <span style={{ position: "absolute", top: 31, right: -10, width: 20, height: 1, background: "linear-gradient(90deg, rgba(99,102,241,0.6), rgba(6,182,212,0.2))" }} />
                )}
                <div style={{ width: 38, height: 38, borderRadius: 12, display: "grid", placeItems: "center", background: "linear-gradient(135deg, rgba(99,102,241,0.18), rgba(6,182,212,0.10))", border: "1px solid rgba(129,140,248,0.24)" }}>
                  <Icon size={16} color="#bfdbfe" strokeWidth={1.8} />
                </div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "#cbd5e1", textAlign: "center", lineHeight: 1.25 }}>{label}</div>
              </div>
            ))}
          </div>

          <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.65, margin: 0 }}>
            Scoping, architecture, build, and launch supported by AI-accelerated engineering.
          </p>
        </div>
      </div>
    </div>
  );
}
