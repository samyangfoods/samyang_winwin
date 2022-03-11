import React from "react";
import { BtnText, CreateBtn, CreateText, LoginBtn } from "../../styles/Auth";
import { MarketContainer } from "../../styles/MarketStyle";
import { Text } from "../../styles/Style";

const ProfileDetail = ({ navigation, route }) => {
  const mockApi = route.params.marketList[0];
  console.log(mockApi);

  return (
    <MarketContainer>
      {mockApi.map((res) => (
        <Text key={res}>{res}</Text>
      ))}

      <LoginBtn onPress={() => navigation.navigate("소매점 등록")}>
        <BtnText>소매점 추가하기</BtnText>
      </LoginBtn>

      <CreateBtn onPress={() => navigation.goBack()}>
        <CreateText>뒤로가기</CreateText>
      </CreateBtn>
    </MarketContainer>
  );
};

export default ProfileDetail;
