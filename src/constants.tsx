import { TableProps, Avatar } from 'antd';
import { format } from 'date-fns';
import { getBloodPressureColor, getMedicationToleranceColor } from './lib/utils';
import { DataType } from './lib/types';

export const TEST_PATIENT = {
  id: '12345',
  name: 'John Doe',
  sex: 'Male',
  age: 32,
  patient_since: '2020-01-01',
  weight: 180,
  height: 72,
  allergies: ['Peanuts', 'Shellfish'],
};

export const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Nurse',
    key: 'nurse',
    dataIndex: 'nurse',
    sorter: (a, b) => a.nurse.name.localeCompare(b.nurse.name),
    render: (_, { nurse }) => {
      return (
        <div className="flex items-center gap-1">
          <Avatar src={nurse.profile_picture} />
          <div className="whitespace-nowrap">
            <p>{nurse.name}</p>
            <p>{nurse.specialty}</p>
          </div>
        </div>
      );
    },
  },
  {
    title: 'Visit Time',
    dataIndex: 'visit_time',
    key: 'time',
    sorter: (a, b) => Number(new Date(a.visit_time)) - Number(new Date(b.visit_time)),
    render: (time) => format(new Date(time), 'EEEE, LLL\u00a0dd,\u00a0yyyy hh:mmaa'),
  },
  { title: 'Location', dataIndex: 'location', key: 'location', sorter: (a, b) => a.location.localeCompare(b.location) },
  {
    title: 'Administration',
    dataIndex: 'administration',
    key: 'administration',
    sorter: (a, b) => a.administration.localeCompare(b.administration),
  },
  {
    title: 'Medication',
    dataIndex: 'medication',
    key: 'medication',
    sorter: (a, b) => a.medication.localeCompare(b.medication),
  },
  {
    title: 'Visit duration',
    dataIndex: 'duration',
    key: 'duration',
    render: (duration) => <p className="whitespace-nowrap">{duration} minutes</p>,
    sorter: (a, b) => a.duration - b.duration,
  },
  {
    title: 'Blood Pressure',
    dataIndex: 'blood_pressure',
    key: 'blood_pressure',
    render: (blood_pressure) => <p className={getBloodPressureColor(blood_pressure)}>{blood_pressure}</p>,
    sorter: (a, b) => a.medication_tolerance.localeCompare(b.medication_tolerance),
  },
  {
    title: 'Medication Tolerance',
    dataIndex: 'medication_tolerance',
    key: 'medication_tolerance',
    render: (medication_tolerance) => (
      <p className={getMedicationToleranceColor(medication_tolerance)}>{medication_tolerance}</p>
    ),
    sorter: (a, b) => a.medication_tolerance.localeCompare(b.medication_tolerance),
  },
];
