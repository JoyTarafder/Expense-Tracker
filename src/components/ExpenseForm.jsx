/* eslint-disable react/prop-types */
import { useState } from "react";
export default function ExpenseForm({ onSave, toggleForm }) {
  const initialExpenseDataForm = {
    id: crypto.randomUUID(),
    category: "",
    amount: "",
    date: "",
  };
  const [expenseDataForm, setExpenseDataForm] = useState(
    initialExpenseDataForm
  );

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setExpenseDataForm({
      ...expenseDataForm,
      [name]: value,
    });
  };

  return (
    <form>
      <div
        className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6"
        onClick={toggleForm}
      >
        <div className="cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 active">
          Expense
        </div>
        <div className="cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900">
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
            value={expenseDataForm.category}
            required
          >
            <option>Select Option</option>
            <option value="Education">Education</option>
            <option value="Food">Food</option>
            <option value="Health">Health</option>
            <option value="Bill">Bill</option>
            <option value="Insurance">Insurance</option>
            <option value="Tax">Tax</option>
            <option value="Transport">Transport</option>
            <option value="Telephone">Telephone</option>
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
            value={expenseDataForm.amount}
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
            value={expenseDataForm.date}
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
            expenseDataForm.category === "" ||
            expenseDataForm.amount === "" ||
            expenseDataForm.date === ""
          ) {
            alert("Please fill in all required fields.");
            return;
          }

          onSave(expenseDataForm);
          // Reset form inputs
          setExpenseDataForm(initialExpenseDataForm);
        }}
      >
        Save
      </button>
    </form>
  );
}
