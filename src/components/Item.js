import React, { useState } from "react";
import styled from "styled-components/native";

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
    <Container>
      <TextInput
        onChangeText={(text) => handleName(text)}
        value={name}
        placeholder={data.itemName}
      />
      <TextInput
        onChangeText={(text) => handlePrice(text)}
        value={price}
        placeholder={data.price}
      />
      <TextInput
        onChangeText={(text) => handlePromotionQuantity(text)}
        value={promotionQuantity}
        placeholder={data.quantity}
      />
      <TextInput
        onChangeText={(text) => handlePrQuantity(text)}
        value={prQuantity}
        placeholder={data.prQuantity}
      />
    </Container>
  );
};

export default Item;

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2%;
`;
const TextInput = styled.TextInput`
  text-align: center;
  border: 1px solid #eee;
  width: 22%;
  height: 35px;
`;
