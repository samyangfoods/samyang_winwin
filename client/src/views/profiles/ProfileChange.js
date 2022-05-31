import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
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
import { ActivityIndicator, Alert } from "react-native";
import {
  useCleanUpPhoneNumberForm,
  useImageUri,
  usePhoneNumberFormat,
} from "../../hooks/util";
import { useProfileChange } from "../../hooks/userHooks";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Top,
  Bottom,
  Text,
  LogoImage,
  AddressDiv,
  HorizontalDiv,
  VerticalDiv,
} from "../../styles/profiles/UserProfileChange";
import Channel from "../../components/Channel";
import { imageW140 } from "../../hooks/urlSetting";
import userSlice from "../../redux/slices/user";

const UserInfo = ({ navigation, route }) => {
  const { userInfo } = route.params;
  const token = useSelector((state) => state.user.token);
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState(userInfo.userName);
  const [channel, setChannel] = useState(
    userInfo.channel === "특약점"
      ? { label: "특약점", value: 1 }
      : userInfo.channel === "중대형마트"
      ? { label: "중대형마트", value: 2 }
      : userInfo.channel === "기타"
      ? { label: "기타", value: 3 }
      : null
  );
  const [storeName, setStoreName] = useState(userInfo.storeName);
  const [phoneNumber, setPhoneNumber] = useState(
    usePhoneNumberFormat(userInfo.phoneNumber)
  );
  const [address, setAddress] = useState(userInfo.userAddress);
  const [userImage, setUserImage] = useState(userInfo.userImage);
  const dispatch = useDispatch();

  const addUserImage = async () => {
    const response = await useImageUri();

    const obj = {
      uri: response.uri,
      type: response.type,
      name: response.name,
    };

    setUserImage(obj);
  };
  const handleUserName = (text) => {
    setUserName(text);
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
      channel: channel.label,
      userName,
      storeName,
      userAddress: address,
      phoneNumber: useCleanUpPhoneNumberForm(phoneNumber),
      userImage,
    };

    try {
      setIsLoading(true);
      console.log("🔥 token in profileChange", token);
      const response = await useProfileChange(newUserInfo, token);
      if (response) {
        dispatch(
          userSlice.actions.setUser({
            userName: response.user.userName,
            userImage: response.user.userImage,
            channel: response.user.channel,
            storeName: response.user.storeName,
            phoneNumber: response.user.phoneNumber,
            userAddress: response.user.userAddress,
          })
        );
      }

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
          source={
            userImage.uri
              ? { uri: userImage.uri }
              : { uri: imageW140 + userImage }
          }
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
            <Text>점포명</Text>
            <InputShort
              value={storeName}
              onChangeText={(text) => handleStoreName(text)}
              style={{ width: 200 }}
            />
          </VerticalDiv>
          <VerticalDiv>
            <Text style={{ marginLeft: 10 }}>채널</Text>
            <Channel pickedData={channel} setPickedData={setChannel} />
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

        <LoginBtn onPress={submitNewUserInfo}>
          <BtnText>
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
