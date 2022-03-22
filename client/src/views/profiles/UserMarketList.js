import React, { useEffect, useState } from "react";
import Search from "../../components/Search";
import { MainContainer, Top, Bottom, PlusBtn } from "../../styles/Lounge";
import { AntDesign } from "@expo/vector-icons";
import EachMarket from "../../components/EachMarket";
import NotFound from "../../components/NotFound";
import useSocket from "../../hooks/SocketHooks";
import DataLoading from "../../components/DataLoading";
import { useSelector } from "react-redux";

const MarketList = ({ navigation, route }) => {
  const [searchText, setSearchText] = useState(null);
  const [markets, setMarkets] = useState(null);
  const [socket, disconnect] = useSocket();
  const userId = useSelector((state) => state.user.userId);
  const token = useSelector((state) => state.user.token);

  // Socket.io in order to read user market list
  useEffect(() => {
    const loadMarketList = (data) => {
      if (data) {
        setMarkets(data);
      }
    };

    socket.emit("userMarketList", { userId, token });
    socket.on("eachMarket", loadMarketList);

    return () => {
      if (socket) {
        socket.off("eachMarket", loadMarketList);
      }
    };
  }, [socket]);

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
          navigation={navigation}
        />
      </Top>

      {markets ? (
        markets[0] !== null ? (
          <Bottom
            data={markets}
            keyExtractor={(item) => item._id}
            renderItem={renderItem}
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
