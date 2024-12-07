export default function CommunityGuidelinesPage() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1300px] mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8">
          Community Guidelines
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-zinc-600 mb-8">Last updated: December 7, 2024</p>

          <p className="text-xl text-zinc-700 mb-12">
            KreyoLink is built on the values of respect, unity, and cultural
            celebration. These guidelines ensure our platform remains a safe and
            enriching space for the Haitian community worldwide.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">
            1. Respect for Culture & Identity
          </h2>
          <ul className="list-disc pl-6 mb-6 text-zinc-600">
            <li>Celebrate Haitian culture, traditions, and values</li>
            <li>Respect diverse perspectives within our community</li>
            <li>Use appropriate language and tone in discussions</li>
            <li>Honor cultural sensitivities and traditions</li>
          </ul>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">
            2. Content Standards
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="font-bold mb-4">DO Share:</h3>
            <ul className="list-disc pl-6 mb-6 text-zinc-600">
              <li>Cultural events and celebrations</li>
              <li>Business promotions and professional opportunities</li>
              <li>Educational content and resources</li>
              <li>Community support and connections</li>
              <li>Positive representations of Haitian culture</li>
            </ul>

            <h3 className="font-bold mb-4">DON&apos;T Share:</h3>
            <ul className="list-disc pl-6 text-zinc-600">
              <li>Hate speech or discrimination</li>
              <li>False or misleading information</li>
              <li>Explicit or inappropriate content</li>
              <li>Spam or unauthorized advertising</li>
              <li>Personal attacks or harassment</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">
            3. Business & Professional Conduct
          </h2>
          <p className="text-zinc-600 mb-6">
            For business owners and professionals using KreyoLink:
          </p>
          <ul className="list-disc pl-6 mb-6 text-zinc-600">
            <li>Maintain honest and transparent business practices</li>
            <li>Provide accurate business information</li>
            <li>Respond to customer inquiries professionally</li>
            <li>Follow local business regulations and laws</li>
          </ul>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">
            4. Event Posting Guidelines
          </h2>
          <p className="text-zinc-600 mb-6">
            When posting cultural events or community gatherings:
          </p>
          <ul className="list-disc pl-6 mb-6 text-zinc-600">
            <li>Provide accurate event details and timing</li>
            <li>Clearly state any entry fees or requirements</li>
            <li>Include appropriate content warnings if necessary</li>
            <li>
              Respect intellectual property rights for promotional materials
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">
            5. Language Policy
          </h2>
          <p className="text-zinc-600 mb-6">KreyoLink welcomes content in:</p>
          <ul className="list-disc pl-6 mb-6 text-zinc-600">
            <li>Haitian Creole</li>
            <li>French</li>
            <li>English</li>
            <li>
              Please provide translations when possible to ensure wider
              community access
            </li>
          </ul>

          <div className="bg-[#E6F4FF] p-6 rounded-lg my-12">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
              Enforcement & Reporting
            </h2>
            <p className="text-zinc-600 mb-4">
              Violations of these guidelines may result in:
            </p>
            <ul className="list-disc pl-6 text-zinc-600">
              <li>Content removal</li>
              <li>Account warnings</li>
              <li>Temporary suspension</li>
              <li>Permanent account deletion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
