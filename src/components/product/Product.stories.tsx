import { Meta, StoryObj } from "@storybook/react"

import component from "./Product"
import bg from "@/assets/img/soccer_bg.webp"
import img from "@/assets/img/soccer_img.webp"

const meta = {
  title: "Atomic/Product",
  component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof component>

export default meta

type Story = StoryObj<typeof meta>

export const Product: Story = {
  args: {
    bg,
    img,
    title: "Sports",
    desc: "Over 182 sporting events and 5500 markets. Live sports broadcasts with the usage of unique technologies",
  },
}
