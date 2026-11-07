"use client";

import type { LucideIcon } from "lucide-react";
import { BRAND } from "./config";

/* --------------------------------------------------------------------------
   Shared types
-------------------------------------------------------------------------- */
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  image: string;
  icon: LucideIcon;
  cta: string;
  order: number;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  image?: string;
  icon: LucideIcon;
  order: number;
}

export interface Step {
  id: string;
  number: number;
  title: string;
  description: string;
  image?: string;
  icon: LucideIcon;
}

export interface BeforeAfterPair {
  id: string;
  beforeImage: string;
  afterImage: string;
  alt: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  image?: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  description: string;
  features: string[];
  suitableFor: string;
  cta: string;
  order: number;
}

/* --------------------------------------------------------------------------
   Icon imports (lazy-loaded in components to avoid SSR bloat)
-------------------------------------------------------------------------- */
export const ICON_MAP: Record<string, () => Promise<{ default: LucideIcon }>> = {
  Home: () => import("lucide-react").then((m) => m.Home),
  Building: () => import("lucide-react").then((m) => m.Building),
  Sparkles: () => import("lucide-react").then((m) => m.Sparkles),
  Truck: () => import("lucide-react").then((m) => m.Truck),
  Crown: () => import("lucide-react").then((m) => m.Crown),
  Shield: () => import("lucide-react").then((m) => m.Shield),
  CheckCircle: () => import("lucide-react").then((m) => m.CheckCircle),
  Clock: () => import("lucide-react").then((m) => m.Clock),
  Users: () => import("lucide-react").then((m) => m.Users),
  Star: () => import("lucide-react").then((m) => m.Star),
  Award: () => import("lucide-react").then((m) => m.Award),
  Target: () => import("lucide-react").then((m) => m.Target),
  Heart: () => import("lucide-react").then((m) => m.Heart),
  Leaf: () => import("lucide-react").then((m) => m.Leaf),
  Zap: () => import("lucide-react").then((m) => m.Zap),
  Sparkle: () => import("lucide-react").then((m) => m.Sparkle),
  Layers: () => import("lucide-react").then((m) => m.Layers),
  Wand2: () => import("lucide-react").then((m) => m.Wand2),
  SprayCan: () => import("lucide-react").then((m) => m.SprayCan),
  Droplets: () => import("lucide-react").then((m) => m.Droplets),
  Window: () => import("lucide-react").then((m) => m.Window),
  Hammer: () => import("lucide-react").then((m) => m.Hammer),
  Scrubber: () => import("lucide-react").then((m) => m.Scrubber),
  Calendar: () => import("lucide-react").then((m) => m.Calendar),
  Mail: () => import("lucide-react").then((m) => m.Mail),
  Phone: () => import("lucide-react").then((m) => m.Phone),
  MapPin: () => import("lucide-react").then((m) => m.MapPin),
  ArrowRight: () => import("lucide-react").then((m) => m.ArrowRight),
  ChevronDown: () => import("lucide-react").then((m) => m.ChevronDown),
  ChevronUp: () => import("lucide-react").then((m) => m.ChevronUp),
  ChevronLeft: () => import("lucide-react").then((m) => m.ChevronLeft),
  ChevronRight: () => import("lucide-react").then((m) => m.ChevronRight),
  Menu: () => import("lucide-react").then((m) => m.Menu),
  X: () => import("lucide-react").then((m) => m.X),
  MessageSquare: () => import("lucide-react").then((m) => m.MessageSquare),
  Loader2: () => import("lucide-react").then((m) => m.Loader2),
  Check: () => import("lucide-react").then((m) => m.Check),
  AlertCircle: () => import("lucide-react").then((m) => m.AlertCircle),
  Plus: () => import("lucide-react").then((m) => m.Plus),
  Minus: () => import("lucide-react").then((m) => m.Minus),
  Sun: () => import("lucide-react").then((m) => m.Sun),
  Moon: () => import("lucide-react").then((m) => m.Moon),
  RotateCcw: () => import("lucide-react").then((m) => m.RotateCcw),
  Search: () => import("lucide-react").then((m) => m.Search),
  Filter: () => import("lucide-react").then((m) => m.Filter),
  Grid: () => import("lucide-react").then((m) => m.Grid),
  Image: () => import("lucide-react").then((m) => m.Image),
  Eye: () => import("lucide-react").then((m) => m.Eye),
  ExternalLink: () => import("lucide-react").then((m) => m.ExternalLink),
  Instagram: () => import("lucide-react").then((m) => m.Instagram),
  Facebook: () => import("lucide-react").then((m) => m.Facebook),
  Linkedin: () => import("lucide-react").then((m) => m.Linkedin),
  Mail: () => import("lucide-react").then((m) => m.Mail),
  Phone: () => import("lucide-react").then((m) => m.Phone),
  MapPin: () => import("lucide-react").then((m) => m.MapPin),
  Clock: () => import("lucide-react").then((m) => m.Clock),
  ArrowUp: () => import("lucide-react").then((m) => m.ArrowUp),
};

