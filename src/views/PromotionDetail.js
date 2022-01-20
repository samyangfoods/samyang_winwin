import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import winwin from "../assets/winwin.png";
import CameraRoll from "@react-native-community/cameraroll";
import { PermissionsAndroid, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Item from "../components/Item";

const mockApi = [
  {
    id: 1,
    image: winwin,
    description: "",
  },
  {
    id: 2,
    image: winwin,
    description: "",
  },
  {
    id: 3,
    image: winwin,
    description: "",
  },
  {
    id: 4,
    image: winwin,
    description: "",
  },
];

const PromotionDetail = () => {
  const [item, setItem] = useState([]);
  const [ref, setRef] = useState(null);

  // Asking Camera Access , Android
  // IOS should be done.
  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }
    const status = await PermissionsAndroid.request(permission);
    return status === "granted";
  };

  const accessAlbum = async () => {
    if (Platform.OS === "android" && !(await hasAndroidPermission())) {
      return;
    }
    CameraRoll.getAlbums({ assetType: "Photos" });
  };

  const addItemArray = () => {
    const index = Date.now();
    setItem([...item, { id: item.length, index }]);
  };

  useEffect(() => {
    addItemArray();
  }, []);

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
          {mockApi.map((info) => (
            <SwiperImage key={info.id}>
              <Image source={info.image} />
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
        <TextInput placeholder="나이스마트 수성점" />
        <Category>
          <CategoryBtn>
            <MaterialCommunityIcons name="file-table" size={15} color="black" />
          </CategoryBtn>
          <CategoryText>전단행사</CategoryText>
        </Category>
        <Duration>
          <Start>
            <Text>시작일</Text>
            <DateBtn>
              <DateText>Start</DateText>
            </DateBtn>
          </Start>
          <End>
            <Text>종료일</Text>
            <DateBtn>
              <DateText>End</DateText>
            </DateBtn>
          </End>
        </Duration>
        <Detail>
          <Text>행사 내역</Text>
          {item.map((data) => (
            <Item key={data.id} index={data.index} />
          ))}
        </Detail>
        <ItemPlusBtnContainer>
          <ItemPlusBtn onPress={addItemArray}>
            <AntDesign name="pluscircle" size={36} color="#FF7D0D" />
          </ItemPlusBtn>
        </ItemPlusBtnContainer>
      </RevisionContainer>
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
const CategoryText = styled(Text)`
  font-size: 14px;
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
const ItemPlusBtn = styled.TouchableOpacity``;
const CategoryBtn = styled(Btn)`
  border: none;
  padding: 1%;
  margin-right: 2%;
  background-color: #eeeeee;
`;
const DateBtn = styled(Btn)`
  align-items: center;
  width: 80%;
  border: 1px solid #aaa;
`;
const TextInput = styled.TextInput`
  background-color: #f8f8f8;
  height: 52px;
  padding: 0 2%;
`;
const Category = styled.View`
  flex-direction: row;
  align-items: center;
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
