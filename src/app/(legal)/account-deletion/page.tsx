export default function AccountDeletionPage() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1300px] mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8">
          Account Deletion
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-zinc-600 mb-8">
            We respect your right to control your data. Here&apos;s how you can
            delete your account and what happens to your information.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">
            How to Delete Your Account
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <ol className="list-decimal pl-6 space-y-4 text-zinc-600">
              <li>Go to Account Settings in the app</li>
              <li>
                Scroll to the bottom and select &quot;Delete Account&quot;
              </li>
              <li>Review the information about account deletion</li>
              <li>Confirm your choice by entering your password</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">
            What Happens When You Delete Your Account
          </h2>
          <ul className="list-disc pl-6 mb-6 text-zinc-600">
            <li>
              Your profile and personal information will be permanently deleted
            </li>
            <li>Your posts and comments will be removed</li>
            <li>Your messages will be deleted from our servers</li>
            <li>This action cannot be undone</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
            <p className="text-yellow-700">
              <strong>Note:</strong> Account deletion is permanent and cannot be
              reversed. Please make sure to save any important information
              before proceeding.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">
            Data Retention
          </h2>
          <p className="text-zinc-600 mb-6">
            After account deletion, we may retain certain information for legal
            compliance and legitimate business purposes. This data is completely
            anonymized and cannot be used to identify you.
          </p>

          <div className="mt-12 space-y-6">
            <p className="text-zinc-600">
              Need help? Contact our support team at{" "}
              <a
                href="mailto:support@kreyolink.com"
                className="text-[#6366f1] hover:text-[#4F46E5]"
              >
                support@kreyolink.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
