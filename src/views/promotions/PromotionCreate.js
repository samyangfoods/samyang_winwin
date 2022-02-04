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
} from "../../styles/PromotionStyle";

const PromotionCreate = ({ route }) => {
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
  const [image, setImage] = useState([]);

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
    <ProtmotionCreateContainer>
      <Top>
        <Search
          route={route}
          searchText={searchText}
          setSearchText={setSearchText}
        />
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

        <HorizontalDiv>
          <VerticalDiv>
            <Text>주소</Text>
            <ShortInput placeholder="주소" />
          </VerticalDiv>
          <VerticalDiv>
            <Text>POS 수량</Text>
            <ShortInput placeholder="POS 수량" />
          </VerticalDiv>
        </HorizontalDiv>

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
      </Bottom>

      <BtnContainer>
        <FooterBtn
          onPress={submitPromotion}
          style={{ backgroundColor: "#FF7D0D" }}
        >
          <Text style={{ color: "#fff" }}>등록하기</Text>
        </FooterBtn>
      </BtnContainer>
    </ProtmotionCreateContainer>
  );
};

export default PromotionCreate;
