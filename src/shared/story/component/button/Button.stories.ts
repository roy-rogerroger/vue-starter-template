import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Button from '@/shared/component/button/Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Component/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    icon: {
      description: 'Custom icon to display in the button',
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    label: 'Button Text',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `
      <Button v-bind="args" />
    `,
  }),
}

export const WithIcon: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `
      <Button v-bind="args" label="Button with Icon">
        <template #icon>
          <span class="pi pi-check"></span>
        </template>
      </Button>
    `,
  }),
}

export const IconOnly: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `
      <Button v-bind="args" class="p-button-icon-only">
        <template #icon>
          <span class="pi pi-search"></span>
        </template>
      </Button>
    `,
  }),
}

export const ContextMenuButton: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `
      <Button v-bind="args" class="p-button-icon-only context-menu-button">
        <template #icon>
          <span class="pi pi-ellipsis-v"></span>
        </template>
      </Button>
    `,
  }),
}
