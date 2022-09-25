import { ItemContainer, ItemLeft, IconLeft, ItemText, IconRight} from "./styles";

type TaskProps = {
  text: string
}

export default function Task({text}: TaskProps) {
  return(
    <ItemContainer>
      <ItemLeft>
        <IconLeft />
        <ItemText>{text}</ItemText>
      </ItemLeft>
      <IconRight />
    </ItemContainer>
  )
}