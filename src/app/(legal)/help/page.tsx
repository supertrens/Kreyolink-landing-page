export default function HelpCenterPage() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1300px] mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8">
          Help Center
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#E6F4FF] p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Quick Support</h2>
            <p className="text-zinc-600 mb-4">Need immediate assistance?</p>
            <a href="mailto:support@kreyolink.com" 
              className="text-[#6366f1] hover:text-[#4F46E5] font-medium">
              Contact Support →
            </a>
          </div>

          <div className="bg-[#E6F4FF] p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Business Support</h2>
            <p className="text-zinc-600 mb-4">Questions about your business listing?</p>
            <a href="mailto:business@kreyolink.com" 
              className="text-[#6366f1] hover:text-[#4F46E5] font-medium">
              Business Support →
            </a>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">Getting Started</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <ol className="list-decimal pl-6 space-y-4 text-zinc-600">
              <li>Download the KreyoLink app</li>
              <li>Create your account</li>
              <li>Complete your profile</li>
              <li>Connect with the community</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">Account Management</h2>
          <div className="space-y-6">
            <details className="group">
              <summary className="text-lg font-medium text-zinc-900 cursor-pointer">
                How do I update my profile?
              </summary>
              <div className="mt-4 text-zinc-600">
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Go to Profile tab</li>
                  <li>Tap Edit Profile</li>
                  <li>Update your information</li>
                  <li>Save changes</li>
                </ol>
              </div>
            </details>

            <details className="group">
              <summary className="text-lg font-medium text-zinc-900 cursor-pointer">
                How do I change my language preferences?
              </summary>
              <div className="mt-4 text-zinc-600">
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Go to Settings</li>
                  <li>Select Language</li>
                  <li>Choose between Creole, French, or English</li>
                </ol>
              </div>
            </details>
          </div>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">Business Features</h2>
          <div className="space-y-6">
            <details className="group">
              <summary className="text-lg font-medium text-zinc-900 cursor-pointer">
                How do I create a business profile?
              </summary>
              <div className="mt-4 text-zinc-600">
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Go to Business section</li>
                  <li>Select "Create Business Profile"</li>
                  <li>Fill in your business details</li>
                  <li>Add photos and descriptions</li>
                  <li>Submit for verification</li>
                </ol>
              </div>
            </details>

            <details className="group">
              <summary className="text-lg font-medium text-zinc-900 cursor-pointer">
                How do I post events?
              </summary>
              <div className="mt-4 text-zinc-600">
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Go to Events tab</li>
                  <li>Click "Create Event"</li>
                  <li>Fill in event details</li>
                  <li>Add location and time</li>
                  <li>Publish your event</li>
                </ol>
              </div>
            </details>
          </div>

          <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">Privacy & Security</h2>
          <div className="space-y-6">
            <details className="group">
              <summary className="text-lg font-medium text-zinc-900 cursor-pointer">
                How do I control who sees my posts?
              </summary>
              <div className="mt-4 text-zinc-600">
                <p>Adjust your privacy settings:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Go to Settings > Privacy</li>
                  <li>Choose between Public, Friends, or Private</li>
                  <li>Set default audience for new posts</li>
                </ul>
              </div>
            </details>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-12">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">Need More Help?</h3>
            <p className="text-yellow-700">
              Our support team is available in Haitian Creole, French, and English. 
              Contact us at{' '}
              <a href="mailto:support@kreyolink.com" className="text-[#6366f1] hover:text-[#4F46E5]">
                support@kreyolink.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}