import React from "react";

import { Card, Grid, CardContent, TextField, Button, Box } from "@mui/material";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

const AttendancePatient = () => {
  return (
    <Card>
      <CardContent>
        <h2>Registro de Consulta: </h2>
        <Grid container>
          <Grid item xs={12} sm={7}>
            <Box sx={{ m: 1, p: 2, border: "1px solid grey" }}>
              <Grid item xs={12} sm={12}>
                <Grid item xs={10} sm={8}>
                  <TextField
                    sx={{ m: 1 }}
                    id="presion"
                    label="Presion"
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    sx={{ m: 1 }}
                    id="temperatura"
                    label="Temperatura"
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    sx={{ m: 1 }}
                    id="peso"
                    label="Peso"
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    sx={{ m: 1 }}
                    id="talla"
                    label="Talla"
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    sx={{ m: 1 }}
                    id="frec-cardiaca"
                    label="Frec. Cardiaca"
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    sx={{ m: 1 }}
                    id="frec-resoiratoria"
                    label="Frec. Respiratoria"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={11}>
                  <TextField
                    sx={{ m: 1 }}
                    id="motivo-consulta"
                    label="Motivo Consulta"
                    variant="outlined"
                    required
                    multiline
                    rows={4}
                    fullWidth
                  />
                  <TextField
                    sx={{ m: 1 }}
                    id="exploracion-fisica"
                    label="Exploracion Fisica"
                    variant="outlined"
                    required
                    multiline
                    rows={4}
                    fullWidth
                  />
                  <TextField
                    sx={{ m: 1 }}
                    id="diagnostico"
                    label="Diagnostico"
                    variant="outlined"
                    required
                    multiline
                    rows={4}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>
            <h2>Receta Medica: </h2>
            <Box sx={{ p: 2, m: 1, border: "1px solid grey" }}>
              <Grid item xs={10} sm={11}>
                <TextField
                  sx={{ m: 1 }}
                  id="receta"
                  label="Receta Medica"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  sx={{ m: 1 }}
                  id="receta-administracion"
                  label="Forma de Administracion"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  sx={{ m: 1 }}
                  id="receta-dosificacion"
                  label="Dosificacion"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  sx={{ m: 1 }}
                  id="receta-indicaciones"
                  label="Indicaciones"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} sm={5}>
            <Box sx={{ p: 2, m: 1, border: "1px solid grey" }}>1</Box>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          endIcon={<MedicalServicesIcon />}
        >
          Agregar Consulta
        </Button>
      </CardContent>
    </Card>
  );
};

export default AttendancePatient;
