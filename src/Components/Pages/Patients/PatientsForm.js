import * as React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { clientState } from "../../Atoms/clientAtom";

import { Card, Grid, CardContent, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";

import "./PatientsForm.css";

const PatientsForm = (props) => {
  const [rows, setRows] = useRecoilState(clientState);

  const [nuevoPaciente, setNuevoPaciente] = useState({});

  const changeHandler = (text, label) => {
    let paciente = nuevoPaciente;
    paciente = { ...paciente, id: rows.length };
    label === "ci" && (paciente = { ...paciente, ci: text });
    label === "firstName" && (paciente = { ...paciente, firstName: text });
    label === "lastName" && (paciente = { ...paciente, lastName: text });
    label === "age" && (paciente = { ...paciente, age: text });
    label === "phone" && (paciente = { ...paciente, phone: text });
    label === "address" && (paciente = { ...paciente, address: text });
    setNuevoPaciente(paciente);
  };

  const addHandler = () => {
    let listaPacientes = [...rows];
    listaPacientes.push(nuevoPaciente);
    setRows(listaPacientes);
    console.log(nuevoPaciente);
  };
  
  return (
    <div>
      <Card>
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Grid xs={6} item>
                <TextField
                  onChange={(event) =>
                    changeHandler(event.target.value, "firstName")
                  }
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
                <TextField
                  onChange={(event) => changeHandler(event.target.value, "age")}
                  id="age"
                  label="Edad"
                  helperText="Ingresar edad del paciente"
                  variant="outlined"
                  fullWidth
                  required
                />
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
