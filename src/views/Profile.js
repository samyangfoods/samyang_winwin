import React from "react";
import styled from "styled-components/native";

const Profile = () => {
  return (
    <Container>
      <Top></Top>
      <Bottom>
        <Text>사진 변경</Text>
        <Text>정보 변경</Text>
        <Text>로그아웃</Text>
      </Bottom>
    </Container>
  );
};

export default Profile;

const Container = styled.SafeAreaView`
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
`;

const Top = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const Bottom = styled.ScrollView``;

const Text = styled.Text`
  color: #000;
`;

const Btn = styled.TouchableOpacity``;