/* --------------------------------------------------------------------------
   Service data (10 services)
-------------------------------------------------------------------------- */
export const SERVICES: Service[] = [
  {
    id: "residential",
    title: "Residential Cleaning",
    shortDescription:
      "Regular upkeep for a consistently fresh, healthy home environment.",
    longDescription:
      "Our residential cleaning covers every room with meticulous attention: dusting, vacuuming, mopping, kitchen and bathroom sanitation, bed-making, and trash removal. Perfect for busy households wanting a reliable, recurring clean without lifting a finger.",
    benefits: [
      "Trained, background-checked professionals",
      "Eco-friendly, child-safe products",
      "Flexible weekly / bi-weekly / monthly schedules",
      "Satisfaction guarantee — we'll re-clean any missed area",
    ],
    image: "/img/svc_residential.jpg",
    icon: ICON_MAP.Home!,
    cta: "Book Residential Cleaning",
    order: 1,
  },
  {
    id: "deep",
    title: "Deep Cleaning",
    shortDescription:
      "Intensive, top-to-bottom detail for spaces that need a reset.",
    longDescription:
      "Deep cleaning reaches the areas regular cleaning misses: inside appliances, behind furniture, grout lines, baseboards, vents, light fixtures, and cabinet interiors. Ideal for seasonal refreshes, pre-event prep, or post-renovation dust removal.",
    benefits: [
      "Appliance interior cleaning (oven, fridge, microwave)",
      "Grout and tile restoration",
      "Cabinet and drawer interior wipe-down",
      "High-touch surface disinfection",
    ],
    image: "/img/svc_deep.jpg",
    icon: ICON_MAP.Sparkles!,
    cta: "Schedule Deep Clean",
    order: 2,
  },
  {
    id: "office",
    title: "Office & Commercial Cleaning",
    shortDescription:
      "Professional workplace hygiene that supports productivity and health.",
    longDescription:
      "We service offices, retail spaces, clinics, gyms, and co-working hubs. Services include workstation wipe-down, floor care, restroom restocking and sanitation, break-room cleaning, trash/recycling management, and high-traffic area maintenance — all on a schedule that never disrupts your operations.",
    benefits: [
      "After-hours / weekend availability",
      "Janitorial supply management option",
      "Compliance-friendly documentation",
      "Dedicated account manager",
    ],
    image: "/img/svc_office.jpg",
    icon: ICON_MAP.Building!,
    cta: "Get Commercial Quote",
    order: 3,
  },
  {
    id: "move",
    title: "Move-In / Move-Out Cleaning",
    shortDescription:
      "Spotless handovers that satisfy landlords and delight new occupants.",
    longDescription:
      "Empty-property deep cleans covering every surface, appliance, cabinet, window track, and fixture. We provide the thoroughness required for deposit returns and move-in readiness, with photographic documentation available for property managers.",
    benefits: [
      "Guaranteed landlord-ready standard",
      "Appliance and cabinet interior detail",
      "Window and track cleaning included",
      "Fast turnaround for tight moving timelines",
    ],
    image: "/img/svc_move.jpg",
    icon: ICON_MAP.Truck!,
    cta: "Book Move Clean",
    order: 4,
  },
  {
    id: "villa",
    title: "Villa Cleaning",
    shortDescription:
      "Large-residence expertise with staff coordination and premium care.",
    longDescription:
      "Multi-level villas demand systematic zone cleaning, staff liaison, and surface-specific product knowledge (marble, hardwood, specialty stone). We assign experienced leads who manage checklists, inventory, and quality control across expansive square footage.",
    benefits: [
      "Zone-based cleaning plans",
      "Surface-specific product selection",
      "Staff coordination and key management",
      "Recurring or one-off engagements",
    ],
    image: "/img/svc_villa.jpg",
    icon: ICON_MAP.Crown!,
    cta: "Request Villa Service",
    order: 5,
  },
  {
    id: "apartment",
    title: "Apartment Cleaning",
    shortDescription:
      "Efficient, high-standard cleans tailored to compact urban living.",
    longDescription:
      "Optimised routines for apartments and condos: smart storage-aware organisation, balcony/terrace care, building-compliant waste handling, and noise-conscious scheduling. Perfect for high-rise residents who value precision and discretion.",
    benefits: [
      "Building-rule compliant (noise, waste, access)",
      "Balcony and terrace inclusion",
      "Compact-space optimised routines",
      "Key-drop / concierge coordination",
    ],
    image: "/img/svc_apartment.jpg",
    icon: ICON_MAP.Layers!,
    cta: "Book Apartment Clean",
    order: 6,
  },
  {
    id: "sofa",
    title: "Sofa & Upholstery Cleaning",
    shortDescription:
      "Fabric and leather revival that extends furniture life and freshness.",
    longDescription:
      "Hot-water extraction for fabrics, pH-balanced conditioning for leather, stain treatment, odour neutralisation, and fabric protection application. We test for colourfastness and material compatibility before every job.",
    benefits: [
      "IICRC-certified upholstery technicians",
      "Safe for delicate and antique fabrics",
      "Stain guard application available",
      "Quick-dry, low-moisture process",
    ],
    image: "/img/svc_sofa.jpg",
    icon: ICON_MAP.SprayCan!,
    cta: "Refresh Your Upholstery",
    order: 7,
  },
  {
    id: "window",
    title: "Window Cleaning",
    shortDescription:
      "Streak-free glass, frames, tracks, and screens — inside and out.",
    longDescription:
      "Pure-water fed-pole systems for high-reach exteriors, traditional detail for interiors. Includes frame wiping, track vacuuming, screen removal and wash, and hard-water stain reduction. Residential and low-rise commercial.",
    benefits: [
      "Pure-water technology — no chemical residue",
      "Interior + exterior + frames + tracks + screens",
      "High-reach up to 4 storeys (ground-fed)",
      "Hard-water stain treatment available",
    ],
    image: "/img/svc_window.jpg",
    icon: ICON_MAP.Window!,
    cta: "Get Window Quote",
    order: 8,
  },
  {
    id: "post",
    title: "Post-Construction Cleaning",
    shortDescription:
      "Dust, debris, and residue removal for project handover readiness.",
    longDescription:
      "Multi-phase: rough clean (debris removal), detail clean (dust, splatter, adhesives), and final polish (glass, fixtures, surfaces). We coordinate with contractors' timelines and provide handover-ready documentation.",
    benefits: [
      "Three-phase protocol (rough / detail / final)",
      "Adhesive, paint, and plaster splatter removal",
      "New-surface protection awareness",
      "Fast mobilisation for project deadlines",
    ],
    image: "/img/svc_post.jpg",
    icon: ICON_MAP.Hammer!,
    cta: "Schedule Post-Build Clean",
    order: 9,
  },
  {
    id: "specialized",
    title: "Specialized Cleaning",
    shortDescription:
      "Niche services: carpet, rug, mattress, tile/grout, and more.",
    longDescription:
      "Targeted solutions for specific challenges: hot-water extraction for carpets/rugs, mattress sanitisation and allergen reduction, tile and grout restoration, stone sealing, and high-pressure exterior washing. Each uses specialist equipment and certified methods.",
    benefits: [
      "Carpet & rug: truck-mount extraction",
      "Mattress: UV-C + HEPA + anti-allergen",
      "Tile/grout: rotary extraction + sealant",
      "Exterior: adjustable pressure + eco-detergents",
    ],
    image: "/img/svc_specialized.jpg",
    icon: ICON_MAP.Scrubber!,
    cta: "Explore Specialized",
    order: 10,
  },
];

