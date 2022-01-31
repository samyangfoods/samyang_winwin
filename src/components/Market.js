import React from "react";
import styled from "styled-components/native";

const Market = ({ data, navigation }) => {
  return (
    <Container>
      <Top>
        <TypeText
          style={{
            backgroundColor: "#ff7d0d",
          }}
        >
          {data.budget}
        </TypeText>
      </Top>

      <Middle>
        <StoreInformation>
          <StoreInfoLeft>
            <Image source={data.image} />
          </StoreInfoLeft>

          <StoreInfoRight>
            <Title>{data.superMarketName}</Title>
            <Duration>
              <StartDate>
                <DateText>평수 : {data.size}</DateText>
              </StartDate>
              <EndDate>
                <DateText>POS : {data.pos}</DateText>
              </EndDate>
            </Duration>
          </StoreInfoRight>
        </StoreInformation>
      </Middle>

      <Bottom>
        <RouteBtn
          onPress={() =>
            navigation.navigate("소매점 수정하기", { marketData: [data] })
          }
        >
          <DetailText>상세보기 →</DetailText>
        </RouteBtn>
      </Bottom>
    </Container>
  );
};

export default Market;

const Container = styled.View`
  margin: 2% 0;
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 1% 3%;
`;
const Top = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
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
