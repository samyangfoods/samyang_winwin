import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import styled from "styled-components/native";
import logo from "../../assets/logo.png";
import {
  Btn,
  BtnText,
  CreateBtn,
  CreateText,
  Image,
  Input,
  InputShort,
  LoginBtn,
} from "../../styles/Auth";
import Address from "../../components/Address";
import defaultUser from "../../assets/defaultUser.png";
import { ActivityIndicator, Alert } from "react-native";
import {
  useCleanUpPhoneNumberForm,
  useImageBase64,
  usePhoneNumberFormat,
} from "../../hooks/Util";
import { useProfileChange } from "../../hooks/UserHooks";
import { useSelector } from "react-redux";

const UserInfo = ({ navigation, route }) => {
  const userInfo = route.params.userInfo;
  const token = useSelector((state) => state.user.token);

  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState(userInfo.userName);
  const [channel, setChannel] = useState(userInfo.channel);
  const [storeName, setStoreName] = useState(userInfo.storeName);
  const [phoneNumber, setPhoneNumber] = useState(
    usePhoneNumberFormat(userInfo.phoneNumber)
  );
  const [address, setAddress] = useState(userInfo.userAddress.warehouse);
  const [userImage, setUserImage] = useState(userInfo.userImage);

  const addUserImage = async () => {
    const reponse = await useImageBase64();
    setUserImage(reponse);
  };

  const handleUserName = (text) => {
    setUserName(text);
  };
  const handleChannel = (text) => {
    setChannel(text);
  };
  const handleStoreName = (text) => {
    setStoreName(text);
  };
  const handlePhoneNumber = (text) => {
    setPhoneNumber(text);
  };
  const cleanPhoneNumberFormat = (num) => {
    const number = useCleanUpPhoneNumberForm(num);
    setPhoneNumber(number);
  };

  const submitNewUserInfo = async () => {
    if (isLoading) return;

    const newUserInfo = {
      channel,
      userName,
      storeName,
      address: { warehouse: address },
      phoneNumber: useCleanUpPhoneNumberForm(phoneNumber),
      userImage,
      role: "dealer",
    };

    try {
      setIsLoading(true);
      await useProfileChange(userInfo._id, newUserInfo, token);
      Alert.alert("알림", "사용자 정보가 변경되었습니다.");
      navigation.goBack();
    } catch (error) {
      console.log("Error in profile change", error);
      Alert.alert("알림", "오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Top>
        <LogoImage source={logo} />
        <Text>사용자 정보</Text>
      </Top>
      <Bottom>
        <Image
          source={userImage ? { uri: userImage } : defaultUser}
          style={{ width: 100, height: 100, borderRadius: 100 }}
        />

        <AntDesign
          name="camerao"
          size={32}
          color="black"
          style={{ marginTop: 15, marginBottom: 10 }}
          onPress={addUserImage}
        />

        <HorizontalDiv>
          <VerticalDiv>
            <Text>사용자 이름</Text>
            <Input
              value={userName}
              onChangeText={(text) => handleUserName(text)}
            />
          </VerticalDiv>
        </HorizontalDiv>

        <HorizontalDiv>
          <VerticalDiv>
            <Text>채널</Text>
            <InputShort
              value={channel}
              onChangeText={(text) => handleChannel(text)}
            />
          </VerticalDiv>
          <VerticalDiv>
            <Text>점포명</Text>
            <InputShort
              value={storeName}
              onChangeText={(text) => handleStoreName(text)}
            />
          </VerticalDiv>
        </HorizontalDiv>

        <HorizontalDiv>
          <VerticalDiv>
            <Text>전화번호</Text>
            <Input
              value={phoneNumber}
              onChangeText={(text) => handlePhoneNumber(text)}
              onBlur={() => setPhoneNumber(usePhoneNumberFormat(phoneNumber))}
              onPressIn={() => cleanPhoneNumberFormat(phoneNumber)}
            />
          </VerticalDiv>
        </HorizontalDiv>

        <AddressDiv>
          <Text>주소</Text>
          <Btn onPress={() => setModal(true)}>
            <Text>{address}</Text>
          </Btn>
        </AddressDiv>

        <LoginBtn>
          <BtnText onPress={submitNewUserInfo}>
            {isLoading ? <ActivityIndicator color="white" /> : "수정하기"}
          </BtnText>
        </LoginBtn>

        <CreateBtn onPress={() => navigation.goBack()}>
          <CreateText>뒤로가기</CreateText>
        </CreateBtn>
      </Bottom>

      {modal && <Address setAddress={setAddress} setModal={setModal} />}
    </Container>
  );
};

export default UserInfo;

const Container = styled.ScrollView`
  flex: 1;
  flex-direction: column;
  padding: 0 0 5% 0;
`;
const Top = styled.View`
  flex-direction: column;
  align-items: center;
`;
const Bottom = styled.View`
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  padding: 0 12%;
`;
const Text = styled.Text``;
const LogoImage = styled.Image`
  width: 200px;
  height: 100px;
`;
const AddressDiv = styled.View`
  width: 100%;
`;
const HorizontalDiv = styled.View`
  flex-direction: row;
  margin-bottom: 5%;
`;
const VerticalDiv = styled.View`
  margin: 0 2%;
`;
