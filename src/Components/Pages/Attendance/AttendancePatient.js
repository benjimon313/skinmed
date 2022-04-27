import React, { useEffect, useState } from "react";

import './AttendancePatient.css'

import { Card, Grid, CardContent, TextField, Button, Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


import { useRecoilState } from "recoil";
import { clientSelectedState, clientState } from "../../Atoms/clientAtom";

import { consultsState } from "../../Atoms/consultsAtom";



import MedicalServicesIcon from "@mui/icons-material/MedicalServices";



const AttendancePatient = () => {
  const [rows, setRows] = useRecoilState(clientState);
  const [consults, setConsults] = useRecoilState(consultsState);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams (queryString);
  const clientIndex = rows.findIndex((row) => row.ci === parseInt(urlParams.get('ci'), 10));
  const clientData = rows[clientIndex];

  const [nuevaAtencion, setNuevaAtencion] = useState(consults);
  const [examen,setExamen] = useState();

  const changeHandler = (text, label) => {
    let atenciones = {...nuevaAtencion};
    let atencion = atenciones[0];
    atencion = { ...atencion, id: rows.length };
    let listaExamenes = [...atencion.examenes];
    listaExamenes.push(examen);
    console.log(listaExamenes)
    label === "presion" && (atencion = { ...atencion, presion: text });
    label === "temp" && (atencion = { ...atencion, temp: text });
    label === "peso" && (atencion = { ...atencion, peso: text });
    label === "talla" && (atencion = { ...atencion, talla: text });
    label === "frecCard" && (atencion = { ...atencion, frecCard: text });
    label === "frecResp" && (atencion = { ...atencion, frecResp: text });
    label === "motivConsult" && (atencion = { ...atencion, motivConsult: text });
    label === "explFisica" && (atencion = { ...atencion, explFisica: text });
    label === "diagnostico" && (atencion = { ...atencion, diagnostico: text });
    label === "cie10" && (atencion = { ...atencion, cie10: text });
    label === "examen" && (atencion = {...atencion, examenes: listaExamenes});

    atenciones[0] = atencion;

    setNuevaAtencion(atenciones);
  };
  
  const changeExamHandler = (text, label) => {
    let nuevoExamen = {...examen};
    label === "nombre" && (nuevoExamen = {...nuevoExamen, nombre: text});
    label === "descripcion" && (nuevoExamen = {...nuevoExamen, descripcion: text});
    setExamen(nuevoExamen);
  }

  return (
    <div>
      <div className="expenses">
       <TableContainer component={Paper}>
            <Table sx={{ minWidth: 250 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">CI</TableCell>
                  <TableCell align="center">Nombre</TableCell>
                  <TableCell align="center">Apellido</TableCell>
                  <TableCell align="center">Telefono</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{clientData.ci}</TableCell>
                  <TableCell align="center">{clientData.firstName}</TableCell>
                  <TableCell align="center">{clientData.lastName}</TableCell>
                  <TableCell align="center">{clientData.phone}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          </div>
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
                  <TextField
                    sx={{ m: 1 }}
                    id="cie10"
                    label="CIE-10"
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
            <h2>Planes de tratamiento: </h2>
            <Box sx={{ p: 2, m: 1, border: "1px solid grey" }}></Box>
            <h2>Examenes Complementarios </h2>
            <Box sx={{ p: 2, m: 1, border: "1px solid grey" }}>
              <TextField
                sx={{ m: 1 }}
                id="examenes"
                label="Agregar Examenes Complementarios"
                onChange = {(event)=>changeExamHandler(event.target.value, "nombre")}
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                    sx={{ m: 1 }}
                    id="detalle-examen"
                    label="Detalle en Solicitud del Examen"
                    onChange = {(event)=>changeExamHandler(event.target.value, "descripcion")}
                    variant="outlined"
                    required
                    multiline
                    rows={4}
                    fullWidth
                  />
              <Button
                variant="contained"
                color="primary"
                onClick={()=>changeHandler("","examen")}
                endIcon={<MedicalServicesIcon />}
              >
                Agregar Examen
              </Button>
            </Box>
            <h2>Analisis de Laboratorio </h2>
            <Box sx={{ p: 2, m: 1, border: "1px solid grey" }}>
            <TextField
                sx={{ m: 1 }}
                id="analisis"
                label="Agregar Analisis de Laboratorio"
                variant="outlined"
                fullWidth
              />
              <TextField
                    sx={{ m: 1 }}
                    id="exploracion-fisica"
                    label="Detalle en Solicitud de Laboratorio"
                    variant="outlined"
                    required
                    multiline
                    rows={4}
                    fullWidth
                  />
            </Box>
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
    </div>
  );
};

export default AttendancePatient;
