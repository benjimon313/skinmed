import React, { useState } from 'react';

import NewExpense from './NewExpense/NewExpense';
import Expense from './Expense/Expense';





const Procedures = () => {
  
//   const addExpenseHandler = (expense) => {
//     setExpenses((prevExpenses) => {
//       return [expense, ...prevExpenses];
//     });
//   };

// onAddExpense={addExpenseHandler

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense />
      <Expense/>
    </div>
  );
};

export default Procedures;