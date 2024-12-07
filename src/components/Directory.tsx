// src/components/Directory.tsx
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Star,
  Briefcase,
  Users,
  UtensilsCrossedIcon,
  Stethoscope,
  Building2,
  ShoppingCart,
  GraduationCap,
  Home,
  Car,
  Palette,
  HeartPulse,
} from "lucide-react";

const categories = [
  { icon: <UtensilsCrossedIcon className="w-5 h-5" />, name: "Restaurants" },
  { icon: <Stethoscope className="w-5 h-5" />, name: "Healthcare" },
  { icon: <Building2 className="w-5 h-5" />, name: "Professional Services" },
  { icon: <ShoppingCart className="w-5 h-5" />, name: "Retail" },
  { icon: <GraduationCap className="w-5 h-5" />, name: "Education" },
  { icon: <Home className="w-5 h-5" />, name: "Real Estate" },
  { icon: <Car className="w-5 h-5" />, name: "Automotive" },
  { icon: <Palette className="w-5 h-5" />, name: "Arts & Culture" },
  { icon: <HeartPulse className="w-5 h-5" />, name: "Health & Beauty" },
];

export default function Directory() {
  return (
    <div className="w-full bg-white">
      <section
        className="max-w-[1300px] mx-auto px-4 py-24 md:py-32"
        id="directory"
      >
        <div className="text-center mb-16">
          <span className="block text-[#6366f1] text-base font-semibold uppercase tracking-wider mb-4">
            Directory
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900">
            Connect with Haitian Businesses & Professionals
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Business Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-4 duration-300">
            <div className="aspect-[4/3] relative">
              <Image
                src="/img/businesses/tropical.jpg"
                alt="Haitian Restaurant"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex gap-2 mb-3">
                <span className="px-3 py-1 bg-[#FDD446] rounded-full text-xs font-semibold uppercase">
                  Restaurant
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-6">
                TROPICAL TASTE
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-zinc-600">
                  <MapPin className="w-6 h-6 text-[#6366f1]" />
                  <span>Indianapolis, IN</span>
                </li>
                <li className="flex items-center gap-4 text-zinc-600">
                  <Clock className="w-6 h-6 text-[#6366f1]" />
                  <span>Open Today: 10AM – 10PM</span>
                </li>
                <li className="flex items-center gap-4 text-zinc-600">
                  <Star className="w-6 h-6 text-[#6366f1]" />
                  <span>
                    <strong className="font-medium">4.9</strong> rating (237)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Business Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-4 duration-300">
            <div className="aspect-[4/3] relative">
              <Image
                src="/img/businesses/sam.png"
                alt="Professional Services"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex gap-2 mb-3">
                <span className="px-3 py-1 bg-[#6366f1]/10 rounded-full text-xs font-semibold uppercase">
                  Legal
                </span>
                <span className="px-3 py-1 bg-[#FDD446] rounded-full text-xs font-semibold uppercase">
                  Verified
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-6">
                Sam Tax and Multi-Services
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-zinc-600">
                  <Briefcase className="w-6 h-6 text-[#6366f1]" />
                  <span>Immigration Law</span>
                </li>
                <li className="flex items-center gap-4 text-zinc-600">
                  <Users className="w-6 h-6 text-[#6366f1]" />
                  <span>2000+ Clients Served</span>
                </li>
                <li className="flex items-center gap-4 text-zinc-600">
                  <Star className="w-6 h-6 text-[#6366f1]" />
                  <span>
                    <strong className="font-medium">4.8</strong> rating (182)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Categories */}
          <div className="p-6 md:p-8 bg-white rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-zinc-900 mb-6">
              Browse Categories:
            </h3>
            <ul className="space-y-4">
              {categories.map((category) => (
                <li
                  key={category.name}
                  className="flex items-center gap-4 text-lg text-zinc-600"
                >
                  <span className="w-8 h-8 flex items-center justify-center bg-[#6366f1]/10 rounded-full text-[#6366f1]">
                    {category.icon}
                  </span>
                  <span>{category.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="#download"
            className="text-lg text-[#6366f1] hover:text-[#4F46E5] border-b border-current hover:border-transparent transition-colors"
          >
            Download App to View Full Directory &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
