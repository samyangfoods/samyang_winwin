import React, { useState } from "react";
import { productData } from "../../datas/ProductData";
import { FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";
import EachOrderItem from "./EachOrderItem";
import NotFound from "../../components/NotFound";
import { Text } from "../../styles/Style";
import {
  OrderCreationButton,
  OrderCreationContainer,
} from "../../styles/orders/Orders";

const OrderList = ({ navigation }) => {
  // State Variables
  const [orderItems, setOrderItems] = useState(productData);

  // Flat list
  const renderItem = ({ item }) => {
    return <EachOrderItem item={item} />;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <OrderCreationContainer>
        <Text>----제품군----</Text>
        {orderItems ? (
          <FlatList
            style={{ flex: 0 }}
            data={orderItems}
            keyExtractor={(item) => item.product_id}
            renderItem={renderItem}
            numColumns={3}
            initialNumToRender={orderItems.length}
          />
        ) : (
          <NotFound />
        )}

        <OrderCreationButton onPress={Keyboard.dismiss}>
          <Text style={{ color: "white" }}>주문하기</Text>
        </OrderCreationButton>
      </OrderCreationContainer>
    </TouchableWithoutFeedback>
  );
};

export default OrderList;

{
  /* <ScrollView>
{productData.map((item) => (
  <View>
    <Text>{item.product_id}</Text>
    <Text>{item.product_name}</Text>
  </View>
))}
</ScrollView> */
}
