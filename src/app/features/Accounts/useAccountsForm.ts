import { useForm, useFieldArray, useField } from 'vee-validate';
import { useI18n } from 'vue-i18n';
import * as yup from 'yup';

import { ENTITY_NAME } from '@/app/constants/Accounts';
import { AccountTypes } from '@/app/enums/Accounts';
import { Account } from '@/app/interfaces/Accounts';

let formSingleton: ReturnType<typeof useCreateFormTable> | null = null;

const useCreateFormTable = (initial: Account[]) => {
  const { t } = useI18n();

  const translatePrefix = 'accounts.table.validation';

  const accountSchema = yup.object({
    markModel: yup.string(),
    type: yup.string().required(t(`${translatePrefix}.type`)),
    login: yup
      .string()
      .required(t(`${translatePrefix}.login`))
      .default(''),
    password: yup.string().when('type', {
      is: (val: string) => val === AccountTypes.LOCAL,
      then: schema =>
        schema
          .required(t(`${translatePrefix}.password`))
          .min(6, t(`${translatePrefix}.password_length`)),
      otherwise: schema => schema.notRequired()
    })
  });

  const schema = yup.object({
    accounts: yup.array().of(accountSchema)
  });

  const { errors, values, validateField } = useForm<{
    accounts: Account[];
  }>({
    validationSchema: schema,
    initialValues: { accounts: initial }
  });

  const {
    fields: accountsData,
    push,
    remove,
    replace,
    update
  } = useFieldArray<Account>(ENTITY_NAME);

  return {
    accountsData,
    formValues: values,
    formErrors: errors,
    validateField,
    useField,
    replace,
    push,
    remove,
    update
  };
};

export const useAccountsForm = (initial: Account[] = []) => {
  if (!formSingleton) {
    formSingleton = useCreateFormTable(initial);
  }

  return formSingleton;
};
