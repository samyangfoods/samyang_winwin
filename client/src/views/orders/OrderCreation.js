import React, { useEffect } from "react";
import { MainContainer } from "../../styles/Lounge";
import { Text } from "../../styles/Style";
import { productData } from "../../datas/ProductData";
import { FlatList } from "react-native";

const OrderList = () => {
  // Flat list
  const renderItem = ({ item }) => {
    return <Text>{item.product_name}</Text>;
  };

  return (
    <MainContainer>
      <Text>--------제품군--------</Text>
      <FlatList
        data={productData}
        keyExtractor={(item) => item.product_id}
        renderItem={renderItem}
      />
    </MainContainer>
  );
};

export default OrderList;
