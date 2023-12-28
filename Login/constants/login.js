import axios from 'axios';

const SERVER_URL = 'http://localhost:8080/login'; 

export const loginUser = async (id, password) => {
  try {
    const response = await axios.post(
      SERVER_URL, 
      { id, password }
    );

    if (response.status === 200) {
      console.log('로그인 성공:', response.data);
      return true
      
      // navigation.navigate('Main');
    } else {
     return false
      // console.log('로그인 실패:', response.data);
    }
  } catch (error) {
    console.error('서버 통신 오류:', error);
  }
};
