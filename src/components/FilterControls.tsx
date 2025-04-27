import React from 'react';
import { SeverityFilter, SortOrder } from '../types';
import { Search, SortAsc, SortDesc } from 'lucide-react';

interface FilterControlsProps {
  severityFilter: SeverityFilter;
  setSeverityFilter: (filter: SeverityFilter) => void;
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  severityFilter,
  setSeverityFilter,
  sortOrder,
  setSortOrder,
  searchQuery,
  setSearchQuery
}) => {
  const severityOptions: SeverityFilter[] = ['All', 'Low', 'Medium', 'High'];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Search Incidents
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="search"
              type="text"
              placeholder="Search by title or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white py-2 px-3 text-sm"
            />
          </div>
        </div>

        <div className="flex-initial">
          <label htmlFor="severity" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Filter by Severity
          </label>
          <select
            id="severity"
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value as SeverityFilter)}
            className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white py-2 px-3 pr-8 text-sm"
          >
            {severityOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-initial">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Sort by Date
          </label>
          <div className="flex">
            <button
              onClick={() => setSortOrder('newest')}
              className={`inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md ${
                sortOrder === 'newest'
                  ? 'bg-blue-500 text-white border-blue-500 dark:bg-blue-600 dark:border-blue-600'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200'
              } text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            >
              <SortDesc className="h-4 w-4 mr-1" /> Newest
            </button>
            <button
              onClick={() => setSortOrder('oldest')}
              className={`inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-r-md ${
                sortOrder === 'oldest'
                  ? 'bg-blue-500 text-white border-blue-500 dark:bg-blue-600 dark:border-blue-600'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200'
              } text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            >
              <SortAsc className="h-4 w-4 mr-1" /> Oldest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;