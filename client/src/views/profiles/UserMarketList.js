import React, { useCallback, useEffect, useState } from "react";
import Search from "../../components/Search";
import { MainContainer, Top, Bottom, PlusBtn } from "../../styles/Lounge";
import { AntDesign } from "@expo/vector-icons";
import EachMarket from "../../components/EachMarket";
import { useMarketList } from "../../hooks/MarketHooks";
import NotFound from "../../components/NotFound";
import { ActivityIndicator } from "react-native";
import { BasicContainer, Text } from "../../styles/Style";

const MarketList = ({ navigation, route }) => {
  const [searchText, setSearchText] = useState(null);
  const [markets, setMarkets] = useState(null);

  const loadMarketList = useCallback(async () => {
    const { markets: response } = await useMarketList();
    setMarkets(response);
  }, [markets]);

  // TODO : Build websocket instead of this code push... need to fix useEffect memory leak warning
  // websocekt or redux
  useEffect(() => {
    loadMarketList();
    // console.log("useEffect in UserMarketList is working on..", Date.now());
  });

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

      {markets ? (
        markets.length !== 0 ? (
          <Bottom
            data={markets}
            keyExtractor={(item) => item._id}
            renderItem={renderItem}
          />
        ) : (
          <NotFound title={"소매점"} />
        )
      ) : (
        <BasicContainer style={{ flex: 1, alignItems: "center" }}>
          <ActivityIndicator color="#aaa" size="large" />
          <Text style={{ color: "#aaa", marginTop: 10 }}>
            데이터를 불러오는 중입니다.
          </Text>
        </BasicContainer>
      )}

      <PlusBtn onPress={() => navigation.navigate("소매점 등록")}>
        <AntDesign name="plus" size={24} color="white" />
      </PlusBtn>
    </MainContainer>
  );
};

export default MarketList;