/* --------------------------------------------------------------------------
   Why Choose Us value propositions
-------------------------------------------------------------------------- */
export const VALUE_PROPS: ValueProp[] = [
  {
    id: "trained",
    title: "Trained Professionals",
    description:
      "Every team member completes our certified training programme covering technique, safety, product knowledge, and customer etiquette. Background-verified and uniformly presented.",
    icon: ICON_MAP.Users!,
    order: 1,
  },
  {
    id: "detail",
    title: "Attention to Detail",
    description:
      "Our checklists have checklists. From baseboards to blind slats, appliance interiors to high-touch points — nothing is overlooked. Quality control photos on every job.",
    icon: ICON_MAP.Target!,
    order: 2,
  },
  {
    id: "flexible",
    title: "Flexible Scheduling",
    description:
      "Book online in 60 seconds. Choose weekly, bi-weekly, monthly, or one-off. Morning, afternoon, or evening slots. Reschedule up to 24 hrs before at no charge.",
    icon: ICON_MAP.Calendar!,
    order: 3,
  },
  {
    id: "reliable",
    title: "Reliable Delivery",
    description:
      "We show up on time, every time. Dedicated teams mean familiar faces who know your space and preferences. Emergency re-clean within 24 hrs if anything falls short.",
    icon: ICON_MAP.Shield!,
    order: 4,
  },
  {
    id: "quality",
    title: "Quality-Focused Approach",
    description:
      "Premium, eco-certified products. HEPA vacuums. Microfibre systems. Colour-coded cloths to prevent cross-contamination. We invest in the tools that produce better results.",
    icon: ICON_MAP.Star!,
    order: 5,
  },
  {
    id: "satisfaction",
    title: "Customer Satisfaction",
    description:
      "Your feedback drives our process. Post-service surveys, direct management escalation, and a no-questions re-clean policy. We're not done until you're delighted.",
    icon: ICON_MAP.Heart!,
    order: 6,
  },
];

