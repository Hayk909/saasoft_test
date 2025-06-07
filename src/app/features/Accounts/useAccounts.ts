import { Account } from '@/app/interfaces/Accounts';
import { useAccountsStore } from '@store/accounts';

export const useAccounts = () => {
  const { accounts, addAccount } = useAccountsStore();

  const addAccountHandler = (payload: Account) => {
    try {
      addAccount(payload);
    } catch (err) {
      console.error(err);
    }
  };

  return { accounts, addAccountHandler };
};
