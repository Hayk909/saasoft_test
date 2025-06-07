<template>
  <div class="accounts">
    <AccountsHeader />
    <AccountsNote />
    <AccountsTable class="accounts__table" />
  </div>
</template>

<script setup lang="ts">
import { ENTITY_NAME } from '@/app/constants/Accounts';
import { useAccountsStore } from '@/app/store/accounts';
import { JSON_METHOD } from '@/shared/enums';
import { strigifyAndParse } from '@/shared/utils';
import AccountsHeader from '@components/Accounts/Header.vue';
import AccountsNote from '@components/Accounts/Note.vue';
import AccountsTable from '@components/Accounts/Table.vue';

const getDataFromStorage = () => {
  const storageData = localStorage.getItem(ENTITY_NAME);

  if (storageData) {
    const parsedData = strigifyAndParse(storageData, JSON_METHOD.PARSE);

    setAccounts(parsedData);
  }
};

const { setAccounts } = useAccountsStore();

getDataFromStorage();
</script>

<style lang="scss" scoped>
.accounts {
  padding: 2rem;

  &__table {
    margin-top: 20px;
  }
}
</style>
