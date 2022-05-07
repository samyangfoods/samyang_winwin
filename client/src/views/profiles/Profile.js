import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { Alert } from "react-native";
import * as SecureStore from "expo-secure-store";
import { usePhoneNumberFormat } from "../../hooks/Util";
import {
  Container,
  Top,
  TopTitle,
  Left,
  Right,
  UserCard,
  CardLeft,
  CardRight,
  Bottom,
  Text,
  Name,
  Image,
  Btn,
  HorizontalSeparator,
} from "../../styles/profiles/UserProfile";
import DataLoading from "../../components/DataLoading";
import { imageW140 } from "../../hooks/UrlSetting";

const Profile = ({ navigation }) => {
  const userId = useSelector((state) => state.user.userId);
  const userName = useSelector((state) => state.user.userName);
  const channel = useSelector((state) => state.user.channel);
  const role = useSelector((state) => state.user.role);
  const phoneNumber = useSelector((state) => state.user.phoneNumber);
  const userAddress = useSelector((state) => state.user.userAddress);
  const storeName = useSelector((state) => state.user.storeName);
  const userImage = useSelector((state) => state.user.userImage);
  const [userInfo, setUserInfo] = useState(null);

  // Need to check why the userImage doesn't appear directly.
  useEffect(() => {
    const setUserProfile = () => {
      const userObj = {
        userId,
        userName,
        userImage,
        channel,
        role,
        storeName,
        phoneNumber,
        userAddress,
      };
      setUserInfo(userObj);
    };

    setUserProfile();
  }, [
    setUserInfo,
    userId,
    userName,
    channel,
    role,
    phoneNumber,
    userAddress,
    storeName,
    userImage,
  ]);

  // logout
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
                <Image
                  source={{
                    uri: imageW140 + userInfo.userImage,
                  }}
                />
              </CardLeft>
              <CardRight>
                <Name>{userInfo.userName}</Name>
                <Text>{userInfo.storeName}</Text>

                <HorizontalSeparator />

                <Text>{usePhoneNumberFormat(userInfo.phoneNumber)}</Text>

                <HorizontalSeparator />

                <Text>{userInfo.channel}</Text>
                <Text>{userInfo.address}</Text>
              </CardRight>
            </UserCard>
          </Top>

          <Bottom>
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
        <DataLoading />
      )}
    </Container>
  );
};

export default Profile;
