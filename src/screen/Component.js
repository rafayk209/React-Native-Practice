import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Component() {
  const func = (first, last) => {
    return `my name is ${first} ${last}`;
  };
  const name = "rafay";
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I am component.js {func("rafay", "khan")}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "red",
  },
  text: {
    color: "red",
  },
});
