/* eslint-disable react/prop-types */
import { useState } from "react";

export default function EditExpenseForm({ expense, handleEdit }) {
  const [editedExpense, setEditedExpense] = useState({
    id: expense.id,
    category: expense.category,
    amount: expense.amount,
    date: expense.date,
  });

  const handleChange = (e) => {
    setEditedExpense({
      ...editedExpense,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* <div className="bg-black bg-opacity-70 h-full w-full z-10 absolute top-0 left-0"></div> */}
      <form>
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
              value={editedExpense.category}
              onChange={handleChange}
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
              value={editedExpense.amount}
              onChange={handleChange}
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
              value={editedExpense.date}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
          onClick={(e) => {
            e.preventDefault(); // Prevent form submission from refreshing the page
            handleEdit(editedExpense);
          }}
        >
          Save
        </button>
      </form>
    </>
  );
}
