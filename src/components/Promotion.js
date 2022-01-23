import React from "react";
import styled from "styled-components/native";

const Promotion = ({ data }) => {
  return (
    <Container>
      <ProtmotionType>
        <TypeText
          style={{
            backgroundColor:
              data.promotionType === "전단행사" ? "#ff7d0d" : "#217AFF",
          }}
        >
          {data.promotionType}
        </TypeText>
      </ProtmotionType>
      <StoreInformation>
        <StoreInfoLeft>
          <Image source={data.image} />
        </StoreInfoLeft>
        <StoreInfoRight>
          <Title>{data.superMarketName}</Title>
          <Duration>
            <StartDate>
              <Text>시작일</Text>
              <DateText>{data.start_date}</DateText>
            </StartDate>
            <EndDate>
              <Text>종료일</Text>
              <DateText>{data.end_date}</DateText>
            </EndDate>
          </Duration>
        </StoreInfoRight>
      </StoreInformation>
      <ProtmotionDetail>
        <Text>{data.superMarketName}</Text>
      </ProtmotionDetail>
    </Container>
  );
};

export default Promotion;

const Container = styled.View`
  margin: 2% 0;
  background-color: #f8f8f8;
  border-radius: 8px;
`;

const ProtmotionType = styled.View`
  align-items: flex-end;
`;

const StoreInformation = styled.View`
  flex-direction: row;
  padding: 0 5%;
`;

const StoreInfoLeft = styled.View``;
const StoreInfoRight = styled.View`
  flex-direction: column;
  padding: 0 5%;
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
  padding: 3% 5%;
`;

const Title = styled.Text`
  font-size: 18px;
  padding-left: 3%;
`;
const Text = styled.Text`
  font-size: 14px;
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

const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 999px;
`;
