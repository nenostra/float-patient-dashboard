export type DataType = {
  location: string;
  administration: 'Pharmacy' | 'In-home' | 'Hospital';
  medication: string;
  visit_time: string;
  duration: number;
  medication_tolerance: 'Worsening' | 'Stable' | 'Improving';
  pain_level: number;
  blood_pressure: string;
  nurse: {
    name: string;
    profile_picture: string;
    specialty: string;
  };
};
