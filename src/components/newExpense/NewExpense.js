import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onsavehandler = (newSaveExpense) => {
    const newExpense = {
      ...newSaveExpense,
      id: Math.random().toString(),
    };
    props.OnAddExpense(newExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm OnSaveNewExpense={onsavehandler} />
    </div>
  );
};

export default NewExpense;
