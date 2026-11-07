// Centralised business configuration.
// Replace the values in this file with the client's real brand details
// before production launch. Nothing else in the app references these
// strings directly, so a single edit rebrands the whole site.

export const BRAND = {
  name: "PristineFlow",
  tagline: "Experience the Difference of a Truly Clean Space.",
  description:
    "Professional cleaning solutions designed to make your home and workplace fresher, healthier, and more welcoming.",
  founded: "2014",
  // Placeholder phone — replace with the client's real number.
  phone: "+971501234567",
  phoneDisplay: "+971 50 123 4567",
  email: "hello@pristineflow.example",
  // WhatsApp pre-filled message. Edit freely.
  whatsappMessage:
    "Hello, I'm interested in your cleaning services. I would like to know more about your packages and availability.",
  // Operating hours placeholder.
  hours: "Mon – Sat, 8:00 AM – 8:00 PM",
  socials: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },
  // Service areas — replace with the client's real coverage list.
  serviceAreas: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
  primaryCta: "Book a Cleaning",
  secondaryCta: "Explore Our Services",
  quoteCta: "Get a Free Quote",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/#why-us", label: "Why Choose Us" },
  { href: "/#work", label: "Our Work" },
  { href: "/#faq", label: "FAQs" },
  { href: "/#contact", label: "Contact" },
];

export const WHATSAPP_NUMBER = BRAND.phone;