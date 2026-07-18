import ClientShell from "./ClientShell";

export const metadata = {
  title: 'The Royal Pavilion — Your Perfect Day',
  description: 'A banquet & destination wedding venue in ECR with catering, décor and planning under one calm roof — up to 800 guests.',
};

const html = `<a class="skip" href="#main">Skip to content</a>
<nav aria-label="Primary"><div class="wrap navin"><div class="logo"><b>The Royal Pavilion</b></div><a class="btn ghost" href="#contact">Enquire</a></div></nav>

<header class="hero"><div class="wrap" id="main">
  <span class="ey">Your Perfect Day</span>
  <h1>The Royal Pavilion</h1>
  <p class="lead">A banquet & destination wedding venue in ECR with catering, décor and planning under one calm roof — up to 800 guests.</p>
  <a class="btn" data-wa="Hi The Royal Pavilion, I'd like to enquire.">WhatsApp Us</a>
  <a class="btn ghost" href="#book">Book / Enquire</a>
  <div class="tag"><span>✅ ECR, Chennai</span><span>✅ Mobile-first</span><span>✅ SEO-ready</span><span>✅ WhatsApp</span><span>✅ Live Enquiry</span></div>
</div></header>

<div class="trustbar"><div class="wrap"><span>🛡️ <b>Trusted</b> by Chennai families & businesses</span><span>⚡ <b>Fast</b> response on WhatsApp</span><span>🔒 <b>Transparent</b> pricing</span><span>⭐ <b>4.8+</b> Google rating</span></div></div>

<section class="about"><div class="wrap"><div class="grid g2">
  <div class="reveal"><div class="ph"></div></div>
  <div class="reveal"><span class="ey">About us</span><h2>Your Perfect Day</h2><p>The Royal Pavilion has hosted 500+ weddings on the ECR over 10 years. One coordinator, one contract, one beautiful day — from the garden ceremony to the last dance.</p>
  <p style="margin-top:14px"><b style="color:var(--txt)">Founded by Arjun Mehta</b> — Venue Director.</p>
  <a class="btn ghost" href="#contact" style="margin-top:18px">Talk to our team</a></div>
</div></div></section>

<section class="svc"><div class="wrap">
  <span class="ey reveal">What we offer</span><h2 class="reveal">Our Services</h2>
  <div class="grid g3">
    <div class="card glow reveal"><div class="ico">💍</div><h3>Banquet Hall</h3><p>800-guest AC hall with stage.</p></div>
    <div class="card glow reveal"><div class="ico">🌿</div><h3>Lawn</h3><p>Scenic garden ceremonies by the sea.</p></div>
    <div class="card glow reveal"><div class="ico">🍽️</div><h3>Catering</h3><p>Veg & non-veg, 200+ dishes.</p></div>
    <div class="card glow reveal"><div class="ico">🌸</div><h3>Décor</h3><p>Theme décor and floral design.</p></div>
    <div class="card glow reveal"><div class="ico">📋</div><h3>Planning</h3><p>End-to-end wedding planner.</p></div>
    <div class="card glow reveal"><div class="ico">🛏️</div><h3>Stay</h3><p>Rooms for family & guests.</p></div>
  </div>
</div></section>

<section style="background:var(--bg2)"><div class="wrap"><div class="stats reveal">
    <div class="stat reveal"><div class="n">500+</div><div class="l">Weddings</div></div>
    <div class="stat reveal"><div class="n">800</div><div class="l">Capacity</div></div>
    <div class="stat reveal"><div class="n">10yr</div><div class="l">Experience</div></div>
    <div class="stat reveal"><div class="n">All</div><div class="l">Incl.</div></div>
</div></div></section>

<section class="proc"><div class="wrap">
  <span class="ey reveal">How it works</span><h2 class="reveal">Simple, fast, trusted</h2>
  <div class="grid g3">
    <div class="card reveal"><div class="ico">1</div><h3>Tour</h3><p>Visit the venue, free.</p></div>
    <div class="card reveal"><div class="ico">2</div><h3>Plan</h3><p>Décor + catering curated.</p></div>
    <div class="card reveal"><div class="ico">3</div><h3>Celebrate</h3><p>Zero-stress day.</p></div>
  </div>
</div></section>

<section class="team"><div class="wrap">
  <span class="ey reveal">Our team</span><h2 class="reveal">The people behind The Royal Pavilion</h2>
  <div class="grid g3">
    <div class="card reveal"><div class="av">💍</div><h3>Arjun M.</h3><p>Director</p></div>
    <div class="card reveal"><div class="av">🌸</div><h3>Sara D.</h3><p>Planner</p></div>
    <div class="card reveal"><div class="av">🍽️</div><h3>Chef Kumar</h3><p>Catering</p></div>
  </div>
</div></section>

<section class="price" style="background:var(--bg2)"><div class="wrap">
  <span class="ey reveal">Plans & Pricing</span><h2 class="reveal">Transparent, no surprises</h2>
  <div class="grid g3">
    <div class="card  reveal"><h3>Lawn</h3><div class="amt">₹1.8L <small>200 guests</small></div><ul><li>✓ Garden</li><li>✓ Décor</li></ul></div>
    <div class="card feat reveal"><h3>Banquet</h3><div class="amt">₹3.5L <small>800 guests</small></div><ul><li>✓ AC hall</li><li>✓ Stage</li><li>✓ Catering</li></ul> <span class="btn" style="margin-top:auto">Choose</span></div>
    <div class="card  reveal"><h3>Destination</h3><div class="amt">₹6L+ <small>Full</small></div><ul><li>✓ Stay</li><li>✓ Planner</li><li>✓ Photos</li></ul></div>
  </div>
</div></section>

<section class="gal"><div class="wrap">
  <span class="ey reveal">Gallery</span><h2 class="reveal">A look inside</h2>
  <div class="gal">
    <div class="ph reveal" title="Banquet Hall"></div>
    <div class="ph reveal" title="Garden Lawn"></div>
    <div class="ph reveal" title="Décor Setup"></div>
    <div class="ph reveal" title="Bridal Suite"></div>
  </div>
</div></section>

<section class="faq"><div class="wrap">
  <span class="ey reveal">FAQ</span><h2 class="reveal">Common questions</h2>
    <div class="item reveal"><button class="q">❓ What's the guest capacity?<span class="pm">+</span></button><div class="a">Up to 800 in the AC banquet, 200 on the sea-view lawn.</div></div>
    <div class="item reveal"><button class="q">❓ Do you provide catering?<span class="pm">+</span></button><div class="a">Yes — 200+ veg and non-veg dishes, all in-house.</div></div>
    <div class="item reveal"><button class="q">❓ Is one coordinator assigned?<span class="pm">+</span></button><div class="a">Always — a single planner owns your whole day.</div></div>
</div></section>

<section class="testi"><div class="wrap">
  <span class="ey reveal">Client love</span><h2 class="reveal">What our clients say</h2>
  <div class="grid g2">
    <div class="card glow reveal">““One roof, zero stress. Our wedding was magical.””<div class="who">— Arjun & Meera, ECR</div></div>
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
        <label>Service needed</label><select name="service"><option>General Enquiry</option><option>Banquet Hall</option><option>Lawn</option><option>Catering</option><option>Décor</option><option>Planning</option><option>Stay</option></select>
        <label>Message</label><textarea name="message" rows="3" placeholder="Tell us what you need"></textarea>
        <button class="btn" type="submit">Send Enquiry</button>
        <p class="form-msg" id="form-msg" role="status" aria-live="polite"></p>
      </form>
    </div>
    <div class="reveal">
      <div class="map"><iframe src="https://www.google.com/maps?q=ECR, Chennai&output=embed" width="100%" height="300" style="border:0" loading="lazy"></iframe></div>
      <p style="margin-top:16px">📍 ECR, Chennai &nbsp; • &nbsp; 📞 <a href="tel:+919999999999">+91 99999 99999</a> &nbsp; • &nbsp; 💬 <a class="wa" data-wa="Hi, I need help." style="color:var(--acc2)">WhatsApp</a></p>
    </div>
  </div>
</div></section>

<section class="cta"><div class="wrap">
  <h2>Websites that bring enquiries, not just likes.</h2>
  <p style="margin:10px 0 24px"></p>
  <a class="btn" data-wa="Hi, I want a website like this.">Get a free quote</a>
</div></section>

<footer>© <span id="y"></span> The Royal Pavilion · ECR, Chennai   · Hymora Studios</footer>
<div class="cookiebar" id="cookiebar"><span>We use cookies to improve experience & measure leads. <a href="#" style="color:var(--acc2)">Privacy</a></span>
<span><button class="btn ghost" id="cookie-reject">Reject</button><button class="btn" id="cookie-accept">Accept</button></span></div>
<a class="fab" data-wa="Hi The Royal Pavilion, I'd like to enquire." title="WhatsApp">💬</a>`;

export default function Page() {
  return <ClientShell html={html} />;
}
