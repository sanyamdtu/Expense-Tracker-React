import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [entered_amount, setEntered_amount] = useState("");
  const [entered_title, setEntered_title] = useState("");
  const [entered_date, setEntered_date] = useState("");
  const TitleHandler = (event) => {
    setEntered_title(event.target.value);
  };
  const AmountHandler = (event) => {
    setEntered_amount(event.target.value);
  };
  const dateHandler = (event) => {
    setEntered_date(event.target.value);
  };
  const FormSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: entered_title,
      amount: +entered_amount,
      date: new Date(entered_date),
    };
    setEntered_title("");
    setEntered_amount("");
    setEntered_date("");
    props.OnSaveNewExpense(expenseData);
  };
  return (
    <div>
      <form onSubmit={FormSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={entered_title} onChange={TitleHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={AmountHandler}
              value={entered_amount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateHandler}
              value={entered_date}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
