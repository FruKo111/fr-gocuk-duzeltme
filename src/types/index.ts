export interface SiteData {
  business: BusinessInfo;
  hero: HeroData;
  marquee: MarqueeData;
  services: ServiceGroup[];
  gallery: GalleryItem[];
  contact: ContactData;
  theme: ThemeConfig;
}

export interface BusinessInfo {
  name: string;
  slug: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: Address;
  social: SocialLinks;
}

export interface Address {
  line1: string;
  city: string;
  state: string;
  zip: string;
  mapEmbedUrl: string;
  mapLink: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  youtube?: string;
}

export interface HeroData {
  title: string;
  titleHighlight: string;
  subtitle: string;
  rotatingWords: string[];
  cta: CtaButton;
  videoUrl: string;
  videoPoster?: string;
}

export interface CtaButton {
  text: string;
  subtext: string;
  icon: string;
}

export interface MarqueeData {
  items: string[];
  speed: number;
}

export interface ServiceGroup {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image?: string; // arrière plan hover efekti için
}

export interface GalleryItem {
  id: string;
  videoUrl: string;
  instagramUrl?: string;
  title: string;
  category: string;
}

export interface DisplayCard {
  title: string;
  description: string;
  date: string;
  icon: string;
}

export interface ContactData {
  heading: string;
  subheading: string;
  workHours: WorkHour[];
  cta: {
    text: string;
    href: string;
  };
}

export interface WorkHour {
  days: string;
  hours: string;
}

export interface ThemeConfig {
  accentColor: string;
  accentColorHex: string;
  secondaryAccent: string;
  borderRadius: "rounded-lg" | "rounded-xl" | "rounded-2xl" | "rounded-3xl";
}
