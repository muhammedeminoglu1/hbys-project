import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cross, Clock, Calendar, Hash } from "lucide-react";

const Header: React.FC = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <header className="bg-gradient-to-r from-teal-700 to-teal-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Cross className="w-5 h-5 text-teal-600 fill-teal-600" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-wide">HBYS</span>
              <p className="text-teal-200 text-xs leading-none hidden sm:block">
                Hastane Bilgi Yönetim Sistemi
              </p>
            </div>
          </Link>

          {/* Right side info */}
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="hidden sm:flex items-center gap-1.5 text-teal-100 text-sm">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(now)}</span>
            </div>
            <div className="flex items-center gap-1.5 text-teal-100 text-sm">
              <Clock className="w-4 h-4" />
              <span className="font-mono">{formatTime(now)}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-teal-800/50 rounded-lg px-3 py-1.5 border border-teal-500/40">
              <Hash className="w-3.5 h-3.5 text-teal-300" />
              <span className="text-xs font-semibold text-teal-100">Sıra NO</span>
              <span className="text-sm font-bold text-white">42</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;