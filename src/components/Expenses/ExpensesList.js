import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = props => {
  function createItem(expense) {
    //the parameter, expense, originates from expenses.map(createItem)'s expenses.
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  }

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>
  }

  return (
      <>
          <ul className="expenses-list">
            {props.items.map(createItem)}
          </ul>
      </>
  )
};

export default ExpensesList;
