import ClientShell from "./ClientShell";

export const metadata = {
  title: 'PrecisionFab Industries — Engineered to Spec',
  description: 'CNC, sheet-metal and precision components for automotive & industrial clients worldwide — certified to 0.01mm, shipped to 14 countries.',
};

const html = `<a class="skip" href="#main">Skip to content</a>
<nav aria-label="Primary"><div class="wrap navin"><div class="logo"><b>PrecisionFab Industries</b></div><a class="btn ghost" href="#contact">Enquire</a></div></nav>

<header class="hero"><div class="wrap" id="main">
  <span class="ey">Engineered to Spec</span>
  <h1>PrecisionFab Industries</h1>
  <p class="lead">CNC, sheet-metal and precision components for automotive & industrial clients worldwide — certified to 0.01mm, shipped to 14 countries.</p>
  <a class="btn" data-wa="Hi PrecisionFab Industries, I'd like to enquire.">WhatsApp Us</a>
  <a class="btn ghost" href="#book">Book / Enquire</a>
  <div class="tag"><span>✅ Ambattur, Chennai</span><span>✅ Mobile-first</span><span>✅ SEO-ready</span><span>✅ WhatsApp</span><span>✅ Live Enquiry</span></div>
</div></header>

<div class="trustbar"><div class="wrap"><span>🛡️ <b>Trusted</b> by Chennai families & businesses</span><span>⚡ <b>Fast</b> response on WhatsApp</span><span>🔒 <b>Transparent</b> pricing</span><span>⭐ <b>4.8+</b> Google rating</span></div></div>

<section class="about"><div class="wrap"><div class="grid g2">
  <div class="reveal"><div class="ph"></div></div>
  <div class="reveal"><span class="ey">About us</span><h2>Engineered to Spec</h2><p>Since 1991 PrecisionFab has been Chennai's quiet exporter of critical components. ISO 9001:2015, a CMM-equipped QA lab and a 35-year track record make us a trusted Tier-2 supplier to German and Japanese OEMs.</p>
  <p style="margin-top:14px"><b style="color:var(--txt)">Founded by S. Palanisamy</b> — Chairman.</p>
  <a class="btn ghost" href="#contact" style="margin-top:18px">Talk to our team</a></div>
</div></div></section>

<section class="svc"><div class="wrap">
  <span class="ey reveal">What we offer</span><h2 class="reveal">Our Services</h2>
  <div class="grid g3">
    <div class="card glow reveal"><div class="ico">⚙️</div><h3>CNC Machining</h3><p>5-axis precision parts up to 0.01mm.</p></div>
    <div class="card glow reveal"><div class="ico">🔩</div><h3>Sheet Metal</h3><p>Laser-cut and fabricated enclosures.</p></div>
    <div class="card glow reveal"><div class="ico">🏭</div><h3>Assembly</h3><p>Sub-assembly and contract manufacturing.</p></div>
    <div class="card glow reveal"><div class="ico">🔬</div><h3>QA Lab</h3><p>CMM inspection and material certification.</p></div>
    <div class="card glow reveal"><div class="ico">📦</div><h3>Packaging</h3><p>Export-grade protective packing.</p></div>
    <div class="card glow reveal"><div class="ico">🌐</div><h3>Export</h3><p>Shipped to 14 countries with docs.</p></div>
  </div>
</div></section>

<section style="background:var(--bg2)"><div class="wrap"><div class="stats reveal">
    <div class="stat reveal"><div class="n">35yr</div><div class="l">Experience</div></div>
    <div class="stat reveal"><div class="n">ISO</div><div class="l">9001:2015</div></div>
    <div class="stat reveal"><div class="n">14</div><div class="l">Countries</div></div>
    <div class="stat reveal"><div class="n">0.01mm</div><div class="l">Tolerance</div></div>
</div></div></section>

<section class="proc"><div class="wrap">
  <span class="ey reveal">How it works</span><h2 class="reveal">Simple, fast, trusted</h2>
  <div class="grid g3">
    <div class="card reveal"><div class="ico">1</div><h3>RFQ</h3><p>Upload drawing, quote in 24h.</p></div>
    <div class="card reveal"><div class="ico">2</div><h3>Prototype</h3><p>First-article inspected.</p></div>
    <div class="card reveal"><div class="ico">3</div><h3>Scale</h3><p>Bulk, certified, on-time.</p></div>
  </div>
</div></section>

<section class="team"><div class="wrap">
  <span class="ey reveal">Our team</span><h2 class="reveal">The people behind PrecisionFab Industries</h2>
  <div class="grid g3">
    <div class="card reveal"><div class="av">🧑‍🏭</div><h3>S. Palanisamy</h3><p>Chairman</p></div>
    <div class="card reveal"><div class="av">👩‍🔬</div><h3>Dr. Iyer</h3><p>QA Head</p></div>
    <div class="card reveal"><div class="av">🧑‍💻</div><h3>Vikram R.</h3><p>Export</p></div>
  </div>
</div></section>

<section class="price" style="background:var(--bg2)"><div class="wrap">
  <span class="ey reveal">Plans & Pricing</span><h2 class="reveal">Transparent, no surprises</h2>
  <div class="grid g3">
    <div class="card  reveal"><h3>Prototype</h3><div class="amt">Quote <small>1–50 pcs</small></div><ul><li>✓ FAI</li><li>✓ Material cert</li></ul></div>
    <div class="card feat reveal"><h3>Batch</h3><div class="amt">Quote <small>500+ pcs</small></div><ul><li>✓ CMM report</li><li>✓ JIT</li></ul> <span class="btn" style="margin-top:auto">Choose</span></div>
    <div class="card  reveal"><h3>Contract</h3><div class="amt">Quote <small>Ongoing</small></div><ul><li>✓ Dedicated line</li><li>✓ Kanban</li></ul></div>
  </div>
</div></section>

<section class="gal"><div class="wrap">
  <span class="ey reveal">Gallery</span><h2 class="reveal">A look inside</h2>
  <div class="gal">
    <div class="ph reveal" title="CNC Bay"></div>
    <div class="ph reveal" title="Sheet Metal"></div>
    <div class="ph reveal" title="QA Lab"></div>
    <div class="ph reveal" title="Packing Line"></div>
  </div>
</div></section>

<section class="faq"><div class="wrap">
  <span class="ey reveal">FAQ</span><h2 class="reveal">Common questions</h2>
    <div class="item reveal"><button class="q">❓ What tolerances can you hold?<span class="pm">+</span></button><div class="a">Down to 0.01mm on 5-axis CNC with CMM verification.</div></div>
    <div class="item reveal"><button class="q">❓ Are you certified?<span class="pm">+</span></button><div class="a">ISO 9001:2015 with full material and inspection certificates.</div></div>
    <div class="item reveal"><button class="q">❓ Do you export?<span class="pm">+</span></button><div class="a">Yes — 14 countries, with complete documentation and export packing.</div></div>
</div></section>

<section class="testi"><div class="wrap">
  <span class="ey reveal">Client love</span><h2 class="reveal">What our clients say</h2>
  <div class="grid g2">
    <div class="card glow reveal">““Tolerance and finish are consistently perfect. Our reliable supplier.””<div class="who">— Thomas M., Germany</div></div>
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
        <label>Service needed</label><select name="service"><option>General Enquiry</option><option>CNC Machining</option><option>Sheet Metal</option><option>Assembly</option><option>QA Lab</option><option>Packaging</option><option>Export</option></select>
        <label>Message</label><textarea name="message" rows="3" placeholder="Tell us what you need"></textarea>
        <button class="btn" type="submit">Send Enquiry</button>
        <p class="form-msg" id="form-msg" role="status" aria-live="polite"></p>
      </form>
    </div>
    <div class="reveal">
      <div class="map"><iframe src="https://www.google.com/maps?q=Ambattur, Chennai&output=embed" width="100%" height="300" style="border:0" loading="lazy"></iframe></div>
      <p style="margin-top:16px">📍 Ambattur, Chennai &nbsp; • &nbsp; 📞 <a href="tel:+919999999999">+91 99999 99999</a> &nbsp; • &nbsp; 💬 <a class="wa" data-wa="Hi, I need help." style="color:var(--acc2)">WhatsApp</a></p>
    </div>
  </div>
</div></section>

<section class="cta"><div class="wrap">
  <h2>Websites that bring enquiries, not just likes.</h2>
  <p style="margin:10px 0 24px"></p>
  <a class="btn" data-wa="Hi, I want a website like this.">Get a free quote</a>
</div></section>

<footer>© <span id="y"></span> PrecisionFab Industries · Ambattur, Chennai   · Hymora Studios</footer>
<div class="cookiebar" id="cookiebar"><span>We use cookies to improve experience & measure leads. <a href="#" style="color:var(--acc2)">Privacy</a></span>
<span><button class="btn ghost" id="cookie-reject">Reject</button><button class="btn" id="cookie-accept">Accept</button></span></div>
<a class="fab" data-wa="Hi PrecisionFab Industries, I'd like to enquire." title="WhatsApp">💬</a>`;

export default function Page() {
  return <ClientShell html={html} />;
}
