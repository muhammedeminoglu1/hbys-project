import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Stethoscope, Search, Send } from "lucide-react";
import PatientInfoCard from "../components/appointment/PatientInfoCard";
import AppointmentForm from "../components/appointment/AppointmentForm";
import AppointmentResult from "../components/appointment/AppointmentResult";
import Button from "../components/ui/Button";
import { mockAppointmentSlots, symptomSuggestions } from "../data/mockData";
import type {
  Patient,
  AppointmentSearch,
  AppointmentSlot,
  ValidationErrors,
} from "../types";

const defaultPatient: Patient = {
  fullName: "",
  tc: "",
  phone1: "",
  phone2: "",
};

const defaultForm: AppointmentSearch = {
  hospital: "",
  branch: "",
  polyclinic: "",
  doctor: "",
  startDate: new Date(),
  endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
};

const tabs = [
  { id: "randevu", label: "Randevu Al", icon: Calendar },
  { id: "neyim-var", label: "Neyim Var?", icon: Stethoscope },
];

const AppointmentPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"randevu" | "neyim-var">("randevu");
  const [patient, setPatient] = useState<Patient>(defaultPatient);
  const [form, setForm] = useState<AppointmentSearch>(defaultForm);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [slots, setSlots] = useState<AppointmentSlot[] | null>(null);
  const [symptom, setSymptom] = useState("");
  const [symptomLoading, setSymptomLoading] = useState(false);
  const [symptomResult, setSymptomResult] = useState<string[] | null>(null);

  const handlePatientChange = (field: keyof Patient, value: string) => {
    setPatient((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleFormChange = (
    field: keyof AppointmentSearch,
    value: string | Date
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: ValidationErrors = {};
    if (!patient.fullName.trim()) newErrors.fullName = "Ad soyad zorunludur";
    if (patient.tc.length !== 11) newErrors.tc = "TC kimlik no 11 haneli olmalıdır";
    if (patient.phone1.length < 10) newErrors.phone1 = "Geçerli bir telefon numarası giriniz";
    if (!form.hospital) newErrors.hospital = "Hastane seçiniz";
    if (!form.branch) newErrors.branch = "Branş seçiniz";
    if (!form.polyclinic) newErrors.polyclinic = "Poliklinik seçiniz";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearch = async () => {
    if (!validate()) return;
    setLoading(true);
    setSearched(true);
    await new Promise((res) => setTimeout(res, 1200));
    const filtered = mockAppointmentSlots.filter(
      (s) =>
        (!form.doctor || s.doctor === form.doctor) &&
        (!form.polyclinic || s.polyclinic === form.polyclinic)
    );
    setSlots(filtered);
    setLoading(false);
  };

  const handleSymptomQuery = async () => {
    if (!symptom.trim()) return;
    setSymptomLoading(true);
    await new Promise((res) => setTimeout(res, 800));
    const lower = symptom.toLowerCase();
    const found = new Set<string>();
    Object.entries(symptomSuggestions).forEach(([key, depts]) => {
      if (lower.includes(key)) depts.forEach((d) => found.add(d));
    });
    setSymptomResult(found.size > 0 ? Array.from(found) : ["DAHİLİYE"]);
    setSymptomLoading(false);
  };

  return (
    <div className="flex-1 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="text-2xl font-extrabold text-gray-900">
            Online Randevu
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Hasta bilgilerinizi girin ve uygun randevu bulun
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-200">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as "randevu" | "neyim-var")}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold border-b-2 transition-all ${
                activeTab === id
                  ? "border-teal-600 text-teal-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "randevu" && (
            <motion.div
              key="randevu"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <PatientInfoCard
                    patient={patient}
                    onChange={handlePatientChange}
                    errors={errors}
                  />
                </div>
                <div className="lg:col-span-2">
                  <AppointmentForm
                    form={form}
                    onChange={handleFormChange}
                    onSearch={handleSearch}
                    loading={loading}
                    errors={errors}
                  />
                  <AppointmentResult
                    slots={slots}
                    loading={loading}
                    searched={searched}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "neyim-var" && (
            <motion.div
              key="neyim-var"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25 }}
              className="max-w-2xl"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
                    <Stethoscope className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">Belirti Sorgulama</h2>
                    <p className="text-sm text-gray-500">
                      Şikayetinizi yazın, size uygun branşları önerelim
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-gray-500 block mb-1.5">
                      Şikayetinizi Yazınız
                    </label>
                    <textarea
                      value={symptom}
                      onChange={(e) => setSymptom(e.target.value)}
                      placeholder="Örn: Baş ağrısı, göz yanması, kalp çarpıntısı, eklem ağrısı..."
                      rows={4}
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl outline-none resize-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all placeholder-gray-400"
                    />
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    loading={symptomLoading}
                    icon={!symptomLoading ? <Search className="w-4 h-4" /> : undefined}
                    onClick={handleSymptomQuery}
                  >
                    {symptomLoading ? "Sorgulanıyor..." : "Sorgula"}
                  </Button>
                </div>

                <AnimatePresence>
                  {symptomResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-6 p-5 bg-teal-50 border border-teal-200 rounded-xl"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Send className="w-4 h-4 text-teal-600" />
                        <h3 className="text-sm font-bold text-teal-800">
                          Önerilen Branşlar
                        </h3>
                      </div>
                      <p className="text-xs text-teal-600 mb-4">
                        Belirttiğiniz şikayetlere göre aşağıdaki branşlara
                        başvurmanızı öneririz:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {symptomResult.map((dept) => (
                          <button
                            key={dept}
                            onClick={() => {
                              setActiveTab("randevu");
                            }}
                            className="px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors"
                          >
                            {dept}
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-teal-500 mt-4">
                        * Bu öneri bilgilendirme amaçlıdır. Kesin tanı için
                        doktorunuza başvurunuz.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AppointmentPage;
