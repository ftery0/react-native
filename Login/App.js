import { StatusBar } from "expo-status-bar";
import {loginUser} from "./login"
import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity } from "react-native";

export default function App() {
  const [id, Setid] = React.useState("");
  const [password, Setpassword] = React.useState("");

  const handleLogin = () => {

    loginUser(id, password);
  };

  return (
    <View style={styles.container}>
      <View >
        <Image style={styles.image} source={require("./assets/ch.png")}></Image>
      </View>
      <View>
        <Text style={styles.login}>로그인</Text>
      </View>

      <View style={styles.input}>
        <Text style={styles.id}>아이디</Text>
        <TextInput
          style={styles.inputin}
          placeholder="아이디를 입력해주세요"
          onChangeText={Setid}
        ></TextInput>
      </View>
      <View style={styles.input}>
        <Text style={styles.password}>비밀번호</Text>
        <TextInput
          style={styles.inputin}
          placeholder="비밀번호를 입력해주세요"
          onChangeText={Setpassword}
          password={true}
        ></TextInput>
      </View>
      <View style={styles.bt} backgroundColor="#F0F0F0">
        <Button style={styles.btin} title="로그인" color="black" onPress={handleLogin}></Button>
      </View>
      <TouchableOpacity style={styles.mem}>
          <Text style={styles.text}>회원가입</Text>
      </TouchableOpacity>


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
  },
  login: {
    fontSize: 26,
    fontWeight: "600",
  },
  input: {
    marginTop: 50,
    alignItems: "center",
  },
  inputin: {
    width: 290,
    height: 45,
    marginTop: 0,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    fontSize: 15,
    padding: 15,
  },
  id: {
    marginLeft: -245,
    marginBottom: 5,
    fontSize: 16,
  },

  password: {
    marginLeft: -220,
    marginBottom: 5,
    fontSize: 16,
  },
  bt: {
    marginTop: 80,
    width: 290,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  btin: {
    fontSize: 20,
  },
  image: {
    width:100,
    height:100,
  },
  mem: {
    marginLeft: 285,
    marginTop: 20,
    fontSize: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: "400",
    color: "gray",
  },

});

