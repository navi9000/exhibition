import Button from "@/components/button/Button"
import styles from "./page.module.css"
import Product from "@/components/product/Product"

import bg from "@/assets/img/soccer_bg.webp"
import img from "@/assets/img/soccer_img.webp"

export default function Home() {
  return (
    <div>
      <Button>Test</Button>
      <Product bg={bg} img={img} title="Test" desc="Test" />
    </div>
  )
}
