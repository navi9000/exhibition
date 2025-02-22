import cn from "classnames"
import ArrowUp from "../svg/ArrowUp"
import "./ButtonImageContainer.css"

type Props = { size?: "standard" | "small" }

const ButtonImageContainer = ({ size = "standard" }: Props) => {
  return (
    <span className={cn({ [size]: size })}>
      <ArrowUp />
    </span>
  )
}

export default ButtonImageContainer
