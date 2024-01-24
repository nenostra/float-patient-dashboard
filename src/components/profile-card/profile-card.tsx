import { Avatar, Divider } from 'antd';
import { format } from 'date-fns';
import { inches2InchesPlusFeet } from '../../lib/utils';
import { CalendarPlus, Ruler, Weight, WheatOff } from 'lucide-react';

type ProfileCardProps = {
  name: string;
  sex: string;
  age: number;
  patient_since: string;
  weight: number;
  height: number;
  allergies: string[];
};

export function ProfileCard({ name, sex, age, patient_since, weight, height, allergies }: ProfileCardProps) {
  return (
    <div className="w-full rounded bg-white border border-solid border-gray-100 p-4">
      <div className="flex flex-col items-center">
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" size="large" />
        <h3 className="font-semibold">{name}</h3>
        <p>
          {sex} {age} years old
        </p>
      </div>

      <Divider />
      <div>
        <p className="font-semibold">Patient since:</p>
        <p className="flex mb-4">
          <CalendarPlus className="mr-1" /> {format(patient_since, 'LLL\u00a0dd,\u00a0yyyy')}
        </p>

        <p className="font-semibold">Weight:</p>
        <p className="flex mb-4">
          <Weight className="mr-1" /> {weight}lb
        </p>

        <p className="font-semibold">Height:</p>
        <p className="flex mb-4">
          <Ruler className="mr-1" /> {inches2InchesPlusFeet(height)}
        </p>

        <p className="font-semibold text-red-500">Allergies:</p>
        <p className="flex">
          <WheatOff className="mr-1" />
          {new Intl.ListFormat('en-US', {
            style: 'long',
            type: 'conjunction',
          }).format(allergies)}
        </p>
      </div>
    </div>
  );
}
