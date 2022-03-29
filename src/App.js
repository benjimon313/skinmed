import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Attendance from './Components/Pages/Attendance';
import Patients from './Components/Pages/Patients/Patients';
import Billing from './Components/Pages/Billing';
import SingUp from './Components/Pages/SingUp';
import PatientsAdd from './Components/Pages/Patients/PatientsAdd';
import PatientsInfo from './Components/Pages/Patients/PatientsInfo';
import PatientsTable from './Components/Pages/Patients/PatientsTable';

import './App.css';




function App() {
  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path='/iniciar-consulta'  element={<Attendance />}/>
        <Route path='/pacientes'  element={<Patients/>}/>
        <Route path='/facturacion'  element={<Billing/>}/>
        <Route path='/iniciar-sesion'  element={<SingUp/>}/>
        <Route path='/agregar-paciente'  element={<PatientsAdd/>}/>
        <Route path='/agregar-info'  element={<PatientsInfo/>}/>
        <Route path='/lista-paciente'  element={<PatientsTable/>}/>
      </Routes>
    </Router>
  );
}

export default App;
