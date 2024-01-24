import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type DataPoint = {
  date: string;
  pain_level: number;
};

type ChartSectionProps = {
  data: DataPoint[];
};

const LINE_CHART_MARGINS = { top: 20, right: 30, left: 20, bottom: 5 }; // Magic values that make the charts look good enough
const Y_AXIS_DOMAIN = [0, 6]; // Pain goes from 0 to 5, but looks better if we have a little extra space

export function ChartSection({ data }: ChartSectionProps) {
  return (
    <div className="w-full h-[360px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={LINE_CHART_MARGINS}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis type="number" domain={Y_AXIS_DOMAIN} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pain_level" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
