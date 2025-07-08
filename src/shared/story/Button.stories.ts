import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '@/shared/component/button/Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description: 'Custom icon to display in the button',
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `
      <Button v-bind="args" label="Button Text" />
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
      <Button v-bind="args">
        <template #icon>
          <span class="pi pi-check"></span>
        </template>
        Button with Icon
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
