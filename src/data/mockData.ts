import { Incident } from '../types';

export const initialIncidents: Incident[] = [
  { 
    id: 1, 
    title: "Biased Recommendation Algorithm", 
    description: "Algorithm consistently favored certain demographics in job recommendation systems, leading to potentially discriminatory outcomes in hiring processes. The bias was detected during a routine audit of recommendation patterns across different user groups.", 
    severity: "Medium", 
    reported_at: "2025-03-15T10:00:00Z" 
  },
  { 
    id: 2, 
    title: "LLM Hallucination in Critical Info", 
    description: "Large Language Model provided incorrect safety procedure information when queried about emergency protocols, potentially endangering users who might follow the fabricated instructions. This occurred in a medical context where accurate information is crucial.", 
    severity: "High", 
    reported_at: "2025-04-01T14:30:00Z" 
  },
  { 
    id: 3, 
    title: "Minor Data Leak via Chatbot", 
    description: "Chatbot inadvertently exposed non-sensitive user metadata in its responses, including approximate location and device type. While no personally identifiable information was leaked, this represents a privacy concern that required immediate patching.", 
    severity: "Low", 
    reported_at: "2025-03-20T09:15:00Z" 
  },
  {
    id: 4,
    title: "Autonomous System Override Failure",
    description: "An autonomous vehicle failed to properly respond to manual override commands during testing, continuing on its programmed route for 12 seconds before accepting the override. No injuries occurred, but this represents a significant safety concern for emergency situations.",
    severity: "High",
    reported_at: "2025-03-25T16:45:00Z"
  },
  {
    id: 5,
    title: "Facial Recognition Misidentification",
    description: "Security system incorrectly identified an individual as a person of interest, triggering unnecessary security protocols. The error rate was found to be higher for certain demographic groups, indicating a potential bias in the training data.",
    severity: "Medium",
    reported_at: "2025-04-02T11:20:00Z"
  }
];