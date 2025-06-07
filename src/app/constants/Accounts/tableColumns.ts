import { TableColumns } from '@enums/Accounts';
import { TableColumn } from '@interfaces/Accounts';

export const tableColumns: Readonly<TableColumn[]> = [
  {
    key: TableColumns.MARKS,
    title: 'table.marks'
  },
  {
    key: TableColumns.TYPE,
    title: 'table.type'
  },
  {
    key: TableColumns.LOGIN,
    title: 'table.login'
  },
  {
    key: TableColumns.PASSWORD,
    title: 'table.password'
  }
];
