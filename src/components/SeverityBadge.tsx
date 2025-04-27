import React from 'react';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';
import { getSeverityColor } from '../utils/helpers';
import { Incident } from '../types';

interface SeverityBadgeProps {
  severity: Incident['severity'];
}

const SeverityBadge: React.FC<SeverityBadgeProps> = ({ severity }) => {
  const colorClass = getSeverityColor(severity);
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colorClass} transition-all`}>
      {severity === 'High' && <AlertTriangle className="w-3 h-3 mr-1" />}
      {severity === 'Medium' && <AlertCircle className="w-3 h-3 mr-1" />}
      {severity === 'Low' && <Info className="w-3 h-3 mr-1" />}
      {severity}
    </span>
  );
};

export default SeverityBadge;