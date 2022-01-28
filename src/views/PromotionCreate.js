import React, { useState } from "react";
import styled from "styled-components/native";
import Search from "../components/Search";
import { AntDesign } from "@expo/vector-icons";
import Calender from "../components/Calender";
import Category from "../components/Category";
import ImageAccess from "../components/ImageAccess";
import ItemArray from "../components/ItemArray";

const PromotionCreate = () => {
  // Promotion Item from Database to Hooks
  const [item, setItem] = useState([
    {
      index: Date.now(),
      itemName: "제품명",
      price: "판매가격",
      quantity: "행사수량",
      prQuantity: "PR수량",
    },
  ]);

  // Ref Variable to help auto scroll
  const [ref, setRef] = useState(null);

  // Send Text Variable to Search Component
  const [searchText, setSearchText] = useState(null);

  // Promotion Type Picker
  const [pickedData, setPickedData] = useState();

  // Setting Promotion Start / End Date
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());

  // Access User's Photo Album
  const [image, setImage] = useState(null);

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
  const submitPromotion = () => {
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

  return (
    <Container>
      <Top>
        <Search searchText={searchText} setSearchText={setSearchText} />
      </Top>

      <Bottom
        ref={(ref) => setRef(ref)}
        onContentSizeChange={() => {
          // Optional chain is essential.....
          ref?.scrollToEnd({ animated: true });
        }}
      >
        <Text>소매점명</Text>
        <TextInput placeholder="매점명을 입력하세요." />

        <StoreInfo>
          <VerticalDiv>
            <Text>주소</Text>
            <ShortInput placeholder="주소" />
          </VerticalDiv>
          <VerticalDiv>
            <Text>POS 수량</Text>
            <ShortInput placeholder="POS 수량" />
          </VerticalDiv>
        </StoreInfo>

        {/* Images */}
        <ImageContainer>
          <Text>이미지 등록</Text>
          <ImageAccess image={image} setImage={setImage} />
        </ImageContainer>

        {/* Category and Budget */}
        <HorizontalDiv>
          <VerticalDiv>
            <Text>행사종류</Text>
            <Category pickedData={pickedData} setPickedData={setPickedData} />
          </VerticalDiv>
          <VerticalDiv>
            <Text>지원금액</Text>
            <ShortInput placeholder="지원금액" />
          </VerticalDiv>
        </HorizontalDiv>

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
          <ItemArray
            item={item}
            setItem={setItem}
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
    </Container>
  );
};

export default PromotionCreate;

const Container = styled.View`
  flex: 1;
  padding: 0 5%;
`;
const Top = styled.View`
  flex: 1;
  align-items: center;
  padding: 0.5% 0;
  z-index: 100;
`;
const Bottom = styled.ScrollView`
  flex: 10;
  margin-top: 3%;
`;
const StoreInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 3% 0;
`;
const ImageContainer = styled(StoreInfo)`
  flex-direction: column;
`;
const VerticalDiv = styled.View`
  flex-direction: column;
  width: 50%;
`;
const HorizontalDiv = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 3% 0;
`;
const Text = styled.Text`
  font-size: 16px;
`;
const TextInput = styled.TextInput`
  padding: 2%;
  margin: 1% 0;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 6px;
`;
const ShortInput = styled(TextInput)`
  width: 100%;
`;
const Detail = styled.View`
  margin-top: 3%;
`;
const BtnContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 3% 0;
`;
const FooterBtn = styled.TouchableOpacity`
  align-items: center;
  width: 80%;
  padding: 2% 13%;
  margin: 3% 2%;
  border-radius: 6px;
`;
