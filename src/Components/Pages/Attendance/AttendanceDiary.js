import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useRecoilState, useRecoilValue } from "recoil";
import { clientSelectedState, clientState } from "../../Atoms/clientAtom";

import { attendanceState } from "../../Atoms/attendanceAtom";

import "./AttendanceDiary.css";

import { Card, Grid, CardContent, TextField, Button } from "@mui/material";

function AttendanceDiary() {
    const [datePickerValue, setDatePickerValue] = useState(new Date());

    const rows = useRecoilValue(clientState);
    const attendance = useRecoilValue(attendanceState)
  
  
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };
  
     

   
  return (
    <div>
        <Card>
        <CardContent>
          <h1>Historial Clinico</h1>
          <div className="new-agenda">
          <DesktopDatePicker
                    label="Elegir Fecha y Hora "
                    value={datePickerValue}
                    onChange={setDatePickerValue}
                    renderInput={(params) => <TextField {...params} />}
                    
                  />
                  </div>
          {attendance?.map((pacientAttendance) => { 
              const clientIndex = rows.findIndex(
                (row) => row.ci === pacientAttendance.ci
              );
              if(pacientAttendance.date.getDate() === datePickerValue.getDate() && 
              pacientAttendance.date.getMonth() === datePickerValue.getMonth() && 
              pacientAttendance.date.getFullYear() === datePickerValue.getFullYear())
              return (
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
                  <h4>Atencion Medica:</h4> {rows[clientIndex]?.firstName + " " + rows[clientIndex]?.lastName }
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                      <TableBody>
                        <TableRow>
                          <h3>Atencion Medica </h3>
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
                              (procedure) => (
                                <p>{procedure.name}</p>
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
              </AccordionDetails>
            </Accordion>
          )})}
        </CardContent>
        </Card>
    </div>
  )
}

export default AttendanceDiary