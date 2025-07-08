import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Icon from '@/shared/component/misc/Icon.vue'
import RobotIcon from '@/shared/component/svg/icon/RobotIcon.vue'

const meta: Meta<typeof Icon> = {
  title: 'Component/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description: 'Accepts either a CSS class name string (e.g., `p-icon`) or a Vue component.',
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const WithStringClass: Story = {
  args: {
    icon: 'pi pi-android',
  },
  render: (args) => ({
    components: { Icon },
    setup() {
      return { args }
    },
    template: `
      <Icon v-bind="args" />
    `,
  }),
}

export const WithVueComponent: Story = {
  args: {
    icon: RobotIcon,
  },
  render: (args) => ({
    components: { Icon },
    setup() {
      return { args }
    },
    template: `
      <Icon v-bind="args" />
    `,
  }),
}
