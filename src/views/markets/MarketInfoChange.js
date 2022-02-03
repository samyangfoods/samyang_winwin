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
  FooterBtn,
  BtnContainer,
} from "../../styles/MarketDetail";

const MarketInfoChange = ({ navigation, route }) => {
  const mockApi = route.params.marketData[0];
  const [modal, setModal] = useState(false);
  const [address, setAddress] = useState(mockApi.address);
  const [image, setImage] = useState(mockApi.image);
  const [marketName, setMarketName] = useState(mockApi.superMarketName);
  const [size, setSize] = useState(mockApi.size);
  const [pos, setPos] = useState(mockApi.pos);
  const [phoneNumber, setPhoneNumber] = useState(mockApi.phoneNumber);
  const [income, setIncome] = useState(mockApi.average);

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

  return (
    <BasicContainer>
      <MarketInputForm>
        <Text>소매점명</Text>
        <TextInput
          onChangeText={(text) => handleName(text)}
          value={marketName}
        />

        <HorizontalDiv>
          <VerticalDiv>
            <Text>평수</Text>
            <TextInput onChangeText={(text) => handleSize(text)} value={size} />
          </VerticalDiv>
          <VerticalDiv>
            <Text>POS 수</Text>
            <TextInput onChangeText={(text) => handlePos(text)} value={pos} />
          </VerticalDiv>
        </HorizontalDiv>

        <HorizontalDiv>
          <VerticalDiv>
            <Text>전화번호</Text>
            <TextInput
              onChangeText={(text) => handlePhoneNumber(text)}
              value={phoneNumber}
            />
          </VerticalDiv>
          <VerticalDiv>
            <Text>월 평균 매출</Text>
            <TextInput
              onChangeText={(text) => handleIncome(text)}
              value={income}
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
          placeholder={
            mockApi.image ? "이미지 변경" : "소매점 전면 사진 (간판 보이게)"
          }
          image={image}
          setImage={setImage}
        />
        {/* Submit and Remove Button Container */}
        <BtnContainer>
          <FooterBtn style={{ backgroundColor: "#FF7D0D" }}>
            <Text style={{ color: "#fff" }}>수정하기</Text>
          </FooterBtn>
          <FooterBtn
            onPress={() => navigation.goBack()}
            style={{ backgroundColor: "#B4B4B4" }}
          >
            <Text style={{ color: "#fff" }}>삭제하기</Text>
          </FooterBtn>
        </BtnContainer>
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

export default MarketInfoChange;
