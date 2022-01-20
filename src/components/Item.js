import React, { useState } from "react";
import styled from "styled-components/native";

const Item = ({ index }) => {
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [promotionQuantity, setPromotionQuantity] = useState(null);
  const [prQuantity, setPrQuantiy] = useState(null);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };
  const handlePromotionQuantity = (event) => {
    setPromotionQuantity(event.target.value);
  };
  const handlePrQuantity = (event) => {
    setPrQuantiy(event.target.value);
  };

  return (
    <Container key={index}>
      <TextInput onChange={handleName} value={name} placeholder="제품명" />
      <TextInput onChange={handlePrice} value={price} placeholder="판매가격" />
      <TextInput
        onChange={handlePromotionQuantity}
        value={promotionQuantity}
        placeholder="행사수량"
      />
      <TextInput
        onChange={handlePrQuantity}
        value={prQuantity}
        placeholder="PR수량"
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
