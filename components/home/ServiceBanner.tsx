import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";

const serviceTags = [
  "Pradeep Service",
  "iBrew Service",
  "Aeonic Service",
  "Genuine Spare Parts",
  "On-Site Visits",
];

export default function ServiceBanner() {
  return (
    <section className="section sec-dark">
      <div className="container">
        <div className="service-banner-grid">
          <div className="service-copy">
            <span className="section-label-dark">Authorized Service Centre</span>
            <h2 className="service-title">
              Equipment Not Working? We Get It Fixed. Right.
            </h2>
            <p className="service-desc">
              Authorized service centre for Pradeep, iBrew and Aeonic. We arrange
              the manufacturer&apos;s certified technicians and genuine spare parts.
              Transparent pricing — quote before work starts. Fast turnaround.
            </p>
            <div className="service-tags">
              {serviceTags.map((tag) => (
                <span key={tag} className="service-tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="service-ctas">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa"
            >
              Book Service on WhatsApp
            </a>
            <Link href="/about" className="btn btn-ghost-light">
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
