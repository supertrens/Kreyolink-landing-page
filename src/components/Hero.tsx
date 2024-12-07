import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full bg-[#E6F4FF]">
      <section className="max-w-[1300px] mx-auto px-4 py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 leading-tight mb-6">
              Connect with the Vibrant Haitian Community Worldwide
            </h1>
            <p className="text md:text-xl text-gray-500 mb-8 leading-relaxed">
              KreyoLink is your gateway to the Haitian diaspora. Discover local
              businesses, find job opportunities, attend cultural events, and
              build meaningful connections.
            </p>
            <div className="flex gap-4 mb-8 md:mb-16">
              <Link
                href="#download"
                className="bg-[#6366f1] hover:bg-[#4F46E5] text-white px-6 py-4 rounded-lg font-medium transition-colors"
              >
                Download Now
              </Link>
              <Link
                href="#learn"
                className="bg-white hover:bg-gray-50 text-zinc-600 px-6 py-4 rounded-lg font-medium transition-colors"
              >
                Learn more ↓
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div
                    key={num}
                    className="relative w-10 h-10 ring-2 ring-[#E6F4FF] rounded-full overflow-hidden"
                  >
                    <Image
                      src={`/img/customers/customer-${num}.jpg`}
                      alt="Member"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-gray-500">
                <span className="text-[#6366f1]">members</span> already joined!
              </p>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <Image
              src="/img/hero.png"
              alt="Community collage"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
