import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--text)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 24px",
      }}
    >
      <div style={{ fontSize: "clamp(80px, 18vw, 160px)", fontWeight: 800, lineHeight: 1 }}>
        404
      </div>
      <h1 style={{ fontSize: "clamp(24px, 4vw, 44px)", margin: "16px 0 12px" }}>
        Page not found
      </h1>
      <p style={{ color: "var(--text3)", maxWidth: 360, marginBottom: 32 }}>
        The page you're looking for doesn't exist or may have moved.
      </p>
      <a href="/" className="btn-grad">
        Back to services
      </a>
    </div>
  );
}
