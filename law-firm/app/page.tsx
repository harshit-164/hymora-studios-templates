import ClientShell from "./ClientShell";

export const metadata = {
  title: 'Mehra & Associates — Counsel You Can Trust',
  description: 'Property, family, corporate and civil law — consultations on WhatsApp and in-person at our Adyar office, with clear fixed fees.',
};

const html = `<a class="skip" href="#main">Skip to content</a>
<nav aria-label="Primary"><div class="wrap navin"><div class="logo"><b>Mehra & Associates</b></div><a class="btn ghost" href="#contact">Enquire</a></div></nav>

<header class="hero"><div class="wrap" id="main">
  <span class="ey">Counsel You Can Trust</span>
  <h1>Mehra & Associates</h1>
  <p class="lead">Property, family, corporate and civil law — consultations on WhatsApp and in-person at our Adyar office, with clear fixed fees.</p>
  <a class="btn" data-wa="Hi Mehra & Associates, I'd like to enquire.">WhatsApp Us</a>
  <a class="btn ghost" href="#book">Book / Enquire</a>
  <div class="tag"><span>✅ Adyar, Chennai</span><span>✅ Mobile-first</span><span>✅ SEO-ready</span><span>✅ WhatsApp</span><span>✅ Live Enquiry</span></div>
</div></header>

<div class="trustbar"><div class="wrap"><span>🛡️ <b>Trusted</b> by Chennai families & businesses</span><span>⚡ <b>Fast</b> response on WhatsApp</span><span>🔒 <b>Transparent</b> pricing</span><span>⭐ <b>4.8+</b> Google rating</span></div></div>

<section class="about"><div class="wrap"><div class="grid g2">
  <div class="reveal"><div class="ph"></div></div>
  <div class="reveal"><span class="ey">About us</span><h2>Counsel You Can Trust</h2><p>Mehra & Associates has resolved 3,000+ cases over 20 years. We believe legal help should be understandable and fairly priced — every client gets a free 10-minute orientation before committing.</p>
  <p style="margin-top:14px"><b style="color:var(--txt)">Founded by Adv. Rahul Mehra</b> — Senior Partner.</p>
  <a class="btn ghost" href="#contact" style="margin-top:18px">Talk to our team</a></div>
</div></div></section>

<section class="svc"><div class="wrap">
  <span class="ey reveal">What we offer</span><h2 class="reveal">Our Services</h2>
  <div class="grid g3">
    <div class="card glow reveal"><div class="ico">⚖️</div><h3>Property Law</h3><p>Sale, partition and title verification.</p></div>
    <div class="card glow reveal"><div class="ico">👪</div><h3>Family Law</h3><p>Divorce, custody and maintenance.</p></div>
    <div class="card glow reveal"><div class="ico">🏢</div><h3>Corporate</h3><p>Incorporation, contracts and compliance.</p></div>
    <div class="card glow reveal"><div class="ico">📝</div><h3>Civil & Criminal</h3><p>Representation and bail.</p></div>
    <div class="card glow reveal"><div class="ico">📜</div><h3>Documentation</h3><p>Agreements, wills and deeds.</p></div>
    <div class="card glow reveal"><div class="ico">💬</div><h3>Free Call</h3><p>10-minute legal orientation, no charge.</p></div>
  </div>
</div></section>

<section style="background:var(--bg2)"><div class="wrap"><div class="stats reveal">
    <div class="stat reveal"><div class="n">20yr</div><div class="l">Practice</div></div>
    <div class="stat reveal"><div class="n">3000+</div><div class="l">Cases</div></div>
    <div class="stat reveal"><div class="n">98%</div><div class="l">Satisfied</div></div>
    <div class="stat reveal"><div class="n">Conf</div><div class="l">idential</div></div>
</div></div></section>

<section class="proc"><div class="wrap">
  <span class="ey reveal">How it works</span><h2 class="reveal">Simple, fast, trusted</h2>
  <div class="grid g3">
    <div class="card reveal"><div class="ico">1</div><h3>Call</h3><p>Free 10-minute orientation.</p></div>
    <div class="card reveal"><div class="ico">2</div><h3>Consult</h3><p>Clear fixed-fee advice.</p></div>
    <div class="card reveal"><div class="ico">3</div><h3>Resolve</h3><p>Documented, fast.</p></div>
  </div>
</div></section>

<section class="team"><div class="wrap">
  <span class="ey reveal">Our team</span><h2 class="reveal">The people behind Mehra & Associates</h2>
  <div class="grid g3">
    <div class="card reveal"><div class="av">⚖️</div><h3>Adv. Rahul M.</h3><p>Senior Partner</p></div>
    <div class="card reveal"><div class="av">👩‍⚖️</div><h3>Adv. Kavitha R.</h3><p>Family Law</p></div>
    <div class="card reveal"><div class="av">🧑‍⚖️</div><h3>Adv. Joseph K.</h3><p>Corporate</p></div>
  </div>
</div></section>

<section class="price" style="background:var(--bg2)"><div class="wrap">
  <span class="ey reveal">Plans & Pricing</span><h2 class="reveal">Transparent, no surprises</h2>
  <div class="grid g3">
    <div class="card  reveal"><h3>Orientation</h3><div class="amt">Free <small>10 min</small></div><ul><li>✓ Call</li></ul></div>
    <div class="card feat reveal"><h3>Consultation</h3><div class="amt">₹1,500 <small>60 min</small></div><ul><li>✓ Advice</li><li>✓ Next steps</li></ul> <span class="btn" style="margin-top:auto">Choose</span></div>
    <div class="card  reveal"><h3>Case Retainer</h3><div class="amt">From ₹15k <small>Full matter</small></div><ul><li>✓ Representation</li><li>✓ Updates</li></ul></div>
  </div>
</div></section>

<section class="gal"><div class="wrap">
  <span class="ey reveal">Gallery</span><h2 class="reveal">A look inside</h2>
  <div class="gal">
    <div class="ph reveal" title="Chamber"></div>
    <div class="ph reveal" title="Library"></div>
    <div class="ph reveal" title="Meeting Room"></div>
    <div class="ph reveal" title="Reception"></div>
  </div>
</div></section>

<section class="faq"><div class="wrap">
  <span class="ey reveal">FAQ</span><h2 class="reveal">Common questions</h2>
    <div class="item reveal"><button class="q">❓ Is the first call free?<span class="pm">+</span></button><div class="a">Yes — a 10-minute orientation call, no obligation.</div></div>
    <div class="item reveal"><button class="q">❓ Do you charge fixed fees?<span class="pm">+</span></button><div class="a">Most consultations are fixed-fee so there are no surprises.</div></div>
    <div class="item reveal"><button class="q">❓ Can you handle property disputes?<span class="pm">+</span></button><div class="a">Yes — sale, partition and title verification across Chennai.</div></div>
</div></section>

<section class="testi"><div class="wrap">
  <span class="ey reveal">Client love</span><h2 class="reveal">What our clients say</h2>
  <div class="grid g2">
    <div class="card glow reveal">““Clear advice, fair fees. Handled my property dispute smoothly.””<div class="who">— Lakshmi P., Adyar</div></div>
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
        <label>Service needed</label><select name="service"><option>General Enquiry</option><option>Property Law</option><option>Family Law</option><option>Corporate</option><option>Civil & Criminal</option><option>Documentation</option><option>Free Call</option></select>
        <label>Message</label><textarea name="message" rows="3" placeholder="Tell us what you need"></textarea>
        <button class="btn" type="submit">Send Enquiry</button>
        <p class="form-msg" id="form-msg" role="status" aria-live="polite"></p>
      </form>
    </div>
    <div class="reveal">
      <div class="map"><iframe src="https://www.google.com/maps?q=Adyar, Chennai&output=embed" width="100%" height="300" style="border:0" loading="lazy"></iframe></div>
      <p style="margin-top:16px">📍 Adyar, Chennai &nbsp; • &nbsp; 📞 <a href="tel:+919999999999">+91 99999 99999</a> &nbsp; • &nbsp; 💬 <a class="wa" data-wa="Hi, I need help." style="color:var(--acc2)">WhatsApp</a></p>
    </div>
  </div>
</div></section>

<section class="cta"><div class="wrap">
  <h2>Websites that bring enquiries, not just likes.</h2>
  <p style="margin:10px 0 24px"></p>
  <a class="btn" data-wa="Hi, I want a website like this.">Get a free quote</a>
</div></section>

<footer>© <span id="y"></span> Mehra & Associates · Adyar, Chennai   · Hymora Studios</footer>
<div class="cookiebar" id="cookiebar"><span>We use cookies to improve experience & measure leads. <a href="#" style="color:var(--acc2)">Privacy</a></span>
<span><button class="btn ghost" id="cookie-reject">Reject</button><button class="btn" id="cookie-accept">Accept</button></span></div>
<a class="fab" data-wa="Hi Mehra & Associates, I'd like to enquire." title="WhatsApp">💬</a>`;

export default function Page() {
  return <ClientShell html={html} />;
}
