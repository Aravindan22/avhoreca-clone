import Link from "next/link";
import { WHATSAPP_URL, BUSINESS_NAME } from "@/lib/constants";

const serviceTags = [
  "Pradeep Equipment Sizing",
  "Induction Setup Guidance",
  "Insulated Boilers",
  "Showroom Demonstrations",
  "Salem & 12 Districts Support",
];

export default function ServiceBanner() {
  return (
    <section className="section sec-dark">
      <div className="container">
        <div className="service-banner-grid">
          <div className="service-copy">
            <span className="section-label-dark">Authorised Dealer Service</span>
            <h2 className="service-title">
              Planning a New Kitchen or Upgrading Your Equipment?
            </h2>
            <p className="service-desc">
              {BUSINESS_NAME} is here to assist you with genuine Pradeep products, sizing recommendations, and after-sales coordination. Visit our Salem showroom or request an instant quotation on WhatsApp.
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
              Consult on WhatsApp
            </a>
            <Link href="/about" className="btn btn-ghost-light">
              About DSK Enterprises →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
