import { Account } from './account';

export interface IState {
  accounts: Account[];
  isLoading: boolean;
}
