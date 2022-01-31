import React, { useState } from "react";
import { Axios } from "react-native-axios";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import logo from "../assets/logo.png";
import Address from "./Address";
import { AntDesign } from "@expo/vector-icons";

const Register = ({ navigation }) => {
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirmation, setPasswordConfirmation] = useState(null);
  const [channel, setChannel] = useState(null);
  const [storeName, setStoreName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [address, setAddress] = useState(null);
  const [showing, setShowing] = useState(true);
  const [showingConfirmation, setShowingConfirmation] = useState(true);
  const [modal, setModal] = useState(false);

  const handleUserId = (text) => {
    setUserId(text);
  };
  const handlePassword = (text) => {
    setPassword(text);
  };
  const handlePasswordConfirmation = (text) => {
    setPasswordConfirmation(text);
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
  const handleUserImage = (text) => {
    setUserImage(text);
  };

  const submitUserInformation = async () => {
    const userObj = {
      userId,
      password,
      passwordConfirmation,
      channel,
      storeName,
      phoneNumber,
      userImage,
      address,
    };
    await Axios.post("http://localhost:5000/user/register", userObj)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Image source={logo} />
      <Text style={{ fontSize: 20, marginBottom: 40 }}>회 원 가 입</Text>
      <Input
        placeholder="아이디"
        value={userId}
        autoCapitalize="none"
        onChangeText={(text) => handleUserId(text)}
      />
      <PasswordContainer>
        <Input
          placeholder="비밀번호"
          secureTextEntry={showing ? false : true}
          value={password}
          autoCapitalize="none"
          onChangeText={(text) => handlePassword(text)}
        />
        <PasswordIcon onPress={() => setShowing((prev) => !prev)}>
          {showing ? (
            <Ionicons name="eye-off-outline" size={24} color="black" />
          ) : (
            <Ionicons name="eye-outline" size={24} color="black" />
          )}
        </PasswordIcon>
      </PasswordContainer>

      <PasswordContainer>
        <Input
          placeholder="비밀번호 확인"
          secureTextEntry={showingConfirmation ? false : true}
          value={passwordConfirmation}
          autoCapitalize="none"
          onChangeText={(text) => handlePasswordConfirmation(text)}
        />
        <PasswordIcon onPress={() => setShowingConfirmation((prev) => !prev)}>
          {showingConfirmation ? (
            <Ionicons name="eye-off-outline" size={24} color="black" />
          ) : (
            <Ionicons name="eye-outline" size={24} color="black" />
          )}
        </PasswordIcon>
      </PasswordContainer>

      <HorizontalDiv>
        <InputShort
          placeholder="채널"
          value={channel}
          autoCapitalize="none"
          onChangeText={(text) => handleChannel(text)}
          keyboardType="numeric"
        />
        <InputShort
          placeholder="점포명"
          value={storeName}
          // autoCapitalize="none"
          onChangeText={(text) => handleStoreName(text)}
        />
      </HorizontalDiv>

      <HorizontalDiv>
        <InputShort
          placeholder="전화번호"
          value={phoneNumber}
          autoCapitalize="none"
          onChangeText={(text) => handlePhoneNumber(text)}
          keyboardType="numeric"
        />
        <InputShort
          placeholder="이미지"
          value={userImage}
          autoCapitalize="none"
          onChangeText={(text) => handleUserImage(text)}
        />
      </HorizontalDiv>

      <Btn onPress={() => setModal(true)}>
        <Text>{address ? address.roadAddress : "주소 검색"}</Text>
      </Btn>

      {/* Need to add the terms of use */}

      <LoginBtn>
        <BtnText onPress={submitUserInformation}>가입 신청하기</BtnText>
      </LoginBtn>

      <CreateBtn onPress={() => navigation.goBack()}>
        <CreateText>뒤로가기</CreateText>
      </CreateBtn>

      {modal && (
        <AddressContainer>
          <BtnAddressContainer>
            <BtnAddress onPress={() => setModal(false)}>
              <AntDesign name="close" size={30} color="black" />
            </BtnAddress>
          </BtnAddressContainer>
          <Address setAddress={setAddress} setModal={setModal} />
        </AddressContainer>
      )}
    </Container>
  );
};

export default Register;

const Container = styled.KeyboardAvoidingView`
  align-items: center;
  height: 100%;
  padding-top: 7%;
`;
const Input = styled.TextInput`
  width: 300px;
  border: 1px solid #eee;
  padding: 3% 5%;
  margin: 0 0 3% 0;
`;
const InputShort = styled(Input)`
  width: 140px;
`;
const LoginBtn = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff7d0d;
  width: 300px;
  padding: 3% 0;
  margin-top: 10%;
  border-radius: 7px;
`;
const PasswordContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Text = styled.Text``;
const BtnText = styled.Text`
  font-weight: 900;
  color: #fff;
`;
const CreateBtn = styled(LoginBtn)`
  border: 1px solid #d3cdcd;
  padding: 3% 0;
  margin-top: 8%;
  background-color: #fff;
`;
const CreateText = styled(BtnText)`
  color: #d3cdcd;
`;
const PasswordIcon = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  margin-right: 1%;
`;
const HorizontalDiv = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
`;
const Image = styled.Image`
  width: 200px;
  height: 100px;
`;
const Btn = styled.TouchableOpacity`
  width: 300px;
  border: 1px solid #eee;
  padding: 3% 5%;
  margin: 0 0 3% 0;
`;
const AddressContainer = styled.View`
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;
const BtnAddress = styled.TouchableOpacity`
  margin: 7% 3% 0 0;
`;

const BtnAddressContainer = styled.View`
  align-items: flex-end;
`;
