import React from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import { Search, UserRound } from "lucide-react";
import SelectField from "../ui/SelectField";
import Button from "../ui/Button";
import { hospitals, branches, polyclinics, doctors } from "../../data/mockData";
import type { AppointmentSearch, ValidationErrors } from "../../types";

interface AppointmentFormProps {
  form: AppointmentSearch;
  onChange: (field: keyof AppointmentSearch, value: string | Date) => void;
  onSearch: () => void;
  loading: boolean;
  errors: ValidationErrors;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({
  form,
  onChange,
  onSearch,
  loading,
  errors,
}) => {
  const filteredPolyclinics = form.branch ? (polyclinics[form.branch] ?? []) : [];
  const filteredDoctors = form.polyclinic
    ? doctors.filter((d) => d.polyclinic === form.polyclinic)
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
    >
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center">
          <Search className="w-4 h-4 text-teal-600" />
        </div>
        <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
          Randevu Bilgileri
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Hastane */}
        <div className="sm:col-span-2">
          <SelectField
            label="Hastane"
            value={form.hospital}
            onChange={(e) => onChange("hospital", e.target.value)}
            error={errors.hospital}
            options={hospitals.map((h) => ({ value: h, label: h }))}
            placeholder="-- Hastane seçiniz --"
          />
        </div>

        {/* Branş */}
        <div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Branş
            </label>
            <select
              value={form.branch}
              onChange={(e) => onChange("branch", e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none transition-all cursor-pointer bg-white text-gray-900 focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1.25em 1.25em",
                paddingRight: "2.5rem",
              }}
            >
              <option value="">-- Branş seçiniz --</option>
              {branches.map((b) => (
                <option
                  key={b}
                  value={b}
                  style={
                    b === "ANESTEZİ"
                      ? { fontWeight: "700", color: "#0d9488" }
                      : {}
                  }
                >
                  {b}
                </option>
              ))}
            </select>
            {errors.branch && (
              <p className="text-xs text-red-500 mt-0.5">⚠ {errors.branch}</p>
            )}
          </div>
        </div>

        {/* Poliklinik */}
        <div>
          <SelectField
            label="Poliklinik"
            value={form.polyclinic}
            onChange={(e) => onChange("polyclinic", e.target.value)}
            error={errors.polyclinic}
            options={filteredPolyclinics.map((p) => ({ value: p, label: p }))}
            placeholder="-- Poliklinik seçiniz --"
          />
        </div>

        {/* Doktor */}
        <div className="sm:col-span-2">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-500 flex items-center gap-1">
              <UserRound className="w-3.5 h-3.5" />
              Doktor
            </label>
            <select
              value={form.doctor}
              onChange={(e) => onChange("doctor", e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none transition-all cursor-pointer bg-white text-gray-900 focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1.25em 1.25em",
                paddingRight: "2.5rem",
                appearance: "none",
              }}
            >
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map((d) => (
                  <option key={d.name} value={d.name}>
                    {d.name}
                  </option>
                ))
              ) : (
                doctors
                  .filter((d) => d.branch === form.branch)
                  .map((d) => (
                    <option key={d.name} value={d.name}>
                      {d.name}
                    </option>
                  ))
              )}
            </select>
          </div>
        </div>

        {/* Tarih range */}
        <div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Baş. Tarihi
            </label>
            <DatePicker
              selected={form.startDate}
              onChange={(date: Date | null) => date && onChange("startDate", date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              locale="tr"
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Bit. Tarihi
            </label>
            <DatePicker
              selected={form.endDate}
              onChange={(date: Date | null) => date && onChange("endDate", date)}
              dateFormat="dd/MM/yyyy"
              minDate={form.startDate}
              locale="tr"
            />
          </div>
        </div>
      </div>

      {/* Search button */}
      <div className="mt-6">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          loading={loading}
          icon={!loading ? <Search className="w-4 h-4" /> : undefined}
          onClick={onSearch}
        >
          {loading ? "Aranıyor..." : "Randevu Ara"}
        </Button>
      </div>
    </motion.div>
  );
};

export default AppointmentForm;
