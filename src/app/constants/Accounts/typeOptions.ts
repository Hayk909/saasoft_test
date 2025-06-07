import { Options } from '@/shared/types';
import { AccountTypes } from '@enums/Accounts';

export type TypeOptions = Options<AccountTypes>[];

export const typeOptions: TypeOptions = [
  {
    label: 'types.ldap',
    value: AccountTypes.LDAP
  },
  {
    label: 'types.local',
    value: AccountTypes.LOCAL
  }
];
