import React, { useState } from "react";
import styled from "styled-components/native";
import Search from "../../components/Search";
import winwin from "../../assets/winwin.png";
import sample from "../../assets/sample.png";
import picture from "../../assets/picture.jpg";
import Market from "../../components/Market";

const mockApi = [
  {
    id: Date.now(),
    clientName: "천일상사",
    superMarketName: "우주마트 태양점",
    image: winwin,
    budget: "300만원",
    size: "100",
    pos: "5",
    phoneNumber: "01099995555",
    average: "300만원",
    address: { roadAddress: "우리은하 태양계 지구" },
  },
  {
    id: Date.now() + 1,
    clientName: "천일상사",
    superMarketName: "설날마트 추석점",
    image: sample,
    budget: "100만원",
    size: "70",
    pos: "3",
    phoneNumber: "01099995555",
    average: "300만원",
    address: { roadAddress: "우리은하 태양계 지구" },
  },
  {
    id: Date.now() + 2,
    clientName: "천일상사",
    superMarketName: "명절마트 휴일점",
    image: picture,
    budget: "50만원",
    size: "100",
    pos: "2",
    phoneNumber: "01099995555",
    average: "300만원",
    address: { roadAddress: "우리은하 태양계 지구" },
  },
];

const MarketList = ({ navigation, route }) => {
  // Send Text Variable to Search Component
  const [searchText, setSearchText] = useState(null);

  return (
    <Container>
      <Top>
        <Search
          route={route}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      </Top>
      <Bottom>
        {mockApi.map((data) => (
          <Market navigation={navigation} key={data.id} data={data} />
        ))}
      </Bottom>
    </Container>
  );
};

export default MarketList;

const Container = styled.View`
  flex: 1;
  padding: 0 5%;
`;
const Top = styled.View`
  flex: 1;
  z-index: 100;
`;
const Bottom = styled.ScrollView`
  flex: 10;
  margin-top: 8%;
`;
