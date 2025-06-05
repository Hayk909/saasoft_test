<template>
  <div class="home">
    <n-flex align="center">
      <h1>{{ $t('home_title') }}</h1>
      <n-icon size="40">
        <HomeOutline />
      </n-icon>
    </n-flex>
  </div>
</template>

<script setup lang="ts">
import { HomeOutline } from '@vicons/ionicons5';
</script>

<style scoped>
.home {
  padding: 2rem;
}
</style>
