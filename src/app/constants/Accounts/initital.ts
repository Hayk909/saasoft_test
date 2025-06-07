import { Account } from '@/app/interfaces/Accounts';
import { generateId } from '@/shared/utils';

export const ENTITY_NAME: Readonly<string> = 'accounts';

export const MARK_INPUT_MAX_LENGTH: Readonly<number> = 50;
export const LOGIN_INPUT_MAX_LENGTH: Readonly<number> = 100;
export const PASSWORD_INPUT_MAX_LENGTH: Readonly<number> = 100;

export const inititalCreateAccountData = (): Account => ({
  id: generateId(),
  markModel: '',
  mark: [{ text: '' }],
  type: null,
  login: '',
  password: '',
  isShowPassword: false
});
