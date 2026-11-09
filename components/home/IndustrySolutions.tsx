import { industrySolutions } from "@/data/industries";

export default function IndustrySolutions() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Industry Solutions</span>
          <h2 className="section-title">Built for Your Type of Kitchen</h2>
          <p className="section-desc">
            Same equipment. Different needs. Expert-curated setups for restaurants,
            cloud kitchens and hotels.
          </p>
        </div>
        <div className="industry-grid">
          {industrySolutions.map((s) => (
            <div key={s.id} className="industry-card">
              <h3 className="industry-card-title">{s.title}</h3>
              <p className="industry-card-desc">{s.description}</p>
              <a href={s.href} className="industry-cta">{s.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
