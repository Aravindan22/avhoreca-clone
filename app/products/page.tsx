import { categories } from "@/data/categories";
import { WHATSAPP_URL, BUSINESS_NAME, DEALERSHIP_TITLE } from "@/lib/constants";

export default function ProductsPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{BUSINESS_NAME} HORECA Catalogue</span>
          <h1 className="section-title">Commercial Kitchen &amp; Beverage Equipment</h1>
          <p className="section-desc">
            {DEALERSHIP_TITLE}. Complete range of commercial kitchen equipment, induction systems, PUF insulated milk boilers, tea/coffee brewers, and NSF-certified cookware.
          </p>
        </div>
        <div className="cats-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="cat-card" id={cat.id}>
              {cat.badge && <span className="cat-badge">{cat.badge}</span>}
              <h2 className="cat-name">{cat.name}</h2>
              <p className="cat-desc">{cat.description}</p>
              {cat.fastMoving.length > 0 && (
                <div className="cat-fast-moving">
                  <span className="fast-moving-label">Popular Models:</span>
                  <div className="fast-moving-chips">
                    {cat.fastMoving.map((item) => (
                      <span key={item} className="chip">{item}</span>
                    ))}
                  </div>
                </div>
              )}
              <div className="cat-footer">
                <div className="cat-brands">
                  {cat.brands.map((b) => (
                    <span key={b} className="brand-badge">{b}</span>
                  ))}
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ fontSize: "13px", padding: "8px 16px" }}
                >
                  Enquire Quote →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa btn-lg"
          >
            WhatsApp Salem Showroom for Full Price List
          </a>
        </div>
      </div>
    </div>
  );
}
