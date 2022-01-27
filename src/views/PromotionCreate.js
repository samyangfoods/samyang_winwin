import React, { useState } from "react";
import styled from "styled-components/native";
import Search from "../components/Search";
import { Picker } from "react-native-woodpicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Item from "../components/Item";

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

  // Promotion Type Picker
  const [pickedData, setPickedData] = useState();
  const data = [
    { label: "전단행사", value: 1 },
    { label: "엔드행사", value: 2 },
    { label: "기타행사", value: 3 },
  ];

  // Setting Promotion Start Date
  const [dateStart, setDateStart] = useState(new Date());
  const [modeStart, setModeStart] = useState("date");
  const [showStart, setShowStart] = useState(false);

  // Setting Promotion End Date
  const [dateEnd, setDateEnd] = useState(new Date());
  const [modeEnd, setModeEnd] = useState("date");
  const [showEnd, setShowEnd] = useState(false);

  // Access User's Photo Album
  const [image, setImage] = useState(null);
  const accessAlbum = async () => {
    // No permissions are necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // Functions for Setting Start Date
  const showDatepickerStart = () => {
    setShowStart(true);
    setModeStart("date");
  };
  const onChangeStart = (event, selectedDate) => {
    const currentDate = selectedDate || dateStart;
    setDateStart(currentDate);
    setShowStart(false);
  };
  const convertDateStart = () => {
    const year = dateStart.getFullYear();
    const month = dateStart.getMonth() + 1;
    const date = dateStart.getDate();

    return `${year}년 ${month}월 ${date}일`;
  };

  // Functions for Setting End Date
  const showDatepickerEnd = () => {
    setShowEnd(true);
    setModeEnd("date");
  };
  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate || dateEnd;
    setDateEnd(currentDate);
    setShowEnd(false);
  };
  const convertDateEnd = () => {
    const year = dateEnd.getFullYear();
    const month = dateEnd.getMonth() + 1;
    const date = dateEnd.getDate();

    return `${year}년 ${month}월 ${date}일`;
  };

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
        <Search />
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
          <HorizontalDiv>
            <Btn onPress={accessAlbum}>
              <Text>이미지 1</Text>
            </Btn>
            <Btn onPress={accessAlbum}>
              <Text>이미지 2</Text>
            </Btn>
            <Btn onPress={accessAlbum}>
              <Text>이미지 3</Text>
            </Btn>
            <Btn onPress={accessAlbum}>
              <Text>이미지 4</Text>
            </Btn>
          </HorizontalDiv>
        </ImageContainer>

        {/* Category and Budget */}
        <HorizontalDiv>
          <VerticalDiv>
            <Text>행사종류</Text>
            <StyledPicker
              item={pickedData}
              items={data}
              onItemChange={setPickedData}
              title="행사 종류"
              placeholder="행사 종류를 선택하세요"
              textInputStyle={{ textAlign: "center" }}
            />
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
            <DateBtn onPress={showDatepickerStart}>
              <DateText>{convertDateStart()}</DateText>
            </DateBtn>
          </VerticalDiv>
          <VerticalDiv>
            <Text>종료일</Text>
            <DateBtn onPress={showDatepickerEnd}>
              <DateText>{convertDateEnd()}</DateText>
            </DateBtn>
          </VerticalDiv>
        </HorizontalDiv>
        <Detail>
          <Text>행사 내역</Text>
          {item.map((data) => (
            <Item key={data.index} data={data} />
          ))}
        </Detail>
        <ItemPlusBtnContainer>
          <ItemPlusBtn onPress={addItemArray}>
            <AntDesign name="pluscircle" size={36} color="#FF7D0D" />
          </ItemPlusBtn>
        </ItemPlusBtnContainer>
      </Bottom>

      <BtnContainer>
        <FooterBtn
          onPress={submitPromotion}
          style={{ backgroundColor: "#FF7D0D" }}
        >
          <Text style={{ color: "#fff" }}>등록하기</Text>
        </FooterBtn>
      </BtnContainer>

      {/* Start Date Modal  */}
      {showStart && (
        <DateTimePicker
          testID="dateTimePickerStart"
          value={dateStart}
          mode={modeStart}
          onChange={onChangeStart}
        />
      )}

      {/* End Date Modal  */}
      {showEnd && (
        <DateTimePicker
          testID="dateTimePickerEnd"
          value={dateEnd}
          mode={modeEnd}
          onChange={onChangeEnd}
        />
      )}
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
`;
const Bottom = styled.ScrollView`
  flex: 10;
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

const DateText = styled(Text)`
  color: #aaa;
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

const Btn = styled.TouchableOpacity`
  margin: 2% 0;
  padding: 2%;
  border: 1px solid black;
  border-radius: 6px;
`;

const DateBtn = styled(Btn)`
  align-items: center;
  width: 80%;
  border: 1px solid #aaa;
`;

const StyledPicker = styled(Picker)`
  height: 40px;
  border: 1px solid #000;
  border-radius: 6px;
`;

const Detail = styled.View`
  margin-top: 3%;
`;

const ItemPlusBtnContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 5% 0 2% 0;
`;
const ItemPlusBtn = styled.TouchableOpacity``;

const BtnContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
`;

const FooterBtn = styled.TouchableOpacity`
  align-items: center;
  width: 80%;
  padding: 2% 13%;
  margin: 3% 2%;
  border-radius: 6px;
`;
