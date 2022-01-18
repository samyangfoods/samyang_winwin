import React, { useState } from "react";
import { Text, View } from "react-native";
import { Axios } from "react-native-axios";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const CreateUser = ({ navigation }) => {
  const [id, setId] = useState(null);
  const [password, setPassword] = useState(null);
  const [showing, setShowing] = useState(true);

  return (
    <Container>
      <Text style={{ fontSize: 30, marginBottom: 40 }}>회 원 가 입</Text>
      <Input placeholder="아이디" value={id} autoCapitalize="none" />
      <PasswordContainer>
        <Input
          placeholder="비밀번호"
          secureTextEntry={showing ? false : true}
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
      <LoginBtn>
        <BtnText>가입 신청하기</BtnText>
      </LoginBtn>
      <CreateBtn onPress={() => navigation.goBack()}>
        <CreateText>뒤로가기</CreateText>
      </CreateBtn>
    </Container>
  );
};

export default CreateUser;

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
