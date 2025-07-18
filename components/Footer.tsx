import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold">
              <Image
                src={"/Logo.png"}
                alt={"ASANTE ARTSY Logo"}
                width={150}
                height={50}
              />
            </Link>
            <p className="text-brown-200 leading-relaxed">
              Crafting modern architecture for a better future through innovative
              and sustainable design solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brown-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brown-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-brown-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-4 text-brown-200">
              <li><Link href="/services" className="hover:text-white transition-colors">Architectural Design</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Interior Architecture</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Sustainable Design</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Project Management</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Master Planning</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Projects</h4>
            <ul className="space-y-4 text-brown-200">
              <li><Link href="/projects" className="hover:text-white transition-colors">Residential</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Commercial</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Public Buildings</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Urban Planning</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Adaptive Reuse</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Contact Info</h4>
            <div className="space-y-4 text-brown-200">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Bonabassem, Deido<br/>Douala, LT</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(+237) 694-261-423 / 693-080-371</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>asanteartsy@yahoo.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brown-800 mt-12 pt-8 text-center text-brown-300">
          <p>&copy; 2025 ASANTE ARTSY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}