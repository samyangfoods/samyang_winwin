import React from "react";
import { BasicContainer, Text } from "../../styles/Style";

const EachOrderItem = ({ item }) => {
  return (
    <BasicContainer>
      <Text>{item.product_id}</Text>
      <Text>{item.product_name}</Text>
    </BasicContainer>
  );
};

export default EachOrderItem;
