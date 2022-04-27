import React, { useEffect, useState } from "react";

import PatientsTable from "./PatientsTable";
import { Card, Grid, CardContent, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import { useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useRecoilState } from "recoil";
import { clientSelectedState, clientState } from "../../Atoms/clientAtom";

import './PatientsInfo.css'

const PatientsInfo = () => {
  const [rows, setRows] = useRecoilState(clientState);
  const [selected, setSelected] = useRecoilState(clientSelectedState);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const clientIndex = rows.findIndex(
    (row) => row.ci === parseInt(urlParams.get("ci"), 10)
  );
  const clientData = rows[clientIndex];

  const [extraInfo, setExtraInfo] = useState(clientData.extraInfo);

  const changeHandler = (text, label) => {
    let extraData = extraInfo;
    label === "antFam" && (extraData = { ...extraData, antFam: text });
    label === "persnPat" && (extraData = { ...extraData, persnPat: text });
    label === "persnNoPat" && (extraData = { ...extraData, persnNoPat: text });
    label === "padAct" && (extraData = { ...extraData, padAct: text });
    setExtraInfo(extraData);
  };

  const titleChangeHandler = () => {
    console.log("Title changed");
  };

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

          <form>
            <Box sx={{ m: 1, p: 2 }}>
              <Grid container spacing={1}>
                <Grid xs={10} item>
                  <TextField
                    id="heredofamiliar"
                    label="Antecedentes Familiares"
                    helperText="Observaciones al paciente sobre las enfermedades patologias heredadas de familiares"
                    onChange={(event) =>
                    changeHandler(event.target.value, "antFam")
                  }
                    value={extraInfo.antFam}
                    variant="outlined"
                    multiline
                    rows={6}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={10} item>
                  <TextField
                    id="personalespatologicos"
                    label="Personales Patologicos"
                    helperText="Observaciones al paciente sobre las patologias personales"
                    onChange={(event) =>
                      changeHandler(event.target.value, "persnPat")
                    }
                    value={extraInfo.persnPat}
                    variant="outlined"
                    multiline
                    rows={6}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={10} item>
                  <TextField
                    id="personalesnopatologicos"
                    label="Personales no Patologicos"
                    helperText="Observaciones al paciente sobre su rutina y habitos personales"
                    onChange={(event) =>
                      changeHandler(event.target.value, "persnNoPat")
                    }
                    value={extraInfo.persnNoPat}
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={10} item>
                  <TextField
                    id="padecimientoactual"
                    label="Padecimiento Actual"
                    helperText="Observaciones sobre el estado actual del paciente"
                    onChange={(event) =>
                      changeHandler(event.target.value, "padAct")
                    }
                    value={extraInfo.padAct}
                    variant="outlined"
                    multiline
                    rows={3}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid xs={12} item>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={()=>{
                      let extraInfoValue = [...rows]
                      extraInfoValue[clientIndex] = {...extraInfoValue[clientIndex], extraInfo : extraInfo}
                      setRows (extraInfoValue);
                      console.log(extraInfoValue)
                      
                    }}
                    endIcon={<AddIcon />}
                  >
                    Agregar Informacion
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default PatientsInfo;
