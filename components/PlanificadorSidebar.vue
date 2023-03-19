<template>
  <div class="PlanificadorSidebar w-[200px] flex-initial flex flex-col bg-dark">
    <div class="PlanificadorSidebar__section">
      <h2 class="text-center">
        Capas
      </h2>
    </div>

    <ecButton
      class="my-3"
      @click="emit('download')"
    >
      Download
    </ecButton>
  </div>
</template>

<script setup>
import { ecButton } from '@/ui';
defineEmits(['download']);
</script>

<style lang="scss">
.PlanificadorSidebar {
  &__section {
    @apply border-b;
    @apply border-dark-border;
    @apply py-3;
  }
}
</style>