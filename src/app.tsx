import css from './app.module.css';
import { TEST_PATIENT } from './constants';
import { PATIENT_VISITS } from './patient_visits';
import { ProfileCard } from './components/profile-card/profile-card';
import clsx from 'clsx';
import { ChartSection } from './components/charts-section/charts-section';
import { format } from 'date-fns';
import { VisitsTable } from './components/visits-table.tsx/visits-table.tsx';
import { useQueryParam } from './lib/hooks.ts';

export function App() {
  const [query, setQuery] = useQueryParam('nurse');

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value as string);
  };

  return (
    <div className={clsx(css.layout, 'container py-5')}>
      <div className={css.sidebar}>
        <ProfileCard {...TEST_PATIENT} />
      </div>
      <div className={css.content}>
        <ChartSection
          data={PATIENT_VISITS.map((visit) => {
            return {
              date: format(visit.visit_time, 'MM/dd/yyyy'),
              pain_level: visit.pain_level,
            };
          })}
        />
      </div>
      <div className={clsx(css.bottomContent, 'overflow-hidden')}>
        <VisitsTable
          onFilterChange={handleFilterChange}
          filterValue={query}
          dataSource={PATIENT_VISITS.filter((visit) => {
            return visit.nurse.name.toLowerCase().includes(query.toLowerCase());
          })}
        />
      </div>
    </div>
  );
}
