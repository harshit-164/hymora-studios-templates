"use client";
import { useEffect } from "react";
import "./globals.css";

export default function ClientShell({ html }: { html: string }) {
  useEffect(() => {
    // FAQ accordion
    document.querySelectorAll(".faq .q").forEach((q) => {
      q.addEventListener("click", () => {
        const it = q.parentElement as HTMLElement;
        it.classList.toggle("open");
        const pm = q.querySelector(".pm");
        if (pm) pm.textContent = it.classList.contains("open") ? "−" : "+";
      });
    });
    // scroll reveal
    const io = new IntersectionObserver((es) => {
      es.forEach((en) => {
        if (en.isIntersecting) {
          (en.target as HTMLElement).classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    // cookie consent
    const bar = document.getElementById("cookiebar");
    const CK = "hv_consent";
    if (bar && !localStorage.getItem(CK)) {
      bar.style.display = "flex";
      document.getElementById("cookie-accept")?.addEventListener("click", () => {
        localStorage.setItem(CK, "1"); bar.style.display = "none";
      });
      document.getElementById("cookie-reject")?.addEventListener("click", () => {
        localStorage.setItem(CK, "0"); bar.style.display = "none";
      });
    }
    // whatsapp + form (SITE placeholder)
    const SITE = { name: document.querySelector(".logo")?.textContent?.trim() || "Business", whatsapp: "919999999999", email: "hello@example.com" };
    document.querySelectorAll("[data-wa]").forEach((a) => {
      const t = a.getAttribute("data-wa") || "Hi";
      (a as HTMLAnchorElement).href = "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(t);
    });
    document.querySelectorAll("form[data-enquiry]").forEach((f) => {
      f.addEventListener("submit", (e) => {
        e.preventDefault();
        const d = Object.fromEntries(new FormData(f as HTMLFormElement));
        const phone = String(d.phone || "").replace(/\D/g, "");
        const msg = document.getElementById("form-msg");
        if (!d.name || !/^\d{10}$/.test(phone)) {
          if (msg) { msg.textContent = "Enter your name and a valid 10-digit phone."; msg.className = "form-msg err"; }
          return;
        }
        const body = "Name: " + d.name + "\nPhone: " + d.phone + "\nEmail: " + (d.email || "") + "\nService: " + (d.service || "") + "\nMsg: " + (d.message || "");
        try {
          const k = "leads_" + SITE.whatsapp;
          const prev = JSON.parse(localStorage.getItem(k) || "[]");
          localStorage.setItem(k, JSON.stringify([...prev, { ...d, t: Date.now() }]));
        } catch (_) {}
        if (msg) { msg.textContent = "✅ Thank you! We will contact you shortly."; msg.className = "form-msg ok"; }
        window.location.href = "mailto:" + SITE.email + "?subject=Enquiry&body=" + encodeURIComponent(body);
        (f as HTMLFormElement).reset();
      });
    });
    const y = document.getElementById("y");
    if (y) y.textContent = String(new Date().getFullYear());
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
