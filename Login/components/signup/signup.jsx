import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert, Image, TouchableOpacity } from "react-native";
import {CreatUser} from "../../constants/signup"

export default function RegisterScreen({ navigation }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () =>{
    navigation.navigate('Login');
  }


  const handleSignup = () => {
    if (!id || !name || !password || !confirmPassword) {
      Alert.alert("경고", "모든 필드를 입력하세요.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("경고", "비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    CreatUser(id,name,password);

  };

  return (
    <View style={styles.container}>
         <View>
        <Image style={styles.image} source={require("../../assets/ch.png")}></Image>
      </View>
      <View>
        <Text style={styles.text}>회원가입</Text>
      </View>
      <View>
      <Text style={styles.id}>아이디</Text>
        <TextInput
          style={styles.inputin}
          placeholder="아이디"
          onChangeText={setId}
          value={id}
        />
      </View>
      <View>
      <Text style={styles.name}>이름</Text>
        <TextInput
          style={styles.inputin}
          placeholder="이름"
          onChangeText={setName}
          value={name}
        />
      </View>
      <View>
      <Text style={styles.password}>비밀번호</Text>
        <TextInput
          style={styles.inputin}
          placeholder="비밀번호"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
      </View>
      <View>
      <Text style={styles.password}>비밀번호 확인</Text>
        <TextInput
          style={styles.inputin}
          placeholder="비밀번호 확인"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.bt} backgroundColor="#F0F0F0">
        <Button title="회원가입" 
        style={styles.btin} color={"#000000"}
         onPress={handleSignup} />
      </View>
      <TouchableOpacity style={styles.mem}>
        <Text style={styles.memText} onPress={handleRegister}>로그인</Text>
      </TouchableOpacity>
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
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  id: {
    marginBottom: 5,
    fontSize: 16,
  },
  name:{
    marginBottom: 5,
    fontSize: 16,
  },
  password: {
    marginBottom: 5,
    fontSize: 16,
  },
  inputin: {
    width: 250,
    height: 40,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    marginBottom: 30,
    paddingLeft: 10,
  },
  bt: {
    marginTop: 20,
    width: 250,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  btin: {
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  mem: {
    marginTop:20,
    marginLeft: 285,
    marginBottom:200,
    fontSize: 20,
  },
  memText: {
    fontSize: 15,
    fontWeight: "400",
    color: "gray",
  },
});
