import React, { useState } from "react";
import styled from "styled-components/native";
import Search from "../components/Search";
import winwin from "../assets/winwin.png";
import sample from "../assets/sample.png";
import picture from "../assets/picture.jpg";
import Promotion from "../components/Promotion";

// storeName // superMarketName
// start_date / end_date or startDate / endDate
// userid or userId

const mockApi = [
  {
    id: Date.now(),
    superMarketName: "우주마트 태양점",
    category: "엔드행사",
    image: [winwin, winwin, winwin, winwin],
    startDate: "2022-01-01T05:39:47.675Z",
    endDate: "2022-01-30T05:39:47.675Z",
    description: [
      {
        index: 1,
        itemName: "삼양라면",
        price: "1000",
        quantity: "100",
        prQuantity: "100",
      },
      {
        index: 2,
        itemName: "불닭볶음면",
        price: "10000",
        quantity: "10",
        prQuantity: "10",
      },
      {
        index: 3,
        itemName: "과자",
        price: "10",
        quantity: "100",
        prQuantity: "10",
      },
    ],
  },
  {
    id: Date.now() + 1,
    superMarketName: "삼양마트 윈윈점",
    category: "전단행사",
    image: [sample],
    startDate: "2022-11-01T05:39:47.675Z",
    endDate: "2022-12-30T05:39:47.675Z",
    description: [
      {
        index: 1,
        itemName: "짜짜로니",
        price: "1000",
        quantity: "100",
        prQuantity: "100",
      },
    ],
  },
  {
    id: Date.now() + 2,
    superMarketName: "고기마트 식물점",
    category: "기타행사",
    image: [picture, picture],
    startDate: "2022-05-01T05:39:47.675Z",
    endDate: "2022-06-30T05:39:47.675Z",
    description: [
      {
        index: 1,
        itemName: "물품1",
        price: "1000",
        quantity: "100",
        prQuantity: "100",
      },
      {
        index: 2,
        itemName: "물품2",
        price: "10000",
        quantity: "10",
        prQuantity: "10",
      },
      {
        index: 3,
        itemName: "물품3",
        price: "10",
        quantity: "100",
        prQuantity: "10",
      },
    ],
  },
  {
    id: Date.now() + 3,
    superMarketName: "식물마트 고기점",
    category: "기타행사",
    image: [picture, picture, picture, picture],
    startDate: "2021-05-01T05:39:47.675Z",
    endDate: "2021-06-30T05:39:47.675Z",
    description: [
      {
        index: 1,
        itemName: "물품1",
        price: "1000",
        quantity: "100",
        prQuantity: "100",
      },
      {
        index: 2,
        itemName: "물품2",
        price: "10000",
        quantity: "10",
        prQuantity: "10",
      },
    ],
  },
];

const Main = ({ navigation, route }) => {
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
          <Promotion navigation={navigation} key={data.id} data={data} />
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
  z-index: 100;
`;
const Bottom = styled.ScrollView`
  flex: 10;
  margin-top: 8%;
`;
