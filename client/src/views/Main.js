import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import EachPromotion from "../components/EachPromotion";
import { MainContainer, Top, Bottom } from "../styles/Lounge";
import { usePromotions } from "../hooks/PromotionHooks";
import NotFound from "../components/NotFound";
import useSocket from "../hooks/SocketHooks";
import DataLoading from "../components/DataLoading";
import { useSelector } from "react-redux";
import * as SecureStore from "expo-secure-store";

// 2022 03 21
//TODO: websocket, promotion detail & update & delete

/*
Main page helps users to check current promotion data.
Flat list contains each promotion data and the function "renderItem" handles this part.  
This page also has a search container so that users will search promotion by its type. e.g.) "전단행사", "엔드행사", "기타행사"
*/

const Main = ({ navigation, route }) => {
  const [searchText, setSearchText] = useState(null);
  const [promotions, setPromotions] = useState(null);
  const [socket, disconnect] = useSocket();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const loadPromotions = async (token) => {
      const data = await usePromotions(token);
      if (data) {
        setPromotions(data);
      }
    };

    loadPromotions(token);

    socket.emit("main", { token });
    socket.on("getPromotionList", loadPromotions);
  }, [socket]);

  // SecureStore.deleteItemAsync("token")

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
