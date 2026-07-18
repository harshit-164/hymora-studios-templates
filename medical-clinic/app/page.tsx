import ClientShell from "./ClientShell";

export const metadata = {
  title: 'Sri Lakshmi Multi-Speciality Clinic — Trusted Healthcare in Chennai',
  description: 'A 50-bed multi-speciality clinic in T. Nagar offering 24/7 care, dental, diagnostics and health packages — book in minutes on WhatsApp.',
};

const html = `<a class="skip" href="#main">Skip to content</a>
<nav aria-label="Primary"><div class="wrap navin"><div class="logo"><b>Sri Lakshmi Multi-Speciality Clinic</b></div><a class="btn ghost" href="#contact">Enquire</a></div></nav>

<header class="hero"><div class="wrap" id="main">
  <span class="ey">Trusted Healthcare in Chennai</span>
  <h1>Sri Lakshmi Multi-Speciality Clinic</h1>
  <p class="lead">A 50-bed multi-speciality clinic in T. Nagar offering 24/7 care, dental, diagnostics and health packages — book in minutes on WhatsApp.</p>
  <a class="btn" data-wa="Hi Sri Lakshmi Multi-Speciality Clinic, I'd like to enquire.">WhatsApp Us</a>
  <a class="btn ghost" href="#book">Book / Enquire</a>
  <div class="tag"><span>✅ T. Nagar, Chennai</span><span>✅ Mobile-first</span><span>✅ SEO-ready</span><span>✅ WhatsApp</span><span>✅ Live Enquiry</span></div>
</div></header>

<div class="trustbar"><div class="wrap"><span>🛡️ <b>Trusted</b> by Chennai families & businesses</span><span>⚡ <b>Fast</b> response on WhatsApp</span><span>🔒 <b>Transparent</b> pricing</span><span>⭐ <b>4.8+</b> Google rating</span></div></div>

<section class="about"><div class="wrap"><div class="grid g2">
  <div class="reveal"><div class="ph"></div></div>
  <div class="reveal"><span class="ey">About us</span><h2>Trusted Healthcare in Chennai</h2><p>Founded in 2009 by Dr. Lakshmi Menon, Sri Lakshmi Clinic was built on one belief: world-class care should be minutes from home. Today our 30+ specialists serve 50,000+ Chennai families with paperless, transparent, tech-enabled care.</p>
  <p style="margin-top:14px"><b style="color:var(--txt)">Founded by Dr. Lakshmi Menon</b> — Chief Physician & Founder.</p>
  <a class="btn ghost" href="#contact" style="margin-top:18px">Talk to our team</a></div>
</div></div></section>

<section class="svc"><div class="wrap">
  <span class="ey reveal">What we offer</span><h2 class="reveal">Our Services</h2>
  <div class="grid g3">
    <div class="card glow reveal"><div class="ico">🩺</div><h3>General & 24/7</h3><p>Physicians available round the clock for emergencies and routine care.</p></div>
    <div class="card glow reveal"><div class="ico">🦷</div><h3>Dental Care</h3><p>Painless dentistry, implants, braces and cosmetic smile design.</p></div>
    <div class="card glow reveal"><div class="ico">🧪</div><h3>Diagnostics</h3><p>In-house lab, digital X-ray, ECG, ultrasound and full-body checks.</p></div>
    <div class="card glow reveal"><div class="ico">💉</div><h3>Vaccination</h3><p>Travel and routine vaccination for all age groups.</p></div>
    <div class="card glow reveal"><div class="ico">🚑</div><h3>Emergency</h3><p>Ambulance and trauma care with a 15-minute response promise.</p></div>
    <div class="card glow reveal"><div class="ico">📋</div><h3>Health Packages</h3><p>Annual full-body checkup from just ₹999.</p></div>
  </div>
</div></section>

<section style="background:var(--bg2)"><div class="wrap"><div class="stats reveal">
    <div class="stat reveal"><div class="n">50k+</div><div class="l">Patients Treated</div></div>
    <div class="stat reveal"><div class="n">30+</div><div class="l">Specialists</div></div>
    <div class="stat reveal"><div class="n">15min</div><div class="l">Avg Wait</div></div>
    <div class="stat reveal"><div class="n">4.8★</div><div class="l">Google Rating</div></div>
</div></div></section>

<section class="proc"><div class="wrap">
  <span class="ey reveal">How it works</span><h2 class="reveal">Simple, fast, trusted</h2>
  <div class="grid g3">
    <div class="card reveal"><div class="ico">1</div><h3>Book</h3><p>WhatsApp or form — slot confirmed in 2 hours.</p></div>
    <div class="card reveal"><div class="ico">2</div><h3>Visit</h3><p>Paperless check-in, zero queue.</p></div>
    <div class="card reveal"><div class="ico">3</div><h3>Heal</h3><p>Specialist care + digital report on WhatsApp.</p></div>
  </div>
</div></section>

<section class="team"><div class="wrap">
  <span class="ey reveal">Our team</span><h2 class="reveal">The people behind Sri Lakshmi Multi-Speciality Clinic</h2>
  <div class="grid g3">
    <div class="card reveal"><div class="av">👩‍⚕️</div><h3>Dr. Lakshmi Menon</h3><p>Chief Physician</p></div>
    <div class="card reveal"><div class="av">👨‍⚕️</div><h3>Dr. Arvind R.</h3><p>Cardiologist</p></div>
    <div class="card reveal"><div class="av">🦷</div><h3>Dr. Sneha K.</h3><p>Dental Surgeon</p></div>
  </div>
</div></section>

<section class="price" style="background:var(--bg2)"><div class="wrap">
  <span class="ey reveal">Plans & Pricing</span><h2 class="reveal">Transparent, no surprises</h2>
  <div class="grid g3">
    <div class="card  reveal"><h3>Essential</h3><div class="amt">₹999 <small>Full-body checkup</small></div><ul><li>✓ 40 tests</li><li>✓ Doctor review</li><li>✓ Digital report</li></ul></div>
    <div class="card feat reveal"><h3>Family</h3><div class="amt">₹4,999 <small>4 members / year</small></div><ul><li>✓ 60 tests</li><li>✓ Priority booking</li><li>✓ Home sample</li></ul> <span class="btn" style="margin-top:auto">Choose</span></div>
    <div class="card  reveal"><h3>Corporate</h3><div class="amt">Custom <small>For offices</small></div><ul><li>✓ On-site camp</li><li>✓ Group rates</li><li>✓ HR dashboard</li></ul></div>
  </div>
</div></section>

<section class="gal"><div class="wrap">
  <span class="ey reveal">Gallery</span><h2 class="reveal">A look inside</h2>
  <div class="gal">
    <div class="ph reveal" title="Reception Lounge"></div>
    <div class="ph reveal" title="ICU Suite"></div>
    <div class="ph reveal" title="Dental Studio"></div>
    <div class="ph reveal" title="Diagnostics Lab"></div>
  </div>
</div></section>

<section class="faq"><div class="wrap">
  <span class="ey reveal">FAQ</span><h2 class="reveal">Common questions</h2>
    <div class="item reveal"><button class="q">❓ How do I book an appointment?<span class="pm">+</span></button><div class="a">Tap WhatsApp or the enquiry form — you get a confirmed slot within 2 hours, 8am–8pm.</div></div>
    <div class="item reveal"><button class="q">❓ Do you accept insurance?<span class="pm">+</span></button><div class="a">Yes, we are empanelled with major insurers and offer cashless where applicable.</div></div>
    <div class="item reveal"><button class="q">❓ Is the full-body checkup fasting?<span class="pm">+</span></button><div class="a">Yes, 10–12 hours fasting; water is fine. Reports reach you on WhatsApp the same evening.</div></div>
</div></section>

<section class="testi"><div class="wrap">
  <span class="ey reveal">Client love</span><h2 class="reveal">What our clients say</h2>
  <div class="grid g2">
    <div class="card glow reveal">““Got an appointment in 10 minutes via WhatsApp. Clean, modern and caring.””<div class="who">— Priya R., T. Nagar</div></div>
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
        <label>Service needed</label><select name="service"><option>General Enquiry</option><option>General & 24/7</option><option>Dental Care</option><option>Diagnostics</option><option>Vaccination</option><option>Emergency</option><option>Health Packages</option></select>
        <label>Message</label><textarea name="message" rows="3" placeholder="Tell us what you need"></textarea>
        <button class="btn" type="submit">Send Enquiry</button>
        <p class="form-msg" id="form-msg" role="status" aria-live="polite"></p>
      </form>
    </div>
    <div class="reveal">
      <div class="map"><iframe src="https://www.google.com/maps?q=T. Nagar, Chennai&output=embed" width="100%" height="300" style="border:0" loading="lazy"></iframe></div>
      <p style="margin-top:16px">📍 T. Nagar, Chennai &nbsp; • &nbsp; 📞 <a href="tel:+919999999999">+91 99999 99999</a> &nbsp; • &nbsp; 💬 <a class="wa" data-wa="Hi, I need help." style="color:var(--acc2)">WhatsApp</a></p>
    </div>
  </div>
</div></section>

<section class="cta"><div class="wrap">
  <h2>Websites that bring enquiries, not just likes.</h2>
  <p style="margin:10px 0 24px"></p>
  <a class="btn" data-wa="Hi, I want a website like this.">Get a free quote</a>
</div></section>

<footer>© <span id="y"></span> Sri Lakshmi Multi-Speciality Clinic · T. Nagar, Chennai   · Hymora Studios</footer>
<div class="cookiebar" id="cookiebar"><span>We use cookies to improve experience & measure leads. <a href="#" style="color:var(--acc2)">Privacy</a></span>
<span><button class="btn ghost" id="cookie-reject">Reject</button><button class="btn" id="cookie-accept">Accept</button></span></div>
<a class="fab" data-wa="Hi Sri Lakshmi Multi-Speciality Clinic, I'd like to enquire." title="WhatsApp">💬</a>`;

export default function Page() {
  return <ClientShell html={html} />;
}
