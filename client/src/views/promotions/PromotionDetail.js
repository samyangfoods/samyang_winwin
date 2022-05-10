import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import Swiper from "react-native-swiper";
import { useSelector } from "react-redux";
import Calender from "../../components/Calender";
import Category from "../../components/Category";
import ImageAccess from "../../components/images/ImageAccess";
import ItemArray from "../../components/items/ItemArray";
import { usePromotionUpdate } from "../../hooks/promotionHooks";
import { imageW140 } from "../../hooks/urlSetting";
import {
  PromotionDetailContainer,
  RevisionContainer,
  SwiperContainer,
  BtnContainer,
  SwiperImage,
  BtnText,
  MarketName,
  Image,
  PromotionCategory,
  Duration,
  Start,
  End,
  PromotionDetailFooterBtn,
  Detail,
  ItemCategory,
  TextBox,
  HorizontalSeparator,
} from "../../styles/PromotionStyle";
import { Text } from "../../styles/Style";

const PromotionDetail = ({ route, navigation }) => {
  const data = route.params.promotionData[0];
  const token = useSelector((state) => state.user.token);

  const [item, setItem] = useState(JSON.parse(data.promotionDetail));
  const [pickedData, setPickedData] = useState(
    data.promotionType === "전단행사"
      ? { label: "전단행사", value: 1 }
      : data.promotionType === "엔드행사"
      ? { label: "엔드행사", value: 2 }
      : { label: "기타행사", value: 3 }
  );
  const [dateStart, setDateStart] = useState(new Date(data.start_date));
  const [dateEnd, setDateEnd] = useState(new Date(data.end_date));
  const [images, setImages] = useState([data.images]);
  const [marketName, setMarketName] = useState(data.marketName);

  const [ref, setRef] = useState(null);

  // Add Textinput, Submit and Remove
  const addItemArray = () => {
    setItem([
      ...item,
      {
        productName: "제품명",
        price: "판매가격",
        promotionValue: "행사수량",
        prValue: "PR수량",
      },
    ]);
  };

  // Submit Changed Info
  const submitPromotionChanged = () => {
    const promotionObj = {
      marketName,
      images,
      start_date: dateStart.toString(),
      end_date: dateEnd.toString(),
      promotionDetail: item,
    };

    try {
      const result = usePromotionUpdate(token, promotionObj);
      if (result) {
        Alert.alert("알림", "행사 정보가 변경되었습니다.");
        navigation.goBack();
      } else {
        Alert.alert("알림", "오류 발생");
      }
    } catch (error) {
      Alert.alert("알림", error);
    }
  };

  // Remove Promotion
  const removeProtmotion = async () => {
    // Push promotion ID to DB, and DB will delete data through the given ID.
    // Confirmation Process would be good.
    // console.log(data.id);
  };

  useEffect(() => {
    ref?.scrollTo({ y: -100, animated: false });
  }, []);

  const handleMarketName = (text) => {
    setMarketName(text);
  };

  return (
    <PromotionDetailContainer
      ref={(ref) => setRef(ref)}
      onContentSizeChange={() => {
        ref?.scrollToEnd({ animated: true });
      }}
    >
      {/* Image Swiper */}
      <SwiperContainer>
        <Swiper showsButtons={false}>
          {images?.map((data) => (
            <SwiperImage key={Math.random()}>
              <Image source={{ uri: imageW140 + data }} />
            </SwiperImage>
          ))}
        </Swiper>
      </SwiperContainer>

      {/* Revision */}
      <RevisionContainer>
        {/* Image */}
        <Text>이미지 등록</Text>
        <ImageAccess image={images} setImage={setImages} />

        {/* Protmotion Type */}
        <PromotionCategory>
          <MarketName
            onChangeText={(text) => handleMarketName(text)}
            value={marketName}
          />
          <Category pickedData={pickedData} setPickedData={setPickedData} />
        </PromotionCategory>

        {/* Duration */}
        <Duration>
          <Start>
            <Text>시작일</Text>
            <Calender date={dateStart} setDate={setDateStart} />
          </Start>
          <End>
            <Text>종료일</Text>
            <Calender date={dateEnd} setDate={setDateEnd} />
          </End>
        </Duration>

        {/* Item Detail */}
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
            item={item}
            setItem={setItem}
            addItemArray={addItemArray}
          />
        </Detail>
      </RevisionContainer>

      {/* Submit and Remove Button Container */}
      <BtnContainer>
        <PromotionDetailFooterBtn
          onPress={submitPromotionChanged}
          style={{ backgroundColor: "#FF7D0D" }}
        >
          <BtnText style={{ color: "#fff" }}>수정하기</BtnText>
        </PromotionDetailFooterBtn>
        <PromotionDetailFooterBtn
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: "#B4B4B4" }}
        >
          <BtnText style={{ color: "#fff" }}>삭제하기</BtnText>
        </PromotionDetailFooterBtn>
      </BtnContainer>
    </PromotionDetailContainer>
  );
};

export default PromotionDetail;
