import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Card() {
  return (
    <View>
      <Text> Card</Text>
      <View style={styles.container}>
        <Image
          style={styles.imgstyle}
          source={{
            uri: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
          }}
        ></Image>
        <View>
          <Text>Ertugural ghazi</Text>
          <Text>
            something is better then nothing something is better then nothing
            something is better then nothing something is better then nothing
            something is better then nothing something is better then nothing
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgstyle: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  container: {
    borderWidth: 1,
    width: 500,
    height: 600,
    textAlign: "center",
  },
});
