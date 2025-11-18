import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "./ui/separator";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#5C4033] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-[#F4A700]">The Grand Kadai</h3>
            <p className="text-gray-300 text-sm">
              Where every flavour tells a story.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-[#F4A700]">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", id: "home" },
                { name: "Reservations", id: "reservations" },
                { name: "Signature Dishes", id: "signature" },
                { name: "About", id: "about" },
                { name: "Gallery", id: "gallery" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-gray-300 hover:text-[#F4A700] transition-colors text-sm"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-[#F4A700]">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>#28/4,opp. Regal Hospital, Chokkanahalli Bus Stop, Hegde Nagar Main Road, Bengaluru-560064</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 97428 33448</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>jerryjothi@yahoo.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-[#F4A700]">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F4A700] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F4A700] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F4A700] flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-300">Opening Hours:</p>
              <p className="text-sm text-gray-400">Mon-Sun: 09:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="text-center text-sm text-gray-400">
          <p>© 2025 The Grand Kadai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
