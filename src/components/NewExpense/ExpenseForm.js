import "./NewExpense.css";
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //less complicated way
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState(0); //the tutor stated that it can always be initialize with a string
  //   const [enteredDate, setEnteredDate] = useState(new Date());

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "", //initializing them all, despite being integers and date formats, in strings is actually permissible
    enteredDate: "",
  });

  const titleChangeHandler = (e) => {
    //one method but less reliable
    // setUserInput(
    //     {
    //         ...userInput, //this is important so as to avoid react from deleting the existing values. also it must be the first
    //         enteredTitle: e.target.value,
    //     }
    // );

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    }); //this is a better approach as the latest snapshot is always guaranteed

    // console.log(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
    //   console.log(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
    //   console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault(); //prevents the request from being sent, hence the page won't reload
    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    };

    let initialState = {
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    };

    props.onSaveExpenseData(expenseData); //shall only be executed here, hence parantheses is here. Also there's a parameter here. it is to enable the passing of expenseData
    setUserInput(initialState);
  };

  return (
    //create the submission action on the Form Element itself
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
