import ClientShell from "./ClientShell";

export const metadata = {
  title: 'BrightMinds Academy — Results That Matter',
  description: 'NEET, JEE and CBSE coaching with personal mentoring and live online + offline batches in Tambaram and Anna Nagar.',
};

const html = `<a class="skip" href="#main">Skip to content</a>
<nav aria-label="Primary"><div class="wrap navin"><div class="logo"><b>BrightMinds Academy</b></div><a class="btn ghost" href="#contact">Enquire</a></div></nav>

<header class="hero"><div class="wrap" id="main">
  <span class="ey">Results That Matter</span>
  <h1>BrightMinds Academy</h1>
  <p class="lead">NEET, JEE and CBSE coaching with personal mentoring and live online + offline batches in Tambaram and Anna Nagar.</p>
  <a class="btn" data-wa="Hi BrightMinds Academy, I'd like to enquire.">WhatsApp Us</a>
  <a class="btn ghost" href="#book">Book / Enquire</a>
  <div class="tag"><span>✅ Tambaram, Chennai</span><span>✅ Mobile-first</span><span>✅ SEO-ready</span><span>✅ WhatsApp</span><span>✅ Live Enquiry</span></div>
</div></header>

<div class="trustbar"><div class="wrap"><span>🛡️ <b>Trusted</b> by Chennai families & businesses</span><span>⚡ <b>Fast</b> response on WhatsApp</span><span>🔒 <b>Transparent</b> pricing</span><span>⭐ <b>4.8+</b> Google rating</span></div></div>

<section class="about"><div class="wrap"><div class="grid g2">
  <div class="reveal"><div class="ph"></div></div>
  <div class="reveal"><span class="ey">About us</span><h2>Results That Matter</h2><p>BrightMinds has helped 5,000+ students reach medical and engineering seats in 15 years. Our secret: small batches, weekly mocks with analysis, and a mentor assigned to every child — not just lectures.</p>
  <p style="margin-top:14px"><b style="color:var(--txt)">Founded by Dr. Karthik V</b> — Academic Director.</p>
  <a class="btn ghost" href="#contact" style="margin-top:18px">Talk to our team</a></div>
</div></div></section>

<section class="svc"><div class="wrap">
  <span class="ey reveal">What we offer</span><h2 class="reveal">Our Services</h2>
  <div class="grid g3">
    <div class="card glow reveal"><div class="ico">🧪</div><h3>NEET</h3><p>Medical entrance, expert faculty & MCQs.</p></div>
    <div class="card glow reveal"><div class="ico">📐</div><h3>JEE</h3><p>Engineering, concept-first teaching.</p></div>
    <div class="card glow reveal"><div class="ico">📚</div><h3>CBSE/State</h3><p>Classes 6–12, all subjects.</p></div>
    <div class="card glow reveal"><div class="ico">💻</div><h3>Online</h3><p>Live interactive batches, recorded.</p></div>
    <div class="card glow reveal"><div class="ico">📝</div><h3>Mocks</h3><p>Weekly tests with rank analysis.</p></div>
    <div class="card glow reveal"><div class="ico">🎯</div><h3>Mentoring</h3><p>1:1 doubt clearing, assigned mentor.</p></div>
  </div>
</div></section>

<section style="background:var(--bg2)"><div class="wrap"><div class="stats reveal">
    <div class="stat reveal"><div class="n">92%</div><div class="l">Selection</div></div>
    <div class="stat reveal"><div class="n">15yr</div><div class="l">Experience</div></div>
    <div class="stat reveal"><div class="n">40+</div><div class="l">Faculty</div></div>
    <div class="stat reveal"><div class="n">5000+</div><div class="l">Alumni</div></div>
</div></div></section>

<section class="proc"><div class="wrap">
  <span class="ey reveal">How it works</span><h2 class="reveal">Simple, fast, trusted</h2>
  <div class="grid g3">
    <div class="card reveal"><div class="ico">1</div><h3>Assess</h3><p>Free diagnostic test.</p></div>
    <div class="card reveal"><div class="ico">2</div><h3>Batch</h3><p>Online/offline, matched level.</p></div>
    <div class="card reveal"><div class="ico">3</div><h3>Excel</h3><p>Mentoring to results.</p></div>
  </div>
</div></section>

<section class="team"><div class="wrap">
  <span class="ey reveal">Our team</span><h2 class="reveal">The people behind BrightMinds Academy</h2>
  <div class="grid g3">
    <div class="card reveal"><div class="av">🧑‍🏫</div><h3>Dr. Karthik V</h3><p>Director</p></div>
    <div class="card reveal"><div class="av">👩‍🏫</div><h3>Priya N.</h3><p>NEET Head</p></div>
    <div class="card reveal"><div class="av">🧑‍🏫</div><h3>Suresh K.</h3><p>JEE Head</p></div>
  </div>
</div></section>

<section class="price" style="background:var(--bg2)"><div class="wrap">
  <span class="ey reveal">Plans & Pricing</span><h2 class="reveal">Transparent, no surprises</h2>
  <div class="grid g3">
    <div class="card  reveal"><h3>CBSE</h3><div class="amt">₹2k/mo <small>Classes 6–12</small></div><ul><li>✓ All subj</li><li>✓ Tests</li></ul></div>
    <div class="card feat reveal"><h3>NEET/JEE</h3><div class="amt">₹4.5k/mo <small>Full prep</small></div><ul><li>✓ Mocks</li><li>✓ Mentor</li></ul> <span class="btn" style="margin-top:auto">Choose</span></div>
    <div class="card  reveal"><h3>Crash</h3><div class="amt">₹9k <small>90 days</small></div><ul><li>✓ Intensive</li><li>✓ PYQ</li></ul></div>
  </div>
</div></section>

<section class="gal"><div class="wrap">
  <span class="ey reveal">Gallery</span><h2 class="reveal">A look inside</h2>
  <div class="gal">
    <div class="ph reveal" title="Classroom"></div>
    <div class="ph reveal" title="Lab"></div>
    <div class="ph reveal" title="Online Studio"></div>
    <div class="ph reveal" title="Result Wall"></div>
  </div>
</div></section>

<section class="faq"><div class="wrap">
  <span class="ey reveal">FAQ</span><h2 class="reveal">Common questions</h2>
    <div class="item reveal"><button class="q">❓ Do you offer a free test?<span class="pm">+</span></button><div class="a">Yes — a diagnostic test and counselling session, no fee.</div></div>
    <div class="item reveal"><button class="q">❓ Online or offline?<span class="pm">+</span></button><div class="a">Both — live online batches are recorded for revision.</div></div>
    <div class="item reveal"><button class="q">❓ What's the selection rate?<span class="pm">+</span></button><div class="a">92% of our two-year NEET batch qualified last cycle.</div></div>
</div></section>

<section class="testi"><div class="wrap">
  <span class="ey reveal">Client love</span><h2 class="reveal">What our clients say</h2>
  <div class="grid g2">
    <div class="card glow reveal">““My NEET rank jumped 12k positions in one year. Best in Chennai.””<div class="who">— Karthik V., Tambaram</div></div>
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
        <label>Service needed</label><select name="service"><option>General Enquiry</option><option>NEET</option><option>JEE</option><option>CBSE/State</option><option>Online</option><option>Mocks</option><option>Mentoring</option></select>
        <label>Message</label><textarea name="message" rows="3" placeholder="Tell us what you need"></textarea>
        <button class="btn" type="submit">Send Enquiry</button>
        <p class="form-msg" id="form-msg" role="status" aria-live="polite"></p>
      </form>
    </div>
    <div class="reveal">
      <div class="map"><iframe src="https://www.google.com/maps?q=Tambaram, Chennai&output=embed" width="100%" height="300" style="border:0" loading="lazy"></iframe></div>
      <p style="margin-top:16px">📍 Tambaram, Chennai &nbsp; • &nbsp; 📞 <a href="tel:+919999999999">+91 99999 99999</a> &nbsp; • &nbsp; 💬 <a class="wa" data-wa="Hi, I need help." style="color:var(--acc2)">WhatsApp</a></p>
    </div>
  </div>
</div></section>

<section class="cta"><div class="wrap">
  <h2>Websites that bring enquiries, not just likes.</h2>
  <p style="margin:10px 0 24px"></p>
  <a class="btn" data-wa="Hi, I want a website like this.">Get a free quote</a>
</div></section>

<footer>© <span id="y"></span> BrightMinds Academy · Tambaram, Chennai   · Hymora Studios</footer>
<div class="cookiebar" id="cookiebar"><span>We use cookies to improve experience & measure leads. <a href="#" style="color:var(--acc2)">Privacy</a></span>
<span><button class="btn ghost" id="cookie-reject">Reject</button><button class="btn" id="cookie-accept">Accept</button></span></div>
<a class="fab" data-wa="Hi BrightMinds Academy, I'd like to enquire." title="WhatsApp">💬</a>`;

export default function Page() {
  return <ClientShell html={html} />;
}
