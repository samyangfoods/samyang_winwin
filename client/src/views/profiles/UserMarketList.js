import React, { useEffect, useState } from "react";
import Search from "../../components/Search";
import { MainContainer, Top, Bottom, PlusBtn } from "../../styles/Lounge";
import { AntDesign } from "@expo/vector-icons";
import EachMarket from "../../components/EachMarket";
import NotFound from "../../components/NotFound";
import DataLoading from "../../components/DataLoading";
import { useSelector } from "react-redux";
import { useMarketListWithId } from "../../hooks/marketHooks";

const MarketList = ({ navigation, route }) => {
  const [searchText, setSearchText] = useState(null);
  const [markets, setMarkets] = useState(null);
  const token = useSelector((state) => state.user.token);
  const marketArray = useSelector((state) => state.market.array);

  //TODO: set market redux
  useEffect(() => {
    const setMarketData = async () => {
      const marketData = await useMarketListWithId(token);

      if (marketData) {
        setMarkets(marketData);
      }
    };

    console.log("On:", Date.now());
    setMarketData();
  }, [marketArray]);

  const renderItem = ({ item }) => {
    return <EachMarket item={item} navigation={navigation} />;
  };

  return (
    <MainContainer>
      {markets ? (
        markets[0] !== null ? (
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
              data={markets}
              keyExtractor={(item) => item._id}
              renderItem={renderItem}
            />
          </>
        ) : (
          <NotFound title={"소매점"} />
        )
      ) : (
        <DataLoading />
      )}

      <PlusBtn onPress={() => navigation.navigate("소매점 등록")}>
        <AntDesign name="plus" size={24} color="white" />
      </PlusBtn>
    </MainContainer>
  );
};

export default MarketList;
