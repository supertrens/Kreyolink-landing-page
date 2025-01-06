"use client";
import Image from "next/image";
import { Phone, Shield, Globe, RefreshCw } from "lucide-react";

const features = [
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Mobile First Design",
    text: "Optimized for the way you connect, with a smooth and intuitive mobile experience.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure & Private",
    text: "Your data is protected with enterprise-grade security and privacy controls.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Community Driven",
    text: "Built by and for the Haitian community, with features that matter to you.",
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Regular Updates",
    text: "Continuous improvements and new features based on community feedback.",
  },
];

export default function DownloadCTA() {
  // const [formStatus, setFormStatus] = useState<
  //   "idle" | "submitting" | "success" | "error"
  // >("idle");
  // const [errorMessage, setErrorMessage] = useState("");

  // // async function handleSubmit(formData: FormData) {
  // //   setFormStatus("submitting");

  // //   try {
  // //     // const result = await addToWaitlist(formData);
  // //     // if (result.success) {
  // //     //   setFormStatus("success");
  // //     // } else {
  // //     //   setFormStatus("error");
  // //     //   setErrorMessage(result.error || "Something went wrong");
  // //     // }
  // //   } catch (error) {
  // //     setFormStatus("error");
  // //     setErrorMessage("Failed to submit form");
  // //   }
  // // }

  return (
    <div className="w-full bg-white">
      <section className="max-w-[1300px] mx-auto px-4 py-24" id="download">
        <div className="text-center mb-16">
          <span className="block text-[#6366f1] text-base font-semibold uppercase tracking-wider mb-4">
            Download Now
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900">
            Join the KreyoLink Community
          </h2>
        </div>

        <div className="bg-gradient-to-br from-[#6C78FF] to-[#6366f1] rounded-2xl overflow-hidden mb-16">
          <div className="p-6 md:p-16 text-white">
            <div className="max-w-4xl mx-auto">
              {/* Android Section */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Available on iOS & Android
                </h3>
                <p className="text-lg">
                  Download KreyoLink now and start connecting with the Haitian
                  community.
                </p>

                <div className="flex gap-4 items-center">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.kreyolink.api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform hover:-translate-y-1"
                  >
                    <Image
                      src="/img/logos/play-store.png"
                      alt="Get it on Google Play"
                      width={250}
                      height={40}
                      // className="aspect-square object-contain"
                    />
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.kreyolink.api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform hover:-translate-y-1"
                  >
                    <Image
                      src="/img/logos/app-store.png"
                      alt="Get it on APP Store"
                      width={200}
                      height={40}
                      // className="aspect-square object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#E6F4FF] rounded-full flex items-center justify-center mx-auto mb-6 text-[#6366f1]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-zinc-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
