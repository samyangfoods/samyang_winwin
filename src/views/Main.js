import React, { useState } from "react";
import Search from "../components/Search";
import winwin from "../assets/winwin.png";
import sample from "../assets/sample.png";
import picture from "../assets/picture.jpg";
import Promotion from "../components/Promotion";
import { MainContainer, Top, Bottom } from "../styles/Lounge";

// storeName // superMarketName
// start_date / end_date or startDate / endDate
// userid or userId

const mockApi = [
  {
    id: Date.now(),
    clientName: "천일상사",
    superMarketName: "우주마트 태양점",
    category: "엔드행사",
    image: [winwin, sample, picture],
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
    clientName: "천일상사",
    superMarketName: "삼양마트 윈윈점",
    category: "전단행사",
    image: [sample, winwin],
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
    clientName: "천일상사",
    superMarketName: "고기마트 식물점",
    category: "기타행사",
    image: [picture, winwin],
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
    clientName: "천일상사",
    superMarketName: "식물마트 고기점",
    category: "기타행사",
    image: [sample, picture, winwin, picture],
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
    <MainContainer>
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
    </MainContainer>
  );
};

export default Main;
