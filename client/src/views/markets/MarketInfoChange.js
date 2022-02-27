import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import Address from "../../components/Address";
import ImageUpload from "../../components/images/ImageUpload";
import winwin from "../../assets/winwin.png";
import { ScrollContainer, Text } from "../../styles/Style";
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
} from "../../styles/MarketStyle";
import { useMarketDelete } from "../../hooks/marketHooks";
import { ActivityIndicator, Alert } from "react-native";

const MarketInfoChange = ({ navigation, route }) => {
  const marketData = route.params.marketData[0];
  const [modal, setModal] = useState(false);
  const [marketId] = useState(marketData._id);
  const [address, setAddress] = useState(marketData.marketAddress.warehouse);
  const [image, setImage] = useState(marketData.marketImage);
  const [marketName, setMarketName] = useState(marketData.marketName);
  const [size, setSize] = useState(marketData.size);
  const [pos, setPos] = useState(marketData.pos);
  const [phoneNumber, setPhoneNumber] = useState(marketData.phone);
  const [income, setIncome] = useState(marketData.averageSales);

  const [changeLoading, setChangeLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

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

  const processMarketDelete = async (marketId) => {
    const response = await useMarketDelete(marketId);
    console.log("market change response 🔥🔥🔥🔥", response);
    if (response) {
      Alert.alert("알림", "삭제되었습니다.");
      navigation.goBack();
    }
  };

  const triggerDeleteButton = (marketId) => {
    setDeleteLoading(true);
    try {
      Alert.alert("알림", "삭제하시겠습니까?", [
        { text: "네", onPress: () => processMarketDelete(marketId) },
        { text: "아니오" },
      ]);
    } catch (error) {
      Alert.alert("알림", "오류가 발생했습니다.");
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <ScrollContainer>
      <MarketInputForm>
        {/* This page needs to convert photo url into proper types. 
        Mock API does not handle this point. */}
        {image && (
          <ThumbnailContainer>
            <Image
              source={image === marketData.image ? winwin : { uri: image }}
            />
          </ThumbnailContainer>
        )}

        <Text>이미지 등록</Text>
        <ImageUpload
          placeholder={
            marketData.image ? "이미지 변경" : "소매점 전면 사진 (간판 보이게)"
          }
          image={image}
          setImage={setImage}
        />

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
          <Text>{address ? address : "주소 검색"}</Text>
        </Btn>

        {/* Submit and Remove Button Container */}
        <BtnContainer>
          <FooterBtn style={{ backgroundColor: "#FF7D0D" }}>
            <Text style={{ color: "#fff" }}>수정하기</Text>
          </FooterBtn>
          <FooterBtn
            onPress={() => triggerDeleteButton(marketId)}
            style={{ backgroundColor: "#B4B4B4" }}
          >
            <Text style={{ color: "#fff" }}>
              {deleteLoading ? <ActivityIndicator color="white" /> : "삭제하기"}
            </Text>
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
    </ScrollContainer>
  );
};

export default MarketInfoChange;
