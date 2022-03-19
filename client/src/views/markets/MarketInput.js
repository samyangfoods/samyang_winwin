import React, { useState } from "react";
import Address from "../../components/Address";
import ImageUpload from "../../components/images/ImageUpload";
import { ScrollContainer, Text } from "../../styles/Style";
import { AntDesign } from "@expo/vector-icons";
import {
  MarketInputForm,
  VerticalDiv,
  HorizontalDiv,
  TextInput,
  Btn,
  ThumbnailContainer,
  Image,
  LoginBtn,
  BtnText,
} from "../../styles/MarketStyle";
import { useMarketCreate } from "../../hooks/MarketHooks";
import { useSelector } from "react-redux";
import { Alert } from "react-native";

const MarketInput = ({ navigation }) => {
  const userId = useSelector((state) => state.user.userId);
  const token = useSelector((state) => state.user.token);

  const [modal, setModal] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [marketImage, setMarketImage] = useState(null);
  const [address, setAddress] = useState(null);
  const [marketName, setMarketName] = useState(null);
  const [size, setSize] = useState(null);
  const [pos, setPos] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [income, setIncome] = useState(null);
  const [ref, setRef] = useState(null);

  const handleName = (text) => {
    setMarketName(text);
  };
  const handleSize = (text) => {
    setSize(text);
  };
  const handlePos = (text) => {
    setPos(text);
  };
  const handlePhoneNumber = (text) => {
    setPhoneNumber(text);
  };
  const handleIncome = (text) => {
    setIncome(text);
  };
  const handleModal = () => {
    setModal(true);
    ref?.scrollTo({ y: 0, animated: false });
  };

  const modalIsClosed = () => {
    ref?.scrollToEnd({ animated: false });
  };

  // {uri: 경로, fileName: 파일이름, type: 확장자}
  const sumbitMarketInfo = async () => {
    const formDataMarketImage = new FormData();
    formDataMarketImage.append("marketImage", marketImage);
    formDataMarketImage.append("userId", userId);
    formDataMarketImage.append("marketName", marketName);
    formDataMarketImage.append("size", size);
    formDataMarketImage.append("pos", pos);
    formDataMarketImage.append("phone", phoneNumber);
    formDataMarketImage.append("averageSales", income);
    formDataMarketImage.append("marketAddress", address);

    // const marketObj = {
    //   userId,
    //   marketName,
    //   size,
    //   pos,
    //   phone: phoneNumber,
    //   averageSales: income,
    //   marketAddress: address,
    //   marketImage,
    // };

    try {
      await useMarketCreate(formDataMarketImage, token);
      Alert.alert("알림", "소매점 등록이 완료되었습니다.");
      navigation.goBack();
    } catch (error) {
      Alert.alert("알림", String(error));
    }
  };

  return (
    <ScrollContainer ref={(ref) => setRef(ref)}>
      <MarketInputForm>
        {thumbnail ? (
          <ThumbnailContainer>
            <Image source={{ uri: thumbnail }} />
          </ThumbnailContainer>
        ) : (
          <ThumbnailContainer>
            <AntDesign
              name="camerao"
              size={48}
              color="gray"
              style={{ padding: 20 }}
            />
            <Text style={{ color: "gray", marginBottom: 15 }}>
              아래 버튼을 눌러 이미지를 첨부해주세요.
            </Text>
          </ThumbnailContainer>
        )}

        <Text>이미지 등록</Text>
        <ImageUpload
          placeholder={
            thumbnail ? "이미지 변경" : "소매점 전면 사진 (간판 보이게)"
          }
          setMarketImage={setMarketImage}
          setThumbnail={setThumbnail}
        />

        <Text>소매점명</Text>
        <TextInput
          placeholder="소매점명을 입력하세요"
          value={marketName}
          onChangeText={(text) => handleName(text)}
        />

        <HorizontalDiv>
          <VerticalDiv>
            <Text>평수</Text>
            <TextInput
              placeholder="평수를 입력하세요"
              value={size}
              onChangeText={(text) => handleSize(text)}
            />
          </VerticalDiv>
          <VerticalDiv>
            <Text>POS 수</Text>
            <TextInput
              placeholder="POS 수량을 입력하세요"
              value={pos}
              onChangeText={(text) => handlePos(text)}
            />
          </VerticalDiv>
        </HorizontalDiv>

        <HorizontalDiv>
          <VerticalDiv>
            <Text>전화번호</Text>
            <TextInput
              placeholder="'-' 없이 입력하세요"
              value={phoneNumber}
              onChangeText={(text) => handlePhoneNumber(text)}
            />
          </VerticalDiv>
          <VerticalDiv>
            <Text>월 평균 매출</Text>
            <TextInput
              placeholder="월 평균 매출을 입력하세요"
              value={income}
              onChangeText={(text) => handleIncome(text)}
            />
          </VerticalDiv>
        </HorizontalDiv>

        <Text>주소 검색</Text>
        <Btn onPress={handleModal}>
          <Text>{address ? address : "주소 검색"}</Text>
        </Btn>

        <LoginBtn onPress={sumbitMarketInfo}>
          <BtnText>등록하기</BtnText>
        </LoginBtn>
      </MarketInputForm>

      {modal && (
        <Address
          setAddress={setAddress}
          setModal={setModal}
          modalIsClosed={modalIsClosed}
        />
      )}
    </ScrollContainer>
  );
};

export default MarketInput;
