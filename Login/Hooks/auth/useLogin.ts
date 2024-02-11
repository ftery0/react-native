import { useState } from "react";
import axios from "axios";
const UseLogin = (navigation:any) => { //일단 any
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const isValidInput = (input: string) => /^[a-zA-Z0-9]+$/.test(input);

  const handleLogin = async () => {
    if (id === "" || password === "") {
      
      alert("아이디와 비밀번호를 입력하세요.");
      return;
    }

    const success = await axios.post("#",{id, password});
    if (success.status === 200) {
      navigation.navigate('Main');
    } else {
      alert("로그인 정보가 맞지 않습니다");
      return;
    }
  };

  return {
    id,
    setId,
    password,
    setPassword,
    isValidInput,
    handleLogin,
  };
};

export default UseLogin;
