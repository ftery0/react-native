import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import useLogin from "../../Hooks/auth/useLogin";

export default function LoginScreen({ navigation }: { navigation: any }) {
  const { id, setId, password, setPassword, isValidInput, handleLogin } =
    useLogin(navigation);
  const handleRegister = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/ch.png")}
        ></Image>
      </View>
      <View>
        <Text style={styles.login}>로그인</Text>
      </View>

      <View style={styles.input}>
        <Text style={styles.id}>아이디</Text>
        <TextInput
          style={styles.inputin}
          placeholder="아이디를 입력해주세요"
          onChangeText={(text) => isValidInput(text) && setId(text)}
        ></TextInput>
      </View>
      <View style={styles.input}>
        <Text style={styles.password}>비밀번호</Text>
        <TextInput
          style={styles.inputin}
          placeholder="비밀번호를 입력해주세요"
          onChangeText={(text) => isValidInput(text) && setPassword(text)}
          value={password}
          secureTextEntry
        ></TextInput>
      </View>
      <View style={styles.bt}>
        <Button
          title="로그인"
          color="black"
          onPress={handleLogin}
        ></Button>
      </View>
      <TouchableOpacity style={styles.mem}>
        <Text style={styles.text} onPress={handleRegister}>
          회원가입
        </Text>
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
  image: {
    width: 100,
    height: 100,
  },
  mem: {
    marginLeft: 285,
    marginTop: 20,
    marginBottom: 170,
    fontSize: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: "400",
    color: "gray",
    
  },
});
