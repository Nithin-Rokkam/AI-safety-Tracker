import { Incident, SeverityFilter, SortOrder } from '../types';

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

export const filterIncidents = (
  incidents: Incident[],
  severityFilter: SeverityFilter,
  searchQuery: string
): Incident[] => {
  return incidents.filter(incident => {
    const matchesSeverity = severityFilter === 'All' || incident.severity === severityFilter;
    const matchesSearch = searchQuery === '' || 
      incident.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      incident.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSeverity && matchesSearch;
  });
};

export const sortIncidents = (
  incidents: Incident[],
  sortOrder: SortOrder
): Incident[] => {
  return [...incidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });
};

export const getSeverityColor = (severity: Incident['severity']): string => {
  switch (severity) {
    case 'Low':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Medium':
      return 'bg-amber-100 text-amber-800 border-amber-200';
    case 'High':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const getNextId = (incidents: Incident[]): number => {
  return incidents.length > 0 
    ? Math.max(...incidents.map(incident => incident.id)) + 1 
    : 1;
};