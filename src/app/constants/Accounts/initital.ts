import { AccountTypes } from '@/app/enums/Accounts';
import { Account } from '@/app/interfaces/Accounts';
import { generateId } from '@/shared/utils';

export const MARK_INPUT_MAX_LENGTH: Readonly<number> = 50;
export const LOGIN_INPUT_MAX_LENGTH: Readonly<number> = 100;
export const PASSWORD_INPUT_MAX_LENGTH: Readonly<number> = 100;

export const inititalCreateAccountData: Account = {
  id: generateId(),
  mark: '',
  type: AccountTypes.LDAP,
  login: '',
  password: '',
  isShowPassword: false
};
