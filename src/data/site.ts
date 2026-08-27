import heroBanner from "@/assets/herobanner.png";
import heroBiryani from "@/assets/hero-biryani.jpg";
import interior from "@/assets/interior.jpg";
import banquet from "@/assets/banquet.jpg";
import celebration from "@/assets/celebration.jpg";
import ambience from "@/assets/ambience.jpg";
import chicken65 from "@/assets/chicken-65.jpg";
import butterChicken from "@/assets/butter-chicken.jpg";
import kebabs from "@/assets/kebabs.jpg";
import chinese from "@/assets/chinese.jpg";
import breads from "@/assets/breads.jpg";
import exterior from "@/assets/exterior.jpg";

export const images = {
  heroBanner,
  heroBiryani,
  interior,
  banquet,
  celebration,
  ambience,
  chicken65,
  butterChicken,
  kebabs,
  chinese,
  breads,
  exterior,
};

export const restaurant = {
  name: "The Royal Palace",
  tagline: "Multi Cuisine Restaurant & Banquet Hall",
  address: "16-7-390/A, Azampura, Malakpet, Hyderabad, Telangana 500024",
  phone: "+91 98491 92830",
  phoneHref: "tel:+919849192830",
  hours: "12:00 PM – 2:00 AM",
  mapsQuery:
    "The+Royal+Palace+16-7-390%2FA+Azampura+Malakpet+Hyderabad+Telangana+500024",
  rating: "4.0 / 5",
  reviewCount: "1,300+",
  banquet: {
    seated: "Up to 125 seated",
    floating: "Up to 200 guests floating",
  },
};

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${restaurant.mapsQuery}`;
export const mapsPlaceUrl = `https://www.google.com/maps/search/?api=1&query=${restaurant.mapsQuery}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${restaurant.mapsQuery}&output=embed`;
export const mapsReviewsUrl = mapsPlaceUrl;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/banquet", label: "Banquet" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export const footerLinks = [
  ...navLinks,
  { to: "/events", label: "Events" },
  { to: "/reservations", label: "Reservations" },
  { to: "/order-online", label: "Order Online" },
] as const;

export const cuisines = [
  {
    title: "Hyderabadi Biryani",
    description:
      "Slow-cooked dum biryani layered with saffron rice, served with raita and salan.",
    image: heroBiryani,
    alt: "Hyderabadi chicken dum biryani served in a copper handi",
    tag: "Signature",
  },
  {
    title: "Chicken 65",
    description:
      "The South Indian classic — crisp, spiced and finished with curry leaves.",
    image: chicken65,
    alt: "Chicken 65 with curry leaves and lemon on a slate plate",
    tag: "Starters",
  },
  {
    title: "Butter Chicken",
    description: "North Indian gravy simmered in tomato, butter and cream.",
    image: butterChicken,
    alt: "Butter chicken served in a copper bowl",
    tag: "North Indian",
  },
  {
    title: "Tandoori Kebabs",
    description: "Charcoal-grilled kebabs and tikkas served with mint chutney.",
    image: kebabs,
    alt: "Assorted tandoori kebab platter with mint chutney",
    tag: "Tandoor",
  },
  {
    title: "Indo-Chinese",
    description: "Wok-tossed noodles, fried rice and chilli favourites.",
    image: chinese,
    alt: "Chilli chicken with hakka noodles on a white plate",
    tag: "Chinese",
  },
  {
    title: "Breads & Rotis",
    description: "Tandoori naan, roti and paratha straight from the clay oven.",
    image: breads,
    alt: "Basket of Indian tandoori breads",
    tag: "Tandoor",
  },
];

export const menuSections = [
  {
    id: "starters",
    title: "Starters & Kebabs",
    items: [
      { name: "Chicken 65", note: "Crisp, spiced, curry leaf tempered" },
      { name: "Chicken Tikka", note: "Clay-oven grilled, yoghurt marinade" },
      { name: "Mutton Seekh Kebab", note: "Minced mutton, charcoal grilled" },
      { name: "Paneer Tikka", note: "Vegetarian, capsicum and onion" },
      { name: "Veg Manchurian", note: "Dry or gravy" },
      { name: "Apollo Fish", note: "Boneless fish, tangy and spiced" },
    ],
  },
  {
    id: "biryani",
    title: "Biryani & Rice",
    items: [
      { name: "Hyderabadi Chicken Dum Biryani", note: "House signature" },
      { name: "Mutton Dum Biryani", note: "Slow cooked on dum" },
      { name: "Veg Dum Biryani", note: "Seasonal vegetables" },
      { name: "Egg Biryani", note: "Served with raita and salan" },
      { name: "Jeera Rice", note: "Cumin tempered basmati" },
      { name: "Fried Rice", note: "Veg, egg or chicken" },
    ],
  },
  {
    id: "curries",
    title: "Curries & Main Course",
    items: [
      { name: "Butter Chicken", note: "Creamy tomato gravy" },
      { name: "Chicken Curry", note: "Home-style masala" },
      { name: "Mutton Rogan Josh", note: "Slow simmered" },
      { name: "Dal Tadka", note: "Yellow lentils, ghee tempering" },
      { name: "Paneer Butter Masala", note: "Vegetarian favourite" },
      { name: "Mixed Veg Curry", note: "Seasonal vegetables" },
    ],
  },
  {
    id: "chinese",
    title: "Chinese",
    items: [
      { name: "Chilli Chicken", note: "Dry or gravy" },
      { name: "Hakka Noodles", note: "Veg, egg or chicken" },
      { name: "Schezwan Fried Rice", note: "Spiced wok toss" },
      { name: "Chicken Manchurian", note: "Sweet, sour and spiced" },
      { name: "Hot & Sour Soup", note: "Veg or chicken" },
      { name: "Gobi Manchurian", note: "Crisp cauliflower" },
    ],
  },
  {
    id: "breads",
    title: "Breads & Sides",
    items: [
      { name: "Butter Naan", note: "Tandoor baked" },
      { name: "Tandoori Roti", note: "Plain or butter" },
      { name: "Laccha Paratha", note: "Layered and flaky" },
      { name: "Raita", note: "Onion, boondi or mixed" },
      { name: "Green Salad", note: "Fresh cut vegetables" },
      { name: "Mirchi Ka Salan", note: "Served with biryani" },
    ],
  },
];

