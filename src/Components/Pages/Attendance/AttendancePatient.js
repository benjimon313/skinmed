import React, { useEffect, useState } from "react";

import "./AttendancePatient.css";

import { Card, Grid, CardContent, TextField, Button, Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";

import Select from "@mui/material/Select";

import "./AttendanceHistory.css";

import { useRecoilState } from "recoil";
import { clientSelectedState, clientState } from "../../Atoms/clientAtom";

import { attendanceState } from "../../Atoms/attendanceAtom";
import { proceduresState } from "../../Atoms/proceduresAtom";

import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

const AttendancePatient = () => {
  const [rows, setRows] = useRecoilState(clientState);
  const [consults, setConsults] = useRecoilState(attendanceState);
  const [procedures, setProcedures] = useRecoilState(proceduresState);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const clientIndex = rows.findIndex(
    (row) => row.ci === parseInt(urlParams.get("ci"), 10)
  );
  const clientData = rows[clientIndex];

  const [nuevaAtencion, setNuevaAtencion] = useState({
    ci: parseInt(urlParams.get("ci"), 10),
    planTrat: "",
    presion: "",
    date: new Date(),
    temp: "",
    peso: "",
    talla: "",
    frecCard: "",
    frecResp: "",
    motivConsult: "",
    explFisica: "",
    diagnostico: "",
    cie10: "",
    procedimientoMedico: [],
    examenes: [],
    labs: [],
    receta: [],
  });
  const [procedimiento, setProcedimiento] = useState();
  const [examen, setExamen] = useState();
  const [laboratorio, setLaboratorio] = useState();
  const [recetas, setRecetas] = useState();

  const changeHandler = (text, label) => {
    let atenciones = { ...nuevaAtencion };
    atenciones = { ...atenciones, id: rows.length };
    let listaProcedimientos = [...atenciones.procedimientoMedico];
    let listaExamenes = [...atenciones.examenes];
    let listaLaboratorio = [...atenciones.labs];
    let listaRecetas = [...atenciones.receta];
    listaProcedimientos.push(procedimiento);
    listaExamenes.push(examen);
    listaLaboratorio.push(laboratorio);
    listaRecetas.push(recetas);

    label === "presion" && (atenciones = { ...atenciones, presion: text });
    label === "temp" && (atenciones = { ...atenciones, temp: text });
    label === "peso" && (atenciones = { ...atenciones, peso: text });
    label === "talla" && (atenciones = { ...atenciones, talla: text });
    label === "frecCard" && (atenciones = { ...atenciones, frecCard: text });
    label === "frecResp" && (atenciones = { ...atenciones, frecResp: text });
    label === "motivConsult" &&
      (atenciones = { ...atenciones, motivConsult: text });
    label === "explFisica" &&
      (atenciones = { ...atenciones, explFisica: text });
    label === "diagnostico" &&
      (atenciones = { ...atenciones, diagnostico: text });
    label === "cie10" && (atenciones = { ...atenciones, cie10: text });
    label === "procedimiento" && (atenciones = { ...atenciones, procedimientoMedico: [...listaProcedimientos] });
    label === "examen" &&
      (atenciones = { ...atenciones, examenes: [...listaExamenes] });
    label === "laboratorio" &&
      (atenciones = { ...atenciones, labs: [...listaLaboratorio] });
    label === "receta" &&
      (atenciones = { ...atenciones, receta: [...listaRecetas] });
    setNuevaAtencion(atenciones);
  };

  const changeProcedureHandler = (value) => {
    const nuevoId = nuevaAtencion.procedimientoMedico.length;
    const nuevoProcedimiento = procedures[value];
    setProcedimiento({ id: nuevoId, name: nuevoProcedimiento.name, price: nuevoProcedimiento.price });
  };
  const changeExamHandler = (text, label) => {
    let nuevoExamen = { ...examen };
    label === "nombre" && (nuevoExamen = { ...nuevoExamen, nombre: text });
    label === "descripcion" &&
      (nuevoExamen = { ...nuevoExamen, descripcion: text });
    setExamen(nuevoExamen);
  };
  const changeLabsHandler = (text, label) => {
    let nuevoLab = { ...laboratorio };
    label === "nombre" && (nuevoLab = { ...nuevoLab, nombre: text });
    label === "descripcion" && (nuevoLab = { ...nuevoLab, descripcion: text });
    setLaboratorio(nuevoLab);
  };
  const changeRecetaHandler = (text, label) => {
    let nuevaReceta = { ...recetas };
    label === "nombre" && (nuevaReceta = { ...nuevaReceta, nombre: text });
    label === "formaAdmin" &&
      (nuevaReceta = { ...nuevaReceta, descripcion: text });
    label === "dosific" &&
      (nuevaReceta = { ...nuevaReceta, descripcion: text });
    label === "indicaciones" &&
      (nuevaReceta = { ...nuevaReceta, descripcion: text });
    setRecetas(nuevaReceta);
  };

  const addHandler = () => {
    let listaConsultas = [...consults];
    listaConsultas.push(nuevaAtencion);
    console.log(listaConsultas);
    setConsults(listaConsultas);
  };

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
                <TableCell align="center">{clientData?.ci}</TableCell>
                <TableCell align="center">{clientData?.firstName}</TableCell>
                <TableCell align="center">{clientData?.lastName}</TableCell>
                <TableCell align="center">{clientData?.phone}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item xs={12} sm={7}>
              <Box sx={{ m: 1, p: 2, border: "1px solid grey" }}>
                <h3>Registro de Consulta: </h3>
                <Grid item xs={12} sm={12}>
                  <Grid item xs={10} sm={8}>
                    <TextField
                      onChange={(event) =>
                        changeHandler(event.target.value, "presion")
                      }
                      sx={{ m: 1 }}
                      id="presion"
                      label="Presion"
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      onChange={(event) =>
                        changeHandler(event.target.value, "temp")
                      }
                      sx={{ m: 1 }}
                      id="temperatura"
                      label="Temperatura"
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      onChange={(event) =>
                        changeHandler(event.target.value, "peso")
                      }
                      sx={{ m: 1 }}
                      id="peso"
                      label="Peso"
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      onChange={(event) =>
                        changeHandler(event.target.value, "talla")
                      }
                      sx={{ m: 1 }}
                      id="talla"
                      label="Talla"
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      onChange={(event) =>
                        changeHandler(event.target.value, "frecCard")
                      }
                      sx={{ m: 1 }}
                      id="frec-cardiaca"
                      label="Frec. Cardiaca"
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      onChange={(event) =>
                        changeHandler(event.target.value, "frecResp")
                      }
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
                      onChange={(event) =>
                        changeHandler(event.target.value, "motivConsult")
                      }
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
                      onChange={(event) =>
                        changeHandler(event.target.value, "explFisica")
                      }
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
                      onChange={(event) =>
                        changeHandler(event.target.value, "diagnostico")
                      }
                      id="diagnostico"
                      label="Diagnostico"
                      variant="outlined"
                      required
                      multiline
                      rows={4}
                      fullWidth
                    />
                    <FormControl fullWidth>
                      <InputLabel sx={{ m: 1 }}>CIE-10</InputLabel>
                      <Select
                        onChange={(event) =>
                          changeHandler(event.target.value, "cie10")
                        }
                        sx={{ m: 1 }}
                        label="CIE-10"
                        fullWidth
                      >
                        <MenuItem>Ten</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ p: 2, m: 1, border: "1px solid grey" }}>
                <Grid item xs={12} sm={11}>
                  <h3>Receta Medica: </h3>
                  <TextField
                    sx={{ m: 1 }}
                    id="receta"
                    label="Nombre"
                    onChange={(event) =>
                      changeRecetaHandler(event.target.value, "nombre")
                    }
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    sx={{ m: 1 }}
                    id="receta-administracion"
                    label="Forma de Administracion"
                    onChange={(event) =>
                      changeRecetaHandler(event.target.value, "formaAdmin")
                    }
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    sx={{ m: 1 }}
                    id="receta-dosificacion"
                    label="Dosificacion"
                    onChange={(event) =>
                      changeRecetaHandler(event.target.value, "dosific")
                    }
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    sx={{ m: 1 }}
                    id="receta-indicaciones"
                    label="Indicaciones"
                    onChange={(event) =>
                      changeRecetaHandler(event.target.value, "indicaciones")
                    }
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                  />
                  <div className="new-expense__actions">
                    <Button
                      variant="contained"
                      color="primary"
                      // CAMBIAR A RECETA
                      onClick={() => changeHandler("", "receta")}
                      endIcon={<MedicalServicesIcon />}
                    >
                      Agregar Receta
                    </Button>
                  </div>
                </Grid>
              </Box>
            </Grid>

            <Grid item xs={12} sm={5}>
              <Box sx={{ p: 2, m: 1, border: "1px solid grey" }}>
                <h3>Planes de tratamiento: </h3>
                <FormControl fullWidth sx={{ m: 2, p:1}}>
                  <InputLabel id="demo-simple-select-label">Procedimiento Medico</InputLabel>
                  <Select
                  
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Procedimiento Medico"
                    onChange={(event) => 
                      changeProcedureHandler(event.target.value)
                    }
                  >

                    {procedures.map((procedure) =>
                      <MenuItem value={procedure?.id}>{procedure?.name}</MenuItem>
                    )}
                  </Select>
                </FormControl>
                <div className="new-expense__actions">
                    <Button
                      variant="contained"
                      color="primary"
                      // CAMBIAR A RECETA
                      onClick={() => changeHandler("", "procedimiento")}
                      endIcon={<MedicalServicesIcon />}
                    >
                      Agregar Procedimiento
                    </Button>
                  </div>
              </Box>

              <Box sx={{ p: 2, m: 1, border: "1px solid grey" }}>
                <h3>Examenes Complementarios: </h3>
                <TextField
                  sx={{ m: 1 }}
                  id="examenes"
                  label="Agregar Examenes Complementarios"
                  onChange={(event) =>
                    changeExamHandler(event.target.value, "nombre")
                  }
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  sx={{ m: 1 }}
                  id="detalle-examen"
                  label="Detalle en Solicitud del Examen"
                  onChange={(event) =>
                    changeExamHandler(event.target.value, "descripcion")
                  }
                  variant="outlined"
                  required
                  multiline
                  rows={4}
                  fullWidth
                />
                <div className="new-expense__actions">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => changeHandler("", "examen")}
                    endIcon={<MedicalServicesIcon />}
                  >
                    Agregar Examen
                  </Button>
                </div>
              </Box>

              <Box sx={{ p: 2, m: 1, border: "1px solid grey" }}>
                <h3>Analisis de Laboratorio </h3>
                <TextField
                  sx={{ m: 1 }}
                  id="analisis"
                  label="Agregar Analisis de Laboratorio"
                  onChange={(event) =>
                    changeLabsHandler(event.target.value, "nombre")
                  }
                  variant="outlined"
                  fullWidth
                />

                <TextField
                  sx={{ m: 1 }}
                  id="exploracion-fisica"
                  label="Detalle en Solicitud de Laboratorio"
                  onChange={(event) =>
                    changeLabsHandler(event.target.value, "descripcion")
                  }
                  variant="outlined"
                  required
                  multiline
                  rows={4}
                  fullWidth
                />
                <div className="new-expense__actions">
                  <Button
                    variant="contained"
                    color="primary"
                    // CAMBIAR A LABORATORIO
                    onClick={() => changeHandler("", "laboratorio")}
                    endIcon={<MedicalServicesIcon />}
                  >
                    Agregar Analisis
                  </Button>
                </div>
              </Box>
            </Grid>
          </Grid>
          <Button
            onClick={addHandler}
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
