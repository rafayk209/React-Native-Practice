import React, { useState } from "react";
import {
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";

export default function ColorGenerator() {
  const [colors, setColors] = useState([]);
  const color = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    //Alert.alert(`rgb(${red},${green},${blue})`);
    // console.log(`rgb(${red},${green},${blue})`);
    return `rgb(${red},${green},${blue})`;
  };
  console.log(colors);
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => {
          setColors([...colors, color()]);
        }}
        style={styles.buttonStyle}
      >
        <Text style={styles.textStyle}>Generate Random Number</Text>
      </TouchableOpacity>
      <FlatList
        data={colors}
        showsVerticalScrollIndicator={false}
        keyExtractor={(key) => key}
        renderItem={({ item }) => {
          return (
            <View style={styles.mainContainer}>
              <Text
                style={{
                  backgroundColor: item,
                  width: 200,
                  height: 50,
                  textAlign: "center",
                  borderRadius: 5,
                  padding: 10,
                }}
              >
                {item}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: "#00b0ff",
    position: "relative",
    overflow: "hidden",
    color: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textStyle: {
    color: "white",
    fontSize: 20,
  },
  imageContainer: {
    marginVertical: 10,
    paddingHorizontal: 30,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
});
