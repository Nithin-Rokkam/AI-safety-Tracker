import React, { useState } from 'react';
import { initialIncidents } from './data/mockData';
import { Incident, SeverityFilter, SortOrder } from './types';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header';
import FilterControls from './components/FilterControls';
import IncidentList from './components/IncidentList';
import IncidentForm from './components/IncidentForm';
import { filterIncidents, sortIncidents } from './utils/helpers';
import { useTheme } from './context/ThemeContext';

function App() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [incidents, setIncidents] = useLocalStorage<Incident[]>('aiSafetyIncidents', initialIncidents);
  const [showForm, setShowForm] = useState(false);
  const [severityFilter, setSeverityFilter] = useState<SeverityFilter>('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddIncident = (newIncident: Incident) => {
    setIncidents((current) => [...current, newIncident]);
    setShowForm(false);
  };

  // Apply filtering and sorting
  const filteredIncidents = sortIncidents(
    filterIncidents(incidents, severityFilter, searchQuery),
    sortOrder
  );

  const isFiltered = severityFilter !== 'All' || searchQuery !== '';

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <Header 
        onReportClick={() => setShowForm(true)} 
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <main className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {showForm ? (
          <IncidentForm 
            onSubmit={handleAddIncident} 
            incidents={incidents} 
            onCancel={() => setShowForm(false)} 
          />
        ) : (
          <>
            <FilterControls
              severityFilter={severityFilter}
              setSeverityFilter={setSeverityFilter}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            
            <div className="mt-6">
              <IncidentList incidents={filteredIncidents} isFiltered={isFiltered} />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;