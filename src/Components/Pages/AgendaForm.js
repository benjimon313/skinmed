import React from "react";
import { useState, useEffect } from "react";
import { Card, Grid, CardContent, TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Autocomplete from '@mui/material/Autocomplete';



import { useRecoilState, useRecoilValue } from "recoil";

import "./AgendaForm.css";
import { appointmentState } from "../Atoms/appointmentAtom";
import {clientState} from "../Atoms/clientAtom"

function AgendaForm(props) {
  
  const[nuevaAgenda, setNuevaAgenda] = useState({paciente:"", date:"", hora:"", doctor:"", motivo:""})
  const clientes = useRecoilValue(clientState)
  const [rows, setRows] = useRecoilState(appointmentState)
  const [datePickerValue, setDatePickerValue] = useState(new Date());
  const [doctor, serDoctor] = useState()
  const [motivo, setMotivo] = useState()

  const pacientess = [
    {label: 'paciente'}, {label:'paciente2'}
  ]
  const changeHandler = (text, label) => {
    let agendas = nuevaAgenda;
    agendas = { ...agendas, id: rows.length };
    label === "paciente" && (agendas = { ...agendas, paciente: text });
    label === "doctor" && (agendas = { ...agendas, doctor: text });
    label === "motivo" && (agendas = { ...agendas, motivo: text });
    setNuevaAgenda(agendas);
    console.log(text)
  };

  

  const addHandler = () => {
    let appointment = [...rows];
    let agendas = nuevaAgenda;
    agendas = { ...agendas, date: datePickerValue.getDate() + "/" + (datePickerValue.getMonth()+1) + "/" + datePickerValue.getFullYear() };
    agendas = { ...agendas, hora: datePickerValue.getHours() + ":" + datePickerValue.getMinutes() };
    
    appointment.push(agendas);
    setRows(appointment);
  };

  
  console.log(datePickerValue);
  return (
    <div>
      <div>
        <Card>
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid xs={6} item>
                  <Autocomplete
                    disablePortal
                    getOptionLabel={(option) => option.firstName + " " + option.lastName}
                    options={clientes}
                    sx={{ width: 300 }}
                    onChange={(event) => {console.log(event)
                      changeHandler(event.target.textContent, "paciente")}
                    }
                    renderInput={(params) => (
                      <TextField {...params} label="Seleccionar pacientes" />
                    )}
                  />
                </Grid>
                <Grid xs={6} item>
                  <DateTimePicker
                    label="Elegir Fecha y Hora "
                    value={datePickerValue}
                    onChange={setDatePickerValue}
                    renderInput={(params) => <TextField {...params} />}
                    
                  />
                </Grid>
                <Grid xs={6} item>
                  <TextField
                    label="Doctor encargado"
                    helperText="Ingresar nombre del doctor encargado"
                    variant="outlined"
                    onChange={(event) =>
                      changeHandler(event.target.value, "doctor")
                    }
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={7} item>
                  <TextField
                    label="Motivo"
                    helperText="Ingresa motivo de atencion"
                    variant="outlined"
                    onChange={(event) =>
                      changeHandler(event.target.value, "motivo")
                    }
                    fullWidth
                    multiline
                    rows={3}
                    required
                  />
                </Grid>
              </Grid>
              <div className="new-expense__actions">
                <Button
                  className="blue-button"
                  type="button"
                  onClick={props.onCancel}
                  endIcon={<CancelIcon />}
                >
                  Cancelar
                </Button>
                <Button
                  className="blue-button"
                  color="primary"
                  endIcon={<AddCircleIcon />}
                  onClick={addHandler}
                >
                  Agregar CITA
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AgendaForm;
