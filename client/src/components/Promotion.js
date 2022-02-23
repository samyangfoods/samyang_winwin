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
  const endDate = new Date(item.endDate);
  const today = new Date();

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
            <Text>{item.clientName}</Text>
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
            {item.category}
          </TypeText>
        </PromotionTop>

        <PromotionBottom>
          <StoreInformation>
            <StoreInfoLeft>
              <Image source={item.image[0]} />
            </StoreInfoLeft>

            <StoreInfoRight>
              <Title>{item.superMarketName}</Title>
              <HorizontalDiv>
                <TextBox>
                  <Text>시작일</Text>
                  <SmallText>{item.startDate.slice(0, 10)}</SmallText>
                </TextBox>
                <TextBox>
                  <Text>종료일</Text>
                  <SmallText>{item.endDate.slice(0, 10)}</SmallText>
                </TextBox>
              </HorizontalDiv>
            </StoreInfoRight>
          </StoreInformation>

          <ProtmotionDetail>
            {item.description.map((res) => (
              <Text style={{ marginRight: 5 }} key={res.index}>
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
