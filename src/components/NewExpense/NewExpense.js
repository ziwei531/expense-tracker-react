import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {
    const saveExpenseDataHandler = enteredExpenseData => {
        let limit = 100;
        let random = limit * Math.random();
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(random).toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const [isEditing, setIsEditing] = useState(false)
    const startEditingHandler = () => {
      setIsEditing(true)
    }

    const stopEditingHandler = () => {
      setIsEditing(false)
    }

  return (
    <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>} 
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
}

export default NewExpense;
