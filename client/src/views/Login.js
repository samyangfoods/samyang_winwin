import React, { useState, useEffect, useCallback, useRef } from "react";
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
import { useDispatch } from "react-redux";
import userSlice from "../redux/slices/user";
import { useLogin, useTokenLogin } from "../hooks/UserHooks";
import * as SecureStore from "expo-secure-store";
import * as SplashScreen from "expo-splash-screen";

const Login = ({ navigation }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showing, setShowing] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);
  const idRef = useRef();
  const passwordRef = useRef();
  const btnActivation = Boolean(userId && password);
  const dispatch = useDispatch();

  // If system finds current login data with user's token, then navigation would move to the main page.
  // TODO: 타임아웃 삭제
  useEffect(() => {
    const checkUserLogin = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        const token = await SecureStore.getItemAsync("token");
        // console.log("🔥🔥🔥 token in login", token);

        if (token) {
          const userObjectId = await useTokenLogin(token);

          dispatch(
            userSlice.actions.setUser({
              userId: userObjectId,
              token: token,
            })
          );

          navigation.navigate("Stack");
        } else {
          return;
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setTimeout(async () => await SplashScreen.hideAsync(), 350);
      }
    };
    checkUserLogin();
  }, []);

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
      const response = await useLogin(userId, password);

      dispatch(
        userSlice.actions.setUser({
          userId: response._id,
          token: response.token,
        })
      );

      navigation.navigate("Stack");
    } catch (error) {
      Alert.alert("알림", "오류 발생");
    } finally {
      setLoginLoading(false);
    }
  }, [navigation, userId, password]);

  const leadToSignUp = useCallback(() => {
    navigation.navigate("Register");
  }, [navigation]);

  return (
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
          secureTextEntry={showing}
          onChangeText={(text) => handlePassword(text)}
          value={password}
          autoCapitalize="none"
          ref={passwordRef}
          required={true}
        />
        <PasswordIcon onPress={() => setShowing((prev) => !prev)}>
          {showing ? (
            <Ionicons name="eye-outline" size={24} color="black" />
          ) : (
            <Ionicons name="eye-off-outline" size={24} color="black" />
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
