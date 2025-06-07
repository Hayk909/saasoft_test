<template>
  <div class="accounts-table">
    <div class="accounts-table__row accounts-table__header">
      <div v-for="column in tableColumns" :key="column.key" class="accounts-table__cell">
        {{ $t(`accounts.${column.title}`) }}
      </div>
    </div>
    <div v-for="acc in accounts" :key="acc.id" class="accounts-table__row">
      <div class="accounts-table__cell">
        <n-input v-model:value="acc.mark" :maxlength="MARK_INPUT_MAX_LENGTH" />
      </div>

      <div class="accounts-table__cell">
        <n-select v-model:value="acc.type" :options="types" />
      </div>

      <div class="accounts-table__cell">
        <n-input v-model:value="acc.login" :maxlength="LOGIN_INPUT_MAX_LENGTH" />
      </div>

      <div class="accounts-table__cell accounts-table__cell--password">
        <n-input
          v-model:value="acc.password"
          :type="getPasswordType(acc.isShowPassword)"
          :maxlength="PASSWORD_INPUT_MAX_LENGTH"
        >
          <template #suffix>
            <n-icon class="cursor-pointer" @click="togglePasswordVisibility(acc)">
              <component :is="getPasswordVisibilityIcon(acc.isShowPassword)" />
            </n-icon>
          </template>
        </n-input>
      </div>

      <div class="accounts-table__cell accounts-table__cell--actions">
        <n-button text type="error">
          <n-icon size="24"><TrashOutline /></n-icon>
        </n-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { EyeOutline, EyeOffOutline, TrashOutline } from '@vicons/ionicons5';
import { NIcon } from 'naive-ui';
import { type Component, computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { Account } from '@/app/interfaces/Accounts';
import { PasswordTypes } from '@/shared/enums';
import {
  tableColumns,
  typeOptions,
  MARK_INPUT_MAX_LENGTH,
  LOGIN_INPUT_MAX_LENGTH,
  PASSWORD_INPUT_MAX_LENGTH
} from '@constants/Accounts';
import { useAccounts } from '@features/Accounts';

const { t } = useI18n();

const { accounts } = useAccounts();

const types = computed(() =>
  typeOptions.map(item => ({ ...item, label: t(`accounts.${item.label}`) }))
);

const togglePasswordVisibility = (acc: Account) => {
  console.log('asdsad', acc);
};

const getPasswordVisibilityIcon = (isShow: boolean): Component =>
  isShow ? EyeOutline : EyeOffOutline;

const getPasswordType = (isShow: boolean): PasswordTypes =>
  isShow ? PasswordTypes.TEXT : PasswordTypes.PASSWORD;
</script>

<style lang="scss" scoped>
@import './styles/table.scss';
</style>
