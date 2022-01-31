import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const Promotion = ({ data, navigation }) => {
  const endDate = new Date(data.endDate);
  const today = new Date();

  return (
    <Container>
      <Top>
        <TopLeft>
          <Ionicons name="location-sharp" size={20} color="#ff7d0d" />
          <Text>{data.clientName}</Text>
        </TopLeft>
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
      </Top>

      <Middle>
        <StoreInformation>
          <StoreInfoLeft>
            <Image source={data.image[0]} />
          </StoreInfoLeft>

          <StoreInfoRight>
            <Title>{data.superMarketName}</Title>
            <Duration>
              <StartDate>
                <Text>시작일</Text>
                <DateText>{data.startDate.slice(0, 10)}</DateText>
              </StartDate>
              <EndDate>
                <Text>종료일</Text>
                <DateText>{data.endDate.slice(0, 10)}</DateText>
              </EndDate>
            </Duration>
          </StoreInfoRight>
        </StoreInformation>

        <ProtmotionDetail>
          {data.description.map((res) => (
            <Text key={res.index}>{res.itemName}</Text>
          ))}
        </ProtmotionDetail>
      </Middle>

      <Bottom>
        <RouteBtn
          onPress={() =>
            navigation.navigate("행사상세", {
              promotionData: [data],
            })
          }
        >
          <DetailText>상세보기 →</DetailText>
        </RouteBtn>
      </Bottom>
    </Container>
  );
};

export default Promotion;

const Container = styled.View`
  margin: 2% 0;
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 1% 3%;
`;
const Top = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const TopLeft = styled.View`
  flex-direction: row;
`;
const Middle = styled.View``;
const Bottom = styled.View`
  align-items: flex-end;
  padding: 2%;
`;
const StoreInformation = styled.View`
  flex-direction: row;
`;
const StoreInfoLeft = styled.View``;
const StoreInfoRight = styled.View`
  flex-direction: column;
  padding: 0 5%;
`;
const RouteBtn = styled.TouchableOpacity`
  background-color: #373737;
  border-radius: 6px;
`;
const Duration = styled.View`
  flex-direction: row;
`;
const StartDate = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const EndDate = styled(StartDate)``;
const ProtmotionDetail = styled.View`
  flex-direction: row;
  padding: 3% 5%;
`;
const Title = styled.Text`
  font-size: 18px;
  padding-left: 3%;
`;
const Text = styled.Text`
  font-size: 14px;
  margin-right: 2%;
`;
const TypeText = styled(Text)`
  color: #fff;
  border-radius: 6px;
  padding: 1%;
`;
const DateText = styled(Text)`
  font-size: 12px;
  background-color: #ccc;
  border-radius: 6px;
  padding: 1%;
  margin-right: 8%;
`;
const DetailText = styled(Text)`
  color: white;
  padding: 1.5%;
`;
const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 999px;
`;
