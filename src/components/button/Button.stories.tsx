import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import Button from "./Button"
import ArrowContainer from "./ButtonImageContainer"

const meta = {
  title: "Atomic/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = { args: { children: "Primary" } }
export const PrimarySmall: Story = {
  args: { children: "Primary Small", size: "small" },
}
export const Circle: Story = {
  args: { children: <ArrowContainer />, variant: "circle" },
}
export const CircleSmall: Story = {
  args: {
    children: <ArrowContainer size="small" />,
    variant: "circle",
    size: "small",
  },
}