/* --------------------------------------------------------------------------
   How It Works steps
-------------------------------------------------------------------------- */
export const PROCESS_STEPS: Step[] = [
  {
    id: "choose",
    number: 1,
    title: "Choose Your Service",
    description:
      "Browse our services or tell us what you need. We'll match you with the right package — from a one-off deep clean to a recurring residential plan.",
    icon: ICON_MAP.Grid!,
  },
  {
    id: "details",
    number: 2,
    title: "Tell Us Your Requirements",
    description:
      "Share property details: type, size, rooms, specific areas of focus, preferred dates, and any special instructions. The more we know, the better we prepare.",
    icon: ICON_MAP.MessageSquare!,
  },
  {
    id: "schedule",
    number: 3,
    title: "Schedule Your Cleaning",
    description:
      "Pick a date and time that works for you. Get instant confirmation. Need to adjust? Reschedule or cancel up to 24 hours before at no cost.",
    icon: ICON_MAP.Calendar!,
  },
  {
    id: "enjoy",
    number: 4,
    title: "Enjoy Your Fresh, Clean Space",
    description:
      "Our team arrives on time, works efficiently, and leaves your space spotless. You receive a completion summary and a quick feedback link.",
    icon: ICON_MAP.Sparkle!,
  },
];

/* --------------------------------------------------------------------------
   Before / After showcase pairs
-------------------------------------------------------------------------- */
export const BEFORE_AFTER_PAIRS: BeforeAfterPair[] = [
  {
    id: "living-room",
    beforeImage: "/img/before_1.jpg",
    afterImage: "/img/after_1.jpg",
    alt: "Living room transformation from cluttered to pristine",
    category: "Residential Deep Clean",
  },
  {
    id: "kitchen",
    beforeImage: "/img/before_2.jpg",
    afterImage: "/img/after_2.jpg",
    alt: "Kitchen transformation from greasy to gleaming",
    category: "Kitchen Deep Clean",
  },
];

