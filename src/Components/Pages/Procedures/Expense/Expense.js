import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useRecoilState } from "recoil";
import { clientProceduresState } from "../../../Atoms/clientAtom";

import { Button, Card, CardContent, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import "./Expense.css";


const Expense = () => {
  const [rows,setRows] = useRecoilState (clientProceduresState)
  return (
    <div className="expenses">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre del Procedimiento</TableCell>
              <TableCell align="right">Precio</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right"><Button
                    variant="contained"
                    color="primary"
                    endIcon={<EditIcon />}
                  >
                    Editar
                  </Button></TableCell>
                
               
              </TableRow>
              
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Expense;
