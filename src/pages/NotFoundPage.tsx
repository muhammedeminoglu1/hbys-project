import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft, AlertCircle } from "lucide-react";
import Button from "../components/ui/Button";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex items-center justify-center bg-gray-50 px-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-md"
      >
        <motion.div
          animate={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <AlertCircle className="w-10 h-10 text-teal-500" />
        </motion.div>

        <h1 className="text-8xl font-extrabold text-teal-600 mb-2">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Sayfa Bulunamadı
        </h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya
          dönerek devam edebilirsiniz.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            variant="primary"
            size="lg"
            icon={<Home className="w-5 h-5" />}
            onClick={() => navigate("/")}
          >
            Ana Sayfaya Dön
          </Button>
          <Button
            variant="outline"
            size="lg"
            icon={<ArrowLeft className="w-5 h-5" />}
            onClick={() => navigate(-1)}
          >
            Geri Git
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;