<template>
  <n-flex align="center" justify="center">
    <h1>{{ $t('accounts.title') }}</h1>
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-button text @click="addAccount">
          <n-icon size="40">
            <AddCircleOutline />
          </n-icon>
        </n-button>
      </template>
      <span> {{ $t('accounts.add_tooltip') }} </span>
    </n-tooltip>
  </n-flex>
</template>

<script setup lang="ts">
import { AddCircleOutline } from '@vicons/ionicons5';

import { inititalCreateAccountData } from '@/app/constants/Accounts';
import { useAccountsForm } from '@/app/features/Accounts';

// const { addAccountHandler } = useAccounts();
const { push } = useAccountsForm();

const addAccount = () => {
  const newAccountData = inititalCreateAccountData();

  push(newAccountData);
};
</script>
