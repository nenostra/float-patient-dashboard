import { Input, Table } from 'antd';
import { columns } from '../../constants';
import { DataType } from '../../lib/types';

type VisitTableProps = {
  dataSource: DataType[];
  onFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filterValue: string;
};

export function VisitsTable({ dataSource, onFilterChange, filterValue }: VisitTableProps) {
  return (
    <>
      <div className="w-52 mb-4">
        <Input placeholder="Nurse Search" value={filterValue} onChange={onFilterChange} />
      </div>
      <Table rowKey="visit_time" columns={columns} dataSource={dataSource} scroll={{ x: true }} />
    </>
  );
}
