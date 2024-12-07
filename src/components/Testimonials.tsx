// src/components/Testimonials.tsx
import Image from "next/image";

const testimonials = [
  {
    text: "KreyoLink helped me find amazing Haitian businesses in my area and connect with my culture in ways I never could before!",
    name: "Marie Laurent",
    image: "/img/customers/customer-6.jpg",
  },
  {
    text: "As a business owner, KreyoLink has been invaluable in reaching the Haitian community and growing my customer base.",
    name: "Jean Baptiste",
    image: "/img/customers/customer-2.jpg",
  },
  {
    text: "Through KreyoLink's mentorship program, I connected with successful professionals who helped guide my career path.",
    name: "Sophie Pierre",
    image: "/img/customers/customer-1.jpg",
  },
  {
    text: "The cultural events feature keeps me connected to our vibrant heritage and helps me meet fellow Haitians in my city.",
    name: "Marc Joseph",
    image: "/img/customers/customer-4.jpg",
  },
];

const galleryImages = [
  { src: "/img/gallery/gallery-5.jpg", alt: "Haitian barber" },
  { src: "/img/gallery/gallery-3.jpg", alt: "Haitian own store" },
  { src: "/img/gallery/gallery-6.jpg", alt: "Community support" },
  {
    src: "/img/gallery/gallery-9.jpg",
    alt: "Haitian group studying the bible",
  },
  { src: "/img/gallery/gallery-2.jpg", alt: "Haitian conference" },
  { src: "/img/gallery/gallery-1.jpg", alt: "Haitian business" },
  { src: "/img/gallery/gallery-7.jpg", alt: "Playing video games" },
  { src: "/img/gallery/gallery-8.jpg", alt: "Haitian Festival" },
  {
    src: "/img/gallery/gallery-4.jpg",
    alt: "Haitian men talking and drinking",
  },
];

export default function Testimonials() {
  return (
    <div className="w-full bg-[#E6F4FF]">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row">
        {/* Testimonials Section */}
        <div className="w-full md:w-[55%] p-12 lg:p-16 flex items-center">
          <div>
            <span className="block text-[#6366f1] text-base font-semibold uppercase tracking-wider mb-4">
              Community Stories
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-12">
              Building Connections That Matter
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="space-y-4">
                  <Image
                    src={testimonial.image}
                    alt={`Photo of ${testimonial.name}`}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <p className="text-zinc-600 text-base leading-relaxed">
                    {testimonial.text}
                  </p>
                  <p className="text-zinc-600 text-sm">
                    &mdash; {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="w-full md:w-[45%] py-12 lg:py-16">
          <div className="grid grid-cols-3 gap-2">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 33vw, 20vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
