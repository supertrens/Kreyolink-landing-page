import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Directory from "@/components/Directory";
import Testimonials from "@/components/Testimonials";
import DownloadCTA from "@/components/DownloadCTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Features />
      <Directory />
      <Testimonials />
      <DownloadCTA />
    </main>
  );
}
