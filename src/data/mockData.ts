import type { AppointmentSlot, Doctor } from "../types";

export const hospitals = [
  "Ankara Şehir Hastanesi",
  "Gazi Üniversitesi Hastanesi",
  "Hacettepe Üniversitesi Hastanesi",
  "Başkent Üniversitesi Hastanesi",
  "Numune Eğitim ve Araştırma Hastanesi",
];

export const branches = [
  "ANESTEZİ",
  "KARDİYOLOJİ",
  "NÖROLOJİ",
  "ORTOPEDİ",
  "DAHİLİYE",
  "GÖZ HASTALIKLARI",
];

export const polyclinics: Record<string, string[]> = {
  "ANESTEZİ": ["ANESTEZİ-1", "ANESTEZİ-2", "ANESTEZİ-3"],
  "KARDİYOLOJİ": ["KARDİYOLOJİ-1", "KARDİYOLOJİ-2", "KARDİYOLOJİ-3"],
  "NÖROLOJİ": ["NÖROLOJİ-1", "NÖROLOJİ-2", "NÖROLOJİ-3"],
  "ORTOPEDİ": ["ORTOPEDİ-1", "ORTOPEDİ-2", "ORTOPEDİ-3"],
  "DAHİLİYE": ["DAHİLİYE-1", "DAHİLİYE-2", "DAHİLİYE-3"],
  "GÖZ HASTALIKLARI": ["GÖZ-1", "GÖZ-2", "GÖZ-3"],
};

export const doctors: Doctor[] = [
  // Anestezi
  { name: "AHMET HULUSİ SELÇUK", branch: "ANESTEZİ", polyclinic: "ANESTEZİ-1" },
  { name: "FATMA KAYA ARSLAN", branch: "ANESTEZİ", polyclinic: "ANESTEZİ-2" },
  { name: "MEHMET ALİ DOĞAN", branch: "ANESTEZİ", polyclinic: "ANESTEZİ-3" },
  // Kardiyoloji
  { name: "PROF. DR. KEMAL YILMAZ", branch: "KARDİYOLOJİ", polyclinic: "KARDİYOLOJİ-1" },
  { name: "DOÇ. DR. AYŞE ŞAHİN", branch: "KARDİYOLOJİ", polyclinic: "KARDİYOLOJİ-2" },
  { name: "DR. HASAN KILIÇ", branch: "KARDİYOLOJİ", polyclinic: "KARDİYOLOJİ-3" },
  // Nöroloji
  { name: "PROF. DR. ZELİHA ÖZCAN", branch: "NÖROLOJİ", polyclinic: "NÖROLOJİ-1" },
  { name: "DR. EMRE BAŞARAN", branch: "NÖROLOJİ", polyclinic: "NÖROLOJİ-2" },
  { name: "DR. CANAN YÜCEL", branch: "NÖROLOJİ", polyclinic: "NÖROLOJİ-3" },
  // Ortopedi
  { name: "OP. DR. MUSTAFA ACAR", branch: "ORTOPEDİ", polyclinic: "ORTOPEDİ-1" },
  { name: "DOÇ. DR. LEYLA DEMİR", branch: "ORTOPEDİ", polyclinic: "ORTOPEDİ-2" },
  { name: "DR. SERHAT TUNÇ", branch: "ORTOPEDİ", polyclinic: "ORTOPEDİ-3" },
  // Dahiliye
  { name: "PROF. DR. NİLÜFER ÇELIK", branch: "DAHİLİYE", polyclinic: "DAHİLİYE-1" },
  { name: "DR. BURAK ÖZTÜRK", branch: "DAHİLİYE", polyclinic: "DAHİLİYE-2" },
  { name: "DR. SEMA KOÇAK", branch: "DAHİLİYE", polyclinic: "DAHİLİYE-3" },
  // Göz Hastalıkları
  { name: "PROF. DR. ALPER GÜL", branch: "GÖZ HASTALIKLARI", polyclinic: "GÖZ-1" },
  { name: "DOÇ. DR. FUNDA YILDIZ", branch: "GÖZ HASTALIKLARI", polyclinic: "GÖZ-2" },
  { name: "DR. CEM KARAHAN", branch: "GÖZ HASTALIKLARI", polyclinic: "GÖZ-3" },
];

export const mockAppointmentSlots: AppointmentSlot[] = [
  {
    id: "1",
    date: "06.05.2026",
    time: "09:00",
    polyclinic: "ANESTEZİ-1",
    doctor: "AHMET HULUSİ SELÇUK",
    status: "Uygun",
  },
  {
    id: "2",
    date: "06.05.2026",
    time: "09:30",
    polyclinic: "ANESTEZİ-1",
    doctor: "AHMET HULUSİ SELÇUK",
    status: "Uygun",
  },
  {
    id: "3",
    date: "06.05.2026",
    time: "10:00",
    polyclinic: "ANESTEZİ-1",
    doctor: "AHMET HULUSİ SELÇUK",
    status: "Uygun",
  },
  {
    id: "4",
    date: "07.05.2026",
    time: "11:00",
    polyclinic: "ANESTEZİ-1",
    doctor: "AHMET HULUSİ SELÇUK",
    status: "Uygun",
  },
  {
    id: "5",
    date: "07.05.2026",
    time: "14:30",
    polyclinic: "ANESTEZİ-1",
    doctor: "AHMET HULUSİ SELÇUK",
    status: "Uygun",
  },
];

export const symptomSuggestions: Record<string, string[]> = {
  "baş": ["NÖROLOJİ", "DAHİLİYE"],
  "göz": ["GÖZ HASTALIKLARI"],
  "kalp": ["KARDİYOLOJİ"],
  "ağrı": ["ORTOPEDİ", "DAHİLİYE", "NÖROLOJİ"],
  "nefes": ["DAHİLİYE", "KARDİYOLOJİ"],
  "eklem": ["ORTOPEDİ"],
  "baş ağrısı": ["NÖROLOJİ", "DAHİLİYE"],
  "ateş": ["DAHİLİYE"],
};