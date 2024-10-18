/* eslint-disable react/prop-types */
export function FilteringIncome() {
  return (
    <div
      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="filter-button"
      tabIndex="-1"
      id="filter-dropdown"
    >
      <div className="py-1" role="none">
        <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 rounded-md text-gray-600"
            id="filter-option-1"
          />
          <span className="ml-2">Salary</span>
        </label>
        <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 rounded-md text-gray-600"
            id="filter-option-2"
          />
          <span className="ml-2">Outsourcing</span>
        </label>
        <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 rounded-md text-gray-600"
            id="filter-option-3"
          />
          <span className="ml-2">Bond</span>
        </label>

        <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 rounded-md text-gray-600"
            id="filter-option-3"
          />
          <span className="ml-2">Dividend</span>
        </label>
      </div>
    </div>
  );
}
export default function FilteringExpense({ onFilter }) {
  const handleChange = () => {
    onFilter();
  };
  return (
    <div
      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="filter-button"
      tabIndex="-1"
      id="filter-dropdown"
    >
      <div className="py-1" role="none">
        <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 rounded-md text-gray-600"
            id="filter-option-1"
            onChange={handleChange}
          />
          <span className="ml-2">Education</span>
        </label>
        <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 rounded-md text-gray-600"
            id="filter-option-2"
            onChange={handleChange}
          />
          <span className="ml-2">Food</span>
        </label>
        <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 rounded-md text-gray-600"
            id="filter-option-3"
            onChange={handleChange}
          />
          <span className="ml-2">Health</span>
        </label>

        <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 rounded-md text-gray-600"
            id="filter-option-3"
            onChange={handleChange}
          />
          <span className="ml-2">Bill</span>
        </label>
        <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 rounded-md text-gray-600"
            id="filter-option-3"
            onChange={handleChange}
          />
          <span className="ml-2">Insurance</span>
        </label>
        <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 rounded-md text-gray-600"
            id="filter-option-3"
            onChange={handleChange}
          />
          <span className="ml-2">Tax</span>
        </label>
        <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 rounded-md text-gray-600"
            id="filter-option-3"
            onChange={handleChange}
          />
          <span className="ml-2">Transport</span>
        </label>
        <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 rounded-md text-gray-600"
            id="filter-option-3"
            onChange={handleChange}
          />
          <span className="ml-2">Telephone</span>
        </label>
      </div>
    </div>
  );
}
