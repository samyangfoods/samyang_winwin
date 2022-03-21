import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  RouteBtn,
  MapContainer,
  PromotionTop,
  PromotionBottom,
  Client,
  StoreInformation,
  StoreInfoLeft,
  StoreInfoRight,
  HorizontalDiv,
  TextBox,
  SmallText,
  TypeText,
  Image,
  ProtmotionDetail,
} from "../styles/Map";
import { Title, Text } from "../styles/Style";

const Promotion = ({ item, navigation }) => {
  const endDate = new Date(item.end_date);
  const startDate = new Date(item.start_date);
  const today = new Date();

  console.log(JSON.parse(item?.promotionDetail));

  return (
    <RouteBtn
      onPress={() =>
        navigation.navigate("행사상세", {
          promotionData: [item],
        })
      }
    >
      <MapContainer>
        <PromotionTop>
          <Client>
            <Ionicons name="location-sharp" size={20} color="#ff7d0d" />
            <Text>{item.user.storeName}</Text>
          </Client>
          <TypeText
            style={{
              backgroundColor:
                endDate.getTime() > today.getTime()
                  ? item.category === "전단행사"
                    ? "#ff7d0d"
                    : item.category === "엔드행사"
                    ? "#217AFF"
                    : "green"
                  : "gray",
            }}
          >
            {item.promotionType}
          </TypeText>
        </PromotionTop>

        <PromotionBottom>
          <StoreInformation>
            <StoreInfoLeft>
              <Image source={{ uri: item.images.img1 }} />
            </StoreInfoLeft>

            <StoreInfoRight>
              <Title>{item.marketName}</Title>
              <HorizontalDiv>
                <TextBox>
                  <Text>시작일</Text>
                  <SmallText>{item.start_date.slice(0, 15)}</SmallText>
                </TextBox>
                <TextBox>
                  <Text>종료일</Text>
                  <SmallText>{item.end_date.slice(0, 15)}</SmallText>
                </TextBox>
              </HorizontalDiv>
            </StoreInfoRight>
          </StoreInformation>

          <ProtmotionDetail>
            {JSON.parse(item.promotionDetail).map((res) => (
              <Text style={{ marginRight: 5 }} key={Date.now()}>
                {res.productName}
              </Text>
            ))}
          </ProtmotionDetail>
        </PromotionBottom>
      </MapContainer>
    </RouteBtn>
  );
};

export default Promotion;
