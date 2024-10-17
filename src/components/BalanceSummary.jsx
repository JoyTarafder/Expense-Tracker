/* eslint-disable react/prop-types */
export default function BalanceSummary({ expenseForm, incomeFrom }) {
  // Calculate total income
  let TotalIncome = incomeFrom.reduce((total, income) => total + parseFloat(income.amount), 0);

  // Calculate total expense
  let TotalExpense = expenseForm.reduce((total, expense) => total + parseFloat(expense.amount), 0);

  // Calculate balance
  let Balance = TotalIncome - TotalExpense;

  return (
    <div className="mx-auto max-w-7xl">
      <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
        <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
          <dt className="text-base leading-7 text-gray-600">Balance</dt>
          <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
            BDT{" "}
            {Balance >= 0 ? (
              <span className="text-gray-700">{Balance}</span>
            ) : (
              <span className="text-red-500">{Balance}</span>
            )}
          </dd>
        </div>
        <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
          <dt className="text-base leading-7 text-gray-600">Total Income</dt>
          <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
            BDT {TotalIncome}
          </dd>
        </div>
        <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
          <dt className="text-base leading-7 text-gray-600">Total Expense</dt>
          <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
            BDT {TotalExpense}
          </dd>
        </div>
      </dl>
    </div>
  );
}