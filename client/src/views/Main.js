import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import EachPromotion from "../components/EachPromotion";
import { MainContainer, Top, Bottom, PlusBtn } from "../styles/Lounge";
import NotFound from "../components/NotFound";
import DataLoading from "../components/DataLoading";
import { useSelector } from "react-redux";
import { usePromotions } from "../hooks/promotionHooks";
import { AntDesign } from "@expo/vector-icons";
import Header from "../components/Header";

/*
Main page helps users to check current promotion data.
Flat list contains each promotion data and the function "renderItem" handles this part.  
This page also has a search container so that users will search promotion by its type. e.g.) "전단행사", "엔드행사", "기타행사"
*/

const Main = ({ navigation, route }) => {
  // Redux Variables
  const promotionArray = useSelector((state) => state.promotion.array);
  const token = useSelector((state) => state.user.token);

  // useState Variables
  const [searchText, setSearchText] = useState(null);
  const [promotions, setPromotions] = useState(null);

  // Set the current user's promotion data
  useEffect(() => {
    const setPromotionData = async () => {
      const promotionData = await usePromotions(token);

      if (promotionData) {
        setPromotions(promotionData);
      }
    };

    setPromotionData();
  }, [promotionArray]);

  // Flat list
  const renderItem = ({ item }) => {
    return <EachPromotion item={item} navigation={navigation} />;
  };

  return (
    <MainContainer>
      {/* Body */}
      <Header />
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

      {/* Promotion Creation Button */}
      <PlusBtn onPress={() => navigation.navigate("행사등록")}>
        <AntDesign name="plus" size={24} color="white" />
      </PlusBtn>

    </MainContainer>
  );
};

export default Main;
