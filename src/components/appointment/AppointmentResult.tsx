import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SearchX,
  CheckCircle2,
  CalendarCheck,
  Clock,
  Stethoscope,
  UserRound,
} from "lucide-react";
import Badge from "../ui/Badge";
import type { AppointmentSlot } from "../../types";

interface AppointmentResultProps {
  slots: AppointmentSlot[] | null;
  loading: boolean;
  searched: boolean;
}

const AppointmentResult: React.FC<AppointmentResultProps> = ({
  slots,
  loading,
  searched,
}) => {
  return (
    <div className="mt-6">
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-14 gap-3"
          >
            <div className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-gray-500 font-medium">
              Randevular aranıyor...
            </p>
          </motion.div>
        )}

        {!loading && !searched && (
          <motion.div
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-14 gap-3 text-center"
          >
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
              <CalendarCheck className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-base font-semibold text-gray-500">
              Randevu araması yapılmadı
            </p>
            <p className="text-sm text-gray-400">
              Hasta bilgilerini ve randevu detaylarını doldurduktan sonra
              "Randevu Ara" butonuna tıklayın.
            </p>
          </motion.div>
        )}

        {!loading && searched && slots?.length === 0 && (
          <motion.div
            key="no-results"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-14 gap-3 text-center"
          >
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center">
              <SearchX className="w-8 h-8 text-orange-400" />
            </div>
            <p className="text-base font-semibold text-gray-600">
              Uygun randevu bulunamadı
            </p>
            <p className="text-sm text-gray-400">
              Farklı bir tarih aralığı veya farklı bir doktor seçmeyi deneyin.
            </p>
          </motion.div>
        )}

        {!loading && searched && slots && slots.length > 0 && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <h3 className="text-sm font-bold text-gray-700">
                {slots.length} uygun randevu bulundu
              </h3>
            </div>

            {/* Desktop table */}
            <div className="hidden sm:block overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      <div className="flex items-center gap-1">
                        <CalendarCheck className="w-3.5 h-3.5" /> Tarih
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> Saat
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      <div className="flex items-center gap-1">
                        <Stethoscope className="w-3.5 h-3.5" /> Poliklinik
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      <div className="flex items-center gap-1">
                        <UserRound className="w-3.5 h-3.5" /> Doktor
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Durum
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {slots.map((slot, index) => (
                    <motion.tr
                      key={slot.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.25 }}
                      className="border-b border-gray-100 hover:bg-teal-50/50 transition-colors cursor-pointer"
                    >
                      <td className="px-4 py-3 font-medium text-gray-700">
                        {slot.date}
                      </td>
                      <td className="px-4 py-3 font-mono text-teal-700 font-semibold">
                        {slot.time}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{slot.polyclinic}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{slot.doctor}</td>
                      <td className="px-4 py-3">
                        <Badge variant={slot.status === "Uygun" ? "success" : "error"}>
                          {slot.status}
                        </Badge>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="sm:hidden flex flex-col gap-3">
              {slots.map((slot, index) => (
                <motion.div
                  key={slot.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-bold text-gray-800">{slot.date}</p>
                      <p className="font-mono text-teal-600 font-semibold text-lg">
                        {slot.time}
                      </p>
                    </div>
                    <Badge variant={slot.status === "Uygun" ? "success" : "error"}>
                      {slot.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500">{slot.polyclinic}</p>
                  <p className="text-xs text-gray-400 mt-1">{slot.doctor}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AppointmentResult;
