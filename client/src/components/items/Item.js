import React, { useState } from "react";
import { ItemContainer, ItemInput } from "../../styles/Component";

const Item = ({ data }) => {
  const [productName, setProductName] = useState(data.productName);
  const [price, setPrice] = useState(data.price);
  const [promotionValue, setPromotionValue] = useState(data.promotionValue);
  const [prValue, setPrValue] = useState(data.prValue);

  const handleName = (text) => {
    data.productName = text;
    setProductName(data.productName);
  };
  const handlePrice = (text) => {
    data.price = text;
    setPrice(data.price);
  };
  const handlePromotionQuantity = (text) => {
    data.promotionValue = text;
    setPromotionValue(data.promotionValue);
  };
  const handlePrQuantity = (text) => {
    data.prValue = text;
    setPrValue(data.prValue);
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
