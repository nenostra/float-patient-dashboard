export function inches2InchesPlusFeet(inches: number): string {
  const feet = Math.floor(inches / 12);
  const remainingInches = inches % 12;
  return `${feet}'${remainingInches}"`;
}

export function getBloodPressureColor(bpString: string) {
  const [systolic, diastolic] = bpString.split('/').map(Number);

  if (systolic >= 180 || diastolic >= 120) {
    return 'text-red-800'; // Red for Hypertensive Crisis
  } else if (systolic >= 140 || diastolic >= 90) {
    return 'text-red-500'; // Light red for Stage 2 Hypertension
  } else if (systolic >= 130 || diastolic >= 80) {
    return 'text-orange-400'; // Orange for Stage 1 Hypertension
  } else if (systolic >= 120 && diastolic < 80) {
    return 'text-yellow-400'; // Gold for Elevated Blood Pressure
  } else {
    return 'text-green-400'; // Green for Normal Blood Pressure
  }
}

export function getMedicationToleranceColor(medicationTolerance: string) {
  switch (medicationTolerance) {
    case 'Worsening':
      return 'text-red-500';
    case 'Stable':
      return 'text-green-400';
    case 'Improving':
      return 'text-green-600';
    default:
      return 'text-gray-400';
  }
}
