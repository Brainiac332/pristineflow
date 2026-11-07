"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BRAND } from "@/lib/config";
import { Mail, Phone, MapPin, Clock, MessageSquare, ChevronRight } from "lucide-react";

// Simple inline SVG icons for social media
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Our Work", href: "#work" },
    { label: "Why Choose Us", href: "#why-us" },
  ],
  services: [
    { label: "Residential Cleaning", href: "#services?svc=residential" },
    { label: "Deep Cleaning", href: "#services?svc=deep" },
    { label: "Office Cleaning", href: "#services?svc=office" },
    { label: "Move-In/Out Cleaning", href: "#services?svc=move" },
    { label: "Specialized Services", href: "#services?svc=specialized" },
  ],
  support: [
    { label: "FAQs", href: "#faq" },
    { label: "Booking Help", href: "#contact" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact Us", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const SOCIAL_LINKS = [
  { icon: InstagramIcon, href: BRAND.socials.instagram, label: "Instagram" },
  { icon: FacebookIcon, href: BRAND.socials.facebook, label: "Facebook" },
  { icon: LinkedinIcon, href: BRAND.socials.linkedin, label: "LinkedIn" },
];

export function Footer() {
  const [currentYear, setCurrentYear] = useState(() => {
    if (typeof window !== "undefined") {
      return new Date().getFullYear();
    }
    return 2026; // fallback for SSR
  });

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      id="contact"
      className="bg-ink-900 text-cream"
      role="contentinfo"
    >
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <Link
              href="#home"
              className="inline-flex items-center gap-2"
              aria-label={`${BRAND.name} - Home`}
            >
              <span className="text-2xl font-display font-bold tracking-tight text-cream">
                {BRAND.name}
              </span>
              <span className="px-2 py-0.5 text-xs font-semibold tracking-widest uppercase text-emerald-400 bg-emerald-500/10 rounded-full">
                Premium
              </span>
            </Link>

            <p className="text-stone-400 leading-relaxed max-w-xs">
              Professional cleaning solutions designed to make your home and workplace
              fresher, healthier, and more welcoming.
            </p>

            {/* Contact info */}
            <div className="space-y-3 pt-2 border-t border-cream/10">
              <div className="flex items-center gap-3 text-stone-400">
                <MessageSquare className="h-5 w-5 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href={`https://wa.me/${BRAND.phone.replace(/\D/g, "")}?text=${encodeURIComponent(BRAND.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-3 text-stone-400">
                <Phone className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <a href={`tel:${BRAND.phone}`} className="hover:text-emerald-400 transition-colors">
                  {BRAND.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3 text-stone-400">
                <Mail className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-emerald-400 transition-colors">
                  {BRAND.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-stone-400">
                <MapPin className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <span>Serving: {BRAND.serviceAreas.join(", ")}</span>
              </div>
              <div className="flex items-center gap-3 text-stone-400">
                <Clock className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <span>{BRAND.hours}</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-stone-400 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Company links">
            <h3 className="font-semibold text-cream mb-4">Company</h3>
            <ul className="space-y-3" role="list">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                  >
                    {link.label}
                    <ChevronRight className="h-4 w-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="font-semibold text-cream mb-4">Services</h3>
            <ul className="space-y-3" role="list">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                  >
                    {link.label}
                    <ChevronRight className="h-4 w-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support */}
          <nav aria-label="Support">
            <h3 className="font-semibold text-cream mb-4">Support</h3>
            <ul className="space-y-3" role="list">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                  >
                    {link.label}
                    <ChevronRight className="h-4 w-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <h3 className="font-semibold text-cream mb-4">Legal</h3>
            <ul className="space-y-3" role="list">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                  >
                    {link.label}
                    <ChevronRight className="h-4 w-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-500">
            &copy; {currentYear} {BRAND.name}. All rights reserved.
          </p>

          <p className="text-sm text-stone-500">
            Designed & developed by{" "}
            <a href="https://thegoldenbrainservices.example" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
              The Golden Brain Services (TGBS)
            </a>
          </p>

          {/* Newsletter - simple demo */}
          <div className="w-full md:w-auto">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </footer>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2" aria-label="Newsletter signup">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "submitting" || status === "success"}
        className="flex-1 px-4 py-2.5 bg-cream/10 border border-cream/20 rounded-xl text-cream placeholder-stone-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition-all disabled:opacity-50"
        aria-describedby={status === "success" ? "newsletter-success" : status === "error" ? "newsletter-error" : undefined}
      />
      <button
        type="submit"
        disabled={status === "submitting" || status === "success" || !email}
        className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
      >
        {status === "submitting" ? (
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
        ) : status === "success" ? (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        ) : (
          "Subscribe"
        )}
      </button>
      {status === "success" && (
        <p id="newsletter-success" className="sr-only" role="status">
          Successfully subscribed
        </p>
      )}
      {status === "error" && (
        <p id="newsletter-error" className="sr-only" role="alert">
          Please enter a valid email
        </p>
      )}
    </form>
  );
}