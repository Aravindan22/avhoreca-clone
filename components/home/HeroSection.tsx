import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container">
        <div className="hero-grid">
          {/* Left — Copy */}
          <div className="hero-copy fade-up">
            <div className="hero-eyebrows">
              <span className="eyebrow-pill">Since 2020</span>
              <span className="eyebrow-pill">Nagole, Hyderabad</span>
            </div>
            <h1 className="hero-h1">
              Commercial Kitchen Equipment You Can <em>Truly Trust</em>
            </h1>
            <p className="hero-desc">
              Authorized dealer for Pradeep, Aeonic &amp; iBrew. Complete range of
              beverage equipment, induction cookers, electrical machines, pots &amp;
              pans and buffet products. Serving 500+ restaurants, hotels and cafés
              across India. Headquartered in Hyderabad — primary markets AP &amp;
              Telangana, shipping Pan India.
            </p>
            <div className="brand-pills">
              <span className="brand-label">Authorized for:</span>
              <span className="brand-pill">PRADEEP</span>
              <span className="brand-pill">AEONIC</span>
              <span className="brand-pill">iBREW</span>
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
                Browse All Products →
              </Link>
            </div>
            <div className="hero-stats">
              {[
                { num: "500+", label: "Happy Customers" },
                { num: "3", label: "Authorized Brands" },
                { num: "6yr", label: "In Business" },
                { num: "2", label: "States Covered" },
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
              <div className="hero-card-badge">Hero Product</div>
              <div className="hero-product-image">
                <div className="product-img-placeholder">
                  <span className="product-emoji">🫖</span>
                </div>
              </div>
              <div className="hero-card-content">
                <h3 className="hero-card-title">Insulated Milk Boiler</h3>
                <p className="hero-card-desc">
                  PUF double-wall insulation — milk stays hot for 6+ hours.
                  Saves electricity daily. Dispenses hot milk AND hot water.
                  Hyderabad&apos;s best-selling commercial beverage machine.
                </p>
                <ul className="hero-card-bullets">
                  <li>Milk stays hot 6+ hours — no reheating ever</li>
                  <li>PUF insulation cuts electricity bills</li>
                  <li>Hot Milk + Hot Water from single dispenser</li>
                  <li>ISI certified — food grade safe</li>
                </ul>
                <div className="hero-card-models">
                  <span className="model-tag">111600 · 5L</span>
                  <span className="model-tag">111612 · 12L</span>
                  <span className="model-tag">111620 · 20L</span>
                  <span className="model-tag">111630 · 30L</span>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-full"
                >
                  Enquire Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
