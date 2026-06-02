import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Shield,
  Award,
  Calendar,
  Heart,
  Eye,
  Brain,
  Bone,
  Activity,
  Stethoscope,
} from "lucide-react";
import Button from "../components/ui/Button";

const departments = [
  { icon: Heart, color: "bg-red-50 text-red-500", title: "Kardiyoloji", desc: "Kalp ve damar hastalıkları tanı ve tedavisi" },
  { icon: Brain, color: "bg-purple-50 text-purple-500", title: "Nöroloji", desc: "Sinir sistemi hastalıkları uzman bakımı" },
  { icon: Bone, color: "bg-orange-50 text-orange-500", title: "Ortopedi", desc: "Kemik ve eklem hastalıkları tedavisi" },
  { icon: Activity, color: "bg-blue-50 text-blue-500", title: "Dahiliye", desc: "İç hastalıkları kapsamlı sağlık hizmetleri" },
  { icon: Eye, color: "bg-teal-50 text-teal-500", title: "Göz Hastalıkları", desc: "Göz sağlığı ve görme bozuklukları" },
  { icon: Stethoscope, color: "bg-green-50 text-green-500", title: "Anestezi", desc: "Ağrı yönetimi ve anestezi hizmetleri" },
];

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
              Sağlığınız İçin <br />
              <span className="text-teal-200">Her Zaman Buradayız</span>
            </h1>
            <p className="text-teal-100 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Modern teknoloji ile güçlendirilmiş hastane bilgi yönetim sistemimiz
              ile randevunuzu hızlı ve kolay alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="secondary"
                size="lg"
                icon={<Calendar className="w-5 h-5" />}
                onClick={() => navigate("/randevu")}
                className="!bg-white !text-teal-700 hover:!bg-teal-50"
              >
                Randevu Al
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={() => navigate("/hakkimizda")}
                className="!border-white !text-white hover:!bg-white/10"
              >
                Daha Fazla Bilgi
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              Branşlarımız
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Uzman doktor kadromuz ile geniş branş yelpazesinde kaliteli sağlık
              hizmetleri sunuyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {departments.map(({ icon: Icon, color, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                Neden HBSY?
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
