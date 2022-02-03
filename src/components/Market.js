import React from "react";
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

const Market = ({ data, navigation }) => {
  return (
    <RouteBtn
      onPress={() =>
        navigation.navigate("소매점 수정하기", { marketData: [data] })
      }
    >
      <MapContainer>
        <MarketTop>
          <TypeText
            style={{
              backgroundColor: "#ff7d0d",
            }}
          >
            {data.budget}
          </TypeText>
        </MarketTop>

        <MarketBottom>
          <StoreInformation>
            <StoreInfoLeft>
              <Image source={data.image} />
            </StoreInfoLeft>

            <StoreInfoRight>
              <Title>{data.superMarketName}</Title>
              <HorizontalDiv>
                <TextBox>
                  <SmallText>평수 : {data.size}</SmallText>
                </TextBox>
                <TextBox>
                  <SmallText>POS : {data.pos}</SmallText>
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
