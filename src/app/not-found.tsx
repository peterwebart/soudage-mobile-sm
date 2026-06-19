import Link from "next/link";

import "@/app/globals.css";

/**
 * Global not-found. Because the site has no top-level app/layout (the <html>
 * lives in /[lang]/layout for correct per-locale lang), this boundary must
 * render its own document. Bilingual, since it sits outside the locale tree.
 */
export default function NotFound() {
  return (
    <html lang="fr">
      <body>
        <main
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            padding: "40px 24px",
          }}
        >
          <div className="wrap">
            <span className="idx">404</span>
            <h1
              className="section-title"
              style={{ fontSize: "clamp(1.8rem,5vw,3rem)", margin: "14px 0 12px" }}
            >
              Page introuvable · Page not found
            </h1>
            <p className="lede" style={{ margin: "0 auto 28px" }}>
              La page demandée n&apos;existe pas ou a été déplacée.
              <br />
              The page you requested doesn&apos;t exist or has moved.
            </p>
            <Link className="btn btn-primary" href="/fr">
              Retour à l&apos;accueil · Back home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
