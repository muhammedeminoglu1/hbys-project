import React from "react";
import { motion } from "framer-motion";
import { User, CreditCard, Phone } from "lucide-react";
import type { Patient, ValidationErrors } from "../../types";

interface PatientInfoCardProps {
  patient: Patient;
  onChange: (field: keyof Patient, value: string) => void;
  errors: ValidationErrors;
}

const PatientInfoCard: React.FC<PatientInfoCardProps> = ({
  patient,
  onChange,
  errors,
}) => {
  return (
    <motion.div
      initial={{ scale: 0.97, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl shadow-xl p-6 text-white"
    >
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-teal-100">
          Hasta Bilgileri
        </h2>
      </div>

      <div className="space-y-4">
        {/* Ad Soyad */}
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-teal-200 flex items-center gap-1.5 mb-1">
            <User className="w-3.5 h-3.5" />
            Ad Soyad
          </label>
          <input
            type="text"
            value={patient.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            placeholder="Adınızı ve soyadınızı giriniz"
            className={`w-full px-3 py-2 text-sm bg-white/15 border rounded-lg outline-none transition-all placeholder-teal-300 text-white
              ${errors.fullName ? "border-red-300" : "border-white/30 focus:border-white/60"}
              focus:bg-white/20 focus:ring-2 focus:ring-white/20`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-200 mt-1 flex items-center gap-1">
              <span>⚠</span> {errors.fullName}
            </p>
          )}
        </div>

        {/* TC */}
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-teal-200 flex items-center gap-1.5 mb-1">
            <CreditCard className="w-3.5 h-3.5" />
            TC Kimlik No
          </label>
          <input
            type="text"
            value={patient.tc}
            onChange={(e) => onChange("tc", e.target.value.replace(/\D/g, "").slice(0, 11))}
            placeholder="11 haneli TC kimlik numaranız"
            maxLength={11}
            className={`w-full px-3 py-2 text-sm bg-white/15 border rounded-lg outline-none transition-all placeholder-teal-300 text-white font-mono tracking-widest
              ${errors.tc ? "border-red-300" : "border-white/30 focus:border-white/60"}
              focus:bg-white/20 focus:ring-2 focus:ring-white/20`}
          />
          {errors.tc && (
            <p className="text-xs text-red-200 mt-1 flex items-center gap-1">
              <span>⚠</span> {errors.tc}
            </p>
          )}
        </div>

        {/* Phone 1 */}
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-teal-200 flex items-center gap-1.5 mb-1">
            <Phone className="w-3.5 h-3.5" />
            Telefon 1
          </label>
          <div className="flex gap-2">
            <div className="flex items-center px-3 py-2 bg-white/10 border border-white/30 rounded-lg text-sm text-teal-100 font-mono w-16 justify-center">
              312
            </div>
            <input
              type="text"
              value={patient.phone1}
              onChange={(e) => onChange("phone1", e.target.value.replace(/\D/g, "").slice(0, 10))}
              placeholder="Telefon numarası"
              className={`flex-1 px-3 py-2 text-sm bg-white/15 border rounded-lg outline-none transition-all placeholder-teal-300 text-white
                ${errors.phone1 ? "border-red-300" : "border-white/30 focus:border-white/60"}
                focus:bg-white/20 focus:ring-2 focus:ring-white/20`}
            />
          </div>
          {errors.phone1 && (
            <p className="text-xs text-red-200 mt-1 flex items-center gap-1">
              <span>⚠</span> {errors.phone1}
            </p>
          )}
        </div>

        {/* Phone 2 */}
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-teal-200 flex items-center gap-1.5 mb-1">
            <Phone className="w-3.5 h-3.5" />
            Telefon 2
          </label>
          <input
            type="text"
            value={patient.phone2}
            onChange={(e) => onChange("phone2", e.target.value)}
            placeholder="(555) 565-6959"
            className="w-full px-3 py-2 text-sm bg-white/15 border border-white/30 rounded-lg outline-none transition-all placeholder-teal-300 text-white focus:border-white/60 focus:bg-white/20 focus:ring-2 focus:ring-white/20"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PatientInfoCard;