export default function PrivacyPage() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1300px] mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-zinc-600 mb-8">Last updated: December 7, 2024</p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-zinc-600 mb-6">
            We collect information that you provide directly to us when using
            our services, including:
          </p>
          <ul className="list-disc pl-6 mb-6 text-zinc-600">
            <li>Personal information (name, email address)</li>
            <li>Profile information</li>
            <li>Content you post or share</li>
            <li>Communication preferences</li>
          </ul>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-zinc-600 mb-6">
            We use the information we collect to provide, maintain, and improve
            our services, including personalizing your experience and
            communicating with you.
          </p>

          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
}
