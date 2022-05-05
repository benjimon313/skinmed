import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Attendance from "./Attendance/Attendance";
import Patients from "./Patients/Patients";
import Agenda from "./Agenda";
import SingUp from "./SingUp";
import PatientsAdd from "./Patients/PatientsAdd";
import PatientsInfo from "./Patients/PatientsInfo";
import PatientsTableSort from "./Patients/PatientsTableSort";
import Procedures from "./Procedures/Procedures";
import HomeScrean from "./HomeScrean";
import AttendancePatient from "./Attendance/AttendancePatient";
import AttendanceHistory from "./Attendance/AttendanceHistory";
import AttendanceDiary from "./Attendance/AttendanceDiary";
import FacturaPDF from "./Attendance/FacturaPDF";
import AttendancePDF from "./Attendance/AttendancePDF";
import { useRecoilValue } from "recoil";
import { activeUserState } from "../Atoms/userAtom";
import Login from "./Login";

function Principal() {
  const activeUser = useRecoilValue(activeUserState);
  console.log(activeUser, !activeUser);
  if (activeUser) {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomeScrean />} />
          <Route path="/iniciar-consulta" element={<Attendance />} />
          <Route path="/pacientes" element={<Patients />} />
          <Route path="/procedimientos" element={<Procedures />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/agregar-paciente" element={<PatientsAdd />} />
          <Route path="/agregar-info" element={<PatientsInfo />} />
          <Route path="/lista-paciente" element={<PatientsTableSort />} />
          <Route path="/atencion-medica" element={<AttendancePatient />} />
          <Route path="/registros-diarios" element={<AttendanceDiary />} />
          <Route path="/historial-clinico" element={<AttendanceHistory />} />
          <Route path="/factura-pdf" element={<FacturaPDF />} />
          <Route path="/registros-pdf" element={<AttendancePDF />} />
        </Routes>
      </Router>
    );
  } else {
      return <Login />
  }
}

export default Principal;
