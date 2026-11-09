import Link from "next/link";
import { guides } from "@/data/industries";

export default function ResourceGuides() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Guides & Resources</span>
          <h2 className="section-title">Learn Before You Buy</h2>
          <p className="section-desc">
            In-depth guides from six years and 500+ kitchen setups.
          </p>
        </div>
        <div className="guides-grid">
          {guides.map((g) => (
            <Link
              key={g.id}
              href={g.href}
              className={`guide-card ${g.highlight ? "guide-card-highlight" : ""}`}
            >
              <div className="guide-meta">
                <span className="guide-badge">{g.badge}</span>
                {g.readTime && <span className="guide-read-time">{g.readTime}</span>}
              </div>
              <h3 className="guide-title">{g.title}</h3>
              {g.description && <p className="guide-desc">{g.description}</p>}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
