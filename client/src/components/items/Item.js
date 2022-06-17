import React, { useState, useEffect } from "react";
import {
  ItemContainer,
  ItemInputMiddle,
  ItemInputShort,
} from "../../styles/Component";
import CategoryOfProductName from "../CategoryOfProductName";

const Item = ({ data, category }) => {
  const [productName, setProductName] = useState(data.productName.toString());
  const [price, setPrice] = useState(data.price.toString());
  const [promotionValue, setPromotionValue] = useState(
    data.promotionValue.toString()
  );
  const [prValue, setPrValue] = useState(data.prValue.toString());

  const handleName = (selectedCategory) => {
    data.productName = selectedCategory.label;
    setProductName(selectedCategory);
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

  useEffect(() => {
    console.log("🔥", data);
  }, [data]);

  return (
    <ItemContainer>
      <CategoryOfProductName
        setProductName={setProductName}
        productName={productName}
        dataName={data.productName}
        handleName={handleName}
        category={category}
      />
      <ItemInputMiddle
        onChangeText={(text) => handlePrice(text)}
        value={price}
        placeholder={"가격"}
      />
      <ItemInputShort
        onChangeText={(text) => handlePromotionQuantity(text)}
        value={promotionValue}
        placeholder={"수량"}
      />
      <ItemInputShort
        onChangeText={(text) => handlePrQuantity(text)}
        value={prValue}
        placeholder={"PR"}
      />
    </ItemContainer>
  );
};

export default Item;
