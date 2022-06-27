import React, { useState } from "react";
import { productData } from "../../datas/ProductData";
import {
  ItemContainer,
  ItemInputMiddle,
  ItemInputShort,
} from "../../styles/Component";
import CategoryOfProductName from "../CategoryOfProductName";

const Item = ({ data, category }) => {
  // State Variables
  const [productName, setProductName] = useState(
    "" || data.productName.toString()
  );
  const [price, setPrice] = useState("" || data.price.toString());
  const [promotionValue, setPromotionValue] = useState(
    "" || data.promotionValue.toString()
  );
  const [prValue, setPrValue] = useState("" || data.prValue.toString());

  console.log(data);

  // Handling Functions
  const handleName = (selectedCategory) => {
    data.productName = selectedCategory.label;
    setProductName(selectedCategory);
  };
  const handlePrice = (text) => {
    data.price = parseInt(text);
    setPrice(JSON.stringify(data.price));
  };
  const handlePromotionQuantity = (text) => {
    data.promotionValue = parseInt(text);
    setPromotionValue(JSON.stringify(data.promotionValue));
  };
  const handlePrQuantity = (text) => {
    data.prValue = parseInt(text);
    setPrValue(JSON.stringify(data.prValue));
  };

  return (
    <ItemContainer>
      <CategoryOfProductName
        productName={productName}
        dataName={data.productName}
        handleName={handleName}
        category={category}
      />
      <ItemInputMiddle
        onChangeText={(text) => handlePrice(text)}
        value={price}
        placeholder={"가격"}
        keyboardType={"numeric"}
      />
      <ItemInputShort
        onChangeText={(text) => handlePromotionQuantity(text)}
        value={promotionValue}
        placeholder={"수량"}
        keyboardType={"numeric"}
      />
      <ItemInputShort
        onChangeText={(text) => handlePrQuantity(text)}
        value={prValue}
        placeholder={"PR"}
        keyboardType={"numeric"}
      />
    </ItemContainer>
  );
};

export default Item;
