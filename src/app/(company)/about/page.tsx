export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Hero Section */}
        <div className="py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            Connecting the Haitian Diaspora
          </h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            KreyoLink is more than a platform - it's a bridge connecting Haitian
            communities worldwide, fostering cultural preservation, and
            empowering economic growth.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center py-16">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-zinc-600 mb-6">
              To strengthen the global Haitian community by providing innovative
              digital solutions that connect people, businesses, and cultural
              initiatives.
            </p>
            <ul className="space-y-4 text-zinc-600">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#6366f1] rounded-full" />
                Empower Haitian businesses worldwide
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#6366f1] rounded-full" />
                Preserve and celebrate Haitian culture
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#6366f1] rounded-full" />
                Foster meaningful community connections
              </li>
            </ul>
          </div>
          <div className="relative aspect-video">
            <img
              src="/api/placeholder/600/400"
              alt="Community gathering"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-12 text-center">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src={`/api/placeholder/200/200`}
                    alt={`Team member ${member}`}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">
                  Jean Baptiste
                </h3>
                <p className="text-zinc-600">Chief Executive Officer</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <div className="py-16 bg-[#E6F4FF] rounded-2xl px-8 my-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-12 text-center">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-[#6366f1] mb-2">50K+</p>
              <p className="text-zinc-600">Active Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#6366f1] mb-2">1000+</p>
              <p className="text-zinc-600">Businesses Connected</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#6366f1] mb-2">30+</p>
              <p className="text-zinc-600">Countries Reached</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
