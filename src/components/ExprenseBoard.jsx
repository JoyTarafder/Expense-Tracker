import BalancceSummary from "./BalancceSummary";
import ExpenseForm from "./ExprenseForm";
import ExprenseHistroy from "./ExprenseHistroy";
import IncomeHistory from "./IncomeHistory";

export default function ExpenseBoard() {
  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
          <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
            Expense Tracker
          </h2>
          <ExpenseForm />
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white">
            <BalancceSummary/>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <IncomeHistory/>
            <ExprenseHistroy/>
          </div>
        </div>
      </section>
    </main>
  );
}