/* --------------------------------------------------------------------------
   Gallery / Our Work items
-------------------------------------------------------------------------- */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-kitchen",
    image: "/img/gallery_1.jpg",
    title: "Modern Kitchen Deep Clean",
    category: "Residential",
    alt: "Spotless modern kitchen with marble counters",
  },
  {
    id: "gallery-bathroom",
    image: "/img/gallery_2.jpg",
    title: "Luxury Bathroom Sanitisation",
    category: "Residential",
    alt: "Pristine bathroom with dual shower heads",
  },
  {
    id: "gallery-living",
    image: "/img/gallery_3.jpg",
    title: "Living Room Refresh",
    category: "Residential",
    alt: "Bright living room with clean sofa and surfaces",
  },
  {
    id: "gallery-office",
    image: "/img/gallery_4.jpg",
    title: "Open-Plan Office Clean",
    category: "Commercial",
    alt: "Clean open-plan office with workstations",
  },
  {
    id: "gallery-team",
    image: "/img/gallery_5.jpg",
    title: "Professional Team at Work",
    category: "Team",
    alt: "Cleaning professionals in uniform working",
  },
  {
    id: "gallery-window",
    image: "/img/gallery_6.jpg",
    title: "High-Rise Window Cleaning",
    category: "Specialized",
    alt: "Window cleaner using pure-water fed pole",
  },
  {
    id: "gallery-carpet",
    image: "/img/gallery_7.jpg",
    title: "Carpet Extraction Cleaning",
    category: "Specialized",
    alt: "Carpet being cleaned with extraction machine",
  },
  {
    id: "gallery-dining",
    image: "/img/gallery_8.jpg",
    title: "Dining Area Perfection",
    category: "Residential",
    alt: "Clean dining room set for service",
  },
  {
    id: "gallery-bedroom",
    image: "/img/gallery_9.jpg",
    title: "Bedroom Sanctuary",
    category: "Residential",
    alt: "Organised bedroom with made bed and clean surfaces",
  },
  {
    id: "gallery-tools",
    image: "/img/gallery_10.jpg",
    title: "Eco-Friendly Equipment",
    category: "Equipment",
    alt: "Professional cleaning supplies and equipment",
  },
  {
    id: "gallery-floor",
    image: "/img/gallery_11.jpg",
    title: "Hardwood Floor Care",
    category: "Specialized",
    alt: "Gleaming hardwood floor after professional care",
  },
  {
    id: "gallery-entrance",
    image: "/img/gallery_12.jpg",
    title: "Grand Entrance Clean",
    category: "Commercial",
    alt: "Hotel lobby entrance with polished floors",
  },
];

/* --------------------------------------------------------------------------
   Testimonials (demo placeholders — replace with real client reviews)
-------------------------------------------------------------------------- */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Al-Mansoori",
    role: "Homeowner, Jumeirah",
    location: "Dubai, UAE",
    text:
      "PristineFlow transformed our villa. The team was punctual, respectful, and incredibly thorough — even the marble floors have never looked better. We've switched to their monthly plan and couldn't be happier.",
    image: "/img/testimonial_1.jpg",
    rating: 5,
  },
  {
    id: "t2",
    name: "James Chen",
    role: "Operations Manager",
    location: "Dubai, UAE",
    text:
      "We've used several commercial cleaning companies over the years. PristineFlow is the first that consistently delivers on their promises. Communication is proactive, the account manager is responsive, and our office has never been cleaner.",
    image: "/img/testimonial_1.jpg",
    rating: 5,
  },
  {
    id: "t3",
    name: "Fatima Hassan",
    role: "Property Manager",
    location: "Abu Dhabi, UAE",
    text:
      "Move-out cleans are stressful — PristineFlow makes them effortless. They coordinate directly with our tenants, provide photographic documentation, and we've had zero deposit disputes since switching. Highly recommended for property managers.",
    image: "/img/testimonial_1.jpg",
    rating: 5,
  },
];

