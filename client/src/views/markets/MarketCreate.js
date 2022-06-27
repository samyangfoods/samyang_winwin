import React, { useRef, useState, useEffect } from "react";
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
import { useMarketCreate, useMarketListWithId } from "../../hooks/marketHooks";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, Alert } from "react-native";
import { usePhoneNumberFormat } from "../../hooks/util";
import marketSlice from "../../redux/slices/market";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const MarketInput = ({ navigation }) => {
  // Redux variables
  const userId = useSelector((state) => state.user.userId);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  // Hooks variables
  const [modal, setModal] = useState(false);
  const [marketImage, setMarketImage] = useState(null);
  const [address, setAddress] = useState(null);
  const [marketName, setMarketName] = useState(null);
  const [size, setSize] = useState(null);
  const [pos, setPos] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [income, setIncome] = useState(null);
  const [ref, setRef] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Ref variables
  const nameRef = useRef();
  const sizeRef = useRef();
  const posRef = useRef();
  const phoneNumberRef = useRef();
  const incomeRef = useRef();
  const addressRef = useRef();

  // Handling funcstions
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

  // Button activation
  const btnActivation = Boolean(
    marketImage && marketName && size && pos && phoneNumber && income && address
  );

  // Submit market info and process market creation
  const sumbitMarketInfo = async () => {
    if (isLoading) return;

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

    try {
      setIsLoading(true);
      // Market creation process
      const response = await useMarketCreate(marketObj, token);

      if (response) {
        // Update Market redux if the previous process was done successfully.
        const marketData = await useMarketListWithId(token);
        if (marketData) {
          dispatch(
            marketSlice.actions.setMarket({
              array: [...marketData],
            })
          );
        }
      }

      Alert.alert("알림", "소매점 등록이 완료되었습니다.");
      navigation.goBack();
    } catch (error) {
      Alert.alert("알림", String(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollContainer ref={(ref) => setRef(ref)}>
      <KeyboardAwareScrollView>
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
            placeholderTextColor="#000"
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
                placeholderTextColor="#000"
                placeholder="평수를 입력하세요"
                value={size}
                onChangeText={(text) => handleSize(text)}
                ref={sizeRef}
                onSubmitEditing={() => posRef.current?.focus()}
                keyboardType="numeric"
              />
            </VerticalDiv>
            <VerticalDiv>
              <Text>POS 수</Text>
              <TextInput
                placeholderTextColor="#000"
                placeholder="POS 수량을 입력하세요"
                value={pos}
                onChangeText={(text) => handlePos(text)}
                ref={posRef}
                onSubmitEditing={() => phoneNumberRef.current?.focus()}
                keyboardType="numeric"
              />
            </VerticalDiv>
          </HorizontalDiv>

          <HorizontalDiv>
            <VerticalDiv>
              <Text>전화번호</Text>
              <TextInput
                placeholderTextColor="#000"
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
                placeholderTextColor="#000"
                placeholder="월 평균 매출을 입력하세요"
                value={income}
                onChangeText={(text) => handleIncome(text)}
                ref={incomeRef}
                onSubmitEditing={() => addressRef.current?.focus()}
                keyboardType="numeric"
              />
            </VerticalDiv>
          </HorizontalDiv>

          <Text>주소 검색</Text>
          <Btn onPress={handleModal} ref={addressRef}>
            <Text>{address ? address : "주소 검색"}</Text>
          </Btn>

          <LoginBtn
            onPress={sumbitMarketInfo}
            // style={{ backgroundColor: "#ff7d0d" }}
            style={{ backgroundColor: btnActivation ? "#ff7d0d" : "#aaa" }}
            disabled={!btnActivation || isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="white" />
            ) : (
              <BtnText>등록하기</BtnText>
            )}
          </LoginBtn>
        </MarketInputForm>

        {modal && (
          <Address
            setAddress={setAddress}
            setModal={setModal}
            modalIsClosed={modalIsClosed}
          />
        )}
      </KeyboardAwareScrollView>
    </ScrollContainer>
  );
};

export default MarketInput;
