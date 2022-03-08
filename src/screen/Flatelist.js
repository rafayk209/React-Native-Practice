import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

const Flatelist = () => {
  const DATA = [
    {
      id: "01",
      title: "Pushpa",
      year: "2022",
    },
    {
      id: "02",
      title: "dabang",
      year: "2020",
    },
    {
      id: "03",
      title: "sultan",
      year: "2019",
    },
    {
      id: "04",
      title: "hero",
      year: "2019",
    },
  ];

  console.log(DATA);
  return (
    <View>
      <FlatList
        data={DATA}
        keyExtractor={(key) => {
          return key.id;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.viewstyle}>
              <Text style={styles.txtstyle}>{item.id}</Text>
              <Text style={styles.txtstyle}>{item.title}</Text>
              <Text style={styles.txtstyle}>{item.year}</Text>
            </View>
          );
        }}
      />
      {/* <Text>ko</Text>
      <FlatList
      keyExtractor={(key)=>{
        return key.id;
      }}
        data={DATA}
        renderItem={({element})=>{
            return <Text>{element.title}</Text>

        }}
       
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  viewstyle: {
    margin: 20,
    backgroundColor: "orange",
    padding: 10,
    textAlign: "center",
    height: 150,
  },
  txtstyle: {
    fontSize: 30,
  },
});

export default Flatelist;
