import React from "react";
import styled from "styled-components/native";
import sample from "../assets/sample.png";

// Getting user data with context api or redux ...
const userInfo = {
  id: "winwin1234",
  name: "윈윈",
  client: "윈윈상사",
  market: ["지구마트 태양점", "카톡마트", "윈윈할인마트"],
  image: sample,
};

const Profile = () => {
  return (
    <Container>
      <Top>
        <TopLeft>
          <Image source={userInfo.image} />
        </TopLeft>
        <TopRight>
          <Name>{userInfo.name}</Name>
          <Text>{userInfo.client}</Text>
        </TopRight>
      </Top>
      <Bottom>
        <Text style={{ marginBottom: 10 }}>매장 내역</Text>
        {userInfo.market.map((data) => (
          <Text key={data}>{data}</Text>
        ))}
      </Bottom>
    </Container>
  );
};

export default Profile;

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 5%;
`;
const Top = styled.View`
  flex-direction: row;
  margin-bottom: 5%;
`;
const TopLeft = styled.View`
  flex: 1;
`;
const TopRight = styled.View`
  flex: 2;
  flex-direction: column;
`;
const Bottom = styled.ScrollView``;
const Text = styled.Text`
  color: #000;
`;
const Name = styled(Text)`
  font-size: 20px;
`;
const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 999px;
`;
