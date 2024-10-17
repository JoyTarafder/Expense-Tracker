/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  DeleteSvg,
  EditSvg,
  ExpenseSvg,
  FilteringSvg,
  ShortingSvg,
} from "../assets/ImageSvg";
import FilteringExpense from "./Filtering";
import Shorting from "./Shorting";

export default function ExpenseHistory({ expenseForm, handleDelete }) {
  const [filterShow, setFilterShow] = useState(false);

  const [filteredData, setFilteredData] = useState(expenseForm);

  const [shortingShow, setShortingShow] = useState(false);

  const handleFilter = (e) => {
    const value = e.target.value;
    const filtered = expenseForm.filter(
      (expense) => expense.category === value
    );
    setFilteredData(filtered);
  };

  return (
    <div className="border rounded-md">
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-pink-600 text-white rounded-md text-center object-center place-content-center text-base">
            <ExpenseSvg />
          </div>

          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-800">
              Expense
            </h3>
          </div>
        </div>

        <div>
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button2"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setShortingShow(!shortingShow)}
              >
                <ShortingSvg />
              </button>
            </div>
            {shortingShow && <Shorting />}
          </div>

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="filter-button-2"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setFilterShow(!filterShow)}
              >
                <FilteringSvg />
              </button>
            </div>
            {filterShow && <FilteringExpense onFilter={handleFilter}/>}
          </div>
        </div>
      </div>

      {expenseForm.map((expenseHistory) => (
        <div className="p-4 divide-y" key={expenseHistory.id}>
          <div className="flex justify-between items-center py-2 relative group cursor-pointer">
            <div>
              <h3 className="text-base font-medium leading-7 text-gray-600">
                {expenseHistory.category}
              </h3>
              <p className="text-xs text-gray-600">{expenseHistory.date}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
                {expenseHistory.amount.length > 0
                  ? `BDT ${expenseHistory.amount}`
                  : ""}
              </p>

              <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
                <button
                  className="hover:text-teal-600"
                  role="button"
                  title="Edit Button"
                >
                  <EditSvg />
                </button>

                <button
                  className="hover:text-red-600"
                  role="button"
                  title="Delete"
                  onClick={() => handleDelete(expenseHistory.id)}
                >
                  <DeleteSvg />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
