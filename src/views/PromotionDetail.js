import React, { useState } from "react";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import winwin from "../assets/winwin.png";
import { AntDesign } from "@expo/vector-icons";
import Item from "../components/Item";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "react-native-woodpicker";
import * as ImagePicker from "expo-image-picker";

// 행사 데이터를 이 페이지에서 받아옴.
// 컨텍스트 API 설계 필요.

const PromotionDetail = ({ route, navigation }) => {
  const mockApi = route.params.promotionData[0];

  // Promotion Item from Database to Hooks
  const [item, setItem] = useState(mockApi.description);

  // Ref variabel for User's Camera Access (in Progress...)
  const [ref, setRef] = useState(null);

  // Promotion Type Picker
  const [pickedData, setPickedData] = useState(
    mockApi.category === "전단행사"
      ? { label: "전단행사", value: 1 }
      : mockApi.category === "엔드행사"
      ? { label: "엔드행사", value: 2 }
      : { label: "기타행사", value: 3 }
  );
  const data = [
    { label: "전단행사", value: 1 },
    { label: "엔드행사", value: 2 },
    { label: "기타행사", value: 3 },
  ];

  // Setting Promotion Start Date
  const [dateStart, setDateStart] = useState(new Date(mockApi.startDate));
  const [modeStart, setModeStart] = useState("date");
  const [showStart, setShowStart] = useState(false);

  // Setting Promotion End Date
  const [dateEnd, setDateEnd] = useState(new Date(mockApi.endDate));
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
    console.log(mockApi.id);
  };

  return (
    <Container
      ref={(ref) => setRef(ref)}
      onContentSizeChange={() => {
        // Optional chain is essential.....
        ref?.scrollToEnd({ animated: true });
      }}
    >
      <ImageContainer>
        <Swiper showsButtons={false}>
          {mockApi.image.map((data) => (
            <SwiperImage key={mockApi.id}>
              <Image source={data} />
            </SwiperImage>
          ))}
        </Swiper>
      </ImageContainer>
      <RevisionContainer>
        <Text>이미지 등록</Text>
        <ImageUpload>
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
        </ImageUpload>
        {/* Placeholder should contain store name from DB. */}
        <Category>
          <TextInput placeholder={mockApi.superMarketName} />
          <StyledPicker
            item={pickedData}
            items={data}
            onItemChange={setPickedData}
            title="행사 종류"
            placeholder="행사 종류를 선택하세요"
            textInputStyle={{ textAlign: "center" }}
          />
        </Category>
        <Duration>
          <Start>
            <Text>시작일</Text>
            <DateBtn onPress={showDatepickerStart}>
              <DateText>{convertDateStart()}</DateText>
            </DateBtn>
          </Start>
          <End>
            <Text>종료일</Text>
            <DateBtn onPress={showDatepickerEnd}>
              <DateText>{convertDateEnd()}</DateText>
            </DateBtn>
          </End>
        </Duration>
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
      </RevisionContainer>
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
const ImageUpload = styled.View`
  flex-direction: row;
  justify-content: space-between;
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
const DateText = styled(Text)`
  color: #aaa;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
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
const TextInput = styled.TextInput`
  background-color: #f8f8f8;
  color: black;
  width: 240px;
  height: 50px;
  padding: 0 2%;
  margin-right: 5%;
  text-align: center;
`;
const Category = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0 2%;
  margin: 3% 0;
`;
const StyledPicker = styled(Picker)`
  width: 100px;
  height: 100%;
  border: 1px solid #000;
  border-radius: 6px;
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
const ItemPlusBtnContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 5% 0 2% 0;
`;
const ItemPlusBtn = styled.TouchableOpacity``;
const FooterBtn = styled.TouchableOpacity`
  border-radius: 6px;
  padding: 2% 13%;
  margin: 3% 2%;
`;
