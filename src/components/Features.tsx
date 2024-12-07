// src/components/Features.tsx
import Image from "next/image";

const features = [
  {
    number: "01",
    title: "Business Directory",
    description:
      "Discover and support Haitian-owned businesses in your area. From restaurants to professional services, easily find and connect with trusted businesses in our community. Get verified reviews, detailed information, and direct contact options.",
    image: "/img/app/1.png",
    alt: "Android app business list screen",
  },
  {
    number: "02",
    title: "Job Board",
    description:
      "Access career opportunities specifically tailored for our community. Connect with Haitian-owned businesses and professionals seeking talent, find mentorship opportunities, and advance your career through our extensive professional network.",
    image: "/img/app/2.png",
    alt: "Android app Job Listing screen",
  },
  {
    number: "03",
    title: "Cultural Events",
    description:
      "Never miss another community gathering. From cultural festivals to professional networking events, stay updated with local Haitian activities. Create, share, and RSVP to events that matter to our community.",
    image: "/img/app/3.png",
    alt: "Android App promotion screen",
  },
];

export default function Features() {
  return (
    <div className="w-full bg-white">
      <section className="max-w-[1300px] mx-auto px-4 py-24" id="how">
        <div className="mb-24">
          <span className="block text-[#6366f1] text-base font-semibold uppercase tracking-wider mb-4">
            APP FEATURES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-zinc-900">
            Everything you need in one place
          </h2>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <p className="text-[120px] font-light text-[#93c5fd] opacity-80 mb-6 leading-none">
                  {feature.number}
                </p>
                <h3 className="text-3xl font-bold text-zinc-900 mb-6">
                  {feature.title}
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div
                className={`relative flex justify-center items-center ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
                  <div className="absolute w-[80%] h-[80%] bg-[#e0f2fe] opacity-50 rounded-full" />
                  <div className="absolute w-[63%] h-[63%] bg-[#bae6fd] opacity-50 rounded-full" />
                  <div className="relative z-10 w-1/2">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={300}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
