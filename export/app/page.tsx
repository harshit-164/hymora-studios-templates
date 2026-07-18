import ClientShell from "./ClientShell";

export const metadata = {
  title: 'SouthStar Exporters — Chennai to the World',
  description: 'Spices, textiles, handicrafts and engineering goods exported with compliance, freight and documentation fully handled.',
};

const html = `<a class="skip" href="#main">Skip to content</a>
<nav aria-label="Primary"><div class="wrap navin"><div class="logo"><b>SouthStar Exporters</b></div><a class="btn ghost" href="#contact">Enquire</a></div></nav>

<header class="hero"><div class="wrap" id="main">
  <span class="ey">Chennai to the World</span>
  <h1>SouthStar Exporters</h1>
  <p class="lead">Spices, textiles, handicrafts and engineering goods exported with compliance, freight and documentation fully handled.</p>
  <a class="btn" data-wa="Hi SouthStar Exporters, I'd like to enquire.">WhatsApp Us</a>
  <a class="btn ghost" href="#book">Book / Enquire</a>
  <div class="tag"><span>✅ Parry's Corner, Chennai</span><span>✅ Mobile-first</span><span>✅ SEO-ready</span><span>✅ WhatsApp</span><span>✅ Live Enquiry</span></div>
</div></header>

<div class="trustbar"><div class="wrap"><span>🛡️ <b>Trusted</b> by Chennai families & businesses</span><span>⚡ <b>Fast</b> response on WhatsApp</span><span>🔒 <b>Transparent</b> pricing</span><span>⭐ <b>4.8+</b> Google rating</span></div></div>

<section class="about"><div class="wrap"><div class="grid g2">
  <div class="reveal"><div class="ph"></div></div>
  <div class="reveal"><span class="ey">About us</span><h2>Chennai to the World</h2><p>SouthStar has shipped Indian quality to 40+ countries for 25 years. We turn complex export paperwork into a single smooth process — phyto certificates, COO, invoices and freight, all managed.</p>
  <p style="margin-top:14px"><b style="color:var(--txt)">Founded by Yuki AN</b> — Export Director.</p>
  <a class="btn ghost" href="#contact" style="margin-top:18px">Talk to our team</a></div>
</div></div></section>

<section class="svc"><div class="wrap">
  <span class="ey reveal">What we offer</span><h2 class="reveal">Our Services</h2>
  <div class="grid g3">
    <div class="card glow reveal"><div class="ico">🌶️</div><h3>Agree Exports</h3><p>Spices, rice, pulses with phytosanitary certs.</p></div>
    <div class="card glow reveal"><div class="ico">👕</div><h3>Textiles</h3><p>Garments & home linen, private label.</p></div>
    <div class="card glow reveal"><div class="ico">🎁</div><h3>Handicrafts</h3><p>Handmade décor & gifts for global retail.</p></div>
    <div class="card glow reveal"><div class="ico">⚙️</div><h3>Engineering</h3><p>Machined and cast components.</p></div>
    <div class="card glow reveal"><div class="ico">📑</div><h3>Compliance</h3><p>COO, commercial invoice, packing list.</p></div>
    <div class="card glow reveal"><div class="ico">🚢</div><h3>Freight</h3><p>FCL/LCL with customs clearance.</p></div>
  </div>
</div></section>

<section style="background:var(--bg2)"><div class="wrap"><div class="stats reveal">
    <div class="stat reveal"><div class="n">25yr</div><div class="l">Exporting</div></div>
    <div class="stat reveal"><div class="n">40+</div><div class="l">Countries</div></div>
    <div class="stat reveal"><div class="n">100%</div><div class="l">Compliant</div></div>
    <div class="stat reveal"><div class="n">FOB</div><div class="l">& CIF</div></div>
</div></div></section>

<section class="proc"><div class="wrap">
  <span class="ey reveal">How it works</span><h2 class="reveal">Simple, fast, trusted</h2>
  <div class="grid g3">
    <div class="card reveal"><div class="ico">1</div><h3>Enquire</h3><p>Share product & volume.</p></div>
    <div class="card reveal"><div class="ico">2</div><h3>Docs</h3><p>COO + compliance prepared.</p></div>
    <div class="card reveal"><div class="ico">3</div><h3>Ship</h3><p>FCL/LCL, tracked to port.</p></div>
  </div>
</div></section>

<section class="team"><div class="wrap">
  <span class="ey reveal">Our team</span><h2 class="reveal">The people behind SouthStar Exporters</h2>
  <div class="grid g3">
    <div class="card reveal"><div class="av">👩‍💼</div><h3>Yuki AN</h3><p>Export Dir</p></div>
    <div class="card reveal"><div class="av">🧑‍💼</div><h3>Suresh P.</h3><p>Compliance</p></div>
    <div class="card reveal"><div class="av">👩‍✈️</div><h3>Latha M.</h3><p>Freight</p></div>
  </div>
</div></section>

<section class="price" style="background:var(--bg2)"><div class="wrap">
  <span class="ey reveal">Plans & Pricing</span><h2 class="reveal">Transparent, no surprises</h2>
  <div class="grid g3">
    <div class="card  reveal"><h3>Sample</h3><div class="amt">Quote <small>Small lot</small></div><ul><li>✓ Docs</li><li>✓ Air</li></ul></div>
    <div class="card feat reveal"><h3>FCL 20ft</h3><div class="amt">Quote <small>Bulk</small></div><ul><li>✓ Full docs</li><li>✓ Sea</li></ul> <span class="btn" style="margin-top:auto">Choose</span></div>
    <div class="card  reveal"><h3>Private Label</h3><div class="amt">Quote <small>MOQ</small></div><ul><li>✓ Branding</li><li>✓ QC</li></ul></div>
  </div>
</div></section>

<section class="gal"><div class="wrap">
  <span class="ey reveal">Gallery</span><h2 class="reveal">A look inside</h2>
  <div class="gal">
    <div class="ph reveal" title="Spice Warehouse"></div>
    <div class="ph reveal" title="Textile Unit"></div>
    <div class="ph reveal" title="Handicraft"></div>
    <div class="ph reveal" title="Container Load"></div>
  </div>
</div></section>

<section class="faq"><div class="wrap">
  <span class="ey reveal">FAQ</span><h2 class="reveal">Common questions</h2>
    <div class="item reveal"><button class="q">❓ Do you handle documentation?<span class="pm">+</span></button><div class="a">Yes — COO, invoice, packing list and phyto certs are all prepared.</div></div>
    <div class="item reveal"><button class="q">❓ Which Incoterms?<span class="pm">+</span></button><div class="a">We regularly ship FOB Chennai and CIF to destination port.</div></div>
    <div class="item reveal"><button class="q">❓ Can you private-label?<span class="pm">+</span></button><div class="a">Yes, for textiles and handicrafts with MOQ-based pricing.</div></div>
</div></section>

<section class="testi"><div class="wrap">
  <span class="ey reveal">Client love</span><h2 class="reveal">What our clients say</h2>
  <div class="grid g2">
    <div class="card glow reveal">““Documented, compliant, on-time. Made our import effortless.””<div class="who">— Yuki T., Japan</div></div>
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
        <label>Service needed</label><select name="service"><option>General Enquiry</option><option>Agree Exports</option><option>Textiles</option><option>Handicrafts</option><option>Engineering</option><option>Compliance</option><option>Freight</option></select>
        <label>Message</label><textarea name="message" rows="3" placeholder="Tell us what you need"></textarea>
        <button class="btn" type="submit">Send Enquiry</button>
        <p class="form-msg" id="form-msg" role="status" aria-live="polite"></p>
      </form>
    </div>
    <div class="reveal">
      <div class="map"><iframe src="https://www.google.com/maps?q=Parry's Corner, Chennai&output=embed" width="100%" height="300" style="border:0" loading="lazy"></iframe></div>
      <p style="margin-top:16px">📍 Parry's Corner, Chennai &nbsp; • &nbsp; 📞 <a href="tel:+919999999999">+91 99999 99999</a> &nbsp; • &nbsp; 💬 <a class="wa" data-wa="Hi, I need help." style="color:var(--acc2)">WhatsApp</a></p>
    </div>
  </div>
</div></section>

<section class="cta"><div class="wrap">
  <h2>Websites that bring enquiries, not just likes.</h2>
  <p style="margin:10px 0 24px"></p>
  <a class="btn" data-wa="Hi, I want a website like this.">Get a free quote</a>
</div></section>

<footer>© <span id="y"></span> SouthStar Exporters · Parry's Corner, Chennai   · Hymora Studios</footer>
<div class="cookiebar" id="cookiebar"><span>We use cookies to improve experience & measure leads. <a href="#" style="color:var(--acc2)">Privacy</a></span>
<span><button class="btn ghost" id="cookie-reject">Reject</button><button class="btn" id="cookie-accept">Accept</button></span></div>
<a class="fab" data-wa="Hi SouthStar Exporters, I'd like to enquire." title="WhatsApp">💬</a>`;

export default function Page() {
  return <ClientShell html={html} />;
}
