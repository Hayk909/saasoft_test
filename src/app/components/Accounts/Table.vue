<template>
  <div class="accounts-table__outer-wrapper">
    <div class="accounts-table__wrapper">
      <div class="accounts-table__header accounts-table__row">
        <div v-for="column in tableColumns" :key="column.key">
          {{ $t(`accounts.${column.title}`) }}
        </div>
      </div>
      <div v-if="accountsData.length">
        <div
          v-for="(acc, idx) in accountsData"
          :key="acc.value.id"
          :class="['accounts-table__row', { 'no-password': !isLocalAccount(acc.value.type) }]"
        >
          <div class="accounts-table__cell">
            <div>
              <n-input
                v-model:value="acc.value.markModel"
                @blur="validateFieldHanlder(idx, TableColumns.MARK)"
              />
            </div>
          </div>

          <div class="accounts-table__cell">
            <n-select
              v-model:value="acc.value.type"
              :options="types"
              :status="getError(idx, TableColumns.TYPE) ? 'error' : ''"
              @change="validateFieldHanlder(idx, TableColumns.TYPE)"
            />

            <div v-if="getError(idx, TableColumns.TYPE)" class="error-msg">
              <n-gradient-text v-if="getError(idx, TableColumns.TYPE)" type="error">
                {{ getError(idx, TableColumns.TYPE) }}
              </n-gradient-text>
            </div>
          </div>

          <div class="accounts-table__cell">
            <n-input
              v-model:value="acc.value.login"
              :status="getError(idx, TableColumns.LOGIN) ? 'error' : ''"
              data-vv-validate-on="blur"
              @blur="validateFieldHanlder(idx, TableColumns.LOGIN)"
            />
            <div v-if="getError(idx, TableColumns.LOGIN)" class="error-msg">
              <n-gradient-text v-if="getError(idx, TableColumns.LOGIN)" type="error">
                {{ getError(idx, TableColumns.LOGIN) }}
              </n-gradient-text>
            </div>
          </div>

          <div v-if="isLocalAccount(formValues.accounts[idx].type)" class="accounts-table__cell">
            <n-input
              v-model:value="acc.value.password"
              :type="getPasswordType(formValues.accounts[idx].isShowPassword)"
              :status="getError(idx, TableColumns.PASSWORD) ? 'error' : ''"
              data-vv-validate-on="blur"
              @blur="validateFieldHanlder(idx, TableColumns.PASSWORD)"
            >
              <template #suffix>
                <n-icon
                  class="cursor-pointer"
                  @click="togglePasswordVisibility(idx, formValues.accounts[idx])"
                >
                  <component
                    :is="getPasswordVisibilityIcon(formValues.accounts[idx].isShowPassword)"
                  />
                </n-icon>
              </template>
            </n-input>

            <div v-if="getError(idx, TableColumns.PASSWORD)" class="error-msg">
              <n-gradient-text v-if="getError(idx, TableColumns.PASSWORD)" type="error">
                {{ getError(idx, TableColumns.PASSWORD) }}
              </n-gradient-text>
            </div>
          </div>

          <n-button
            text
            type="error"
            class="accounts-table__cell"
            @click="revoveAccount(idx, acc.value)"
          >
            <n-icon size="24"><TrashOutline /></n-icon>
          </n-button>
        </div>
      </div>
      <Empty v-else :title="$t('accounts.table.no_data')" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { EyeOutline, EyeOffOutline, TrashOutline } from '@vicons/ionicons5';
import { type Component, computed, unref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import { AccountTypes, TableColumns } from '@/app/enums/Accounts';
import { Account } from '@/app/interfaces/Accounts';
import { PasswordTypes } from '@/shared/enums';
import Empty from '@components/Empty.vue';
import { tableColumns, TypeOptions, typeOptions } from '@constants/Accounts';
import { useAccounts, useAccountsForm } from '@features/Accounts';

const { t } = useI18n();

const { accounts, updateAccountHandler, removeAccountHandler } = useAccounts();

const { accountsData, formValues, formErrors, validateField, replace, remove, update } =
  useAccountsForm(accounts.value);

watch(
  accounts,
  newVal => {
    if (newVal?.length) {
      replace(newVal);
    }
  },
  { immediate: true }
);

const validateFieldHanlder = async (idx: number, field: keyof Account) => {
  const fieldPath = `accounts[${idx}].${field}`;

  const isValid = await validateField(fieldPath);

  if (!isValid.valid) {
    return;
  }

  const acc = formValues.accounts[idx];

  if (!acc[field]) {
    return;
  }

  updateAccountHandler(acc.id, { [field]: acc[field] });
};

const revoveAccount = (idx: number, acc: Account) => {
  remove(idx);
  removeAccountHandler(acc.id);
};

const getError = (idx: number, type: string) => {
  return unref(formErrors)[`accounts[${idx}].${type}`];
};

const types = computed<TypeOptions>(() =>
  typeOptions.map(item => ({ ...item, label: t(`accounts.${item.label}`) }))
);

const togglePasswordVisibility = (idx: number, acc: Account) => {
  update(idx, {
    ...acc,
    isShowPassword: !acc.isShowPassword
  });
  updateAccountHandler(acc.id, { isShowPassword: !acc.isShowPassword });
};

const getPasswordVisibilityIcon = (isShow: boolean): Component =>
  isShow ? EyeOutline : EyeOffOutline;

const getPasswordType = (isShow: boolean): PasswordTypes =>
  isShow ? PasswordTypes.TEXT : PasswordTypes.PASSWORD;

const isLocalAccount = (type: AccountTypes | null) => type === AccountTypes.LOCAL;
</script>

<style lang="scss" scoped>
@import './styles/table.scss';
</style>
