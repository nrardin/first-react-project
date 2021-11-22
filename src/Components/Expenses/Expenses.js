import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  const saveSelectedYear = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        //Create array of JSX elemnts to render
        <ExpensesFilter onExpenseFilter={saveSelectedYear} />
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
export default Expenses;
