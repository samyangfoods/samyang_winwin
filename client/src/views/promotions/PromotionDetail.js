import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import Swiper from "react-native-swiper";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../../components/Calendar";
import Category from "../../components/Category";
import ImageAccess from "../../components/images/ImageAccess";
import ItemArray from "../../components/items/ItemArray";
import {
  usePromotionDelete,
  usePromotions,
  usePromotionUpdate,
} from "../../hooks/promotionHooks";
import { imageW140, imageW600 } from "../../hooks/urlSetting";
import promotionSlice from "../../redux/slices/Promotion";
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
  // Redux Variables
  const data = route.params.promotionData[0];
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  // State Variables
  const [item, setItem] = useState(JSON.parse(data.promotionDetail));
  const [promotionType, setPromotionType] = useState(
    data.promotionType === "전단행사"
      ? { label: "전단행사", value: 1 }
      : data.promotionType === "엔드행사"
      ? { label: "엔드행사", value: 2 }
      : { label: "기타행사", value: 3 }
  );
  const [dateStart, setDateStart] = useState(new Date(data.start_date));
  const [dateEnd, setDateEnd] = useState(new Date(data.end_date));
  const [images, setImages] = useState([]);
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
      promotionType,
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
      Alert.alert("알림", error.message);
    }
  };
  const startPromotionRemoveProcess = async () => {
    try {
      Alert.alert("알림", "삭제하시겠습니까?", [
        { text: "네", onPress: () => submitPromotionRemoval() },
        { text: "아니오" },
      ]);
    } catch (error) {
      Alert.alert("알림", error.message);
    }
  };
  const submitPromotionRemoval = async () => {
    try {
      const response = usePromotionDelete(token, data._id);

      if (response) {
        const promotionData = await usePromotions(token);

        if (promotionData) {
          dispatch(
            promotionSlice.actions.setPromotion({
              array: [...promotionData],
            })
          );
        }

        Alert.alert("알림", "행사가 삭제되었습니다.");
        navigation.goBack();
      }
    } catch (error) {
      Alert.alert("알림", error.message);
    }
  };

  // Handling market name
  const handleMarketName = (text) => {
    setMarketName(text);
  };

  // Set Default Scroll Location
  useEffect(() => {
    ref?.scrollTo({ y: -100, animated: false });
  }, []);

  // Set Image Swiper
  useEffect(() => {
    const imgArray = [];
    const { img1, img2, img3, img4 } = data.images;

    if (img1 !== undefined) imgArray.push(img1);
    if (img2 !== undefined) imgArray.push(img2);
    if (img3 !== undefined) imgArray.push(img3);
    if (img4 !== undefined) imgArray.push(img4);

    setImages(imgArray);
  }, []);

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
          {images.map((data) => (
            <SwiperImage key={Math.random()}>
              <Image
                source={
                  data?.uri ? { uri: data.uri } : { uri: imageW600 + data }
                }
              />
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
          <Category
            pickedData={promotionType}
            setPickedData={setPromotionType}
          />
        </PromotionCategory>

        {/* Duration */}
        <Duration>
          <Start>
            <Text>시작일</Text>
            <Calendar date={dateStart} setDate={setDateStart} />
          </Start>
          <End>
            <Text>종료일</Text>
            <Calendar date={dateEnd} setDate={setDateEnd} />
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
          onPress={startPromotionRemoveProcess}
          style={{ backgroundColor: "#B4B4B4" }}
        >
          <BtnText style={{ color: "#fff" }}>삭제하기</BtnText>
        </PromotionDetailFooterBtn>
      </BtnContainer>
    </PromotionDetailContainer>
  );
};

export default PromotionDetail;
