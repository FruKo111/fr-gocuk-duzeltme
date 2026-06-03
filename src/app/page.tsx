import SiteData from "@/data/site-data.json";
import SmoothScrollProvider from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfiniteMarquee from "@/components/Marquee";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function HomePage() {
  const { hero, marquee, services, gallery, business, contact } = SiteData;

  return (
    <SmoothScrollProvider>
      <Navbar />
      <main>
        <Hero data={hero} whatsapp={business.whatsapp} />
        <InfiniteMarquee data={marquee} />
        <Services data={services} />
        <Gallery data={gallery} />
      </main>
      <Footer data={{ business, contact }} />
    </SmoothScrollProvider>
  );
}
