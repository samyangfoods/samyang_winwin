import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { Alert } from "react-native";
import * as SecureStore from "expo-secure-store";
import { usePhoneNumberFormat } from "../../hooks/util";
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
import { imageW140 } from "../../hooks/urlSetting";
import { BasicTouchableOpacity } from "../../styles/Style";

const Profile = ({ navigation }) => {
  // Redux variables
  const userId = useSelector((state) => state.user.userId);
  const userName = useSelector((state) => state.user.userName);
  const channel = useSelector((state) => state.user.channel);
  const role = useSelector((state) => state.user.role);
  const phoneNumber = useSelector((state) => state.user.phoneNumber);
  const userAddress = useSelector((state) => state.user.userAddress);
  const storeName = useSelector((state) => state.user.storeName);
  const userImage = useSelector((state) => state.user.userImage);

  // Hooks variable
  const [userInfo, setUserInfo] = useState(null);

  // This page will load redux data
  // π₯ Need to check why the userImage doesn't appear directly (May 2022)
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

  // Logout
  const handleLogOut = async () => {
    await SecureStore.deleteItemAsync("token");
    Alert.alert("μλ¦Ό", "λ‘κ·Έμμ λμμ΅λλ€.");
    navigation.navigate("Modal");
  };

  return (
    <Container>
      {userInfo ? (
        <>
          <Top>
            <TopTitle>
              <Left>
                <Text>μ¬μ©μ μ λ³΄</Text>
              </Left>
              <Right>
                <BasicTouchableOpacity
                  onPress={() =>
                    navigation.navigate("μ¬μ©μ μ λ³΄λ³κ²½", { userInfo })
                  }
                >
                  <Text style={{ color: "#FA4A0C" }}>μμ νκΈ°</Text>
                </BasicTouchableOpacity>
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
            <Btn onPress={() => navigation.navigate("μλ§€μ  λͺ©λ‘")}>
              <Text>μλ§€μ  λͺ©λ‘</Text>
              <AntDesign name="right" size={16} color="black" />
            </Btn>
            <Btn onPress={handleLogOut}>
              <Text>λ‘κ·Έμμ</Text>
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
