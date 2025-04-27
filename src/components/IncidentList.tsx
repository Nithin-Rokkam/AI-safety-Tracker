import React from 'react';
import { Incident } from '../types';
import IncidentCard from './IncidentCard';
import { AlertTriangle } from 'lucide-react';

interface IncidentListProps {
  incidents: Incident[];
  isFiltered: boolean;
}

const IncidentList: React.FC<IncidentListProps> = ({ incidents, isFiltered }) => {
  if (incidents.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col items-center justify-center py-6">
          <AlertTriangle className="h-12 w-12 text-gray-400 dark:text-gray-500 mb-3" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">No incidents found</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {isFiltered 
              ? 'Try changing your filter criteria to see more incidents.' 
              : 'No incidents have been reported yet. Use the "Report Incident" button to add a new one.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {incidents.map((incident) => (
        <IncidentCard key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;