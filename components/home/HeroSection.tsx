import Link from "next/link";
import { WHATSAPP_URL, BUSINESS_NAME, BRAND_NAME, DEALERSHIP_TITLE, CORE_OFFERINGS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container">
        <div className="hero-grid">
          {/* Left — Copy */}
          <div className="hero-copy fade-up">
            <div className="hero-eyebrows">
              <span className="eyebrow-pill eyebrow-pill-accent">Authorised Dealer</span>
              <span className="eyebrow-pill">Pradeep Stainless Kitchen</span>
              <span className="eyebrow-pill">Salem, Tamil Nadu</span>
            </div>
            <h1 className="hero-h1">
              Complete HORECA Kitchen Solutions by <em>{BUSINESS_NAME}</em>
            </h1>
            <p className="hero-desc">
              Greetings from <strong>{BUSINESS_NAME} ({BRAND_NAME})</strong>! 🙏 As the {DEALERSHIP_TITLE}, we supply premium commercial kitchen equipment, energy-saving induction cooking systems, insulated milk boilers, tea/coffee brewers, and NSF-certified cookware. Whether you&apos;re starting a new kitchen or upgrading an existing one, we&apos;re here to help with quality products and expert guidance.
            </p>

            {/* Checklist of core offerings */}
            <div className="hero-checklist">
              {CORE_OFFERINGS.map((item) => (
                <div key={item} className="hero-check-item">
                  <span className="hero-check-icon">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="brand-pills">
              <span className="brand-label">Authorized For:</span>
              <span className="brand-pill">PRADEEP STAINLESS KITCHEN</span>
              <span className="brand-pill">12 TN DISTRICTS</span>
            </div>

            <div className="hero-ctas">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{flexShrink:0}}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Get Free Quote on WhatsApp
              </a>
              <Link href="/products" className="btn btn-ghost-dark">
                Browse HORECA Solutions →
              </Link>
            </div>

            <div className="hero-stats">
              {[
                { num: "12", label: "Authorized Districts" },
                { num: "100%", label: "Genuine Pradeep" },
                { num: "Salem", label: "Display Showroom" },
                { num: "Expert", label: "Kitchen Guidance" },
              ].map((s) => (
                <div key={s.label} className="hero-stat">
                  <span className="hero-stat-num">{s.num}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Showcase Card */}
          <div className="hero-card fade-up">
            <div className="hero-product-card">
              <div className="hero-card-badge">Featured Pradeep Product</div>
              <div className="hero-product-image">
                <div className="product-img-placeholder">
                  <span className="product-emoji">🫖</span>
                </div>
              </div>
              <div className="hero-card-content">
                <h3 className="hero-card-title">Commercial Insulated Milk Boiler</h3>
                <p className="hero-card-desc">
                  PUF double-wall insulation — keeps milk steaming hot for 6+ hours with zero burning. Drastically reduces electricity bills. Dispenses hot milk &amp; hot water through dedicated food-grade taps.
                </p>
                <ul className="hero-card-bullets">
                  <li>6+ hours heat retention without reheating</li>
                  <li>Food grade SS 304 construction</li>
                  <li>PUF thermal insulation cuts daily power cost</li>
                  <li>Dual dispenser for milk and boiling water</li>
                </ul>
                <div className="hero-card-models">
                  <span className="model-tag">5 Litres</span>
                  <span className="model-tag">12 Litres</span>
                  <span className="model-tag">20 Litres</span>
                  <span className="model-tag">30 Litres</span>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-full"
                >
                  Request Quote from Salem Showroom →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
