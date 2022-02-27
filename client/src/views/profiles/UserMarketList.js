import React, { useEffect, useState } from "react";
import Search from "../../components/Search";
import { MainContainer, Top, Bottom, PlusBtn } from "../../styles/Lounge";
import { AntDesign } from "@expo/vector-icons";
import EachMarket from "../../components/EachMarket";
import { useMarketList } from "../../hooks/marketHooks";

const MarketList = ({ navigation, route }) => {
  const [searchText, setSearchText] = useState(null);
  const [markets, setMarkets] = useState(null);

  const loadMarketList = async () => {
    const response = await useMarketList();
    setMarkets(response.markets);
  };

  useEffect(() => {
    loadMarketList();
  }, [markets]);

  const renderItem = ({ item }) => {
    return <EachMarket item={item} navigation={navigation} />;
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

      {markets?.length !== 0 ? (
        <Bottom
          data={markets}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
        />
      ) : (
        <NotFound title={"소매점"} />
      )}

      <PlusBtn onPress={() => navigation.navigate("소매점 등록")}>
        <AntDesign name="plus" size={24} color="white" />
      </PlusBtn>
    </MainContainer>
  );
};

export default MarketList;
