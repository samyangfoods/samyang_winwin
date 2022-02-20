import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Axios } from "react-native-axios/lib/axios";
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
import Address from "../Address";
import defaultUser from "../../assets/defaultUser.png";
import * as ImagePicker from "expo-image-picker";

const UserInfo = ({ navigation, route }) => {
  const mockApi = route.params.userInfo;
  const [modal, setModal] = useState(false);
  const [channel, setChannel] = useState(mockApi.channel);
  const [client, setClient] = useState(mockApi.client);
  const [phoneNumber, setPhoneNumber] = useState(mockApi.phoneNumber);
  const [address, setAddress] = useState(mockApi.address);
  const [userImage, setUserImage] = useState(null);

  const addUserImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      let reader = new FileReader();
      reader.onload = () => {
        console.log("userProfile Uploaded", reader.result);
      };
      reader.readAsDataURL(result.uri);
      setUserImage(result.uri);
    }
  };

  const handleChannel = (text) => {
    setChannel(text);
  };
  const handleClient = (text) => {
    setClient(text);
  };
  const handlePhoneNumber = (text) => {
    setPhoneNumber(text);
  };

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
            <Text>채널</Text>
            <InputShort
              value={channel}
              onChangeText={(text) => handleChannel(text)}
            />
          </VerticalDiv>
          <VerticalDiv>
            <Text>점포명</Text>
            <InputShort
              value={client}
              onChangeText={(text) => handleClient(text)}
            />
          </VerticalDiv>
        </HorizontalDiv>

        <HorizontalDiv>
          <VerticalDiv>
            <Text>전화번호</Text>
            <Input
              value={phoneNumber}
              onChangeText={(text) => handlePhoneNumber(text)}
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
          <BtnText onPress={submitNewUserInfo}>수정하기</BtnText>
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
