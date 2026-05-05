import React from "react";
import { Link } from "react-router-dom";
import { Cross, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <Cross className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-xl font-bold">HBYS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Hastane Bilgi Yönetim Sistemi, hastalarımıza daha hızlı, daha
              güvenli ve daha kaliteli sağlık hizmeti sunmak amacıyla
              geliştirilmiş modern bir platformdur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400 mb-4">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Ana Sayfa", to: "/" },
                { label: "Randevu Al", to: "/randevu" },
                { label: "Hakkımızda", to: "/hakkimizda" },
                { label: "İletişim", to: "/iletisim" },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400 mb-4">
              İletişim
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                <span>Bilkent, Üniversiteler Mah. 1604. Cadde, 06800 Çankaya/Ankara</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-teal-500 flex-shrink-0" />
                <span>+90 (312) 552 60 00</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-teal-500 flex-shrink-0" />
                <span>info@hbys.saglik.gov.tr</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-gray-500">
            © 2026 HBYS - Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-gray-600">
            T.C. Sağlık Bakanlığı Bilgi Sistemleri
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;