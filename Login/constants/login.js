import axios from 'axios';

const SERVER_URL = 'http://localhost:8080'; 

export const loginUser = async (id, password) => {
  try {
    const response = await axios.post(
      `${SERVER_URL}/login`, 
      { id, password }
    );

    if (response.status === 200) {
      return true
      // console.log('로그인 성공:', response.data);
      // navigation.navigate('Main');
    } else {
     return false
      // console.log('로그인 실패:', response.data);
    }
  } catch (error) {
    console.error('서버 통신 오류:', error);
  }
};
