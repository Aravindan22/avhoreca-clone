import { WHATSAPP_URL, ADDRESS, PHONE_DISPLAY, PHONE_NUMBER, EMAIL } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div>
      <section className="section" style={{background:'var(--surface-2)'}}>
        <div className="container">
          <div style={{maxWidth:'640px'}}>
            <span className="section-label">Contact Us</span>
            <h1 className="section-title" style={{textAlign:'left', marginBottom:'16px'}}>Get in Touch</h1>
            <p style={{fontSize:'17px', color:'var(--text-secondary)'}}>
              WhatsApp us for the fastest response — we reply within 30 minutes during business hours.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'56px'}}>
            {/* Contact methods */}
            <div style={{display:'flex', flexDirection:'column', gap:'24px'}}>
              {[
                { icon:'💬', title:'WhatsApp (Fastest)', value:'WhatsApp for instant quote', href: WHATSAPP_URL, isExternal: true },
                { icon:'📞', title:'Phone', value: PHONE_DISPLAY, href:`tel:${PHONE_NUMBER}`, isExternal: false },
                { icon:'✉', title:'Email', value: EMAIL, href:`mailto:${EMAIL}`, isExternal: false },
                { icon:'📍', title:'Display Centre', value: ADDRESS.full, href: ADDRESS.mapsUrl, isExternal: true },
                { icon:'🕐', title:'Hours', value: ADDRESS.hours, href: null, isExternal: false },
              ].map((item) => (
                <div key={item.title} style={{display:'flex', gap:'16px', alignItems:'flex-start'}}>
                  <span style={{fontSize:'24px', flexShrink:0}}>{item.icon}</span>
                  <div>
                    <div style={{fontWeight:'700', fontSize:'14px', color:'var(--ink)', marginBottom:'4px'}}>{item.title}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.isExternal ? '_blank' : undefined}
                        rel={item.isExternal ? 'noopener noreferrer' : undefined}
                        style={{fontSize:'15px', color:'var(--ember)', fontWeight:'500'}}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span style={{fontSize:'15px', color:'var(--text-secondary)'}}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder + CTAs */}
            <div style={{display:'flex', flexDirection:'column', gap:'24px'}}>
              <div style={{
                background:'var(--surface-2)',
                border:'1px solid var(--border)',
                borderRadius:'var(--r-lg)',
                height:'260px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'column',
                gap:'12px',
              }}>
                <span style={{fontSize:'48px'}}>🗺️</span>
                <span style={{fontSize:'14px', color:'var(--text-muted)'}}>Nagole, Hyderabad – 500068</span>
                <a
                  href={ADDRESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Open in Google Maps →
                </a>
              </div>
              <div style={{
                background:'var(--ink)',
                borderRadius:'var(--r-lg)',
                padding:'28px',
                display:'flex',
                flexDirection:'column',
                gap:'16px',
              }}>
                <div style={{fontFamily:'Playfair Display, serif', fontSize:'20px', fontWeight:'700', color:'#fff'}}>
                  Quick Enquiry
                </div>
                <p style={{fontSize:'14px', color:'rgba(240,237,230,0.65)', lineHeight:'1.7'}}>
                  Tell us your kitchen type and what equipment you need. We&apos;ll respond with options and pricing within 30 minutes.
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
                  WhatsApp for Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
