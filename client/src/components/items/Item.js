import React, { useState } from "react";
import { ItemContainer, ItemInput } from "../../styles/Component";

const Item = ({ data }) => {
  const [productName, setProductName] = useState(data.productName);
  const [price, setPrice] = useState(data.price);
  const [promotionValue, setPromotionValue] = useState(data.promotionValue);
  const [prValue, setPrValue] = useState(data.prValue);

  const handleName = (text) => {
    data.itemName = text;
    setProductName(data.itemName);
  };
  const handlePrice = (text) => {
    data.price = text;
    setPrice(data.price);
  };
  const handlePromotionQuantity = (text) => {
    data.quantity = text;
    setPromotionValue(data.quantity);
  };
  const handlePrQuantity = (text) => {
    data.prQuantity = text;
    setPrValue(data.prQuantity);
  };

  return (
    <ItemContainer>
      <ItemInput
        onChangeText={(text) => handleName(text)}
        value={productName}
        placeholder={data.productName}
      />
      <ItemInput
        onChangeText={(text) => handlePrice(text)}
        value={price}
        placeholder={data.price}
      />
      <ItemInput
        onChangeText={(text) => handlePromotionQuantity(text)}
        value={promotionValue}
        placeholder={data.promotionValue}
      />
      <ItemInput
        onChangeText={(text) => handlePrQuantity(text)}
        value={prValue}
        placeholder={data.prValue}
      />
    </ItemContainer>
  );
};

export default Item;
