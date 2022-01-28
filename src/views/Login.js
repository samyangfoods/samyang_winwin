import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "react-native";
import { Axios } from "react-native-axios";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);
  const [showing, setShowing] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleId = (text) => {
    setUserId(text);
  };
  const handlePassword = (text) => {
    setPassword(text);
  };

  const checkUserLogin = () => {
    if (isLoggedIn) {
      navigation.navigate("Stack");
    }
  };

  // Send login data to BE to search user data matched.
  const submitUserInfo = async () => {
    await Axios.post("sampleApi", { id, password });
  };

  useEffect(() => {
    checkUserLogin();
  }, []);

  return (
    <Container>
      <Text style={{ fontSize: 25, marginBottom: 80 }}>삼양 로고</Text>
      <Text style={{ fontSize: 30, marginBottom: 40 }}>로 그 인</Text>
      <Input
        placeholder="아이디"
        onChange={handleId}
        value={userId}
        autoCapitalize="none"
      />
      <PasswordContainer>
        <Input
          placeholder="비밀번호"
          secureTextEntry={showing ? false : true}
          onChangeText={(text) => handlePassword(text)}
          value={password}
          autoCapitalize="none"
        />
        <PasswordIcon onPress={() => setShowing((prev) => !prev)}>
          {showing ? (
            <Ionicons name="eye-off-outline" size={24} color="black" />
          ) : (
            <Ionicons name="eye-outline" size={24} color="black" />
          )}
        </PasswordIcon>
      </PasswordContainer>
      <LoginBtn onPress={() => navigation.navigate("Stack")}>
        <BtnText>로그인</BtnText>
      </LoginBtn>
      <CreateBtn onPress={() => navigation.navigate("Register")}>
        <CreateText>가입하기</CreateText>
      </CreateBtn>
    </Container>
  );
};

export default Login;

const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const Input = styled.TextInput`
  width: 300px;
  border: 1px solid #eee;
  padding: 3% 5%;
  margin: 3% 0;
`;
const LoginBtn = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff7d0d;
  width: 300px;
  padding: 3% 0;
  margin-top: 10%;
  border-radius: 7px;
`;
const PasswordContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const BtnText = styled.Text`
  font-weight: 900;
  color: #fff;
`;
const CreateBtn = styled(LoginBtn)`
  border: 1px solid #d3cdcd;
  padding: 3% 0;
  margin-top: 8%;
  background-color: #fff;
`;
const CreateText = styled(BtnText)`
  color: #d3cdcd;
`;
const PasswordIcon = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  margin-right: 1%;
`;
