<template>
  <n-flex justify="center" align="center" class="empty">
    <n-gradient-text type="info" size="24"> {{ title }} </n-gradient-text>
    <n-icon size="36"><DocumentOutline /></n-icon>
  </n-flex>
</template>
<script lang="ts" setup>
import { DocumentOutline } from '@vicons/ionicons5';

interface Props {
  title: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.empty {
  height: inherit;
}
</style>
