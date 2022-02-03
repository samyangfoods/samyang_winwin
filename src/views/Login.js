import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Axios } from "react-native-axios";
import { Ionicons } from "@expo/vector-icons";
import logo from "../assets/logo.png";
import { Text } from "../styles/Style";
import {
  Container,
  Image,
  Input,
  LoginBtn,
  PasswordContainer,
  BtnText,
  CreateBtn,
  CreateText,
  PasswordIcon,
} from "../styles/Auth";

const Login = ({ navigation }) => {
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);
  const [showing, setShowing] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
  // BE will verify user info and issue a token.
  // FE will receive the token and save it to user's localstorage.
  const submitUserInfo = async () => {
    navigation.navigate("Stack");
    // await Axios.post("sampleApi", { id, password });
  };

  useEffect(() => {
    checkUserLogin();
  }, []);

  return (
    <Container>
      <Image source={logo} />
      <Text style={{ fontSize: 30, marginBottom: 40 }}>로 그 인</Text>
      <Input
        placeholder="아이디"
        onChangeText={(text) => handleId(text)}
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
      <LoginBtn onPress={submitUserInfo}>
        <BtnText>로그인</BtnText>
      </LoginBtn>
      <CreateBtn onPress={() => navigation.navigate("Register")}>
        <CreateText>가입하기</CreateText>
      </CreateBtn>
    </Container>
  );
};

export default Login;
