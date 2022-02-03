import React, { useState } from "react";
import Search from "../../components/Search";
import winwin from "../../assets/winwin.png";
import sample from "../../assets/sample.png";
import picture from "../../assets/picture.jpg";
import Market from "../../components/Market";
import { MainContainer, Top, Bottom } from "../../styles/Lounge";

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
    phoneNumber: "1234",
    average: "100만원",
    address: { roadAddress: "캘리포니아 오렌지 카운티" },
  },
  {
    id: Date.now() + 2,
    clientName: "천일상사",
    superMarketName: "명절마트 휴일점",
    image: picture,
    budget: "50만원",
    size: "100",
    pos: "2",
    phoneNumber: "가나다라",
    average: "3000000000만원",
    address: { roadAddress: "베를린시 독일 마을" },
  },
];

const MarketList = ({ navigation, route }) => {
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
          <Market navigation={navigation} key={data.id} data={data} />
        ))}
      </Bottom>
    </MainContainer>
  );
};

export default MarketList;
