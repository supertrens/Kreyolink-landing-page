export default function TermsPage() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1300px] mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-zinc-600 mb-8">Last updated: December 7, 2024</p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">
            1. Agreement to Terms
          </h2>
          <p className="text-zinc-600 mb-6">
            By accessing and using KreyoLink&apos;s services, you agree to be
            bound by these Terms of Service. If you disagree with any part of
            these terms, you may not access our services.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">
            2. Use of Services
          </h2>
          <p className="text-zinc-600 mb-6">
            Our services are intended for connecting the Haitian community
            worldwide. You agree to use our services only for their intended
            purposes and in compliance with all applicable laws.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">
            3. User Accounts
          </h2>
          <p className="text-zinc-600 mb-6">
            When you create an account with us, you must provide accurate and
            complete information. You are responsible for maintaining the
            security of your account.
          </p>

          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
}
