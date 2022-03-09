import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import EachPromotion from "../components/EachPromotion";
import { MainContainer, Top, Bottom } from "../styles/Lounge";
import { usePromotions } from "../hooks/PromotionHooks";
import NotFound from "../components/NotFound";
import useSocket from "../hooks/SocketHooks";

// storeName // superMarketName
// start_date / end_date or startDate / endDate
// userid or userId

const Main = ({ navigation, route }) => {
  const [searchText, setSearchText] = useState(null);
  const [promotions, setPromotions] = useState(null);
  const [socket, disconnect] = useSocket();

  const loadPromotions = async () => {
    const data = await usePromotions();
    setPromotions(data.promotions);
  };

  useEffect(() => {
    // loadPromotions();
  }, [promotions]);

  const renderItem = ({ item }) => {
    return <EachPromotion item={item} navigation={navigation} />;
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
          // Need unique key here 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
          keyExtractor={(item) => Date.now()}
          renderItem={renderItem}
        />
      ) : (
        <NotFound title={"행사"} />
      )}
    </MainContainer>
  );
};

export default Main;
