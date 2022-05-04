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

import "./AgendaForm.css";

function AgendaForm(props, { children }) {
  const pacientes = [
    {label: 'paciente'}, {label:'paciente2'}
  ]
  const [datePickerValue, setDatePickerValue] = useState(new Date());
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
                    
                    options={pacientes}
                    sx={{ width: 300 }}
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
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={7} item>
                  <TextField
                    label="Motivo"
                    helperText="Ingresa motivo de atencion"
                    variant="outlined"
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
