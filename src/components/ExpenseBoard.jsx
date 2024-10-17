import { useState } from "react";
import BalanceSummary from "./BalanceSummary";
import ExpenseForm from "./ExpenseForm";
import ExpenseHistory from "./ExpenseHistory";
import IncomeForm from "./IncomeForm";
import IncomeHistory from "./IncomeHistory";

export default function ExpenseBoard() {
  const { crypto } = window;
  const defForm = {
    id: crypto.randomUUID(),
    category: "Education",
    amount: "10000",
    date: "15 January 2024",
  };
  const defIncomeForm = {
    id: crypto.randomUUID(),
    category: "Salary",
    amount: "500",
    date: "19 January 2024",
  };

  const [expenseForm, setExpenseForm] = useState([defForm]);
  const [incomeFrom, setIncomeFrom] = useState([defIncomeForm]);
  const [activeForm, setActiveForm] = useState("expense"); // "expense" or "income"

  // Function to toggle between expense and income forms
  const toggleForm = () => {
    setActiveForm(!activeForm);
  };
  // Function to handle form deletion
  const handleDelete = (id) => {
    const newExpenseForm = expenseForm.filter(
      (expenseData) => expenseData.id !== id
    );
    setExpenseForm(newExpenseForm);
  };
  // Function to handle income form deletion
  const handleIncomeDelete = (id) => {
    const newIncomeForm = incomeFrom.filter((income) => income.id !== id);
    setIncomeFrom(newIncomeForm);
  };

  // Function to handle form submission
  const handleIncomeFormSubmit = (newIncome) => {
    setIncomeFrom([...incomeFrom, newIncome]);
  };

  const handleExpenseFormSubmit = (newExpense) => {
    setExpenseForm([...expenseForm, newExpense]);
  };

  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
          <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
            Expense Tracker
          </h2>
          {activeForm ? (
            <ExpenseForm
              onSave={handleExpenseFormSubmit}
              toggleForm={toggleForm}
            />
          ) : (
            <IncomeForm
              onSave={handleIncomeFormSubmit}
              toggleForm={toggleForm}
            />
          )}
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white">
            <BalanceSummary expenseForm={expenseForm} incomeFrom={incomeFrom} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <IncomeHistory
              incomeFrom={incomeFrom}
              handleIncomeDelete={handleIncomeDelete}
            />
            <ExpenseHistory
              expenseForm={expenseForm}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
