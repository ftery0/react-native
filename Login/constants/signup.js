import axios from 'axios';

const SERVER_URL = 'http://localhost:8080/createuser'; 

export const CreatUser = async (id,username, password) => {
  try {
    const response = await axios.post(
      SERVER_URL, 
      { id,username, password }
    );

    if (response.status === 200) {
      console.log('회원가입 성공:', response.data);
      navigation.navigate('Login');
    } else {
      console.log('회원가입 실패:', response.data);
    }
  } catch (error) {
    console.error('서버 통신 오류:', error);
  }
};
