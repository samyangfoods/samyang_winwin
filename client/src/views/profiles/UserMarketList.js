import React, { useEffect, useState } from "react";
import { MainContainer, Bottom, PlusBtn } from "../../styles/Lounge";
import { AntDesign } from "@expo/vector-icons";
import EachMarket from "../../components/EachMarket";
import NotFound from "../../components/NotFound";
import DataLoading from "../../components/DataLoading";
import { useSelector } from "react-redux";
import { useMarketListWithId } from "../../hooks/marketHooks";

const MarketList = ({ navigation }) => {
  // Redux Variables
  const token = useSelector((state) => state.user.token);
  const marketArray = useSelector((state) => state.market.array);

  // Hooks Variables
  const [markets, setMarkets] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  //TODO: set market redux
  useEffect(() => {
    const setMarketData = async () => {
      const marketData = await useMarketListWithId(token);

      if (marketData) {
        setMarkets(marketData);
      }
    };

    setMarketData();
  }, [marketArray]);

  // Flat list
  const renderItem = ({ item }) => {
    return <EachMarket item={item} navigation={navigation} />;
  };

  // Pull to refresh
  const onRefresh = async () => {
    setIsRefreshing(true);

    setTimeout(() => {}, 200);

    setIsRefreshing(false);
  };

  return (
    <MainContainer>
      {markets ? (
        markets[0] !== null ? (
          <Bottom
            data={markets}
            keyExtractor={(item) => item._id}
            renderItem={renderItem}
            onRefresh={onRefresh}
            refreshing={isRefreshing}
          />
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
