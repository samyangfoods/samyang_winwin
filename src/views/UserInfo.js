import React from "react";
import { Axios } from "react-native-axios/lib/axios";
import styled from "styled-components/native";
import logo from "../assets/logo.png";
import { BtnText, CreateBtn, CreateText, LoginBtn } from "../styles/Auth";

const UserInfo = ({ navigation, route }) => {
  const mockApi = route.params.userInfo;
  console.log(mockApi);

  const submitNewUserInfo = async () => {
    const newUserInfo = {};
    // Send new user info to BE with user's own id (ex)ObjectId in MongoDB.
    // BE will find previous data with the given id and update them ( ex. findOneAndUpdate )

    //   await Axios.post("Api", {newUserInfo}).then(res => back to profile).catch(error => console.log(error));
  };

  return (
    <Container>
      <Top>
        <LogoImage source={logo} />
      </Top>
      <Bottom>
        <Text>{mockApi.id}</Text>
        <Text>{mockApi.name}</Text>
        <Text>{mockApi.client}</Text>
        <Text>{mockApi.phoneNumber}</Text>
        <Text>{mockApi.image}</Text>

        <LoginBtn>
          <BtnText onPress={submitNewUserInfo}>수정하기</BtnText>
        </LoginBtn>

        <CreateBtn onPress={() => navigation.goBack()}>
          <CreateText>뒤로가기</CreateText>
        </CreateBtn>
      </Bottom>
    </Container>
  );
};

export default UserInfo;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 5%;
`;
const Top = styled.View`
  flex-direction: column;
  align-items: center;
`;
const Bottom = styled.View`
  flex-direction: column;
  align-items: center;
`;
const Text = styled.Text``;
const LogoImage = styled.Image`
  width: 200px;
  height: 100px;
`;
