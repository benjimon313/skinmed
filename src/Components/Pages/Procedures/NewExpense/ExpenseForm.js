import React, { useState } from "react";

import { useRecoilState } from "recoil";
import { proceduresState } from "../../../Atoms/proceduresAtom";

import { Card, Grid, CardContent, TextField, Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [rows, setRows] = useRecoilState(proceduresState);

  const [nuevoProcedimiento, setNuevoProcedimiento] = useState({name:"", price:""});
  const [isEmptyName, SetIsEmptyName] = useState(false);
  const [isEmptyPrice, SetIsEmptyPrice] = useState(false);

  const changeHandler = (text, label) => {
    let procedimiento = nuevoProcedimiento;
    procedimiento = { ...procedimiento, id: rows.length };
    label === "name" && (procedimiento = { ...procedimiento, name: text });
    label === "price" && (procedimiento = { ...procedimiento, price: text });
    setNuevoProcedimiento(procedimiento);
  };

  const addHandler = (event) => {
    event.preventDefault()
    let listaProcedimiento = [...rows];
    listaProcedimiento.push(nuevoProcedimiento);
    setRows(listaProcedimiento);
  };
console.log(nuevoProcedimiento)

  return (
    <div>
      <Card>
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Grid item xs={6} sx={{ m: 1, p: 2 }}>
                <TextField
                  onChange={(event) => {
                    changeHandler(event.target.value, "name");
                  }}
                  id="title"
                  label="Procedimiento Medico"
                  helperText="Ingresar el nombre del procedimiento"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={3} sx={{ m: 1, p: 2 }}>
                <TextField
                  onChange={(event) =>
                    changeHandler(event.target.value, "price")
                  }
                  id="price"
                  label="Precio"
                  helperText="Ingresar el precio del procedimiento"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
            </Grid>

            <div className="new-expense__actions">
              <Button onClick={props.onCancel} endIcon={<CancelIcon />}>
                Cancelar
              </Button>
              <Button onClick={addHandler} type="submit" endIcon={<AddCircleIcon />}>
                Agregar Procedimiento
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpenseForm;