/* --------------------------------------------------------------------------
   FAQ data
-------------------------------------------------------------------------- */
export const FAQS: FAQ[] = [
  {
    id: "faq-services",
    question: "What cleaning services do you provide?",
    answer:
      "We offer residential cleaning, deep cleaning, office/commercial cleaning, move-in/move-out cleaning, villa cleaning, apartment cleaning, sofa & upholstery cleaning, window cleaning, post-construction cleaning, and specialized services (carpet, rug, mattress, tile/grout, exterior pressure washing).",
    category: "Services",
  },
  {
    id: "faq-booking",
    question: "How can I book a cleaning service?",
    answer:
      "Book online in 60 seconds using our multi-step quote form, call us, or message us on WhatsApp. Choose your service, provide property details, pick a date/time, and confirm. You'll receive instant confirmation via email and SMS.",
    category: "Booking",
  },
  {
    id: "faq-supplies",
    question: "Do you provide cleaning materials and equipment?",
    answer:
      "Yes — we bring everything: HEPA vacuums, microfibre systems, eco-certified solutions, ladders, extension poles, and specialist machines (extraction, steam, pressure washers). If you prefer specific products, we're happy to use yours.",
    category: "Services",
  },
  {
    id: "faq-recurring",
    question: "Can I schedule recurring cleaning?",
    answer:
      "Absolutely. Weekly, bi-weekly, monthly, or custom intervals. Recurring clients get priority scheduling, a dedicated team, and a 10% loyalty discount. Pause or cancel anytime with 24 hours' notice.",
    category: "Booking",
  },
  {
    id: "faq-residential-commercial",
    question: "Do you serve both residential and commercial properties?",
    answer:
      "Yes. Our residential division covers apartments, villas, and townhouses. Our commercial division serves offices, retail, clinics, gyms, schools, and hospitality venues. Each has specialised teams, equipment, and protocols.",
    category: "Services",
  },
  {
    id: "faq-pricing",
    question: "How are cleaning service prices calculated?",
    answer:
      "Pricing depends on property type, size (sq ft / number of rooms), service type, frequency, and any add-ons (windows, appliances, upholstery). We provide transparent, itemised quotes — no hidden fees. Request a free quote for exact pricing.",
    category: "Pricing",
  },
  {
    id: "faq-reschedule",
    question: "Can I reschedule or cancel my booking?",
    answer:
      "Yes — reschedule or cancel up to 24 hours before your appointment at no charge. Within 24 hours, a 50% fee applies. No-shows are charged the full amount. Manage bookings via your confirmation email or call us.",
    category: "Booking",
  },
  {
    id: "faq-areas",
    question: "Which areas do you cover?",
    answer:
      `We currently serve ${BRAND.serviceAreas.join(", ")} and surrounding communities. If you're outside these zones, contact us — we may be able to accommodate with a travel surcharge.`,
    category: "Coverage",
  },
];

/* --------------------------------------------------------------------------
   Pricing packages
-------------------------------------------------------------------------- */
export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "essential",
    name: "Essential Cleaning",
    description:
      "Regular maintenance for homes that stay consistently tidy. Perfect for busy professionals and families.",
    features: [
      "All rooms: dust, vacuum, mop",
      "Kitchen: surfaces, sink, appliance exteriors",
      "Bathrooms: toilet, shower, vanity, mirror",
      "Beds made, trash removed",
      "High-touch disinfection",
    ],
    suitableFor: "Apartments & homes up to 2,000 sq ft",
    cta: "Request Essential Quote",
    order: 1,
  },
  {
    id: "deep",
    name: "Deep Cleaning",
    description:
      "Intensive, occasional reset for spaces needing detailed attention. Ideal seasonally, pre/post events, or for new homes.",
    features: [
      "Everything in Essential, plus:",
      "Inside oven, fridge, microwave, cabinets",
      "Baseboards, doors, frames, vents",
      "Grout lines, tile detail, glass doors",
      "Behind/under furniture (where accessible)",
      "Interior window sills & tracks",
    ],
    suitableFor: "Any property needing a thorough refresh",
    cta: "Request Deep Clean Quote",
    order: 2,
  },
  {
    id: "premium",
    name: "Premium Cleaning",
    description:
      "Our most comprehensive service — deep clean + specialised add-ons + premium finishes. For discerning clients who want it all.",
    features: [
      "Everything in Deep, plus:",
      "Sofa/upholstery refresh (1 piece)",
      "Interior window cleaning",
      "Cabinet & drawer organisation assist",
      "Appliance polish (stainless, glass)",
      "Fragrance mist & final presentation",
      "Priority scheduling & dedicated lead",
    ],
    suitableFor: "Villas, large homes, pre-event prep",
    cta: "Request Premium Quote",
    order: 3,
  },
];

/* --------------------------------------------------------------------------
   Gallery categories for filter UI
-------------------------------------------------------------------------- */
export const GALLERY_CATEGORIES = [
  "All",
  "Residential",
  "Commercial",
  "Specialized",
  "Team",
  "Equipment",
];

/* --------------------------------------------------------------------------
   Utility helpers
-------------------------------------------------------------------------- */
export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}

export function getGalleryByCategory(cat: string): GalleryItem[] {
  if (cat === "All") return GALLERY_ITEMS;
  return GALLERY_ITEMS.filter((g) => g.category === cat);
}