import { StaticImageData } from "next/image"
import { FC } from "react"
import Image from "next/image"
import "./Product.css"

type Props = {
  bg: StaticImageData
  img: StaticImageData
  title: string
  desc: string
}

const Product = ({ bg, img, title, desc }: Props) => {
  return (
    <article className="product">
      <Image src={bg} alt="bg" fill />
      <div>
        <Image src={img} alt="icon" fill />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  )
}

export default Product
