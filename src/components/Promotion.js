import React from "react";
import styled from "styled-components/native";
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

const Promotion = ({ data, navigation }) => {
  const endDate = new Date(data.endDate);
  const today = new Date();

  return (
    <RouteBtn
      onPress={() =>
        navigation.navigate("행사상세", {
          promotionData: [data],
        })
      }
    >
      <MapContainer>
        <PromotionTop>
          <Client>
            <Ionicons name="location-sharp" size={20} color="#ff7d0d" />
            <Text>{data.clientName}</Text>
          </Client>
          <TypeText
            style={{
              backgroundColor:
                endDate.getTime() > today.getTime()
                  ? data.category === "전단행사"
                    ? "#ff7d0d"
                    : data.category === "엔드행사"
                    ? "#217AFF"
                    : "green"
                  : "gray",
            }}
          >
            {data.category}
          </TypeText>
        </PromotionTop>

        <PromotionBottom>
          <StoreInformation>
            <StoreInfoLeft>
              <Image source={data.image[0]} />
            </StoreInfoLeft>

            <StoreInfoRight>
              <Title>{data.superMarketName}</Title>
              <HorizontalDiv>
                <TextBox>
                  <Text>시작일</Text>
                  <SmallText>{data.startDate.slice(0, 10)}</SmallText>
                </TextBox>
                <TextBox>
                  <Text>종료일</Text>
                  <SmallText>{data.endDate.slice(0, 10)}</SmallText>
                </TextBox>
              </HorizontalDiv>
            </StoreInfoRight>
          </StoreInformation>

          <ProtmotionDetail>
            {data.description.map((res) => (
              <Text key={res.index}>{res.itemName}</Text>
            ))}
          </ProtmotionDetail>
        </PromotionBottom>
      </MapContainer>
    </RouteBtn>
  );
};

export default Promotion;
