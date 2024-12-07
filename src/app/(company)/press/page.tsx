export default function PressKitPage() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1300px] mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8">
          Press Kit
        </h1>

        {/* Brand Assets Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">
            Brand Assets
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Logo Package</h3>
              <img
                src="/api/placeholder/400/200"
                alt="KreyoLink logos"
                className="mb-4 rounded"
              />
              <a
                href="#"
                className="text-[#6366f1] hover:text-[#4F46E5] font-medium"
              >
                Download Logo Package (.zip) →
              </a>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Brand Guidelines</h3>
              <img
                src="/api/placeholder/400/200"
                alt="Brand guidelines preview"
                className="mb-4 rounded"
              />
              <a
                href="#"
                className="text-[#6366f1] hover:text-[#4F46E5] font-medium"
              >
                Download Brand Guidelines (PDF) →
              </a>
            </div>
          </div>
        </section>

        {/* Media Mentions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">
            Media Coverage
          </h2>
          <div className="space-y-6">
            {[1, 2, 3].map((article) => (
              <div key={article} className="p-6 border rounded-lg">
                <p className="text-sm text-zinc-500 mb-2">December 1, 2024</p>
                <h3 className="text-xl font-bold mb-2">
                  "KreyoLink: Bridging Haitian Communities Worldwide"
                </h3>
                <p className="text-zinc-600 mb-4">
                  Featured in Tech & Culture Magazine
                </p>
                <a
                  href="#"
                  className="text-[#6366f1] hover:text-[#4F46E5] font-medium"
                >
                  Read Article →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Media Contact */}
        <section className="bg-[#E6F4FF] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Media Contact
          </h2>
          <p className="text-zinc-600 mb-4">
            For press inquiries, please contact our media relations team:
          </p>
          <div>
            <p className="font-medium">Marie Laurent</p>
            <p className="text-zinc-600">Head of Communications</p>
            <a
              href="mailto:press@kreyolink.com"
              className="text-[#6366f1] hover:text-[#4F46E5]"
            >
              press@kreyolink.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
