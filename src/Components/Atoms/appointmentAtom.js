import { atom } from "recoil";

export const appointmentState = atom({
  key: "appointmentState",
  default: [
    {
      id: 0,
      paciente: 'Andres Frias',
      date: '4/05/2022',
      hora: '18:55',
      doctor: 'Dr. Espinoza Iturri Rodrigo',
      motivo: 'Dolor lumbar'
    },
  ],
});
