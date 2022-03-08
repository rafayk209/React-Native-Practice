import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import CheckBox from "expo-checkbox";

const Login = ({ navigation }) => {
  const [agree, setagree] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  console.log(`${name} \n ${password}`);

  const submit = () => {
    name === "rafay" && password === "khan"
      ? Alert.alert(`Thank you ${name}`)
      : Alert.alert("incorrect details");
    navigation.navigate("home", { name: `${name}` });
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Text>here is your login form !</Text>
      <View>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput
          style={styles.inputstyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={(data) => {
            setName(data);
          }}
        />
      </View>

      <View>
        <Text style={styles.labels}>Enter your Password</Text>
        <TextInput
          style={styles.inputstyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={(data) => {
            setPassword(data);
          }}
        />
      </View>

      <View style={styles.agree}>
        <CheckBox
          value={agree}
          onValueChange={() => {
            setagree(!agree);
          }}
          color={agree ? "#4630EB" : undefined}
        />
        <Text> I have agreed with terms</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.Loginbutton,
          {
            backgroundColor: agree ? "#0000FF" : "grey",
          },
        ]}
        disabled={!agree}
        onPress={() => {
          submit();
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputstyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    fontSize: 20,
    borderRadius: 1,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  labels: {
    fontSize: 20,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
  },
  agree: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  container: {
    alignItems: "center",
  },
  Loginbutton: {
    fontSize: 20,
    padding: 10,
    marginTop: 10,
  },
});

export default Login;
