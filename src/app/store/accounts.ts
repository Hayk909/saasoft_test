import { defineStore } from 'pinia';

import { JSON_METHOD } from '@/shared/enums';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';
import { strigifyAndParse } from '@/shared/utils';
import { IState } from '@interfaces/Accounts';
import { Account } from '@interfaces/Accounts';

import { ENTITY_NAME, inititalCreateAccountData } from '../constants/Accounts';

const setToStorage = (data: Account[]) => {
  localStorage.setItem(ENTITY_NAME, strigifyAndParse<Account[]>(data, JSON_METHOD.STRINGIFY));
};

const accountsStore = defineStore(ENTITY_NAME, {
  state: (): IState => ({
    accounts: [],
    isLoading: false
  }),
  actions: {
    setAccounts(accounts: Account[]) {
      this.accounts = accounts;

      setToStorage(this.accounts);
    },
    updateAccount(id: string, data: Partial<Account>) {
      const accountIdx = this.accounts.findIndex(acc => acc.id === id);

      if (accountIdx !== -1) {
        this.accounts[accountIdx] = { ...this.accounts[accountIdx], ...data };
      } else {
        this.addAccount({
          ...inititalCreateAccountData(),
          id,
          ...data
        });
      }

      setToStorage(this.accounts);
    },
    addAccount(payload: Account) {
      this.accounts.push(payload);
    },
    removeAccount(id: Account['id']) {
      this.accounts = this.accounts.filter(acc => acc.id !== id);

      if (this.accounts.length) {
        setToStorage(this.accounts);
      } else {
        localStorage.removeItem(ENTITY_NAME);
      }
    }
  }
});

export const useAccountsStore = () => useStoreAdapter(accountsStore());
