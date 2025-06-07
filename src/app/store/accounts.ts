import { defineStore } from 'pinia';

import { useStoreAdapter } from '@/shared/infrastructure/adapters';
import { generateId } from '@/shared/utils';
import { IState } from '@interfaces/Accounts';
import { Account } from '@interfaces/Accounts';

const accountsStore = defineStore('accounts', {
  state: (): IState => ({
    accounts: [
      {
        id: generateId(),
        mark: 'Privet',
        type: 'Vonces',
        login: 'Axpers',
        password: 'Lav Brat',
        isShowPassword: false
      }
    ],
    isLoading: false
  }),
  actions: {
    addAccount(payload: Account) {
      this.accounts.push(payload);
    }
  }
});

export const useAccountsStore = () => useStoreAdapter(accountsStore());
