import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import Address from "../Address";
import ImageUpload from "../../components/images/ImageUpload";
import winwin from "../../assets/winwin.png";
import { BasicContainer, Text } from "../../styles/Style";
import {
  MarketInputForm,
  VerticalDiv,
  HorizontalDiv,
  TextInput,
  Btn,
  AddressContainer,
  BtnAddress,
  BtnAddressContainer,
  ThumbnailContainer,
  Image,
  LoginBtn,
  BtnText,
} from "../../styles/MarketDetail";

const MarketInput = () => {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState(null);
  const [address, setAddress] = useState(null);
  const [marketName, setMarketName] = useState(null);
  const [size, setSize] = useState(null);
  const [pos, setPos] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [income, setIncome] = useState(null);

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

  const sumbitMarketInfo = async () => {
    const marketObj = {
      address: address.roadAddress,
      superMarketName: marketName,
      size,
      pos,
      phoneNumber,
      income,
      image,
    };
    console.log(marketObj);
  };

  return (
    <BasicContainer>
      <MarketInputForm>
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
        <Btn onPress={() => setModal(true)}>
          <Text>{address ? address.roadAddress : "주소 검색"}</Text>
        </Btn>

        {image && (
          <ThumbnailContainer>
            <Image source={winwin} />
          </ThumbnailContainer>
        )}

        <Text>이미지 등록</Text>
        <ImageUpload
          placeholder={image ? "이미지 변경" : "소매점 전면 사진 (간판 보이게)"}
          image={image}
          setImage={setImage}
        />
        <LoginBtn onPress={sumbitMarketInfo}>
          <BtnText>등록하기</BtnText>
        </LoginBtn>
      </MarketInputForm>

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
    </BasicContainer>
  );
};

export default MarketInput;
