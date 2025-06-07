import { useNotification } from 'naive-ui';
import { useI18n } from 'vue-i18n';

import { AccountTypes } from '@/app/enums/Accounts';
import { markParser } from '@/app/helpers';
import { Account, Mark } from '@/app/interfaces/Accounts';
import { useAccountsStore } from '@store/accounts';

export const useAccounts = () => {
  const notification = useNotification();
  const { t } = useI18n();
  const { accounts, addAccount, removeAccount, updateAccount } = useAccountsStore();

  const notificationOptions = {
    duration: 5000
  };

  const addAccountHandler = (newAccount: Account) => {
    try {
      addAccount(newAccount);

      // Должен быть реализован через Адаптер - но НЕТ столько времени
      notification.success({
        title: t('notification.success_add'),
        ...notificationOptions
      });
    } catch (err) {
      console.error(err);

      // Должен быть реализован через Адаптер - но НЕТ столько времени
      notification.error({
        title: t('notification.error'),
        ...notificationOptions
      });
    }
  };

  const removeAccountHandler = (id: Account['id']) => {
    try {
      removeAccount(id);

      // Должен быть реализован через Адаптер - но НЕТ столько времени
      notification.success({
        title: t('notification.success_remove'),
        ...notificationOptions
      });
    } catch (err) {
      console.error(err);

      notification.error({
        title: t('notification.error'),
        ...notificationOptions
      });
    }
  };

  const updateAccountHandler = (id: Account['id'], data: Partial<Account>) => {
    try {
      let mark: Mark[] = [];

      if (data.markModel) {
        mark = markParser(data.markModel);
      }

      const resetedPassword =
        data.type === AccountTypes.LDAP
          ? {
              password: null
            }
          : {};

      const newData = {
        ...data,
        mark,
        ...resetedPassword
      };

      updateAccount(id, newData);
    } catch (err) {
      console.error(err);

      notification.error({
        title: t('notification.error'),
        ...notificationOptions
      });
    }
  };

  return { accounts, addAccountHandler, removeAccountHandler, updateAccountHandler };
};
