import { useState } from "react";
import axios from "axios";
import { Alert } from "react-native";

const UseSignup = (navigation: any) => {
  const [id, setId] = useState("");
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    navigation.navigate("Login");
  };
  const handleSignup = async () => {
    if (!id || !username || !password || !confirmPassword) {
      Alert.alert("경고", "모든 필드를 입력하세요.");
      return;
    }
  
    if (password !== confirmPassword) {
      Alert.alert("경고", "비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    try {
      const response = await axios.post("#", {
        id,
        username,
        password,
      });
      if (response.status === 200) {
        console.log("회원가입 성공");
        navigation.navigate("Login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    id,
    setId,
    username,
    setName,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleRegister,
    handleSignup,
  };
};
export default UseSignup;
