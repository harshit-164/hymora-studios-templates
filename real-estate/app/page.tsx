import ClientShell from "./ClientShell";

export const metadata = {
  title: 'Chennai Builders & Developers — Premium Homes, Delivered',
  description: 'RERA-approved residences, villas and plotted developments across OMR, ECR and Porur — transparent pricing, virtual site visits, zero hidden charges.',
};

const html = `<a class="skip" href="#main">Skip to content</a>
<nav aria-label="Primary"><div class="wrap navin"><div class="logo"><b>Chennai Builders & Developers</b></div><a class="btn ghost" href="#contact">Enquire</a></div></nav>

<header class="hero"><div class="wrap" id="main">
  <span class="ey">Premium Homes, Delivered</span>
  <h1>Chennai Builders & Developers</h1>
  <p class="lead">RERA-approved residences, villas and plotted developments across OMR, ECR and Porur — transparent pricing, virtual site visits, zero hidden charges.</p>
  <a class="btn" data-wa="Hi Chennai Builders & Developers, I'd like to enquire.">WhatsApp Us</a>
  <a class="btn ghost" href="#book">Book / Enquire</a>
  <div class="tag"><span>✅ OMR, Chennai</span><span>✅ Mobile-first</span><span>✅ SEO-ready</span><span>✅ WhatsApp</span><span>✅ Live Enquiry</span></div>
</div></header>

<div class="trustbar"><div class="wrap"><span>🛡️ <b>Trusted</b> by Chennai families & businesses</span><span>⚡ <b>Fast</b> response on WhatsApp</span><span>🔒 <b>Transparent</b> pricing</span><span>⭐ <b>4.8+</b> Google rating</span></div></div>

<section class="about"><div class="wrap"><div class="grid g2">
  <div class="reveal"><div class="ph"></div></div>
  <div class="reveal"><span class="ey">About us</span><h2>Premium Homes, Delivered</h2><p>For 18 years we've delivered 120+ projects and 8,000+ homes across Chennai. We combine RERA compliance, smart-home readiness and a no-surprises pricing promise so first-time buyers feel safe.</p>
  <p style="margin-top:14px"><b style="color:var(--txt)">Founded by R. Kumaran</b> — Managing Director.</p>
  <a class="btn ghost" href="#contact" style="margin-top:18px">Talk to our team</a></div>
</div></div></section>

<section class="svc"><div class="wrap">
  <span class="ey reveal">What we offer</span><h2 class="reveal">Our Services</h2>
  <div class="grid g3">
    <div class="card glow reveal"><div class="ico">🏢</div><h3>Apartments</h3><p>RERA gated communities from ₹45L in Porur & Medavakkam.</p></div>
    <div class="card glow reveal"><div class="ico">🏡</div><h3>Villas</h3><p>Luxury smart villas in OMR & ECR with private gardens.</p></div>
    <div class="card glow reveal"><div class="ico">📐</div><h3>Plots</h3><p>CMDA-approved plotted developments with clear title.</p></div>
    <div class="card glow reveal"><div class="ico">🏗️</div><h3>Commercial</h3><p>IT spaces & retail in Guindy and Taramani.</p></div>
    <div class="card glow reveal"><div class="ico">🔑</div><h3>Resale</h3><p>Verified resale and legal assistance.</p></div>
    <div class="card glow reveal"><div class="ico">🌐</div><h3>NRI Desk</h3><p>End-to-end NRI property management & power of attorney.</p></div>
  </div>
</div></section>

<section style="background:var(--bg2)"><div class="wrap"><div class="stats reveal">
    <div class="stat reveal"><div class="n">120+</div><div class="l">Projects</div></div>
    <div class="stat reveal"><div class="n">8k+</div><div class="l">Families</div></div>
    <div class="stat reveal"><div class="n">18yr</div><div class="l">Experience</div></div>
    <div class="stat reveal"><div class="n">RERA</div><div class="l">Approved</div></div>
</div></div></section>

<section class="proc"><div class="wrap">
  <span class="ey reveal">How it works</span><h2 class="reveal">Simple, fast, trusted</h2>
  <div class="grid g3">
    <div class="card reveal"><div class="ico">1</div><h3>Browse</h3><p>Explore verified listings with videos.</p></div>
    <div class="card reveal"><div class="ico">2</div><h3>Site Visit</h3><p>Guided tour this weekend, free.</p></div>
    <div class="card reveal"><div class="ico">3</div><h3>Book</h3><p>Transparent pricing, RERA docs in hand.</p></div>
  </div>
</div></section>

<section class="team"><div class="wrap">
  <span class="ey reveal">Our team</span><h2 class="reveal">The people behind Chennai Builders & Developers</h2>
  <div class="grid g3">
    <div class="card reveal"><div class="av">🧑‍💼</div><h3>R. Kumaran</h3><p>MD</p></div>
    <div class="card reveal"><div class="av">👩‍💼</div><h3>Meena V.</h3><p>Sales Head</p></div>
    <div class="card reveal"><div class="av">🧑‍💻</div><h3>Arun P.</h3><p>NRI Desk</p></div>
  </div>
</div></section>

<section class="price" style="background:var(--bg2)"><div class="wrap">
  <span class="ey reveal">Plans & Pricing</span><h2 class="reveal">Transparent, no surprises</h2>
  <div class="grid g3">
    <div class="card  reveal"><h3>Studio</h3><div class="amt">₹45L <small>450 sqft</small></div><ul><li>✓ RERA</li><li>✓ Clubhouse</li><li>✓ Car park</li></ul></div>
    <div class="card feat reveal"><h3>3BHK Premium</h3><div class="amt">₹1.2Cr <small>1450 sqft</small></div><ul><li>✓ Smart home</li><li>✓ Sea breeze ECR</li><li>✓ Modular</li></ul> <span class="btn" style="margin-top:auto">Choose</span></div>
    <div class="card  reveal"><h3>Villa</h3><div class="amt">₹2.4Cr <small>2400 sqft</small></div><ul><li>✓ Private garden</li><li>✓ Terrace</li><li>✓ Gated</li></ul></div>
  </div>
</div></section>

<section class="gal"><div class="wrap">
  <span class="ey reveal">Gallery</span><h2 class="reveal">A look inside</h2>
  <div class="gal">
    <div class="ph reveal" title="Model Apartment"></div>
    <div class="ph reveal" title="Clubhouse"></div>
    <div class="ph reveal" title="Villa Exterior"></div>
    <div class="ph reveal" title="Site Plan"></div>
  </div>
</div></section>

<section class="faq"><div class="wrap">
  <span class="ey reveal">FAQ</span><h2 class="reveal">Common questions</h2>
    <div class="item reveal"><button class="q">❓ Are your projects RERA registered?<span class="pm">+</span></button><div class="a">Every project is RERA-approved; numbers are listed on each listing page.</div></div>
    <div class="item reveal"><button class="q">❓ Can NRI buyers purchase?<span class="pm">+</span></button><div class="a">Yes — our NRI Desk handles POA, NRE account and repatriation paperwork.</div></div>
    <div class="item reveal"><button class="q">❓ What's included in the price?<span class="pm">+</span></button><div class="a">Base price + amenities; we publish a full breakdown, no hidden charges.</div></div>
</div></section>

<section class="testi"><div class="wrap">
  <span class="ey reveal">Client love</span><h2 class="reveal">What our clients say</h2>
  <div class="grid g2">
    <div class="card glow reveal">““Transparent pricing and a beautiful site visit. Booked our flat in Padur.””<div class="who">— Mohammed I., OMR</div></div>
    <div class="card reveal">“Professional, fast and trustworthy. Highly recommend to anyone in Chennai.”<div class="who">— Verified Google Review</div></div>
  </div>
</div></section>

<section id="book" class="contact"><div class="wrap">
  <span class="ey reveal">Get started</span><h2 class="reveal">Book / Enquire</h2>
  <div class="grid g2">
    <div class="form glass reveal">
      <form data-enquiry>
        <label>Name</label><input name="name" required aria-required="true" placeholder="Your name">
        <label>Phone</label><input name="phone" required inputmode="tel" aria-required="true" placeholder="10-digit mobile">
        <label>Email</label><input name="email" type="email" placeholder="you@email.com">
        <label>Service needed</label><select name="service"><option>General Enquiry</option><option>Apartments</option><option>Villas</option><option>Plots</option><option>Commercial</option><option>Resale</option><option>NRI Desk</option></select>
        <label>Message</label><textarea name="message" rows="3" placeholder="Tell us what you need"></textarea>
        <button class="btn" type="submit">Send Enquiry</button>
        <p class="form-msg" id="form-msg" role="status" aria-live="polite"></p>
      </form>
    </div>
    <div class="reveal">
      <div class="map"><iframe src="https://www.google.com/maps?q=OMR, Chennai&output=embed" width="100%" height="300" style="border:0" loading="lazy"></iframe></div>
      <p style="margin-top:16px">📍 OMR, Chennai &nbsp; • &nbsp; 📞 <a href="tel:+919999999999">+91 99999 99999</a> &nbsp; • &nbsp; 💬 <a class="wa" data-wa="Hi, I need help." style="color:var(--acc2)">WhatsApp</a></p>
    </div>
  </div>
</div></section>

<section class="cta"><div class="wrap">
  <h2>Websites that bring enquiries, not just likes.</h2>
  <p style="margin:10px 0 24px"></p>
  <a class="btn" data-wa="Hi, I want a website like this.">Get a free quote</a>
</div></section>

<footer>© <span id="y"></span> Chennai Builders & Developers · OMR, Chennai   · Hymora Studios</footer>
<div class="cookiebar" id="cookiebar"><span>We use cookies to improve experience & measure leads. <a href="#" style="color:var(--acc2)">Privacy</a></span>
<span><button class="btn ghost" id="cookie-reject">Reject</button><button class="btn" id="cookie-accept">Accept</button></span></div>
<a class="fab" data-wa="Hi Chennai Builders & Developers, I'd like to enquire." title="WhatsApp">💬</a>`;

export default function Page() {
  return <ClientShell html={html} />;
}
