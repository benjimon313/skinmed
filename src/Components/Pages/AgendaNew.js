import React, { useState } from "react";

import { Card, Grid, CardContent, TextField, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AgendaForm from "./AgendaForm";


import "./Agenda.css"

const AgendaNew = (props) => {
    const [isEditing, setIsEditing] = useState(false);
  
    const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString(),
      };
      props.onAddExpense(expenseData);
      console.log(expenseData);
      setIsEditing(false);
    };
  
    const startEditingHandler = () => {
      setIsEditing(true);
    };
  
    const stopEditingHandler = () => {
      setIsEditing(false);
    };
    return (
      <div className="new-agenda">
        {!isEditing && (
          <Button className="blue-button" onClick={startEditingHandler} endIcon={<AddCircleIcon/>}>agendar cita</Button>
        )}
        {isEditing && (
          
          <AgendaForm 
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
            
          />
          
        )}
      </div>
    );
  };

export default AgendaNew