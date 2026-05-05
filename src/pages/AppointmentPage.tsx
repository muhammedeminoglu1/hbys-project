slots={slots}
loading={loading}
searched={searched}
/>
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

{/* Symptom result */}
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