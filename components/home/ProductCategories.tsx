import { categories } from "@/data/categories";
import { WHATSAPP_URL } from "@/lib/constants";

export default function ProductCategories() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Complete Range</span>
          <h2 className="section-title">
            Commercial Kitchen Equipment Built for Every Operation
          </h2>
          <p className="section-desc">
            Authorized channel partner for Pradeep and dealer for Aeonic and iBrew.
            Everything your kitchen needs from beverage equipment to bulk cooking solutions.
          </p>
        </div>

        <div className="cats-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="cat-card">
              {cat.badge && (
                <span className="cat-badge">{cat.badge}</span>
              )}
              <h3 className="cat-name">{cat.name}</h3>
              <p className="cat-desc">{cat.description}</p>
              {cat.fastMoving.length > 0 && (
                <div className="cat-fast-moving">
                  <span className="fast-moving-label">Fast Moving:</span>
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
                  className="cat-enquire"
                >
                  Enquire Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
