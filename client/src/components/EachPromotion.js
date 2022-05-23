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
} from "../styles/Map";
import { Title, Text } from "../styles/Style";
import {
  useDateFormat,
  useExpirationValidation,
  usePromotionDuration,
} from "../hooks/util";
import { imageW140 } from "../hooks/urlSetting";

const Promotion = ({ item, navigation }) => {
  const endDate = useDateFormat(item.end_date);
  const startDate = useDateFormat(item.start_date);
  const duration = usePromotionDuration(item.start_date, item.end_date);
  const expired = useExpirationValidation(new Date(), item.end_date);

  return (
    <RouteBtn
      onPress={() => navigation.navigate("행사상세", { promotionData: [item] })}
    >
      <MapContainer>
        <PromotionTop>
          <Client>
            <Ionicons name="location-sharp" size={20} color="#ff7d0d" />
            <Text>{item.user.storeName}</Text>
          </Client>
          <TypeText
            style={{
              backgroundColor: expired
                ? item.promotionType === "전단행사"
                  ? "#ff7d0d"
                  : item.promotionType === "엔드행사"
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
              <Image source={{ uri: imageW140 + item.images.img1 }} />
            </StoreInfoLeft>

            <StoreInfoRight>
              <Title>{item.marketName}</Title>
              <HorizontalDiv>
                <TextBox>
                  <Text>시작일</Text>
                  <SmallText>{startDate}</SmallText>
                </TextBox>
                <TextBox>
                  <Text>종료일</Text>
                  <SmallText>{endDate}</SmallText>
                </TextBox>
                <TextBox>
                  <Text>기간</Text>
                  <SmallText>{duration}</SmallText>
                </TextBox>
              </HorizontalDiv>
            </StoreInfoRight>
          </StoreInformation>

          {/* <ProtmotionDetail>
            {
            item.promotionDetail ? 
            JSON.parse(item.promotionDetail).map((res) => (
              <Text style={{ marginRight: 5 }} key={Math.random()}>
                {res.productName}
              </Text>
            ))
            : null
          }
          </ProtmotionDetail> */}
        </PromotionBottom>
      </MapContainer>
    </RouteBtn>
  );
};

export default Promotion;
