<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>

  <div>
    <a @click="router.push({ name: '/task/' })">Task</a>
  </div>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()
</script>
