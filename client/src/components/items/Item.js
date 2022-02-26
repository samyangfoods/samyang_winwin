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
    data.price = parseInt(text);
    setPrice(data.price);
  };
  const handlePromotionQuantity = (text) => {
    data.promotionValue = parseInt(text);
    setPromotionValue(data.promotionValue);
  };
  const handlePrQuantity = (text) => {
    data.prValue = parseInt(text);
    setPrValue(data.prValue);
  };

  return (
    <ItemContainer>
      <ItemInput
        onChangeText={(text) => handleName(text)}
        value={productName}
        placeholder={"제품명"}
      />
      <ItemInput
        onChangeText={(text) => handlePrice(text)}
        value={price}
        placeholder={"가격"}
      />
      <ItemInput
        onChangeText={(text) => handlePromotionQuantity(text)}
        value={promotionValue}
        placeholder={"수량"}
      />
      <ItemInput
        onChangeText={(text) => handlePrQuantity(text)}
        value={prValue}
        placeholder={"PR수량"}
      />
    </ItemContainer>
  );
};

export default Item;
