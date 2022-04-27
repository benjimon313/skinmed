import React, { useState } from "react";

import { Card, Grid, CardContent, TextField, Button } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div>
      <Card>
        <CardContent>
          <form onSubmit={submitHandler}>
            <Grid container spacing={1}>
              <Grid item xs={6} sx={{ m: 1, p: 2 }}>
                <TextField
                  id="title"
                  label="Procedimiento Medico"
                  helperText="Ingresar el nombre del procedimiento"
                  variant="outlined"
                  fullWidth
                  required
                  type="text"
                  value={enteredTitle}
                  onChange={titleChangeHandler}
                />
              </Grid>
              <Grid item xs={3} sx={{ m: 1, p: 2 }}>
                <TextField
                  id="price"
                  label="Precio"
                  helperText="Ingresar el precio del procedimiento"
                  variant="outlined"
                  fullWidth
                  required
                  type="text"
                  value={enteredTitle}
                  onChange={amountChangeHandler}
                />
              </Grid>
             
            </Grid>

            <div className="new-expense__actions">
              <Button type="button" onClick={props.onCancel} endIcon={<CancelIcon/>}>
                Cancelar
              </Button>
              <Button type="submit" endIcon={<AddCircleIcon/>}>Agregar Procedimiento</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpenseForm;
