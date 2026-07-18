import ClientShell from "./ClientShell";

export const metadata = {
  title: 'Glamour Avenue Salon — Look Your Best',
  description: 'A luxury salon & spa in Nungambakkam — hair, skin, bridal and grooming with premium products in a calm, beautiful space.',
};

const html = `<a class="skip" href="#main">Skip to content</a>
<nav aria-label="Primary"><div class="wrap navin"><div class="logo"><b>Glamour Avenue Salon</b></div><a class="btn ghost" href="#contact">Enquire</a></div></nav>

<header class="hero"><div class="wrap" id="main">
  <span class="ey">Look Your Best</span>
  <h1>Glamour Avenue Salon</h1>
  <p class="lead">A luxury salon & spa in Nungambakkam — hair, skin, bridal and grooming with premium products in a calm, beautiful space.</p>
  <a class="btn" data-wa="Hi Glamour Avenue Salon, I'd like to enquire.">WhatsApp Us</a>
  <a class="btn ghost" href="#book">Book / Enquire</a>
  <div class="tag"><span>✅ Nungambakkam, Chennai</span><span>✅ Mobile-first</span><span>✅ SEO-ready</span><span>✅ WhatsApp</span><span>✅ Live Enquiry</span></div>
</div></header>

<div class="trustbar"><div class="wrap"><span>🛡️ <b>Trusted</b> by Chennai families & businesses</span><span>⚡ <b>Fast</b> response on WhatsApp</span><span>🔒 <b>Transparent</b> pricing</span><span>⭐ <b>4.8+</b> Google rating</span></div></div>

<section class="about"><div class="wrap"><div class="grid g2">
  <div class="reveal"><div class="ph"></div></div>
  <div class="reveal"><span class="ey">About us</span><h2>Look Your Best</h2><p>Glamour Avenue has styled 10,000+ Chennai clients in 8 years. We train every stylist in-house, use only premium brands, and our bridal suite has become the city's favourite for destination-wedding prep.</p>
  <p style="margin-top:14px"><b style="color:var(--txt)">Founded by Deepa Nair</b> — Creative Director.</p>
  <a class="btn ghost" href="#contact" style="margin-top:18px">Talk to our team</a></div>
</div></div></section>

<section class="svc"><div class="wrap">
  <span class="ey reveal">What we offer</span><h2 class="reveal">Our Services</h2>
  <div class="grid g3">
    <div class="card glow reveal"><div class="ico">💇</div><h3>Hair</h3><p>Cut, colour, treatments and styling.</p></div>
    <div class="card glow reveal"><div class="ico">🧖</div><h3>Skin & Spa</h3><p>Facials, clean-ups and body spa.</p></div>
    <div class="card glow reveal"><div class="ico">💍</div><h3>Bridal</h3><p>Complete bridal makeover packages.</p></div>
    <div class="card glow reveal"><div class="ico">🧔</div><h3>Men's Grooming</h3><p>Beard, shave and facials.</p></div>
    <div class="card glow reveal"><div class="ico">💅</div><h3>Nails</h3><p>Manicure, pedicure and nail art.</p></div>
    <div class="card glow reveal"><div class="ico">🎁</div><h3>Memberships</h3><p>Unlimited monthly plans.</p></div>
  </div>
</div></section>

<section style="background:var(--bg2)"><div class="wrap"><div class="stats reveal">
    <div class="stat reveal"><div class="n">10k+</div><div class="l">Clients</div></div>
    <div class="stat reveal"><div class="n">8yr</div><div class="l">Experience</div></div>
    <div class="stat reveal"><div class="n">4.9★</div><div class="l">Rating</div></div>
    <div class="stat reveal"><div class="n">VIP</div><div class="l">Members</div></div>
</div></div></section>

<section class="proc"><div class="wrap">
  <span class="ey reveal">How it works</span><h2 class="reveal">Simple, fast, trusted</h2>
  <div class="grid g3">
    <div class="card reveal"><div class="ico">1</div><h3>Book</h3><p>WhatsApp or form, instant confirm.</p></div>
    <div class="card reveal"><div class="ico">2</div><h3>Visit</h3><p>Consultation then relax.</p></div>
    <div class="card reveal"><div class="ico">3</div><h3>Glow</h3><p>Premium result, every time.</p></div>
  </div>
</div></section>

<section class="team"><div class="wrap">
  <span class="ey reveal">Our team</span><h2 class="reveal">The people behind Glamour Avenue Salon</h2>
  <div class="grid g3">
    <div class="card reveal"><div class="av">💇</div><h3>Deepa N.</h3><p>Creative Dir</p></div>
    <div class="card reveal"><div class="av">🧑‍🎤</div><h3>Arun S.</h3><p>Master Stylist</p></div>
    <div class="card reveal"><div class="av">💅</div><h3>Meera K.</h3><p>Nail Artist</p></div>
  </div>
</div></section>

<section class="price" style="background:var(--bg2)"><div class="wrap">
  <span class="ey reveal">Plans & Pricing</span><h2 class="reveal">Transparent, no surprises</h2>
  <div class="grid g3">
    <div class="card  reveal"><h3>Express</h3><div class="amt">₹799 <small>Hair + rinse</small></div><ul><li>✓ Wash</li><li>✓ Style</li></ul></div>
    <div class="card feat reveal"><h3>Bridal</h3><div class="amt">₹12k <small>Full makeover</small></div><ul><li>✓ Hair</li><li>✓ Makeup</li><li>✓ Saree</li></ul> <span class="btn" style="margin-top:auto">Choose</span></div>
    <div class="card  reveal"><h3>Membership</h3><div class="amt">₹2.5k/mo <small>Unlimited</small></div><ul><li>✓ All services</li><li>✓ Priority</li></ul></div>
  </div>
</div></section>

<section class="gal"><div class="wrap">
  <span class="ey reveal">Gallery</span><h2 class="reveal">A look inside</h2>
  <div class="gal">
    <div class="ph reveal" title="Hair Studio"></div>
    <div class="ph reveal" title="Bridal Suite"></div>
    <div class="ph reveal" title="Spa Room"></div>
    <div class="ph reveal" title="Nail Bar"></div>
  </div>
</div></section>

<section class="faq"><div class="wrap">
  <span class="ey reveal">FAQ</span><h2 class="reveal">Common questions</h2>
    <div class="item reveal"><button class="q">❓ Do you do bridal packages?<span class="pm">+</span></button><div class="a">Yes — full makeover including hair, makeup and draping.</div></div>
    <div class="item reveal"><button class="q">❓ Which products do you use?<span class="pm">+</span></button><div class="a">Only premium, salon-grade brands; we avoid paraben-heavy lines.</div></div>
    <div class="item reveal"><button class="q">❓ Is there a membership?<span class="pm">+</span></button><div class="a">Unlimited monthly plans from ₹2,500 with priority booking.</div></div>
</div></section>

<section class="testi"><div class="wrap">
  <span class="ey reveal">Client love</span><h2 class="reveal">What our clients say</h2>
  <div class="grid g2">
    <div class="card glow reveal">““Bridal package was flawless — felt like a celebrity.””<div class="who">— Deepa N., Nungambakkam</div></div>
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
        <label>Service needed</label><select name="service"><option>General Enquiry</option><option>Hair</option><option>Skin & Spa</option><option>Bridal</option><option>Men's Grooming</option><option>Nails</option><option>Memberships</option></select>
        <label>Message</label><textarea name="message" rows="3" placeholder="Tell us what you need"></textarea>
        <button class="btn" type="submit">Send Enquiry</button>
        <p class="form-msg" id="form-msg" role="status" aria-live="polite"></p>
      </form>
    </div>
    <div class="reveal">
      <div class="map"><iframe src="https://www.google.com/maps?q=Nungambakkam, Chennai&output=embed" width="100%" height="300" style="border:0" loading="lazy"></iframe></div>
      <p style="margin-top:16px">📍 Nungambakkam, Chennai &nbsp; • &nbsp; 📞 <a href="tel:+919999999999">+91 99999 99999</a> &nbsp; • &nbsp; 💬 <a class="wa" data-wa="Hi, I need help." style="color:var(--acc2)">WhatsApp</a></p>
    </div>
  </div>
</div></section>

<section class="cta"><div class="wrap">
  <h2>Websites that bring enquiries, not just likes.</h2>
  <p style="margin:10px 0 24px"></p>
  <a class="btn" data-wa="Hi, I want a website like this.">Get a free quote</a>
</div></section>

<footer>© <span id="y"></span> Glamour Avenue Salon · Nungambakkam, Chennai   · Hymora Studios</footer>
<div class="cookiebar" id="cookiebar"><span>We use cookies to improve experience & measure leads. <a href="#" style="color:var(--acc2)">Privacy</a></span>
<span><button class="btn ghost" id="cookie-reject">Reject</button><button class="btn" id="cookie-accept">Accept</button></span></div>
<a class="fab" data-wa="Hi Glamour Avenue Salon, I'd like to enquire." title="WhatsApp">💬</a>`;

export default function Page() {
  return <ClientShell html={html} />;
}
