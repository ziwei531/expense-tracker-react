import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import { useState } from "react";

function DisplayExpenses(props) {
  const [year, setYear] = useState("2020");

  function filteredDate(selectedYear) {
    setYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected={year} onFiltered={filteredDate} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        {
          //teacher's method
          /*
          props.expenses.map(expense => {
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          })
          */
        }
      </Card>
    </>
  );
}

export default DisplayExpenses;
