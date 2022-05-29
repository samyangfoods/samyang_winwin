import React, { useEffect, useState } from "react";
import Calender from "../../components/Calender";
import Category from "../../components/Category";
import ImageAccess from "../../components/images/ImageAccess";
import ItemArray from "../../components/items/ItemArray";
import { Text } from "../../styles/Style";
import {
  ProtmotionCreateContainer,
  Bottom,
  VerticalDiv,
  HorizontalDiv,
  ImageContainer,
  ShortInput,
  BtnContainer,
  FooterBtn,
  ItemCategory,
  TextBox,
  HorizontalSeparator,
} from "../../styles/PromotionStyle";
import Address from "../../components/Address";
import { Btn } from "../../styles/Auth";
import { useSelector } from "react-redux";
import { ActivityIndicator, Alert } from "react-native";
import { usePromotionCreation } from "../../hooks/promotionHooks";
import CategoryOfMarketListWithUserId from "../../components/CategoryOfMarketListWithUserId";
import { useMarketInfo } from "../../hooks/marketHooks";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const PromotionCreate = ({ navigation }) => {
  // Redux variables
  const token = useSelector((state) => state.user.token);
  const marketArray = useSelector((state) => state.market.array);

  // Hooks variables
  const [modal, setModal] = useState(false);
  const [marketName, setMarketName] = useState(null);
  const [address, setAddress] = useState(null);
  const [pos, setPos] = useState(null);
  const [image, setImage] = useState([]);
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  const [promotionCost, setPromotionCost] = useState(null);
  const [promotionType, setPromotionType] = useState({
    label: "전단행사",
    value: 1,
  });
  const [promotionDetail, setPromotionDetail] = useState([
    {
      productName: "",
      price: "",
      promotionValue: "",
      prValue: "",
    },
  ]);
  const [loginLoading, setLoginLoading] = useState(false);

  // Button activation
  const buttonActivated = Boolean(
    marketName &&
      address &&
      pos &&
      image &&
      dateStart &&
      dateEnd &&
      promotionCost &&
      promotionDetail
  );

  // Handling functions
  const handlePos = (text) => {
    setPos(text);
  };
  const handlePromotionCost = (text) => {
    setPromotionCost(text);
  };
  const addItemArray = () => {
    setPromotionDetail([
      ...promotionDetail,
      {
        productName: "",
        price: "",
        promotionValue: "",
        prValue: "",
      },
    ]);
  };
  const submitPromotion = async () => {
    const promotionObj = {
      marketName: marketName.label,
      marketAddress: address,
      pos: parseInt(pos),
      image,
      start_date: dateStart.toString(),
      end_date: dateEnd.toString(),
      promotionType: promotionType.label,
      promotionCost: parseInt(promotionCost),
      promotionDetail,
    };

    if (loginLoading) return;

    try {
      setLoginLoading(true);
      const response = await usePromotionCreation(promotionObj, token);
      console.log("Promotion Creation ✅", response);
      Alert.alert("알림", "행사가 등록되었습니다.");
      navigation.goBack();
    } catch (error) {
      Alert.alert("알림", error);
    }
  };

  useEffect(() => {
    const setMarketInfo = async (marketId, token) => {
      const { pos, marketAddress } = await useMarketInfo(marketId, token);

      setPos(pos);
      setAddress(marketAddress);
    };
    if (marketName) setMarketInfo(marketName.value, token);
  }, [marketName]);

  return (
    <ProtmotionCreateContainer>
      <KeyboardAwareScrollView>
        <Bottom>
          <HorizontalDiv>
            <VerticalDiv>
              <Text>소매점명</Text>
              {marketArray ? (
                <CategoryOfMarketListWithUserId
                  marketName={marketName}
                  setMarketName={setMarketName}
                />
              ) : (
                <Text>소매점 없음</Text>
              )}
            </VerticalDiv>
            <VerticalDiv>
              <Text>POS 수량</Text>
              <ShortInput
                placeholder="POS 수량"
                keyboardType="numeric"
                value={pos}
                onChangeText={(text) => handlePos(text)}
              />
            </VerticalDiv>
          </HorizontalDiv>

          {/* Address */}
          <Text>주소</Text>
          <Btn style={{ width: "100%" }} onPress={() => setModal(true)}>
            <Text>{address ? address : "주소 입력"}</Text>
          </Btn>

          {/* POS Quantity & Promotion Cost */}
          <HorizontalDiv>
            <VerticalDiv>
              <Text>행사종류</Text>
              <Category
                pickedData={promotionType}
                setPickedData={setPromotionType}
              />
            </VerticalDiv>
            <VerticalDiv>
              <Text>지원금액</Text>
              <ShortInput
                placeholder="지원금액"
                keyboardType="numeric"
                value={promotionCost}
                onChangeText={(text) => handlePromotionCost(text)}
              />
            </VerticalDiv>
          </HorizontalDiv>

          {/* Images */}
          <ImageContainer>
            <Text>이미지 등록</Text>
            <ImageAccess image={image} setImage={setImage} />
          </ImageContainer>

          {/* Duration */}
          <HorizontalDiv>
            <VerticalDiv>
              <Text>시작일</Text>
              <Calender date={dateStart} setDate={setDateStart} />
            </VerticalDiv>
            <VerticalDiv>
              <Text>종료일</Text>
              <Calender date={dateEnd} setDate={setDateEnd} />
            </VerticalDiv>
          </HorizontalDiv>

          {/* Promotion Items Details */}
          <Text>행사 내역</Text>
          <ItemCategory>
            <TextBox>
              <Text>제품명</Text>
            </TextBox>
            <TextBox>
              <Text>가격</Text>
            </TextBox>
            <TextBox>
              <Text>수량</Text>
            </TextBox>
            <TextBox>
              <Text>PR수량</Text>
            </TextBox>
          </ItemCategory>

          <HorizontalSeparator />

          <ItemArray
            item={promotionDetail}
            setItem={setPromotionDetail}
            addItemArray={addItemArray}
          />
        </Bottom>

        <BtnContainer>
          <FooterBtn
            onPress={submitPromotion}
            disabled={!buttonActivated}
            style={{ backgroundColor: buttonActivated ? "#ff7d0d" : "#aaa" }}
          >
            {loginLoading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={{ color: "#fff" }}>등록하기</Text>
            )}
          </FooterBtn>
        </BtnContainer>

        {/* Address Modal Component */}
        {modal && <Address setAddress={setAddress} setModal={setModal} />}
      </KeyboardAwareScrollView>
    </ProtmotionCreateContainer>
  );
};

export default PromotionCreate;
