import ClientShell from "./ClientShell";

export const metadata = {
  title: 'Studio Luxe Interiors — Spaces That Speak',
  description: 'End-to-end interior design for Chennai homes & offices — see a photoreal 3D preview before we build, delivered in 45 days.',
};

const html = `<a class="skip" href="#main">Skip to content</a>
<nav aria-label="Primary"><div class="wrap navin"><div class="logo"><b>Studio Luxe Interiors</b></div><a class="btn ghost" href="#contact">Enquire</a></div></nav>

<header class="hero"><div class="wrap" id="main">
  <span class="ey">Spaces That Speak</span>
  <h1>Studio Luxe Interiors</h1>
  <p class="lead">End-to-end interior design for Chennai homes & offices — see a photoreal 3D preview before we build, delivered in 45 days.</p>
  <a class="btn" data-wa="Hi Studio Luxe Interiors, I'd like to enquire.">WhatsApp Us</a>
  <a class="btn ghost" href="#book">Book / Enquire</a>
  <div class="tag"><span>✅ Velachery, Chennai</span><span>✅ Mobile-first</span><span>✅ SEO-ready</span><span>✅ WhatsApp</span><span>✅ Live Enquiry</span></div>
</div></header>

<div class="trustbar"><div class="wrap"><span>🛡️ <b>Trusted</b> by Chennai families & businesses</span><span>⚡ <b>Fast</b> response on WhatsApp</span><span>🔒 <b>Transparent</b> pricing</span><span>⭐ <b>4.8+</b> Google rating</span></div></div>

<section class="about"><div class="wrap"><div class="grid g2">
  <div class="reveal"><div class="ph"></div></div>
  <div class="reveal"><span class="ey">About us</span><h2>Spaces That Speak</h2><p>Studio Luxe has designed 450+ homes across Velachery, Anna Nagar and Adyar. We pair factory-finished modular systems with handcrafted detail, and you approve a 3D render before a single tile is laid.</p>
  <p style="margin-top:14px"><b style="color:var(--txt)">Founded by Anitha Suresh</b> — Principal Designer.</p>
  <a class="btn ghost" href="#contact" style="margin-top:18px">Talk to our team</a></div>
</div></div></section>

<section class="svc"><div class="wrap">
  <span class="ey reveal">What we offer</span><h2 class="reveal">Our Services</h2>
  <div class="grid g3">
    <div class="card glow reveal"><div class="ico">🛋️</div><h3>Modular Kitchens</h3><p>Factory-finished, 10-year warranty backs.</p></div>
    <div class="card glow reveal"><div class="ico">🛏️</div><h3>Bedrooms</h3><p>Warm, functional, premium wardrobes.</p></div>
    <div class="card glow reveal"><div class="ico">🏢</div><h3>Office Interiors</h3><p>Productive, brand-aligned workspaces.</p></div>
    <div class="card glow reveal"><div class="ico">🎨</div><h3>Ceiling & Light</h3><p>Layered ambient lighting design.</p></div>
    <div class="card glow reveal"><div class="ico">🪟</div><h3>Living & Dining</h3><p>Statement social spaces.</p></div>
    <div class="card glow reveal"><div class="ico">📐</div><h3>3D Preview</h3><p>Photoreal render approved before build.</p></div>
  </div>
</div></section>

<section style="background:var(--bg2)"><div class="wrap"><div class="stats reveal">
    <div class="stat reveal"><div class="n">450+</div><div class="l">Homes</div></div>
    <div class="stat reveal"><div class="n">12yr</div><div class="l">Experience</div></div>
    <div class="stat reveal"><div class="n">45day</div><div class="l">Avg Delivery</div></div>
    <div class="stat reveal"><div class="n">4.9★</div><div class="l">Rating</div></div>
</div></div></section>

<section class="proc"><div class="wrap">
  <span class="ey reveal">How it works</span><h2 class="reveal">Simple, fast, trusted</h2>
  <div class="grid g3">
    <div class="card reveal"><div class="ico">1</div><h3>Consult</h3><p>Free home visit + moodboard.</p></div>
    <div class="card reveal"><div class="ico">2</div><h3>3D Design</h3><p>Render approved, then we build.</p></div>
    <div class="card reveal"><div class="ico">3</div><h3>Handover</h3><p>On-time, photo-ready.</p></div>
  </div>
</div></section>

<section class="team"><div class="wrap">
  <span class="ey reveal">Our team</span><h2 class="reveal">The people behind Studio Luxe Interiors</h2>
  <div class="grid g3">
    <div class="card reveal"><div class="av">🧑‍🎨</div><h3>Anitha S.</h3><p>Principal</p></div>
    <div class="card reveal"><div class="av">👩‍🎨</div><h3>Kavya R.</h3><p>Senior Designer</p></div>
    <div class="card reveal"><div class="av">🧑‍🔧</div><h3>Prabhu M.</h3><p>Project Lead</p></div>
  </div>
</div></section>

<section class="price" style="background:var(--bg2)"><div class="wrap">
  <span class="ey reveal">Plans & Pricing</span><h2 class="reveal">Transparent, no surprises</h2>
  <div class="grid g3">
    <div class="card  reveal"><h3>Essentials</h3><div class="amt">₹3.5L <small>2 rooms</small></div><ul><li>✓ 3D design</li><li>✓ Modular</li><li>✓ Paint</li></ul></div>
    <div class="card feat reveal"><h3>Full Home</h3><div class="amt">₹8.9L <small>3BHK turnkey</small></div><ul><li>✓ 3D + execution</li><li>✓ Modular kitchen</li><li>✓ Lighting</li></ul> <span class="btn" style="margin-top:auto">Choose</span></div>
    <div class="card  reveal"><h3>Luxury</h3><div class="amt">₹18L+ <small>Premium</small></div><ul><li>✓ Custom joinery</li><li>✓ Automation</li><li>✓ Concierge</li></ul></div>
  </div>
</div></section>

<section class="gal"><div class="wrap">
  <span class="ey reveal">Gallery</span><h2 class="reveal">A look inside</h2>
  <div class="gal">
    <div class="ph reveal" title="Modular Kitchen"></div>
    <div class="ph reveal" title="Master Bedroom"></div>
    <div class="ph reveal" title="Living Room"></div>
    <div class="ph reveal" title="Office Cabin"></div>
  </div>
</div></section>

<section class="faq"><div class="wrap">
  <span class="ey reveal">FAQ</span><h2 class="reveal">Common questions</h2>
    <div class="item reveal"><button class="q">❓ Do you show a 3D design first?<span class="pm">+</span></button><div class="a">Always — you approve a photoreal render before any work begins.</div></div>
    <div class="item reveal"><button class="q">❓ How long does a 3BHK take?<span class="pm">+</span></button><div class="a">Typically 40–50 days from approval to handover.</div></div>
    <div class="item reveal"><button class="q">❓ Is modular better than carpenter?<span class="pm">+</span></button><div class="a">Factory-finished modular is faster, warrantied and cleaner; we use both where best.</div></div>
</div></section>

<section class="testi"><div class="wrap">
  <span class="ey reveal">Client love</span><h2 class="reveal">What our clients say</h2>
  <div class="grid g2">
    <div class="card glow reveal">““They showed a 3D render first — exactly what got built. Flawless.””<div class="who">— Anitha S., Velachery</div></div>
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
        <label>Service needed</label><select name="service"><option>General Enquiry</option><option>Modular Kitchens</option><option>Bedrooms</option><option>Office Interiors</option><option>Ceiling & Light</option><option>Living & Dining</option><option>3D Preview</option></select>
        <label>Message</label><textarea name="message" rows="3" placeholder="Tell us what you need"></textarea>
        <button class="btn" type="submit">Send Enquiry</button>
        <p class="form-msg" id="form-msg" role="status" aria-live="polite"></p>
      </form>
    </div>
    <div class="reveal">
      <div class="map"><iframe src="https://www.google.com/maps?q=Velachery, Chennai&output=embed" width="100%" height="300" style="border:0" loading="lazy"></iframe></div>
      <p style="margin-top:16px">📍 Velachery, Chennai &nbsp; • &nbsp; 📞 <a href="tel:+919999999999">+91 99999 99999</a> &nbsp; • &nbsp; 💬 <a class="wa" data-wa="Hi, I need help." style="color:var(--acc2)">WhatsApp</a></p>
    </div>
  </div>
</div></section>

<section class="cta"><div class="wrap">
  <h2>Websites that bring enquiries, not just likes.</h2>
  <p style="margin:10px 0 24px"></p>
  <a class="btn" data-wa="Hi, I want a website like this.">Get a free quote</a>
</div></section>

<footer>© <span id="y"></span> Studio Luxe Interiors · Velachery, Chennai   · Hymora Studios</footer>
<div class="cookiebar" id="cookiebar"><span>We use cookies to improve experience & measure leads. <a href="#" style="color:var(--acc2)">Privacy</a></span>
<span><button class="btn ghost" id="cookie-reject">Reject</button><button class="btn" id="cookie-accept">Accept</button></span></div>
<a class="fab" data-wa="Hi Studio Luxe Interiors, I'd like to enquire." title="WhatsApp">💬</a>`;

export default function Page() {
  return <ClientShell html={html} />;
}
