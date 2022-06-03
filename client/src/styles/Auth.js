// Login, Register

import styled from "styled-components/native";

// Universal
export const Container = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const SubContainer = styled.View`
  align-items: center;
`;

export const ScrollView = styled.ScrollView`
  width: 100%;
  margin: 5% 0 10% 0;
`;
export const Image = styled.Image`
  width: 200px;
  height: 100px;
`;
export const Input = styled.TextInput`
  width: 300px;
  height: 55px;
  padding: 3% 5%;
  margin: 1.5% 0;
  border: 1px solid #eee;
  border-radius: 6px;
`;
export const LoginBtn = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff7d0d;
  width: 300px;
  padding: 3% 0;
  margin-top: 10%;
  border-radius: 7px;
`;
export const PasswordContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const BtnText = styled.Text`
  font-weight: 900;
  color: #fff;
`;
export const CreateBtn = styled(LoginBtn)`
  border: 1px solid #d3cdcd;
  padding: 3% 0;
  margin-top: 8%;
  background-color: #fff;
`;
export const CreateText = styled(BtnText)`
  color: #d3cdcd;
`;
export const PasswordIcon = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  margin-right: 1%;
`;

// Login

// Register
export const InputShort = styled(Input)`
  width: 140px;
`;
export const HorizontalDiv = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
`;

export const Btn = styled.TouchableOpacity`
  width: 300px;
  border: 1px solid #eee;
  padding: 3% 5%;
  margin: 0 0 3% 0;
`;
