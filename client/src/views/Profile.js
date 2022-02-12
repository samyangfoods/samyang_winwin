import React from "react";
import styled from "styled-components/native";
import winwin from "../assets/winwin.png";
import { AntDesign } from "@expo/vector-icons";

// Getting user data with context api or redux ...
const userInfo = {
  id: "winwin1234",
  name: "홍길동",
  client: "윈윈상사",
  channel: "특약점",
  phoneNumber: "010-1111-2222",
  market: ["지구마트 태양점", "카톡마트", "윈윈할인마트"],
  image: winwin,
  address: "대구광역시 달서구 이곡동",
};

const Profile = ({ navigation }) => {
  return (
    <Container>
      <Top>
        <TopTitle>
          <Left>
            <Text>사용자 정보</Text>
          </Left>
          <Right>
            <Text
              style={{ color: "#FA4A0C" }}
              onPress={() =>
                navigation.navigate("사용자 정보변경", { userInfo })
              }
            >
              수정하기
            </Text>
          </Right>
        </TopTitle>
        <UserCard>
          <CardLeft>
            <Image source={userInfo.image} />
          </CardLeft>
          <CardRight>
            <Name>{userInfo.client}</Name>
            <Text>{userInfo.name}</Text>
            <HorizontalSeparator />
            <Text>{userInfo.phoneNumber}</Text>
            <HorizontalSeparator />
            <Text>{userInfo.channel}</Text>
            <Text>{userInfo.address}</Text>
          </CardRight>
        </UserCard>
      </Top>
      <Bottom>
        <Btn>
          <Text>행사 (준비중입니다.)</Text>
          <AntDesign name="right" size={16} color="black" />
        </Btn>
        <Btn>
          <Text>주문 (준비중입니다.)</Text>
          <AntDesign name="right" size={16} color="black" />
        </Btn>
        <Btn onPress={() => navigation.navigate("소매점 목록")}>
          <Text>소매점 목록</Text>
          <AntDesign name="right" size={16} color="black" />
        </Btn>
      </Bottom>
    </Container>
  );
};

export default Profile;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 5%;
`;
const Top = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
  width: 100%;
`;
const TopTitle = styled.View`
  flex-direction: row;
  margin: 2%;
`;
const Left = styled.View`
  flex: 1;
  align-items: flex-start;
`;
const Right = styled.View`
  flex: 1;
  align-items: flex-end;
`;
const UserCard = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  padding: 5% 0;
`;
const CardLeft = styled.View`
  flex: 1;
  align-items: center;
`;
const CardRight = styled.View`
  flex: 1.5;
  flex-direction: column;
`;
const Bottom = styled.View`
  flex: 3;
  padding-top: 5%;
`;
const Text = styled.Text`
  color: #000;
`;
const Name = styled(Text)`
  font-size: 20px;
`;
const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 20px;
`;
const Btn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2% 0;
  padding: 0 5%;
  width: 100%;
  height: 60px;
  background-color: #f2f2f2;
  border-radius: 20px;
`;
const HorizontalSeparator = styled.View`
  width: 90%;
  margin: 3% 0;
  border: 0.5px solid #aaa;
`;
