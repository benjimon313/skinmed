import * as React from "react";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { clientState } from "../../Atoms/clientAtom";

import { Card, Grid, CardContent, TextField, Button, Select } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";

import "./PatientsForm.css";
import { getYears, getMonths, getDays } from "../funciones";

const PatientsForm = (props) => {
  const [rows, setRows] = useRecoilState(clientState);

  const [nuevoPaciente, setNuevoPaciente] = useState({ci:"",firstName:"",lastName:"", phone:"", age:"", address:""});
  const [isEmptyCI, SetIsEmptyCI] = useState(false);
  const [isEmptyFirstName, SetIsEmptyFirstName] = useState(false);
  const [isEmptyLastName, SetIsEmptyLastName] = useState(false);
  const [isEmptyPhone, SetIsEmptyPhone] = useState(false);
  const [isEmptyAge, SetIsEmptyAge] = useState(false);
  const [isEmptyAddress, SetIsEmptyAddress] = useState(false);


  const [day, setDay] = useState("");
  const [days, setDays] = useState([]);
  const [year, setYear] = useState("");
  const [years, setYears] = useState([]);
  const [month, setMonth] = useState("");
  const [months, setMonths] = useState([]);

  useEffect(() => {
    setYears(getYears());
    setMonths(getMonths());
    setDays(getDays());
}, []);
  const changeHandler = (text, label) => {
    let paciente = nuevoPaciente;
    console.log(day,month,year)
    paciente = { ...paciente, id: rows.length };
    paciente = { ...paciente, age: `${day}/${month}/${year}` }
    label === "ci" && (paciente = { ...paciente, ci: text });
    label === "firstName" && (paciente = { ...paciente, firstName: text });
    label === "lastName" && (paciente = { ...paciente, lastName: text });
    label === "phone" && (paciente = { ...paciente, phone: text });
    label === "address" && (paciente = { ...paciente, address: text });
    if(label === "ci" && (text.length <= 0 || !isNumeric(text))) SetIsEmptyCI(true)
    if(label === "ci" && (text.length > 0 && isNumeric(text))) SetIsEmptyCI(false)
    if(label === "firstName" && (text.length <= 0 || isNumeric(text))) SetIsEmptyFirstName(true)
    if(label === "firstName" && (text.length > 0 && !isNumeric(text))) SetIsEmptyFirstName(false)
    if(label === "lastName" && (text.length <= 0 || isNumeric(text))) SetIsEmptyLastName(true)
    if(label === "lastName" && (text.length > 0 && !isNumeric(text))) SetIsEmptyLastName(false)
    if(label === "phone" && (text.length <= 0 || !isNumeric(text))) SetIsEmptyPhone(true)
    if(label === "phone" && (text.length > 0 && isNumeric(text))) SetIsEmptyPhone(false)
    if(label === "address" && (text.length <= 0)) SetIsEmptyAddress(true)
    if(label === "address" && (text.length > 0)) SetIsEmptyAddress(false)
    setNuevoPaciente(paciente);
  };
  function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

function isEmpty() {
  console.log(nuevoPaciente);
  if (nuevoPaciente.ci === "" || 
      nuevoPaciente.firstName === "" || 
      nuevoPaciente.lastName === "" || 
      nuevoPaciente.phone === "" || 
      nuevoPaciente.age === "" || 
      nuevoPaciente.address === "" ){
    return(true)
  }else{
    return(false)
  }
}
  const addHandler = () => {


    if(!isEmpty())
    {let listaPacientes = [...rows];
    listaPacientes.push(nuevoPaciente);
    
    setRows(listaPacientes);} else{console.log("uwu")}
  };
  
  return (
    <div>
      <Card>
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Grid xs={6} item>
                <TextField
                  error={isEmptyFirstName} 
                  onChange={(event) => {
                    changeHandler(event.target.value, "firstName");
                    
                  }}
                  id="firstname"
                  label="Nombres"
                  helperText="Ingresar nombres del paciente"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                error={isEmptyLastName} 
                  onChange={(event) =>
                    changeHandler(event.target.value, "lastName")
                  }
                  id="lastname"
                  label="Apellidos"
                  helperText="Ingresar apellidos del paciente"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                error={isEmptyCI} 
                  onChange={(event) => changeHandler(event.target.value, "ci")}
                  id="ci"
                  label="CI"
                  helperText="Ingresar CI del paciente"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              
              <Grid xs={6} item>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-400">Fecha de Nacimiento</span>
                  <div className="flex justify-evenly">
                    <select
                      id="month"
                      required
                      className="p-3 text-white bg-black"
                      onChange={() => {
                        const select = document.getElementById("month");
                        const option = select.options[select.selectedIndex];
                        setMonth(option.value);
                        setYears(getYears(option.value, day));
                        setDays(getDays(option.value, year));
                        changeHandler()
                      }}
                    >
                      <option value="" hidden>
                        Mes
                      </option>
                      {months.map((month) => (
                        <option key={month.value} value={month.value}>
                          {month.name}
                        </option>
                      ))}
                    </select>
                    <select
                      id="day"
                      required
                      className="p-3 text-white bg-black"
                      onChange={() => {
                        const select = document.getElementById("day");
                        const option = select.options[select.selectedIndex];
                        setDay(option.value);
                        setYears(getYears(month, option.value));
                        setMonths(getMonths(option.value, year));
                        changeHandler()
                      }}
                    >
                      <option value="" hidden>
                        Dia
                      </option>
                      {days.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                    <select
                      id="year"
                      required
                      className="p-3 text-white bg-black"
                      onChange={() => {
                        const select = document.getElementById("year");
                        const option = select.options[select.selectedIndex];
                        setYear(option.value);
                        setDays(getDays(month, option.value));
                        setMonths(getMonths(day, option.value));
                        changeHandler()
                      }}
                    >
                      <option value="" hidden>
                        Año
                      </option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </Grid>
              <Grid xs={6} item>
                <TextField
                error={isEmptyPhone}
                  onChange={(event) =>
                    changeHandler(event.target.value, "phone")
                  }
                  id="phone"
                  label="Telefono"
                  helperText="Ingresar telefono del paciente"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                error={isEmptyAddress} 
                  onChange={(event) =>
                    changeHandler(event.target.value, "address")
                  }
                  id="address"
                  label="Direccion"
                  helperText="Ingresar direccion del paciente"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
            <div className="new-expense__actions">
              <Button
                type="button"
                onClick={props.onCancel}
                endIcon={<CancelIcon />}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={addHandler}
                endIcon={<AddCircleIcon />}
              >
                Agregar Paciente
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientsForm;
