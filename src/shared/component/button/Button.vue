<template>
  <Button :label="label">
    <template #icon>
      <slot name="icon" />
    </template>
  </Button>
</template>

<script setup lang="ts">
import { Button } from 'primevue'
import { toRefs } from 'vue'

interface Props {
  label?: string
}

const props = defineProps<Props>()
const { label } = toRefs(props)
</script>

<style lang="postcss">
.p-button {
  @apply px-3 rounded-md transition-colors;
  height: 36px;

  &.p-button-icon-only {
    @apply w-8 h-8 flex items-center justify-center border border-transparent rounded-md cursor-pointer;
  }

  .p-button-label {
    @apply text-sm font-medium;
  }

  &.context-menu-button {
    &.p-button-icon-only {
      @apply w-6 h-6 hover:border-transparent hover:bg-transparent;
    }
  }
}
</style>
