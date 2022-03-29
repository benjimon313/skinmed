import * as React from "react";

import { Card, Grid, CardContent, TextField, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const PatientsForm = () => {
  const titleChangeHandler = () =>{
    console.log('Title changed')
  }
  return (
    <div>
      <Card>
        <CardContent>
					<form>
          <Grid container spacing={1}>
            <Grid xs={6} item>
              <TextField
              onChange={titleChangeHandler}
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
                id="address"
                label="Direccion"
                helperText="Ingresar direccion del paciente"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid xs={12} item>
              <Button 
							variant="contained" 
							color="primary"
							fullWidth
							endIcon={<AddIcon/>}>
                Agregar Paciente
              </Button>
            </Grid>
          </Grid>
					</form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientsForm;
