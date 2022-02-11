import React from "react";
import styled from "styled-components/native";
import { BtnText, CreateBtn, CreateText, LoginBtn } from "../styles/Auth";

const ProfileDetail = ({ navigation, route }) => {
  const mockApi = route.params.marketList[0];

  return (
    <Container>
      {mockApi.map((res) => (
        <Text key={res}>{res}</Text>
      ))}

      <LoginBtn onPress={() => navigation.navigate("소매점 등록")}>
        <BtnText>소매점 추가하기</BtnText>
      </LoginBtn>

      <CreateBtn onPress={() => navigation.goBack()}>
        <CreateText>뒤로가기</CreateText>
      </CreateBtn>
    </Container>
  );
};

export default ProfileDetail;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
`;

const Text = styled.Text``;
