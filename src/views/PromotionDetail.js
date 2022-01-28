import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import winwin from "../assets/winwin.png";
import Calender from "../components/Calender";
import Category from "../components/Category";
import ImageAccess from "../components/ImageAccess";
import ItemArray from "../components/ItemArray";

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
    <Container
      ref={(ref) => setRef(ref)}
      onContentSizeChange={() => {
        ref?.scrollToEnd({ animated: true });
      }}
    >
      {/* Image Swiper */}
      <ImageContainer>
        <Swiper showsButtons={false}>
          {mockApi.image.map((data) => (
            <SwiperImage key={mockApi.id}>
              <Image source={data} />
            </SwiperImage>
          ))}
        </Swiper>
      </ImageContainer>

      {/* Containers for information change */}
      <RevisionContainer>
        {/* Image */}
        <Text>이미지 등록</Text>
        <ImageAccess image={image} setImage={setImage} />

        {/* Protmotion Type */}
        <PromotionCategory>
          <TextInput placeholder={mockApi.superMarketName} />
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
          <ItemArray
            item={item}
            setItem={setItem}
            addItemArray={addItemArray}
          />
        </Detail>
      </RevisionContainer>

      {/* Submit and Remove Button Container */}
      <BtnContainer>
        <FooterBtn
          onPress={submitPromotionChanged}
          style={{ backgroundColor: "#FF7D0D" }}
        >
          <Text style={{ color: "#fff" }}>수정하기</Text>
        </FooterBtn>
        <FooterBtn
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: "#B4B4B4" }}
        >
          <Text style={{ color: "#fff" }}>삭제하기</Text>
        </FooterBtn>
      </BtnContainer>
    </Container>
  );
};

export default PromotionDetail;

const Container = styled.ScrollView`
  flex: 1;
`;
const ImageContainer = styled.View`
  height: 220px;
`;
const RevisionContainer = styled.View`
  padding: 0 3%;
  margin-top: 3%;
`;
const BtnContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 15%;
`;
const SwiperImage = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  color: #000;
  font-size: 18px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
const TextInput = styled.TextInput`
  background-color: #f8f8f8;
  color: black;
  width: 240px;
  height: 50px;
  padding: 0 2%;
  margin-right: 5%;
  text-align: center;
`;
const PromotionCategory = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0 2%;
  margin: 3% 0;
`;
const Duration = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const Start = styled.View`
  flex-direction: column;
  align-items: center;
  width: 50%;
`;
const End = styled(Start)``;
const Detail = styled.View`
  margin-top: 3%;
`;
const FooterBtn = styled.TouchableOpacity`
  border-radius: 6px;
  padding: 2% 13%;
  margin: 3% 2%;
`;