export const galleryCategories = [
  "All",
  "Food",
  "Restaurant",
  "Banquet",
  "Events",
  "Exterior",
  "Ambience",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryItems: {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
}[] = [
  {
    src: heroBiryani,
    alt: "Hyderabadi chicken dum biryani in a copper handi",
    category: "Food",
  },
  { src: chicken65, alt: "Chicken 65 starter plate", category: "Food" },
  { src: butterChicken, alt: "Butter chicken in a copper bowl", category: "Food" },
  { src: kebabs, alt: "Tandoori kebab platter", category: "Food" },
  { src: chinese, alt: "Chilli chicken with hakka noodles", category: "Food" },
  { src: breads, alt: "Basket of tandoori Indian breads", category: "Food" },
  {
    src: interior,
    alt: "Restaurant dining hall with maroon and gold interiors",
    category: "Restaurant",
  },
  {
    src: banquet,
    alt: "Banquet hall set up with round tables and stage",
    category: "Banquet",
  },
  {
    src: celebration,
    alt: "Family celebrating a birthday with a cake at the banquet",
    category: "Events",
  },
  {
    src: exterior,
    alt: "Evening exterior of The Royal Palace",
    category: "Exterior",
  },
  {
    src: ambience,
    alt: "Candlelit table with warm restaurant ambience",
    category: "Ambience",
  },
];

export const banquetOccasions = [
  "Engagements",
  "Weddings",
  "Receptions",
  "Birthday Parties",
  "Baby Showers",
  "Family Functions",
  "Corporate Events",
  "Get-Togethers",
];

export const banquetFeatures = [
  {
    title: "Indoor Banquet Hall",
    description: "A fully indoor, air-conditioned hall for year-round events.",
  },
  {
    title: "Up to 125 Seated",
    description: "Comfortable seated arrangement for dining-style functions.",
  },
  {
    title: "Up to 200 Guests Floating",
    description: "Floating capacity for receptions and get-togethers.",
  },
  {
    title: "Veg & Non-Veg Catering",
    description: "In-house multi cuisine catering in both veg and non-veg menus.",
  },
];

export const eventTypes = [
  {
    title: "Birthday Celebrations",
    description:
      "Cake, seating and catering arranged in the indoor hall for family birthdays.",
    image: celebration,
    alt: "Birthday celebration with cake at the banquet hall",
  },
  {
    title: "Engagements",
    description: "A gold-and-maroon setting for ring ceremonies and pellikuturu.",
    image: banquet,
    alt: "Banquet hall arranged for an engagement ceremony",
  },
  {
    title: "Wedding Functions",
    description:
      "Seated dining for up to 125 guests with veg and non-veg catering.",
    image: banquet,
    alt: "Banquet hall set for a wedding function",
  },
  {
    title: "Family Gatherings",
    description: "Reunions and festive lunches in the main dining hall.",
    image: interior,
    alt: "Restaurant dining hall arranged for a family gathering",
  },
  {
    title: "Corporate Events",
    description: "Team dinners, meetings and celebrations with catering support.",
    image: interior,
    alt: "Restaurant hall arranged for a corporate dinner",
  },
  {
    title: "Anniversaries",
    description: "Intimate candlelit dinners or a full hall for the family.",
    image: ambience,
    alt: "Candlelit table for an anniversary dinner",
  },
];

export const reviewCategories = [
  "Food",
  "Service",
  "Ambience",
  "Banquet",
  "Family Dining",
] as const;

export const highlights = [
  {
    title: "Multi Cuisine Kitchen",
    description:
      "Hyderabadi, North Indian, Chinese and tandoor prepared in one kitchen.",
  },
  {
    title: "Indoor Banquet Hall",
    description: "125 seated and 200 floating guests, with in-house catering.",
  },
  {
    title: "Open Till 2 AM",
    description: "Dine in daily from 12:00 PM to 2:00 AM.",
  },
  {
    title: "Delivery & Takeaway",
    description: "Order your favourites for pickup or home delivery.",
  },
];
