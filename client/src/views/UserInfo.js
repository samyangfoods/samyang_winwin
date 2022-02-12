import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Axios } from "react-native-axios/lib/axios";
import styled from "styled-components/native";
import logo from "../assets/logo.png";
import {
  AddressContainer,
  Btn,
  BtnAddress,
  BtnAddressContainer,
  BtnText,
  CreateBtn,
  CreateText,
  InputShort,
  LoginBtn,
} from "../styles/Auth";
import Address from "./Address";

const UserInfo = ({ navigation, route }) => {
  const [modal, setModal] = useState(false);
  const [address, setAddress] = useState(null);
  const mockApi = route.params.userInfo;

  const submitNewUserInfo = async () => {
    const newUserInfo = {};
    // Send new user info to BE with user's own id (ex)ObjectId in MongoDB.
    // BE will find previous data with the given id and update them ( ex. findOneAndUpdate )

    //   await Axios.post("Api", {newUserInfo}).then(res => back to profile).catch(error => console.log(error));
  };

  return (
    <Container>
      <Top>
        <LogoImage source={logo} />
        <Text>사용자 정보</Text>
      </Top>
      <Bottom>
        <HorizontalDiv>
          <VerticalDiv>
            <Text>채널</Text>
            <InputShort placeholder={mockApi.channel} />
          </VerticalDiv>
          <VerticalDiv>
            <Text>점포명</Text>
            <InputShort placeholder={mockApi.client} />
          </VerticalDiv>
        </HorizontalDiv>

        <HorizontalDiv>
          <VerticalDiv>
            <Text>전화번호</Text>
            <InputShort placeholder={mockApi.phoneNumber} />
          </VerticalDiv>
          <VerticalDiv>
            <Text>이미지</Text>
            <InputShort placeholder={mockApi.client} />
          </VerticalDiv>
        </HorizontalDiv>

        <AddressDiv>
          <Text>주소</Text>
          <Btn onPress={() => setModal(true)}>
            <Text>{address ? address : mockApi.address}</Text>
          </Btn>
        </AddressDiv>

        <LoginBtn>
          <BtnText onPress={submitNewUserInfo}>수정하기</BtnText>
        </LoginBtn>

        <CreateBtn onPress={() => navigation.goBack()}>
          <CreateText>뒤로가기</CreateText>
        </CreateBtn>
      </Bottom>

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

export default UserInfo;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 5% 0;
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
