import { categories } from "@/data/categories";
import { WHATSAPP_URL } from "@/lib/constants";

export default function ProductsPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Products</span>
          <h1 className="section-title">Complete Product Catalogue</h1>
          <p className="section-desc">
            80+ products across 8 categories. Authorized Pradeep, Aeonic &amp; iBrew dealer.
            All products 100% genuine with manufacturer warranty.
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
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{fontSize:'13px', padding:'8px 16px'}}>
                  Enquire Now →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div style={{textAlign:'center', marginTop:'56px'}}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg">
            WhatsApp for Product Enquiry
          </a>
        </div>
      </div>
    </div>
  );
}
