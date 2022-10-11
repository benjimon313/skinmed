import React, { useEffect, useState } from "react";

import { Card, Grid, CardContent, TextField, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EditIcon from "@mui/icons-material/Edit";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useRecoilState } from "recoil";
import { clientSelectedState, clientState } from "../../Atoms/clientAtom";
import { attendanceState } from "../../Atoms/attendanceAtom";
import { CarCrash } from "@mui/icons-material";

import { CSVLink, CSVDownload } from "react-csv";
import "./AttendanceHistory.css";
import FacturaPDF from "./FacturaPDF";

import { Document, Page, Text, View, PDFDownloadLink } from "react-pdf";

const AttendanceHistory = () => {
  const [rows, setRows] = useRecoilState(clientState);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const pacientCi = urlParams.get("ci");
  const pacientsAttendanceList = [];
  const clientIndex = rows.findIndex(
    (row) => row.ci === parseInt(urlParams.get("ci"), 10)
  );
  const clientData = rows[clientIndex];

  const [attendance, setAttendance] = useRecoilState(attendanceState);

  const [attendanceByCI, setAttendanceByCI] = useState();

  const clientIndexData = attendance.findIndex(
    (attendance) => attendance.ci === parseInt(urlParams.get("ci"), 10)
  );
  const clientAttendanceData = attendance[clientIndexData];
  const clientReceta = clientAttendanceData.receta;

  function getAttendanceByCI() {
    for (let i = 0; i < attendance.length; i++) {
      console.log(
        attendance[i].ci,
        parseInt(pacientCi, 10),
        pacientsAttendanceList
      );
      if (attendance[i].ci === parseInt(pacientCi, 10)) {
        pacientsAttendanceList.push(attendance[i]);
      }
    }
    setAttendanceByCI(pacientsAttendanceList);
  }

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //" ","Atencion Medica","Motivo Consulta", "Exploracion Fisica", "Diagnostico",
  //"Receta Medica", "Examen Complementario", "Analisis de Laboratorio"][clientAttendanceData.explFisica]
  const csvData = [
    {
      ci: clientData.ci,
      name: clientData.firstName,
      last: clientData.lastName,
      phone: clientData.phone,
      age: clientData.age,

      consult: clientAttendanceData.id,
      motiv: clientAttendanceData.motivConsult,
      explfis: clientAttendanceData.explFisica,
      diagn: clientAttendanceData.diagnostico,
      presion: clientAttendanceData.presion,
      temperatura: clientAttendanceData.temp,
      peso: clientAttendanceData.peso,
      talla: clientAttendanceData.talla,
      freccar: clientAttendanceData.frecCard,
      frecres: clientAttendanceData.frecResp,

      recetnom: clientAttendanceData.receta[0].nombre,
      recetadm: clientAttendanceData.receta[0].formaAdmin,
      recetdos: clientAttendanceData.receta[0].dosific,
      recetind: clientAttendanceData.receta[0].indicaciones,

      exmcpl: clientAttendanceData.examenes[0].nombre,
      descexam: clientAttendanceData.examenes[0].descripcion,

      anal: clientAttendanceData.labs[0].nombre,
      descnal: clientAttendanceData.labs[0].descripcion,
    },
  ];

  const headersCsv = [
    { label: "Atencion Medica", key: "info" },
    { label: "Carnet de Identidad", key: "ci" },
    { label: "Nombre", key: "name" },
    { label: "Apellido", key: "last" },
    { label: "Telefono", key: "phone" },
    { label: "Fecha de Nacimiento", key: "age" },

    { label: "Presion ", key: "presion" },
    { label: "Temperatura", key: "temperatura" },
    { label: "Peso ", key: "peso" },
    { label: "Talla ", key: "talla" },
    { label: "Frecuencia Cardiaca ", key: "freccar" },
    { label: "Frecuencia Respiratoria ", key: "frecres" },
    { label: "Motivo Consulta", key: "motiv" },
    { label: "Exploracion Fisica", key: "explfis" },
    { label: "Diagnostico", key: "diagn" },

    { label: "Nombre Receta", key: "recetnom" },
    { label: "Forma de Administracion", key: "recetadm" },
    { label: "Dosificacion", key: "recetdos" },
    { label: "Indicaciones", key: "recetind" },

    { label: "Examen Complementario", key: "exmcpl" },
    { label: "Descripcion del Examen Complementario", key: "descexam" },

    { label: "Analisis de Laboratorio", key: "anal" },
    { label: "Descripcion del Analisis de Laboratorio", key: "descnal" },
  ];

  const [sendCSV, setSendCSV] = useState(false);

  const addHandler = () => {
    setSendCSV(true);
  };

  const addHandlerToTrue = () => {
    setSendCSV(false);
  };

  const TAX_RATE = 0.07;

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  function priceRow(qty, unit) {
    return qty * unit;
  }

  function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }

  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }

  const dataTable = [
    createRow("Motivo Consulta", 100, 1.15),
    createRow("Exploracion Fisica", 10, 45.99),
    createRow("Diagnostico", 2, 17.99),
    createRow("Receta Medica", 254, 17.99),
    createRow("Examen Complementario", 34, 17.99),
    createRow("Analisis de Laboratorio", 634, 17.99),
  ];

  const invoiceSubtotal = subtotal(dataTable);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  useEffect(() => {
    getAttendanceByCI();
    console.log(attendance);
  }, []);

  return (
    <div>
      <Card>
        <CardContent>
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
                  <TableRow>
                    <TableCell align="center">{clientData.ci}</TableCell>
                    <TableCell align="center">{clientData.firstName}</TableCell>
                    <TableCell align="center">{clientData.lastName}</TableCell>
                    <TableCell align="center">{clientData.phone}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </CardContent>

        <CardContent>
          <h1>Historial Clinico</h1>
          {attendanceByCI?.map((pacientAttendance) => (
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Atencion Medica {pacientAttendance.id}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Motivo: {pacientAttendance.motivConsult}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                      <TableBody>
                        <TableRow>
                          <h3>Atencion Medica {pacientAttendance.id}</h3>
                          <TableCell>
                            <h4>Motivo Consulta:</h4>
                            {pacientAttendance.motivConsult}
                          </TableCell>
                          <TableCell>
                            <h4>Exploracion Fisica:</h4>
                            {pacientAttendance.explFisica}
                          </TableCell>
                          <TableCell>
                            <h4>Diagnostico:</h4>
                            {pacientAttendance.diagnostico}
                          </TableCell>

                          <TableCell>
                            <h4>Receta Medica:</h4>
                            {pacientAttendance.receta?.map((recetas) => (
                              <p>{recetas.nombre}</p>
                            ))}
                          </TableCell>
                          <TableCell>
                            <h4>Examen Complementario:</h4>
                            {pacientAttendance.examenes?.map((examen) => (
                              <p>{examen.nombre}</p>
                            ))}
                          </TableCell>
                          <TableCell>
                            <h4>Analisis de Laboratorio:</h4>
                            {pacientAttendance.labs?.map((analisis) => (
                              <p>{analisis.nombre}</p>
                            ))}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <h3>Costos de la consulta</h3>
                          <TableCell>
                            <h4>Procedimiento</h4>
                            {pacientAttendance.procedimientoMedico.map(
                              (procedimiento) => (
                                <p>{procedimiento.name}</p>
                              )
                            )}
                          </TableCell>

                          <TableCell>
                            <h4>Precio</h4>
                            {pacientAttendance.procedimientoMedico.map(
                              (procedimiento) => (
                                <p>{procedimiento.price}</p>
                              )
                            )}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Typography>
                <div className="new-expense__actions">
                  {!sendCSV && (
                    <Button
                      sx={{ m: 2, p: 1 }}
                      variant="contained"
                      color="primary"
                      endIcon={<FileDownloadIcon />}
                      onClick={addHandler}
                    >
                      Exportar Consulta Completa
                    </Button>
                  )}
                  {sendCSV && (
                    <Button
                      sx={{ m: 2, p: 1 }}
                      variant="contained"
                      color="primary"
                      endIcon={<FileDownloadIcon />}
                      onClick={addHandlerToTrue}
                    >
                      Exportar Consulta Completa
                      <CSVDownload
                        data={csvData}
                        headers={headersCsv}
                        filename={"Consulta Medica"}
                      ></CSVDownload>
                    </Button>
                  )}

                  <Button
                    sx={{ m: 2, p: 1 }}
                    variant="contained"
                    color="primary"
                    endIcon={<FileDownloadIcon />}
                  >
                    <Link to={`/factura-pdf?ci=${clientData.ci}`}> Imprimir Factura</Link>
                  </Button>
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default AttendanceHistory;
