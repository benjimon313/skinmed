import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Attendance from './Components/Pages//Attendance/Attendance';
import Patients from './Components/Pages/Patients/Patients';
import Agenda from './Components/Pages/Agenda';
import SingUp from './Components/Pages/SingUp';
import PatientsAdd from './Components/Pages/Patients/PatientsAdd';
import PatientsInfo from './Components/Pages/Patients/PatientsInfo';
import PatientsTableSort from './Components/Pages/Patients/PatientsTableSort';
import Procedures from './Components/Pages/Procedures/Procedures';
import HomeScrean from './Components/Pages/HomeScrean';

import './App.css';
import { RecoilRoot } from 'recoil';
import AttendancePatient from './Components/Pages/Attendance/AttendancePatient';
import AttendanceHistory from './Components/Pages/Attendance/AttendanceHistory';







function App() {
  return (
    <RecoilRoot>
    <Router >
      <Navbar />
      <Routes>
        <Route path='/home'  element={<HomeScrean />}/>
        <Route path='/iniciar-consulta'  element={<Attendance />}/>
        <Route path='/pacientes'  element={<Patients/>}/>
        <Route path='/procedimientos'  element={<Procedures/>}/>
        <Route path='/agenda'  element={<Agenda/>}/>
        <Route path='/iniciar-sesion'  element={<SingUp/>}/>
        <Route path='/agregar-paciente'  element={<PatientsAdd/>}/>
        <Route path='/agregar-info'  element={<PatientsInfo/>}/>
        <Route path='/lista-paciente'  element={<PatientsTableSort/>}/>
        <Route path='/atencion-medica'  element={<AttendancePatient/>}/>

        <Route path='/historial-clinico'  element={<AttendanceHistory/>}/>
      </Routes>
    </Router>
    </RecoilRoot>
  );
}

export default App;
