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


import "./AgendaForm.css";

function AgendaForm(props) {
  return (
    <div>
      <div>
        <Card>
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid xs={6} item>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Seleccionar Paciente</InputLabel>
                    <Select
                      label="Age"
                      variant="outlined"
                    >
                      <MenuItem >paciente</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid xs={6} item>
                  <TextField
                    label="Nombre"
                    helperText="Ingresar nombre del doctor encargado"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={6} item>
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
                  type="button"
                  onClick={props.onCancel}
                  endIcon={<CancelIcon />}
                >
                  Cancelar
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<AddCircleIcon />}
                >
                  Agregar Paciente
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
