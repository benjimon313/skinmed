import React, { useEffect, useState } from "react";

import { QRCodeSVG } from "qrcode.react";

import {
  Card,
  Grid,
  CardContent,
  TextField,
  Button,
  Divider,
} from "@mui/material";
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

import { Document, Page, Text, View, PDFDownloadLink } from "react-pdf";

const FacturaPDF = () => {
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

  const handlePrint = () => {
    window.print();
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

  const numFact = Math.floor(Math.random() * 100);

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

  const makeid = (length) => {
    var resultAut = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      resultAut += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return resultAut;
    
  
  };
  const invoiceSubtotal = subtotal(dataTable);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  useEffect(() => {
    getAttendanceByCI();
    console.log(attendance);
  }, []);

  var today = new Date();
  var day = today.getDate() + "";
  var month = today.getMonth() + 1 + "";
  var year = today.getFullYear() + "";
  var hour = today.getHours() + "";
  var minutes = today.getMinutes() + "";
  var seconds = today.getSeconds() + "";

  const checkZero = (data) => {
    if (data.length == 1) {
      data = "0" + data;
    }
    return data;
  };

  day = checkZero(day);
  month = checkZero(month);
  year = checkZero(year);
  hour = checkZero(hour);
  minutes = checkZero(minutes);
  seconds = checkZero(seconds);

  const addPrint = () => {
    window.print();
  };

  //NUMERO A LETRAS

  function Unidades(num) {
    switch (num) {
      case 1:
        return "UN";
      case 2:
        return "DOS";
      case 3:
        return "TRES";
      case 4:
        return "CUATRO";
      case 5:
        return "CINCO";
      case 6:
        return "SEIS";
      case 7:
        return "SIETE";
      case 8:
        return "OCHO";
      case 9:
        return "NUEVE";

      default:
    }

    return "";
  } //Unidades()

  function Decenas(num) {
    let decena = Math.floor(num / 10);
    let unidad = num - decena * 10;

    switch (decena) {
      case 1:
        switch (unidad) {
          case 0:
            return "DIEZ";
          case 1:
            return "ONCE";
          case 2:
            return "DOCE";
          case 3:
            return "TRECE";
          case 4:
            return "CATORCE";
          case 5:
            return "QUINCE";
          default:
            return "DIECI" + Unidades(unidad);
        }
      case 2:
        switch (unidad) {
          case 0:
            return "VEINTE";
          default:
            return "VEINTI" + Unidades(unidad);
        }
      case 3:
        return DecenasY("TREINTA", unidad);
      case 4:
        return DecenasY("CUARENTA", unidad);
      case 5:
        return DecenasY("CINCUENTA", unidad);
      case 6:
        return DecenasY("SESENTA", unidad);
      case 7:
        return DecenasY("SETENTA", unidad);
      case 8:
        return DecenasY("OCHENTA", unidad);
      case 9:
        return DecenasY("NOVENTA", unidad);
      case 0:
        return Unidades(unidad);
      default:
    }
  } //Unidades()

  function DecenasY(strSin, numUnidades) {
    if (numUnidades > 0) return strSin + " Y " + Unidades(numUnidades);

    return strSin;
  } //DecenasY()

  function Centenas(num) {
    let centenas = Math.floor(num / 100);
    let decenas = num - centenas * 100;

    switch (centenas) {
      case 1:
        if (decenas > 0) return "CIENTO " + Decenas(decenas);
        return "CIEN";
      case 2:
        return "DOSCIENTOS " + Decenas(decenas);
      case 3:
        return "TRESCIENTOS " + Decenas(decenas);
      case 4:
        return "CUATROCIENTOS " + Decenas(decenas);
      case 5:
        return "QUINIENTOS " + Decenas(decenas);
      case 6:
        return "SEISCIENTOS " + Decenas(decenas);
      case 7:
        return "SETECIENTOS " + Decenas(decenas);
      case 8:
        return "OCHOCIENTOS " + Decenas(decenas);
      case 9:
        return "NOVECIENTOS " + Decenas(decenas);
      default:
    }

    return Decenas(decenas);
  } //Centenas()

  function Seccion(num, divisor, strSingular, strPlural) {
    let cientos = Math.floor(num / divisor);
    let resto = num - cientos * divisor;

    let letras = "";

    if (cientos > 0)
      if (cientos > 1) letras = Centenas(cientos) + " " + strPlural;
      else letras = strSingular;

    if (resto > 0) letras += "";

    return letras;
  } //Seccion()

  function Miles(num) {
    let divisor = 1000;
    let cientos = Math.floor(num / divisor);
    let resto = num - cientos * divisor;

    let strMiles = Seccion(num, divisor, "UN MIL", "MIL");
    let strCentenas = Centenas(resto);

    if (strMiles === "") return strCentenas;

    return strMiles + " " + strCentenas;
  } //Miles()

  function Millones(num) {
    let divisor = 1000000;
    let cientos = Math.floor(num / divisor);
    let resto = num - cientos * divisor;

    let strMillones = Seccion(num, divisor, "UN MILLON DE", "MILLONES DE");
    let strMiles = Miles(resto);

    if (strMillones === "") return strMiles;

    return strMillones + " " + strMiles;
  } //Millones()

  function NumeroALetras(num) {
    var data = {
      numero: num,
      enteros: Math.floor(num),
      centavos: Math.round(num * 100) - Math.floor(num) * 100,
      letrasCentavos: " ",
      letrasMonedaPlural: "Bolivianos 00/000", //“PESOS”, 'Dólares', 'Bolívares', 'etcs'
      letrasMonedaSingular: "Boliviano", //“PESO”, 'Dólar', 'Bolivar', 'etc'

      letrasMonedaCentavoPlural: "CENTAVOS",
      letrasMonedaCentavoSingular: "CENTAVO",
    };

    if (data.centavos > 0) {
      data.letrasCentavos =
        "CON " +
        (function () {
          if (data.centavos === 1)
            return (
              Millones(data.centavos) + " " + data.letrasMonedaCentavoSingular
            );
          else
            return (
              Millones(data.centavos) + " " + data.letrasMonedaCentavoPlural
            );
        })();
    }

    if (data.enteros === 0)
      return "CERO " + data.letrasMonedaPlural + " " + data.letrasCentavos;
    if (data.enteros === 1)
      return (
        Millones(data.enteros) +
        " " +
        data.letrasMonedaSingular +
        " " +
        data.letrasCentavos
      );
    else
      return (
        Millones(data.enteros) +
        " " +
        data.letrasMonedaPlural +
        " " +
        data.letrasCentavos
      );
  }

  const [sendQR, setSendQR] = useState(false);

  const addHandler = () => {
    setSendQR(true);
  };

  const addHandlerToTrue = () => {
    setSendQR(false);
  };

 
  return (
    <div>
      <Card>
        <CardContent>
          <h1 align="center">Factura</h1>
          <h4 align="center">
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - -
          </h4>
          <h4 align="center">Nit:289438529</h4>
          <h4 align="center">Numero de factura: {numFact}</h4>
          <h5 align="center">Codigo Autorizacion: {makeid(15)} </h5>
          <h4 align="center">
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - -
          </h4>
          <Divider></Divider>

          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 250 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">
                      Fecha: {day}/{month}/{year} {hour}:{minutes}:{seconds}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      Nombre:{" "}
                      <TextField variant="standard" size="small"></TextField>
                    </TableCell>
                  </TableRow>
                  <TableCell align="left">
                    Nit: <TextField variant="standard" size="small"></TextField>
                  </TableCell>
                </TableHead>
              </Table>
            </TableContainer>
          </div>
        </CardContent>

        <CardContent>
          <div>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <h3>Procedimientos&nbsp;</h3>
                    </TableCell>
                    <TableCell align="left">
                      <h3>Precio&nbsp;</h3>
                    </TableCell>
                    <TableCell align="right">
                      <h3>Importe&nbsp;</h3>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {attendanceByCI?.map((pacientAttendance) => (
                    <TableRow>
                      <TableCell>
                        {pacientAttendance.procedimientoMedico.map(
                          (procedimiento) => (
                            <p>{procedimiento.name}</p>
                          )
                        )}
                      </TableCell>

                      <TableCell>
                        {pacientAttendance.procedimientoMedico.map(
                          (procedimiento) => (
                            <p>Bs. {procedimiento.price}</p>
                          )
                        )}
                      </TableCell>

                      <TableCell align="right">
                        {pacientAttendance.procedimientoMedico.map(
                          (procedimiento) => (
                            <p>Bs. {procedimiento.price}</p>
                          )
                        )}
                      </TableCell>
                    </TableRow>
                  ))}

                  {attendanceByCI?.map((pacientAttendance) => (
                    <TableRow>
                      <TableCell rowSpan={3} />
                      <TableCell colSpan={1}>
                        <h3>Total a pagar: </h3>
                      </TableCell>
                      <TableCell align="right">
                        {pacientAttendance.procedimientoMedico.map(
                          (procedimiento) => (
                            <p>Bs. {procedimiento.price}</p>
                          )
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <p align="right">-</p>
            {attendanceByCI?.map((pacientAttendance) => (
              <>
                {pacientAttendance.procedimientoMedico.map((procedimiento) => (
                  <p align="right">
                    Son: {NumeroALetras(procedimiento.price)}{" "}
                  </p>
                ))}
              </>
            ))}
            <p align="right">-</p>
            <p>
              * La reproduccion total o parcial y/o el uso no autorizado de esta
              Nota Fiscal, constituye un delito a ser sancionado conforme a Ley
              *
            </p>
            <h4 align="center">
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - -
          </h4>
            {!sendQR && (
          <Button
            x={{ m: 2, p: 1 }}
            variant="contained"
            color="primary"
            endIcon={<FileDownloadIcon />}
            onClick={addHandler}
          >
            Generar QR e imprimir
          </Button>
        )}
        {sendQR && (
          <>
          {attendanceByCI?.map((pacientAttendance) => (
          <Button onClick={addPrint}>
            {pacientAttendance.procedimientoMedico.map(
                          (procedimiento) => {
                            const QrData =
                            {price: procedimiento.price,
                            name: procedimiento.name}
                            const aux = `${numFact}|${day}/${month}/${year}|${makeid(15)}|${QrData.price}|${QrData.price}|73-55-84-AC|0|0|0 `
                            
                            return (
            <QRCodeSVG value= {aux}
             />)

                            })}
          </Button>
          ))}
          </>
        )}
          </div>
        </CardContent>
        
      </Card>
    </div>
  );
};

export default FacturaPDF;
