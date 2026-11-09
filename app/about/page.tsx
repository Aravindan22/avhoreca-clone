import { WHATSAPP_URL, ADDRESS, PHONE_DISPLAY, PHONE_NUMBER } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section" style={{background:'var(--surface-2)'}}>
        <div className="container">
          <div style={{maxWidth:'720px'}}>
            <span className="section-label">About Us</span>
            <h1 className="section-title" style={{textAlign:'left', marginBottom:'20px'}}>
              Hyderabad&apos;s Trusted Commercial Kitchen Equipment Partner
            </h1>
            <p style={{fontSize:'17px', color:'var(--text-secondary)', lineHeight:'1.75'}}>
              AV Horeca Solutions was established in 2020 in Nagole, Hyderabad, with a simple mission:
              supply genuine, authorized commercial kitchen equipment to restaurants, hotels and cloud
              kitchens — with real after-sales support. No grey market. No disappearing act after the sale.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'64px', alignItems:'center'}}>
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title" style={{textAlign:'left', marginBottom:'20px'}}>Authorized. Genuine. Since 2020.</h2>
              <div style={{display:'flex', flexDirection:'column', gap:'16px', fontSize:'15px', color:'var(--text-secondary)', lineHeight:'1.75'}}>
                <p>
                  Founded in Nagole, Hyderabad in 2020, we started as a focused distributor for Pradeep
                  Stainless India — one of India&apos;s most trusted commercial kitchen equipment brands. 
                  Over the years, we expanded to become authorized dealers and service centres for Aeonic
                  (commercial induction) and iBrew (beverage equipment).
                </p>
                <p>
                  Today, we serve 500+ restaurants, hotels, cloud kitchens, and catering businesses across
                  Telangana, Andhra Pradesh, and pan-India. Our display centre in Nagole lets customers
                  touch, test, and inspect equipment before they buy — something rare in this industry.
                </p>
                <p>
                  What sets us apart is what happens <em>after</em> the sale. As an authorized service
                  centre for all three brands, we arrange certified technicians and genuine spare parts.
                  We don&apos;t disappear. That&apos;s our reputation, and we guard it.
                </p>
              </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
              {[
                { year: '2020', event: 'Founded in Nagole, Hyderabad. Authorized Pradeep Channel Partner.' },
                { year: '2021', event: 'Expanded to Aeonic induction equipment dealership.' },
                { year: '2022', event: 'iBrew authorized dealer & service centre status achieved.' },
                { year: '2023', event: 'Crossed 300+ customers. Display centre expanded to 500+ products.' },
                { year: '2024', event: 'Pan-India shipping launched. 400+ customers milestone.' },
                { year: '2026', event: '500+ customers served. Google rating: 5.0 stars, 74+ reviews.' },
              ].map((item) => (
                <div key={item.year} style={{display:'flex', gap:'20px', alignItems:'flex-start'}}>
                  <span style={{fontFamily:'Playfair Display, serif', fontWeight:'700', fontSize:'16px', color:'var(--ember)', minWidth:'40px', flexShrink:0}}>{item.year}</span>
                  <div style={{borderLeft:'2px solid var(--border)', paddingLeft:'20px', fontSize:'14px', color:'var(--text-secondary)', paddingBottom:'8px'}}>{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand partnerships */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Partnerships</span>
            <h2 className="section-title">Authorized by the Best</h2>
          </div>
          <div className="brand-partners-row">
            {[
              { name:'PRADEEP', desc:'Authorized Channel Partner for Pradeep Stainless India Pvt Ltd. Full range of commercial cookware, electrical equipment and buffet products.', badge:'Channel Partner' },
              { name:'AEONIC', desc:'Authorized Dealer & Service Centre for Aeonic commercial induction cookers — table-top to 3-phase bulk systems.', badge:'Dealer & Service Centre' },
              { name:'iBREW', desc:'Authorized Dealer & Service Centre for iBrew commercial tea, coffee and milk boiler equipment.', badge:'Dealer & Service Centre' },
            ].map((b) => (
              <div key={b.name} className="brand-partner-card" style={{textAlign:'left'}}>
                <div className="bp-name">{b.name}</div>
                <p style={{fontSize:'13px', color:'var(--text-secondary)', lineHeight:'1.65', margin:'10px 0 16px'}}>{b.desc}</p>
                <div className="bp-badge"><span className="bp-check">✓</span> {b.badge}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="section">
        <div className="container" style={{textAlign:'center'}}>
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Visit Our Display Centre</h2>
          <p className="section-desc" style={{marginBottom:'40px'}}>{ADDRESS.full}<br/>{ADDRESS.hours}</p>
          <div style={{display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap'}}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg">WhatsApp Us</a>
            <a href={`tel:${PHONE_NUMBER}`} className="btn btn-ghost-dark btn-lg">{PHONE_DISPLAY}</a>
            <a href={ADDRESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">Get Directions →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
