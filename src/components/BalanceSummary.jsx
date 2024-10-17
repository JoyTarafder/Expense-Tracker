/* eslint-disable react/prop-types */
export default function BalanceSummary({ expenseForm, incomeFrom }) {
  let TotalBalance = incomeFrom.map((incomeFromBal) => incomeFromBal.amount);
  // TotalBalance = TotalBalance.reduce((a, b) => a + b);
  let TotalExpense = expenseForm.map((expenseFormBal) => expenseFormBal.amount);
  // TotalExpense = TotalExpense.reduce((a, b) => a + b);
  let Balance = 0;
  Balance = TotalBalance - TotalExpense;

  return (
    <div className="mx-auto max-w-7xl">
      <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
        <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
          <dt className="text-base leading-7 text-gray-600">Balance</dt>
          <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
            BDT{" "}
            {Balance > -1 ? (
              <span className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
                {Balance}
              </span>
            ) : (
              <span className="order-first text-xl font-semibold tracking-tight text-red-500 sm:text-3xl">
                {Balance}
              </span>
            )}
          </dd>
        </div>
        <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
          <dt className="text-base leading-7 text-gray-600">Total Income</dt>
          <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
            {TotalBalance == 0
              ? `BDT ${(TotalBalance = 0)}`
              : `BDT ${TotalBalance}`}
          </dd>
        </div>
        <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
          <dt className="text-base leading-7 text-gray-600">Total Expense</dt>
          <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
            {TotalExpense == 0
              ? `BDT ${(TotalExpense = 0)}`
              : `BDT ${TotalExpense}`}
          </dd>
        </div>
      </dl>
    </div>
  );
}
