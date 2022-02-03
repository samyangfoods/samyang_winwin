import React, { useState } from "react";
import { ItemContainer, ItemInput } from "../../styles/Component";

const Item = ({ data }) => {
  const [name, setName] = useState(data.itemName);
  const [price, setPrice] = useState(data.price);
  const [promotionQuantity, setPromotionQuantity] = useState(data.quantity);
  const [prQuantity, setPrQuantiy] = useState(data.prQuantity);

  const handleName = (text) => {
    data.itemName = text;
    setName(data.itemName);
  };
  const handlePrice = (text) => {
    data.price = text;
    setPrice(data.price);
  };
  const handlePromotionQuantity = (text) => {
    data.quantity = text;
    setPromotionQuantity(data.quantity);
  };
  const handlePrQuantity = (text) => {
    data.prQuantity = text;
    setPrQuantiy(data.prQuantity);
  };

  return (
    <ItemContainer>
      <ItemInput
        onChangeText={(text) => handleName(text)}
        value={name}
        placeholder={data.itemName}
      />
      <ItemInput
        onChangeText={(text) => handlePrice(text)}
        value={price}
        placeholder={data.price}
      />
      <ItemInput
        onChangeText={(text) => handlePromotionQuantity(text)}
        value={promotionQuantity}
        placeholder={data.quantity}
      />
      <ItemInput
        onChangeText={(text) => handlePrQuantity(text)}
        value={prQuantity}
        placeholder={data.prQuantity}
      />
    </ItemContainer>
  );
};

export default Item;
