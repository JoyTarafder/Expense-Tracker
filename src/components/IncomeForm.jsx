/* eslint-disable react/prop-types */
import { useState } from "react";

export default function IncomeForm({ onSave, toggleForm }) {
  /* This code snippet is a React functional component named `IncomeForm` that represents a form for
  adding income data. Here's a breakdown of what the mentioned code is doing: */
  /* 1. Importing the `useState` hook from React. This hook allows us to manage the state of our component. */
  /* 2. Defining the initial state of the form data using the `useState` hook. The form data includes the category, amount, and date of the income. */
  /* 3. Creating a function `handleChange` that updates the form data based on user input. */
  /* 4. Returning a form element with input fields for category, amount, and date. */
  /* 5. Adding an event listener to the form submission that triggers the `onSave` function with the current form data as an argument. */
  /* 6. Resetting the form data to its initial state after submission. */
  /* 7. Adding a button that triggers the form submission when clicked. */
  /* 8. Adding a button that triggers the form reset when clicked. */
  /* 9. Adding a button that triggers the form reset when clicked. */
  /* 10. Exporting the `IncomeForm` component as the default export of the module. */
  const { crypto } = window;
  const initialExpenseDataForm = {
    id: crypto.randomUUID(),
    category: "",
    amount: "",
    date: "",
  };

  const [incomeDataFrom, setIncomeDataFrom] = useState(initialExpenseDataForm);

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    setIncomeDataFrom({
      ...incomeDataFrom,
      [name]: value,
    });
  };
  return (
    <form>
      <div
        className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6"
        onClick={toggleForm}
      >
        <div className="cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ">
          Expense
        </div>
        <div className="cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 active">
          Income
        </div>
      </div>

      <div className="mt-3">
        <label
          htmlFor="category"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Category
        </label>
        <div className="mt-2">
          <select
            id="category"
            name="category"
            autoComplete="category-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
            value={incomeDataFrom.category}
            required
          >
            <option>Select Option</option>
            <option value="Salary">Salary</option>
            <option value="Outsourcing">Outsourcing</option>
            <option value="Bond">Bond</option>
            <option value="Bond">Dividend</option>
          </select>
        </div>
      </div>

      <div className="mt-3">
        <label
          htmlFor="amount"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Amount
        </label>
        <div className="mt-2">
          <input
            type="number"
            name="amount"
            id="amount"
            autoComplete="off"
            placeholder="12931"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
            value={incomeDataFrom.amount}
            required
          />
        </div>
      </div>

      <div className="mt-3">
        <label
          htmlFor="date"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Date
        </label>
        <div className="mt-2">
          <input
            type="date"
            name="date"
            id="date"
            autoComplete="off"
            placeholder="12931"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
            value={incomeDataFrom.date}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
        onClick={(e) => {
          e.preventDefault(); // Prevent form submission from refreshing the page

          // Validate form inputs
          if (
            incomeDataFrom.category === "" ||
            incomeDataFrom.amount === "" ||
            incomeDataFrom.date === ""
          ) {
            alert("Please fill in all required fields.");
            return;
          }

          onSave(incomeDataFrom);
          // Reset form inputs
          setIncomeDataFrom(initialExpenseDataForm);
        }}
      >
        Save
      </button>
    </form>
  );
}
