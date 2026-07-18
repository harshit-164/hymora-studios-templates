import ClientShell from "./ClientShell";

export const metadata = {
  title: 'SpeedLine Logistics — Move Anything, Anywhere',
  description: 'Pan-India and international freight, warehousing and last-mile delivery with live shipment tracking your customers can trust.',
};

const html = `<a class="skip" href="#main">Skip to content</a>
<nav aria-label="Primary"><div class="wrap navin"><div class="logo"><b>SpeedLine Logistics</b></div><a class="btn ghost" href="#contact">Enquire</a></div></nav>

<header class="hero"><div class="wrap" id="main">
  <span class="ey">Move Anything, Anywhere</span>
  <h1>SpeedLine Logistics</h1>
  <p class="lead">Pan-India and international freight, warehousing and last-mile delivery with live shipment tracking your customers can trust.</p>
  <a class="btn" data-wa="Hi SpeedLine Logistics, I'd like to enquire.">WhatsApp Us</a>
  <a class="btn ghost" href="#book">Book / Enquire</a>
  <div class="tag"><span>✅ Ambattur, Chennai</span><span>✅ Mobile-first</span><span>✅ SEO-ready</span><span>✅ WhatsApp</span><span>✅ Live Enquiry</span></div>
</div></header>

<div class="trustbar"><div class="wrap"><span>🛡️ <b>Trusted</b> by Chennai families & businesses</span><span>⚡ <b>Fast</b> response on WhatsApp</span><span>🔒 <b>Transparent</b> pricing</span><span>⭐ <b>4.8+</b> Google rating</span></div></div>

<section class="about"><div class="wrap"><div class="grid g2">
  <div class="reveal"><div class="ph"></div></div>
  <div class="reveal"><span class="ey">About us</span><h2>Move Anything, Anywhere</h2><p>SpeedLine moves cargo for 500+ Chennai businesses — from Tiruvottiyur factories to ports worldwide. Our tracking dashboard and 98% on-time record are why exporters stay with us for decades.</p>
  <p style="margin-top:14px"><b style="color:var(--txt)">Founded by Rajesh Kannan</b> — CEO.</p>
  <a class="btn ghost" href="#contact" style="margin-top:18px">Talk to our team</a></div>
</div></div></section>

<section class="svc"><div class="wrap">
  <span class="ey reveal">What we offer</span><h2 class="reveal">Our Services</h2>
  <div class="grid g3">
    <div class="card glow reveal"><div class="ico">🚚</div><h3>Road Freight</h3><p>Full & part-load pan-India from our Ambattur hub.</p></div>
    <div class="card glow reveal"><div class="ico">🚢</div><h3>Sea & Air</h3><p>Import/export with customs clearance at Chennai port.</p></div>
    <div class="card glow reveal"><div class="ico">🏭</div><h3>Warehousing</h3><p>Bonded and ambient storage in Red Hills.</p></div>
    <div class="card glow reveal"><div class="ico">📦</div><h3>Last-Mile</h3><p>Chennai hyperlocal delivery in 24 hours.</p></div>
    <div class="card glow reveal"><div class="ico">📍</div><h3>Live Tracking</h3><p>Real-time visibility shared with your customers.</p></div>
    <div class="card glow reveal"><div class="ico">🤝</div><h3>3PL</h3><p>Outsourced logistics partner, end-to-end.</p></div>
  </div>
</div></section>

<section style="background:var(--bg2)"><div class="wrap"><div class="stats reveal">
    <div class="stat reveal"><div class="n">500+</div><div class="l">Vehicles</div></div>
    <div class="stat reveal"><div class="n">22yr</div><div class="l">In Business</div></div>
    <div class="stat reveal"><div class="n">98%</div><div class="l">On-Time</div></div>
    <div class="stat reveal"><div class="n">PAN</div><div class="l">India</div></div>
</div></div></section>

<section class="proc"><div class="wrap">
  <span class="ey reveal">How it works</span><h2 class="reveal">Simple, fast, trusted</h2>
  <div class="grid g3">
    <div class="card reveal"><div class="ico">1</div><h3>Quote</h3><p>Instant rate via form or WhatsApp.</p></div>
    <div class="card reveal"><div class="ico">2</div><h3>Pickup</h3><p>Slot booked and tracked.</p></div>
    <div class="card reveal"><div class="ico">3</div><h3>Deliver</h3><p>POD + live update to your client.</p></div>
  </div>
</div></section>

<section class="team"><div class="wrap">
  <span class="ey reveal">Our team</span><h2 class="reveal">The people behind SpeedLine Logistics</h2>
  <div class="grid g3">
    <div class="card reveal"><div class="av">🧑‍💼</div><h3>Rajesh K.</h3><p>CEO</p></div>
    <div class="card reveal"><div class="av">👩‍💼</div><h3>Divya S.</h3><p>Ops Head</p></div>
    <div class="card reveal"><div class="av">🧑‍✈️</div><h3>Manoj T.</h3><p>Customs</p></div>
  </div>
</div></section>

<section class="price" style="background:var(--bg2)"><div class="wrap">
  <span class="ey reveal">Plans & Pricing</span><h2 class="reveal">Transparent, no surprises</h2>
  <div class="grid g3">
    <div class="card  reveal"><h3>Local</h3><div class="amt">₹450 <small>Within city</small></div><ul><li>✓ 24h</li><li>✓ Tracking</li></ul></div>
    <div class="card feat reveal"><h3>Domestic</h3><div class="amt">₹9/kg <small>Pan-India</small></div><ul><li>✓ Insurance</li><li>✓ POD</li></ul> <span class="btn" style="margin-top:auto">Choose</span></div>
    <div class="card  reveal"><h3>International</h3><div class="amt">Quote <small>Sea/Air</small></div><ul><li>✓ Clearance</li><li>✓ Door-door</li></ul></div>
  </div>
</div></section>

<section class="gal"><div class="wrap">
  <span class="ey reveal">Gallery</span><h2 class="reveal">A look inside</h2>
  <div class="gal">
    <div class="ph reveal" title="Truck Fleet"></div>
    <div class="ph reveal" title="Warehouse"></div>
    <div class="ph reveal" title="Loading Bay"></div>
    <div class="ph reveal" title="Tracking Room"></div>
  </div>
</div></section>

<section class="faq"><div class="wrap">
  <span class="ey reveal">FAQ</span><h2 class="reveal">Common questions</h2>
    <div class="item reveal"><button class="q">❓ Can my customers track shipments?<span class="pm">+</span></button><div class="a">Yes — we share a live tracking link branded with your company.</div></div>
    <div class="item reveal"><button class="q">❓ Do you handle customs?<span class="pm">+</span></button><div class="a">Our team clears at Chennai port for both import and export.</div></div>
    <div class="item reveal"><button class="q">❓ What's your on-time rate?<span class="pm">+</span></button><div class="a">98% over the last 3 years across 40,000+ consignments.</div></div>
</div></section>

<section class="testi"><div class="wrap">
  <span class="ey reveal">Client love</span><h2 class="reveal">What our clients say</h2>
  <div class="grid g2">
    <div class="card glow reveal">““Our dispatch time dropped 40% after switching to SpeedLine.””<div class="who">— Rajesh K., Exporter</div></div>
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
        <label>Service needed</label><select name="service"><option>General Enquiry</option><option>Road Freight</option><option>Sea & Air</option><option>Warehousing</option><option>Last-Mile</option><option>Live Tracking</option><option>3PL</option></select>
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

<footer>© <span id="y"></span> SpeedLine Logistics · Ambattur, Chennai   · Hymora Studios</footer>
<div class="cookiebar" id="cookiebar"><span>We use cookies to improve experience & measure leads. <a href="#" style="color:var(--acc2)">Privacy</a></span>
<span><button class="btn ghost" id="cookie-reject">Reject</button><button class="btn" id="cookie-accept">Accept</button></span></div>
<a class="fab" data-wa="Hi SpeedLine Logistics, I'd like to enquire." title="WhatsApp">💬</a>`;

export default function Page() {
  return <ClientShell html={html} />;
}
