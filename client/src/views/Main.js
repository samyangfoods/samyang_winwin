import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Promotion from "../components/Promotion";
import { MainContainer, Top, Bottom } from "../styles/Lounge";
import axios from "axios";
import { Text } from "../styles/Style";
import { usePromotions } from "../hooks/promotionHooks";

// storeName // superMarketName
// start_date / end_date or startDate / endDate
// userid or userId

const Main = ({ navigation, route }) => {
  // Send Text Variable to Search Component
  const [searchText, setSearchText] = useState(null);
  const [promotions, setPromotions] = useState(null);

  const loadPromotions = async () => {
    const data = await usePromotions();
    setPromotions(data.promotions);
  };

  useEffect(() => {
    loadPromotions();
  }, []);

  const renderItem = ({ item }) => {
    return <Promotion item={item} navigation={navigation} />;
  };

  return (
    <MainContainer>
      <Top>
        <Search
          route={route}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      </Top>
      {promotions?.length !== 0 ? (
        <Bottom
          data={promotions}
          keyExtractor={(item) => Date.now()}
          renderItem={renderItem}
        />
      ) : (
        <Text style={{ flex: 1 }}>등록된 행사가 없습니다.</Text>
      )}
    </MainContainer>
  );
};

export default Main;
