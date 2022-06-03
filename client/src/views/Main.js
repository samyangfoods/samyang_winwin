import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import EachPromotion from "../components/EachPromotion";
import { MainContainer, Top, Bottom } from "../styles/Lounge";
import NotFound from "../components/NotFound";
import DataLoading from "../components/DataLoading";
import { useSelector } from "react-redux";

// 2022 03 21
//TODO: websocket, promotion detail & update & delete

/*
Main page helps users to check current promotion data.
Flat list contains each promotion data and the function "renderItem" handles this part.  
This page also has a search container so that users will search promotion by its type. e.g.) "전단행사", "엔드행사", "기타행사"
*/

const Main = ({ navigation, route }) => {
  // Redux Variables
  const promotionArray = useSelector((state) => state.promotion.array);

  // useState Variables
  const [searchText, setSearchText] = useState(null);
  const [promotions, setPromotions] = useState(null);

  useEffect(() => {
    if (promotionArray) {
      setPromotions(promotionArray);
    }
  }, [promotionArray]);

  const renderItem = ({ item }) => {
    return <EachPromotion item={item} navigation={navigation} />;
  };

  return (
    <MainContainer>
      {promotions ? (
        promotions.length !== 0 ? (
          <>
            <Top>
              <Search
                route={route}
                searchText={searchText}
                setSearchText={setSearchText}
                navigation={navigation}
              />
            </Top>

            <Bottom
              data={promotions}
              keyExtractor={(item) => item._id}
              renderItem={renderItem}
            />
          </>
        ) : (
          <NotFound title={"행사"} />
        )
      ) : (
        <DataLoading />
      )}
    </MainContainer>
  );
};

export default Main;
