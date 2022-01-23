import React from "react";
import styled from "styled-components/native";
import Search from "../components/Search";
import winwin from "../assets/winwin.png";
import Promotion from "../components/Promotion";

// storeName or superMarketName
// start_date / end_date or startDate / endDate
// userid or userId
// 천일상사를 위한 데이터 필요
const mockApi = [
  {
    superMarketName: "헬로마켓",
    address: "대구광역시",
    pos: 3,
    image: winwin,
    start_date: "01/03",
    end_date: "01/10",
    promotionType: "전단행사",
    promotionCost: 1,
    promotionDetail: 1,
    islive: true,
    userid: 1,
  },
  {
    superMarketName: "삼양마켓",
    address: "대구광역시",
    pos: 3,
    image: winwin,
    start_date: "01/03",
    end_date: "01/10",
    promotionType: "엔드행사",
    promotionCost: 1,
    promotionDetail: 1,
    islive: true,
    userid: 2,
  },
  {
    superMarketName: "윈윈할인마트",
    address: "대구광역시",
    pos: 3,
    image: winwin,
    start_date: "01/03",
    end_date: "01/10",
    promotionType: "전단행사",
    promotionCost: 1,
    promotionDetail: 1,
    islive: true,
    userid: 3,
  },
];

const Main = () => {
  return (
    <Container>
      <Top>
        <Search />
      </Top>
      <Bottom>
        {mockApi.map((data) => (
          <Promotion key={data.userid} data={data} />
        ))}
      </Bottom>
    </Container>
  );
};

export default Main;

const Container = styled.View`
  flex: 1;
  padding: 0 5%;
`;

const Top = styled.View`
  flex: 1;
  align-items: center;
`;
const Bottom = styled.ScrollView`
  flex: 10;
`;

const Text = styled.Text`
  font-size: 16px;
`;
