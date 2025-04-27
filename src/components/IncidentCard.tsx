import React, { useState } from 'react';
import { Incident } from '../types';
import { formatDate } from '../utils/helpers';
import SeverityBadge from './SeverityBadge';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface IncidentCardProps {
  incident: Incident;
  expanded?: boolean;
}

const IncidentCard: React.FC<IncidentCardProps> = ({ incident, expanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const { title, description, severity, reported_at } = incident;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg">
      <div className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
          <SeverityBadge severity={severity} />
        </div>
        
        <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>Reported: {formatDate(reported_at)}</span>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 sm:mt-0 inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded"
          >
            {isExpanded ? 'Hide Details' : 'View Details'}
            {isExpanded ? (
              <ChevronUp className="ml-1 w-4 h-4" />
            ) : (
              <ChevronDown className="ml-1 w-4 h-4" />
            )}
          </button>
        </div>
        
        {isExpanded && (
          <div 
            className="mt-3 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-md border-l-4 border-blue-500 animate-expand"
          >
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default IncidentCard;