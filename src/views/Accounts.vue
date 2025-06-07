<template>
  <div class="accounts">
    <AccountsHeader />
    <AccountsNote />
    <AccountsTable class="accounts__table" />
  </div>
</template>

<script setup lang="ts">
import AccountsHeader from '@components/Accounts/Header.vue';
import AccountsNote from '@components/Accounts/Note.vue';
import AccountsTable from '@components/Accounts/Table.vue';
</script>

<style scoped>
.accounts {
  padding: 2rem;
}

.accounts__table {
  margin-top: 20px;
}
</style>
