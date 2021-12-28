import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const OnchangeFilterHandler = (newFiltervalue) => {
    setFilteredYear(newFiltervalue);
  };
  const filtered_Expenses = props.items.filter((expenseItem) => {
    return expenseItem.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div className="expenses">
      <ExpensesFilter
        onChangeSelectedYear={OnchangeFilterHandler}
        selected={filteredYear}
      />
      <ExpenseChart expenses={filtered_Expenses}></ExpenseChart>
      <ExpenseList items={filtered_Expenses} />
    </div>
  );
}

export default Expenses;
