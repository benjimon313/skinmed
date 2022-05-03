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

  const [nuevoPaciente, setNuevoPaciente] = useState({});

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
    paciente = { ...paciente, id: rows.length };
    paciente = { ...paciente, age: `${day}/${month}/${year}` }
    label === "ci" && (paciente = { ...paciente, ci: text });
    label === "firstName" && (paciente = { ...paciente, firstName: text });
    label === "lastName" && (paciente = { ...paciente, lastName: text });
    label === "phone" && (paciente = { ...paciente, phone: text });
    label === "address" && (paciente = { ...paciente, address: text });
    setNuevoPaciente(paciente);
  };

  const addHandler = () => {
    let listaPacientes = [...rows];
    listaPacientes.push(nuevoPaciente);
    console.log(nuevoPaciente)
    setRows(listaPacientes);
  };
  const validate = (event) => {
    const errors = {};
    if (!event.target.value.firstName) {
      errors.firstName = "ingrese un nombre";
    }
  };

  return (
    <div>
      <Card>
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Grid xs={6} item>
                <TextField
                  onChange={(event) => {
                    changeHandler(event.target.value, "firstName");
                    validate(event);
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
