import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
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
import { ActivityIndicator, Alert } from "react-native";
// Need to Import EncryptedStorage (-> Should solve RN error)
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import userSlice from "../redux/slices/user";

const Login = ({ navigation }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showing, setShowing] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const idRef = useRef();
  const passwordRef = useRef();
  const btnActivation = Boolean(userId && password);
  const dispatch = useDispatch();

  // If system finds current login data, then navigation would move to the main page.
  const checkUserLogin = async () => {
    const userData = await AsyncStorage.getItem("userData");
    setIsLoggedIn(Boolean(userData));
    if (isLoggedIn) {
      navigation.navigate("Stack");
    }
  };
  useEffect(() => {
    checkUserLogin();
  });

  const handleId = useCallback((text) => {
    setUserId(text.trim());
  }, []);
  const handlePassword = useCallback((text) => {
    setPassword(text.trim());
  }, []);

  // Send login data to BE to search user data matched.
  // BE will verify user info and issue a token.
  // FE will receive the token and save it to user's localstorage.
  const submitUserInfo = useCallback(async () => {
    if (loginLoading) return;

    if (!userId || !userId.trim())
      return Alert.alert("알림", "아이디를 입력해주세요.");

    if (!password || !password.trim())
      return Alert.alert("알림", "비밀번호를 입력해주세요.");

    try {
      setLoginLoading(true);
      const { data: userInfo } = await axios.post(
        "http://localhost:5000/api/user/login",
        { userId, password }
      );

      // Redux Here.
      dispatch(
        userSlice.actions.setUser({
          userId: userInfo._id,
          token: userInfo.token,
        })
      );

      // await AsyncStorage.setItem(
      //   "refreshToken",
      //   response.data.data.refreshToken
      // );

      navigation.navigate("Stack");
    } catch (error) {
      Alert.alert("알림", error);
    } finally {
      setLoginLoading(false);
    }
  }, [navigation, userId, password]);

  const leadToSignUp = useCallback(() => {
    navigation.navigate("Register");
  }, [navigation]);

  return (
    // I need Keyboard Dismiss View
    <Container>
      <Image source={logo} />
      <Text style={{ fontSize: 30, marginBottom: 40 }}>로 그 인</Text>
      <Input
        placeholder="아이디"
        onChangeText={(text) => handleId(text)}
        value={userId}
        autoCapitalize="none"
        ref={idRef}
        onSubmitEditing={() => passwordRef.current?.focus()}
        blurOnSubmit={false}
        required={true}
      />
      <PasswordContainer>
        <Input
          placeholder="비밀번호"
          secureTextEntry={showing ? false : true}
          onChangeText={(text) => handlePassword(text)}
          value={password}
          autoCapitalize="none"
          ref={passwordRef}
          required={true}
        />
        <PasswordIcon onPress={() => setShowing((prev) => !prev)}>
          {showing ? (
            <Ionicons name="eye-off-outline" size={24} color="black" />
          ) : (
            <Ionicons name="eye-outline" size={24} color="black" />
          )}
        </PasswordIcon>
      </PasswordContainer>
      <LoginBtn
        onPress={submitUserInfo}
        disabled={!btnActivation}
        style={{ backgroundColor: btnActivation ? "#ff7d0d" : "#aaa" }}
      >
        {loginLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <BtnText>로그인</BtnText>
        )}
      </LoginBtn>
      <CreateBtn onPress={leadToSignUp}>
        <CreateText>가입하기</CreateText>
      </CreateBtn>
    </Container>
  );
};

export default Login;
