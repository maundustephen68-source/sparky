// Single source of truth: edit business details here.
export const BRAND = {
  name: "Bubble Busters",
  phone: "+254 798482441",        // TODO: real number
  whatsapp: "254798482441",         // international format, no "+"
  email: "hello@bubblebusters.co.ke",
};

export const SERVICES = [
  { id: "wash-fold", 
    badge: "Most Popular", 
    name: "Wash, Dry & Fold", 
    price: 80, unit: "kg", 
    priceLabel: "KES 80", 
    sub: "/kg", 
    cta: "Book Wash & Fold",
    perks: ["Detergent & softener included", "Folded & bagged", "Free pickup & delivery"] 
  },

  { id: "overnight", 
    badge: "Fast", 
    name: "Overnight Delivery", 
    price: 100, 
    unit: "kg", 
    priceLabel: "FREE", 
    sub: "delivery fee", 
    cta: "Order Overnight",
    perks: ["Picked up evening, back by morning", "Same clean-and-fold quality", "Ideal before exams"] 
  },

  { id: "blankets", 
    badge: "Heavy Duty", 
    name: "Boxers & Hosty Blankets", 
    price: 250, 
    unit: "pc", 
    priceLabel: "KES 250", 
    sub: "/pc", 
    cta: "Book Blanket Wash",
    perks: ["Deep wash for bulky items", "Dried thoroughly", "100% sanitised"]
   },

  { id: "bulk", 
    badge: "Best Value", 
    name: "Bulk & Fastest", 
    price: 200, 
    unit: "bag", 
    priceLabel: "KES 200", 
    sub: "/bag", 
    cta: "Order Priority",
    perks: ["Priority queue", "Large bags welcome", "Pickup within the hour"]
   },

] as const;

export const HOSTELS = [
  "Meru University Hostels", 
  "Kaaga Campus Hostels", 
  "Nchiru Hostels", 
  "Makutano Area Hostels", 
  "Town Centre Hostels", 
  "Other (type in notes)"
];

export const SLOTS = [
  "Morning (8am–12pm)", 
  "Afternoon (12pm–4pm)", 
  "Evening (4pm–8pm)"
];

export const STEPS = [
  { n: "01", 
    t: "Book",
    d: "Choose your service and pickup time in under a minute."
     },

  { n: "02", 
    t: "We Collect", 
    d: "Our rider picks your laundry up right at your hostel door." 
  },

  { n: "03", 
    t: "We Clean", 
    d: "Washed, dried and folded with quality detergent." 
  },

  { n: "04", 
    t: "We Deliver", 
    d: "Fresh laundry returned to you. Pay on delivery." 
  },

];

export const WHY = [
  { t: "Affordable Student Rates",
    d: "Starting from just KES 80 per kg with no hidden fees." 
    },

  { t: "Careful Fabric Handling", 
    d: "We separate colours, treat stains and handle with care." 
  },

  { t: "Zero Missed Weekends",
    d: "Book once and we handle the rest, even on weekends." 
  },

  { t: "Direct WhatsApp Dispatch",
    d: "Your order goes straight to our team on WhatsApp." 
  },

];

export const REVIEWS = [
  { name: "Amina W.", 
    hostel: "Nchiru", 
    text: "Overnight service saved me before my exam. Clothes came back neat and fresh." 
  },

  { name: "Brian K.", 
    hostel: "Meru", 
    text: "Pickup was right at my door and pricing was fair. Pay on delivery is a big plus." 
  },

  { name: "Daisy M.", 
    hostel: "Nchiru", 
    text: "My hosty blanket looked brand new. I recommend them to everyone in my block." 
  },

];

export const FAQS = [
  { q: "How will I get my clothes back?",
     a: "Our rider delivers to your hostel door at the time we agree on WhatsApp." 
    },

  { q: "How do I pay?", 
    a: "Payment is after delivery, by cash or M-Pesa. Nothing upfront." 
  },

  { q: "What happens if it rains when the rider arrives?", 
    a: "Your laundry is bagged and kept covered. If needed we reschedule pickup or delivery by a few hours." 
  },

  { q: "How do you make sure my clothes don't get lost or mixed up?", 
    a: "Every order is tagged with your name and room number and kept in its own bag." 
  },
  
  { q: "Do you wash bedsheets, hostel blankets and delicate items?", 
    a: "Yes. Blankets are priced per piece and delicates are handled separately. Tell us in the notes." 
  },

];

export const waLink = (text: string) => `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;

 // Hero image hosted on imgix. Leave src empty ("") to show the emoji fallback.
// imgix params resize and compress for you.
export const HERO_IMAGE = {
  src: "https://6acf57138f66eca05b71ff06.imgix.net/cfe88c4243bf1f216c508744526fd9be.jpg?s=9365b868a0bbf30a57d5bddf1dc77483",
  alt: "Bubble Busters rider collecting laundry at a hostel",
};