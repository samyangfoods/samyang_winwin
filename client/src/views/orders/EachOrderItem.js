import React from "react";
import {
  EachOrderItemContainer,
  EachOrderItemTextInput,
} from "../../styles/orders/Orders";

const EachOrderItem = ({ item }) => {
  return (
    <EachOrderItemContainer>
      <EachOrderItemTextInput
        placeholder={item.product_name}
        keyboardType="numeric"
      />
    </EachOrderItemContainer>
  );
};

export default EachOrderItem;
