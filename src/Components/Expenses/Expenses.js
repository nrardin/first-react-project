import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  const yearFilterChange = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  console.log(filteredExpenses);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onExpenseFilter={yearFilterChange} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
