import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Counter from "./src/screen/Counter";
import Component from "./src/screen/Component";
import Flatelist from "./src/screen/Flatelist.js";
import Props from "./src/screen/Props";
import Card from "./src/screen/Card";
import ColorGenerator from "./src/project/Colorgenerator";
import Hooks from "./src/screen/Hooks";
import Login from "./src/screen/Login";
import Home from "./src/screen/Home";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
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
