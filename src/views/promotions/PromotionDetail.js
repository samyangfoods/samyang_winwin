import React, { useEffect, useState } from "react";
import Swiper from "react-native-swiper";
import winwin from "../../assets/winwin.png";
import Calender from "../../components/Calender";
import Category from "../../components/Category";
import ImageAccess from "../../components/images/ImageAccess";
import ItemArray from "../../components/items/ItemArray";
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
} from "../../styles/PromotionStyle";
import { Text } from "../../styles/Style";

const PromotionDetail = ({ route, navigation }) => {
  const mockApi = route.params.promotionData[0];

  // Promotion Item from Database to Hooks
  const [item, setItem] = useState(mockApi.description);

  // Ref Variable to help auto scroll
  const [ref, setRef] = useState(null);

  // Promotion Type Picker
  const [pickedData, setPickedData] = useState(
    mockApi.category === "전단행사"
      ? { label: "전단행사", value: 1 }
      : mockApi.category === "엔드행사"
      ? { label: "엔드행사", value: 2 }
      : { label: "기타행사", value: 3 }
  );

  // Setting Promotion Start Date
  const [dateStart, setDateStart] = useState(new Date(mockApi.startDate));

  // Setting Promotion End Date
  const [dateEnd, setDateEnd] = useState(new Date(mockApi.endDate));

  // Access User's Photo Album
  const [image, setImage] = useState(mockApi.image);

  // Add Textinput, Submit and Remove
  const addItemArray = () => {
    setItem([
      ...item,
      {
        index: Date.now(),
        itemName: "제품명",
        price: "판매가격",
        quantity: "행사수량",
        prQuantity: "PR수량",
      },
    ]);
  };

  const submitPromotionChanged = () => {
    const promotionObj = {
      id: 1,
      storeName: "우주마트 태양점",
      image: [winwin, winwin, winwin, winwin],
      startDate: dateStart,
      endDate: dateEnd,
      description: item,
    };
    console.log(promotionObj);
  };
  const removeProtmotion = async () => {
    // Push promotion ID to DB, and DB will delete data through the given ID.
    // Confirmation Process would be good.
    console.log(mockApi.id);
  };

  useEffect(() => {
    ref?.scrollTo({ y: -100, animated: false });
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
          {mockApi.image.map((data) => (
            <SwiperImage key={mockApi.id}>
              <Image source={data} />
            </SwiperImage>
          ))}
        </Swiper>
      </SwiperContainer>

      {/* Containers for information change */}
      <RevisionContainer>
        {/* Image */}
        <Text>이미지 등록</Text>
        <ImageAccess image={image} setImage={setImage} />

        {/* Protmotion Type */}
        <PromotionCategory>
          <MarketName placeholder={mockApi.superMarketName} />
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
