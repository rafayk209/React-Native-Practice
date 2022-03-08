import React, { useState, useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

//TRY CATCH, ASYNC, useState, useEffect, fetchApi

export default function Hooks() {
  const [showData, setshowData] = useState();
  const [isLoad, setisLoad] = useState(true);
  const userData = async () => {
    try {
      const data = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );

      const dataFetch = await data.json();
      setisLoad(false);
      setshowData(dataFetch);
      console.log(dataFetch);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userData();
  }, []);

  return (
    <View>
      <Text>Hello Api</Text>
      <FlatList
        data={showData}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
              <Text>{item.website}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
