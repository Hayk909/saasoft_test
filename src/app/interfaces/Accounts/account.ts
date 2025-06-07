import { AccountTypes } from '@/app/enums/Accounts';

export interface Mark {
  text: string;
}

export interface Account {
  id: string;
  markModel: string;
  mark: Mark[];
  type: AccountTypes | null;
  login: string;
  password: string | null;
  isShowPassword: boolean;
}
