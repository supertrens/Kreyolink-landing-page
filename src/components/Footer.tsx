import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: <Instagram className="w-6 h-6" />, label: "Instagram", href: "#" },
  { icon: <Facebook className="w-6 h-6" />, label: "Facebook", href: "#" },
  { icon: <Twitter className="w-6 h-6" />, label: "Twitter", href: "#" },
  { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", href: "#" },
];

const footerLinks = {
  platform: [
    { label: "Android App", href: "#" },
    { label: "iOS Coming Soon", href: "#" },
  ],
  company: [
    { label: "About KreyoLink", href: "/about" },
    // { label: "Careers", href: "/careers" },
    // { label: "Press Kit", href: "/press" },
    { label: "Contact Us", href: "/contact" },
  ],

  legal: [
    { label: "Help Center", href: "/help" },
    { label: "Community Guidelines", href: "/community-guidelines" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Account Deletion", href: "/account-deletion" },
  ],
};

export default function Footer() {
  return (
    <div className="w-full bg-white border-t border-gray-200">
      <footer className="max-w-[1300px] mx-auto px-4 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1.5fr_1fr_1fr_1fr] gap-12">
          {/* Logo Column */}
          <div className="flex flex-col">
            <Link href="/" className="mb-8">
              <Image
                src="/img/logo.png"
                alt="KreyoLink logo"
                width={120}
                height={40}
                className="h-15 w-auto"
              />
            </Link>

            <ul className="flex gap-6 mb-8">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    className="text-zinc-600 hover:text-zinc-900 transition-colors"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>

            <p className="text-sm text-zinc-600 mt-auto">
              Copyright &copy; {new Date().getFullYear()} by KreyoLink, Inc. All
              rights reserved.
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-medium mb-8 text-gray-500">
              Contact us
            </h3>
            <address className="not-italic">
              <p className="text-zinc-600 mb-4">
                Indianapolis, IN - Serving the Haitian Community Worldwide
              </p>
              <a
                href="mailto:support@kreyolink.com"
                className="text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                support@kreyolink.com
              </a>
            </address>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-lg font-medium mb-8 text-gray-500">Platform</h3>
            <ul className="space-y-4">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 hover:text-zinc-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-medium mb-8 text-gray-500">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 hover:text-zinc-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-medium mb-8 text-gray-500">
              Legal & Help
            </h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 hover:text-zinc-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
