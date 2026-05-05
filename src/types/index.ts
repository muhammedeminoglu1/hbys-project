export interface Patient {
    fullName: string;
    tc: string;
    phone1: string;
    phone2: string;
  }
  
  export interface AppointmentSearch {
    hospital: string;
    branch: string;
    polyclinic: string;
    doctor: string;
    startDate: Date;
    endDate: Date;
  }
  
  export interface AppointmentSlot {
    id: string;
    date: string;
    time: string;
    polyclinic: string;
    doctor: string;
    status: "Uygun" | "Dolu";
  }
  
  export interface Doctor {
    name: string;
    branch: string;
    polyclinic: string;
  }
  
  export interface ValidationErrors {
    fullName?: string;
    tc?: string;
    phone1?: string;
    phone2?: string;
    hospital?: string;
    branch?: string;
    polyclinic?: string;
    doctor?: string;
  }