import * as React from "react";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import { Button, Card, CardContent, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useRecoilState } from "recoil";
import { clientState } from "../../Atoms/clientAtom";

import AddCircleIcon from '@mui/icons-material/AddCircle';


import { Link } from "react-router-dom";





function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "ci",
    numeric: true,
    disablePadding: true,
    label: "CI",
  },
  {
    id: "firstName",
    numeric: false,
    disablePadding: false,
    label: "Nombres",
  },
  {
    id: "lastName",
    numeric: false,
    disablePadding: false,
    label: "Apellidos",
  },
  {
    id: "age",
    numeric: true,
    disablePadding: false,
    label: "Edad",
  },
  {
    id: "phone",
    numeric: true,
    disablePadding: false,
    label: "Telefono",
  },
  {
    id: "address",
    numeric: false,
    disablePadding: false,
    label: "Direccion",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "left" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return <div>Lista de Pacientes: </div>;
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function PatientsTableSort() {
  const [rows,setRows] = useRecoilState (clientState)
;
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("firstName");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    console.log(name, selectedIndex)
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const changeHandler = (index, text, label) =>{
    let listaPacientes = [...rows];
    label === 'ci' && (listaPacientes[index]={...listaPacientes[index], ci: text})
    label === 'firstName' && (listaPacientes[index]={...listaPacientes[index], firstName: text})
    label === 'lastName' && (listaPacientes[index]={...listaPacientes[index], lastName: text})
    label === 'age' && (listaPacientes[index]={...listaPacientes[index], age: text})
    label === 'phone' && (listaPacientes[index]={...listaPacientes[index], phone: text})
    label === 'address' && (listaPacientes[index]={...listaPacientes[index], address: text})
    setRows(listaPacientes);
    console.log(index)

  }
  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Card>
      <CardContent>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <EnhancedTableToolbar numSelected={selected.length} />
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={dense ? "small" : "medium"}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                  {stableSort(rows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.id);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.id}
                          selected={isItemSelected}
                        >
                          <TableCell 
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                          >
                            {row.name}
                          </TableCell>
                          {!isItemSelected && (<TableCell align="left">{row.ci}</TableCell>)}
                          {isItemSelected && (<TableCell align="left"><TextField value={row.ci} onChange={(event)=> changeHandler(row.id,event.target.value,'ci')}/></TableCell>)}
                          {!isItemSelected && <TableCell align="left">{row.firstName}</TableCell>}
                          {isItemSelected && (<TableCell align="left"><TextField value={row.firstName} onChange={(event)=> changeHandler(row.id,event.target.value,'firstName')}/></TableCell>)}
                          {!isItemSelected && <TableCell align="left">{row.lastName}</TableCell>}
                          {isItemSelected && (<TableCell align="left"><TextField value={row.lastName} onChange={(event)=> changeHandler(row.id,event.target.value,'lastName')}/></TableCell>)}
                          {!isItemSelected && <TableCell align="left">{row.age}</TableCell>}
                          {isItemSelected && (<TableCell align="left"><TextField value={row.age} onChange={(event)=> changeHandler(row.id,event.target.value,'age')}/></TableCell>)}
                          {!isItemSelected && <TableCell align="left">{row.phone}</TableCell>}
                          {isItemSelected && (<TableCell align="left"><TextField value={row.phone} onChange={(event)=> changeHandler(row.id,event.target.value,'phone')}/></TableCell>)}
                          {!isItemSelected && <TableCell align="left">{row.address}</TableCell>}
                          {isItemSelected && (<TableCell align="left"><TextField value={row.address} onChange={(event)=> changeHandler(row.id,event.target.value,'address')}/></TableCell>)}
                
                          <TableCell>
                            <Button
                              variant="contained"
                              color="primary"
                              fullWidth
                              endIcon={<EditIcon />}
                              onClick={(event) => handleClick(event, row.id)}
                            >
                              Editar
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="contained"
                              color="primary"
                              fullWidth
                              endIcon={<AddCircleIcon />}
                            >
                               <Link to={`/agregar-info?ci=${row.ci}`} 
                                >
                                  Agregar Informacion 
                                </Link>
                              
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: (dense ? 33 : 53) * emptyRows,
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
          
        </Box>
      </CardContent>
    </Card>
  );
}
