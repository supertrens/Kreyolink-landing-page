import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Directory from "@/components/Directory";
import Testimonials from "@/components/Testimonials";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Features />
      <Directory />
      <Testimonials />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
