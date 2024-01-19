import { Table, Input } from 'antd';
import css from './app.module.css';
import { TEST_PATIENT, columns, data } from './constants';
import { PATIENT_VISITS } from './patient_visits';
import { ProfileCard } from './components/profile-card/profile-card';
import clsx from 'clsx';
import { ChartSection } from './components/charts-section/charts-section';

export function App() {
  return (
    <div className={clsx(css.layout, 'container py-5')}>
      <div className={css.sidebar}>
        <ProfileCard {...TEST_PATIENT} />
      </div>
      <div className={css.content}>
        <ChartSection data={data} />
      </div>
      <div className={clsx(css.bottomContent, 'overflow-hidden')}>
        <div>
          <Input placeholder="Basic usage" />
        </div>
        <Table rowKey="visit_time" columns={columns} dataSource={PATIENT_VISITS} scroll={{ x: true }} />
      </div>
    </div>
  );
}
