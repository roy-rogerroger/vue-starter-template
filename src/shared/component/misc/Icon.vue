<template>
  <component v-if="isComponent" :is="icon" />

  <i v-else :class="icon" />
</template>

<script setup lang="ts">
import { type Component, toRefs, computed } from 'vue'

interface Props {
  icon: string | Component
}

const props = defineProps<Props>()
const { icon } = toRefs(props)

const isComponent = computed(() => typeof icon.value !== 'string')
</script>
