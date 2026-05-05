viewport={{ once: true }}
transition={{ delay: i * 0.08, duration: 0.5 }}
whileHover={{ y: -4, transition: { duration: 0.2 } }}
className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-teal-200 transition-all cursor-pointer"
onClick={() => navigate("/randevu")}
>
<div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
  <Icon className="w-6 h-6" />
</div>
<h3 className="text-base font-bold text-gray-800 mb-1.5">
  {title}
</h3>
<p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
<div className="mt-4 flex items-center gap-1 text-teal-600 text-xs font-semibold">
  <span>Randevu Al</span>
  <ArrowRight className="w-3.5 h-3.5" />
</div>
</motion.div>
))}
</div>
</div>
</section>

{/* Features */}
<section className="bg-white py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<motion.div
initial={{ opacity: 0, x: -30 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
>
<h2 className="text-3xl font-extrabold text-gray-900 mb-4">
Neden HBYS?
</h2>
<p className="text-gray-500 mb-8 leading-relaxed">
Modern teknoloji ile sağlık hizmetlerini birleştirerek
hastalarımıza en iyi deneyimi sunuyoruz.
</p>
<div className="space-y-5">
{[
  {
    icon: Clock,
    title: "7/24 Online Randevu",
    desc: "İstediğiniz saatten randevu alın, bekleme sürsüz hizmet.",
  },
  {
    icon: Shield,
    title: "Güvenli Veri",
    desc: "Hasta bilgileriniz en yüksek güvenlik standartlarıyla korunur.",
  },
  {
    icon: Award,
    title: "Uzman Kadro",
    desc: "500'den fazla uzman doktorla kapsamlı sağlık hizmeti.",
  },
].map(({ icon: Icon, title, desc }) => (
  <div key={title} className="flex gap-4">
    <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 text-teal-600" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  </div>
))}
</div>
</motion.div>

<motion.div
initial={{ opacity: 0, x: 30 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-8 text-white text-center shadow-xl"
>
<div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
<Calendar className="w-10 h-10 text-white" />
</div>
<h3 className="text-2xl font-bold mb-3">
Hemen Randevu Alın
</h3>
<p className="text-teal-100 mb-8 text-sm leading-relaxed">
Saniyeler içinde randevunuzu oluşturun. Doktor, branş ve tarih
seçin; biz gerisini hallederiz.
</p>
<Button
variant="secondary"
size="lg"
fullWidth
icon={<ArrowRight className="w-5 h-5" />}
onClick={() => navigate("/randevu")}
className="!bg-white !text-teal-700 hover:!bg-teal-50"
>
Randevu Sayfasına Git
</Button>
</motion.div>
</div>
</div>
</section>
</div>
);
};

export default LandingPage;