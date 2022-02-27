import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { ActivityIndicator, Alert } from "react-native";
import { useProfile } from "../../hooks/UserHooks";
import * as SecureStore from "expo-secure-store";

const Profile = ({ navigation }) => {
  const userId = useSelector((state) => state.user.userId);
  const [userInfo, setUserInfo] = useState(null);

  const loadUserInfo = async () => {
    const response = await useProfile(userId);
    setUserInfo(response.user);
  };

  useEffect(() => {
    loadUserInfo();
  }, [userInfo]);

  const handleLogOut = async () => {
    await SecureStore.deleteItemAsync("token");
    Alert.alert("알림", "로그아웃 되었습니다.");
    navigation.navigate("Modal");
  };

  return (
    <Container>
      {userInfo ? (
        <>
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
                <Image source={{ uri: userInfo.userImage }} />
              </CardLeft>
              <CardRight>
                <Name>{userInfo.userName}</Name>
                <Text>{userInfo.storeName}</Text>
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
            <Btn onPress={handleLogOut}>
              <Text>로그아웃</Text>
              <AntDesign name="right" size={16} color="black" />
            </Btn>
          </Bottom>
        </>
      ) : (
        <ActivityIndicator style={{ flex: 1 }} />
      )}
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
