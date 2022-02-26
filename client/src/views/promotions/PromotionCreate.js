import React, { useState } from "react";
import Search from "../../components/Search";
import Calender from "../../components/Calender";
import Category from "../../components/Category";
import ImageAccess from "../../components/images/ImageAccess";
import ItemArray from "../../components/items/ItemArray";
import { Text } from "../../styles/Style";
import {
  ProtmotionCreateContainer,
  Top,
  Bottom,
  VerticalDiv,
  HorizontalDiv,
  ImageContainer,
  TextInput,
  ShortInput,
  Detail,
  BtnContainer,
  FooterBtn,
  ItemCategory,
  TextBox,
  HorizontalSeparator,
} from "../../styles/PromotionStyle";
import Address from "../Address";
import { Btn } from "../../styles/Auth";
import axios from "axios";
import { useSelector } from "react-redux";
import { Alert } from "react-native";

const PromotionCreate = ({ route }) => {
  const userId = useSelector((state) => state.user.userId);
  const [ref, setRef] = useState(null);
  const [searchText, setSearchText] = useState(null);
  const [modal, setModal] = useState(false);
  const [superMarketName, setSuperMarketName] = useState(null);
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

  const handleSuperMarketName = (text) => {
    setSuperMarketName(text);
  };
  const handlePos = (text) => {
    setPos(parseInt(text));
  };
  const handlePromotionCost = (text) => {
    setPromotionCost(parseInt(text));
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
    ref?.scrollToEnd({ animated: true });
  };

  const submitPromotion = async () => {
    const promotionObj = {
      superMarketName,
      address,
      pos,
      image,
      start_date: dateStart,
      end_date: dateEnd,
      promotionType: promotionType.label,
      promotionCost,
      promotionDetail,
      islive: true,
      userId,
    };

    try {
      console.log(promotionObj);
      console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥", dateStart, typeof dateStart);
      console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥", dateEnd, typeof dateEnd);

      const response = await axios.post(
        "http://localhost:5000/api/promotion",
        promotionObj
      );
    } catch (error) {
      Alert.alert("알림", error);
    }
  };

  return (
    <ProtmotionCreateContainer>
      <Top>
        <Search
          route={route}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      </Top>

      <Bottom ref={(ref) => setRef(ref)}>
        {/* SuperMarket Name & Promotion Type */}
        <HorizontalDiv>
          <VerticalDiv>
            <Text>소매점명</Text>
            <TextInput
              placeholder="매점명을 입력하세요."
              value={superMarketName}
              onChangeText={(text) => handleSuperMarketName(text)}
            />
          </VerticalDiv>
          <VerticalDiv>
            <Text>행사종류</Text>
            <Category
              pickedData={promotionType}
              setPickedData={setPromotionType}
            />
          </VerticalDiv>
        </HorizontalDiv>

        {/* POS Quantity & Promotion Cost */}
        <HorizontalDiv>
          <VerticalDiv>
            <Text>POS 수량</Text>
            <ShortInput
              placeholder="POS 수량"
              keyboardType="numeric"
              value={pos}
              onChangeText={(text) => handlePos(text)}
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

        {/* Address */}
        <Text>주소</Text>
        <Btn style={{ width: "100%" }} onPress={() => setModal(true)}>
          <Text>{address ? address : "주소 입력"}</Text>
        </Btn>

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

        <Detail>
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
        </Detail>
      </Bottom>

      <BtnContainer>
        <FooterBtn
          onPress={submitPromotion}
          style={{ backgroundColor: "#FF7D0D" }}
        >
          <Text style={{ color: "#fff" }}>등록하기</Text>
        </FooterBtn>
      </BtnContainer>

      {/* Address Modal Component */}
      {modal && <Address setAddress={setAddress} setModal={setModal} />}
    </ProtmotionCreateContainer>
  );
};

export default PromotionCreate;
