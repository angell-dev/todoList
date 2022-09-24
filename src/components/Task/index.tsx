import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type TaskProps = {
  text: string
}

export default function Task({text}: TaskProps) {
  return(
    <View style={styles.itemContainer}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.iconLeft}></TouchableOpacity>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.iconRight}></View>
    </View>
  )
}