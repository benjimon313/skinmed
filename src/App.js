import React, {useState} from 'react';
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
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import esLocale from 'date-fns/locale/es'


import './App.css';

import { RecoilRoot } from 'recoil';
import AttendancePatient from './Components/Pages/Attendance/AttendancePatient';
import AttendanceHistory from './Components/Pages/Attendance/AttendanceHistory';

import Login from './Components/Pages/Login';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import AttendanceDiary from './Components/Pages/Attendance/AttendanceDiary';
import FacturaPDF from './Components/Pages/Attendance/FacturaPDF';
import AttendancePDF from './Components/Pages/Attendance/AttendancePDF';



function App() {
  const [token, setToken] = useState();

  if(!token) {
    // return <Login setToken={setToken} />
  }

  return (
    <LocalizationProvider locale={esLocale} dateAdapter={AdapterDateFns}>
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
        <Route path='/registros-diarios'  element={<AttendanceDiary/>}/>
        <Route path='/historial-clinico'  element={<AttendanceHistory/>}/>
        <Route path='/factura-pdf'  element={<FacturaPDF/>}/>
        <Route path='/registros-pdf'  element={<AttendancePDF/>}/>
      </Routes>
    </Router>
    </RecoilRoot>
    </LocalizationProvider>
  );
}

export default App;
