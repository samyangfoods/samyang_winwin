import React from "react";
import { imageW140 } from "../hooks/urlSetting";
import {
  RouteBtn,
  MapContainer,
  MarketTop,
  MarketBottom,
  HorizontalDiv,
  TextBox,
  TypeText,
  SmallText,
  StoreInformation,
  StoreInfoLeft,
  StoreInfoRight,
  Image,
} from "../styles/Map";
import { Title } from "../styles/Style";

const Market = ({ item, navigation }) => {
  console.log("----------");
  console.log(item.marketName, item.marketImage);

  return (
    <RouteBtn
      onPress={() =>
        navigation.navigate("소매점 수정하기", { marketData: [item] })
      }
    >
      <MapContainer>
        <MarketTop>
          <TypeText
            style={{
              backgroundColor: "#ff7d0d",
            }}
          >
            {item.averageSales + "만원"}
          </TypeText>
        </MarketTop>

        <MarketBottom>
          <StoreInformation>
            <StoreInfoLeft>
              <Image source={{ uri: `${imageW140}${item.marketImage}` }} />
            </StoreInfoLeft>

            <StoreInfoRight>
              <Title>{item.marketName}</Title>
              <HorizontalDiv>
                <TextBox>
                  <SmallText>평수 : {item.size}</SmallText>
                </TextBox>
                <TextBox>
                  <SmallText>POS : {item.pos}</SmallText>
                </TextBox>
              </HorizontalDiv>
            </StoreInfoRight>
          </StoreInformation>
        </MarketBottom>
      </MapContainer>
    </RouteBtn>
  );
};

export default Market;
