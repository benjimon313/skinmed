import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { DataGrid } from "@material-ui/data-grid";
import { Card, Grid, CardContent } from "@mui/material";
import { maxWidth } from "@mui/system";
import { makeStyles } from "@mui/material";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from '@mui/icons-material/Edit';

const rows = [
  {
    id: 6140975,
    lastName: "Medrano",
    firstName: "Sergio",
    age: 35,
    phone: 75252823,
    address: "F. de miranda",
  },
  {
    id: 4885150,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    phone: 75252823,
    address: "F. de miranda",
  },
  {
    id: 7483948,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    phone: 75252823,
    address: "F. de miranda",
  },
  {
    id: 6934993,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    phone: 75252823,
  },
  {
    id: 6001826,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    phone: 75252823,
    address: "F. de miranda",
  },
  {
    id: 6927472,
    lastName: "Melisandre",
    firstName: null,
    age: 150,
    phone: 75252823,
    address: "F. de miranda",
  },
  {
    id: 6294711,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    phone: 75252823,
    address: "F. de miranda",
  },
  {
    id: 4891942,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    phone: 75252823,
    address: "F. de miranda",
  },
  {
    id: 4700237,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    phone: 75252823,
    address: "F. de miranda",
  },
];
const PatientsTable = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">CI</TableCell>
                  <TableCell align="left">Nombres</TableCell>
                  <TableCell align="left">Apellidos</TableCell>
                  <TableCell align="left">Edad</TableCell>
                  <TableCell align="left">Telefono</TableCell>
                  <TableCell align="left">Dirección</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((rows) => (
                  <TableRow key={rows.id}>
                    <TableCell component="th" scope="row">
                      {rows.id}
                    </TableCell>
                    <TableCell align="left">{rows.id}</TableCell>
                    <TableCell align="left">{rows.firstName}</TableCell>
                    <TableCell align="left">{rows.lastName}</TableCell>
                    <TableCell align="left">{rows.age}</TableCell>
                    <TableCell align="left">{rows.phone}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        endIcon={<EditIcon />}
                      >
                        Editar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientsTable;
