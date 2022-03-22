import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import EachPromotion from "../components/EachPromotion";
import { MainContainer, Top, Bottom } from "../styles/Lounge";
import { usePromotions } from "../hooks/PromotionHooks";
import NotFound from "../components/NotFound";
import useSocket from "../hooks/SocketHooks";
import DataLoading from "../components/DataLoading";
import { useSelector } from "react-redux";

// 2022 03 21
//TODO: websocket, promotion detail & update & delete

const Main = ({ navigation, route }) => {
  const [searchText, setSearchText] = useState(null);
  const [promotions, setPromotions] = useState(null);
  const [socket, disconnect] = useSocket();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const loadPromotions = async (token) => {
      const data = await usePromotions(token);
      setPromotions(data);
    };

    loadPromotions(token);
  }, []);

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

      {promotions ? (
        promotions.length !== 0 ? (
          <Bottom
            data={promotions}
            keyExtractor={(item) => item._id}
            renderItem={renderItem}
          />
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
