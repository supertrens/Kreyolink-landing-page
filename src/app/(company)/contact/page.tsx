export default function ContactPage() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1300px] mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-zinc-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-zinc-700 mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
                >
                  <option>General Inquiry</option>
                  <option>Business Support</option>
                  <option>Technical Support</option>
                  <option>Press Inquiry</option>
                  <option>Partnership Opportunity</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#6366f1] text-white py-3 rounded-lg hover:bg-[#4F46E5] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-[#E6F4FF] p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">
                Quick Support
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">General Support</h3>
                  <a
                    href="mailto:support@kreyolink.com"
                    className="text-[#6366f1] hover:text-[#4F46E5]"
                  >
                    support@kreyolink.com
                  </a>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Business Inquiries</h3>
                  <a
                    href="mailto:business@kreyolink.com"
                    className="text-[#6366f1] hover:text-[#4F46E5]"
                  >
                    business@kreyolink.com
                  </a>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Press</h3>
                  <a
                    href="mailto:press@kreyolink.com"
                    className="text-[#6366f1] hover:text-[#4F46E5]"
                  >
                    press@kreyolink.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">
                Office Location
              </h2>
              <p className="text-zinc-600 mb-4">
                Miami, FL
                <br />
                United States
              </p>
              <img
                src="/api/placeholder/400/200"
                alt="Office location map"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
