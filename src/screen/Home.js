import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from "react-native";

const Home = ({ route, navigation }) => {
  const name = route.params.name;
  //or
  //const {name} = route.params;
  return (
    <View>
      <Text>Welcome here {name}</Text>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
