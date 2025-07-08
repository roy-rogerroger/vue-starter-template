import type { Preview } from '@storybook/vue3-vite'
import '../src/shared/assets/css/main.scss'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { createApp } from 'vue'
import App from '../src/App.vue'

const app = createApp(App)

const withPrimeVue = (Story: any) => {
  app.use(PrimeVue, {
    theme: { preset: Aura },
  })

  return Story()
}

const preview: Preview = {
  decorators: [withPrimeVue],
}

export default preview
