import React, { useRef, useState } from "react";
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
import { usePhoneNumberFormat, cleanPhoneNumberFormat } from "../../hooks/Util";

const MarketInput = ({ navigation }) => {
  const userId = useSelector((state) => state.user.userId);
  const token = useSelector((state) => state.user.token);

  const [modal, setModal] = useState(false);
  const [marketImage, setMarketImage] = useState(null);
  const [address, setAddress] = useState(null);
  const [marketName, setMarketName] = useState(null);
  const [size, setSize] = useState(null);
  const [pos, setPos] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [income, setIncome] = useState(null);
  const [ref, setRef] = useState(null);

  const nameRef = useRef();
  const sizeRef = useRef();
  const posRef = useRef();
  const phoneNumberRef = useRef();
  const incomeRef = useRef();
  const addressRef = useRef();

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
    const marketObj = {
      marketImage,
      userId,
      marketName,
      size,
      pos,
      phoneNumber,
      income,
      address,
    };

    console.log(marketObj);

    try {
      await useMarketCreate(marketObj, token);
      Alert.alert("알림", "소매점 등록이 완료되었습니다.");
      navigation.goBack();
    } catch (error) {
      Alert.alert("알림", String(error));
    }
  };

  return (
    <ScrollContainer ref={(ref) => setRef(ref)}>
      <MarketInputForm>
        {marketImage ? (
          <ThumbnailContainer>
            <Image source={{ uri: marketImage.uri }} />
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
            marketImage ? "이미지 변경" : "소매점 전면 사진 (간판 보이게)"
          }
          setMarketImage={setMarketImage}
        />

        <Text>소매점명</Text>
        <TextInput
          placeholder="소매점명을 입력하세요"
          value={marketName}
          onChangeText={(text) => handleName(text)}
          ref={nameRef}
          onSubmitEditing={() => sizeRef.current?.focus()}
        />

        <HorizontalDiv>
          <VerticalDiv>
            <Text>평수</Text>
            <TextInput
              placeholder="평수를 입력하세요"
              value={size}
              onChangeText={(text) => handleSize(text)}
              ref={sizeRef}
              onSubmitEditing={() => posRef.current?.focus()}
            />
          </VerticalDiv>
          <VerticalDiv>
            <Text>POS 수</Text>
            <TextInput
              placeholder="POS 수량을 입력하세요"
              value={pos}
              onChangeText={(text) => handlePos(text)}
              ref={posRef}
              onSubmitEditing={() => phoneNumberRef.current?.focus()}
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
              keyboardType="numeric"
              autoCapitalize="none"
              onBlur={() => setPhoneNumber(usePhoneNumberFormat(phoneNumber))}
              ref={phoneNumberRef}
              onSubmitEditing={() => incomeRef.current?.focus()}
            />
          </VerticalDiv>
          <VerticalDiv>
            <Text>월 평균 매출</Text>
            <TextInput
              placeholder="월 평균 매출을 입력하세요"
              value={income}
              onChangeText={(text) => handleIncome(text)}
              ref={incomeRef}
              onSubmitEditing={() => addressRef.current?.focus()}
            />
          </VerticalDiv>
        </HorizontalDiv>

        <Text>주소 검색</Text>
        <Btn onPress={handleModal} ref={addressRef}>
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
