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
  const [productName, setProductName] = useState(data.productName.toString());
  const [price, setPrice] = useState(data.price.toString());
  const [promotionValue, setPromotionValue] = useState(
    data.promotionValue.toString()
  );
  const [prValue, setPrValue] = useState(data.prValue.toString());

  // Handling Functions
  const handleName = (selectedCategory) => {
    data.productName = selectedCategory.label;
    setProductName(selectedCategory);

    handlePrice(data.productName);
  };
  const handlePrice = (text) => {
    productData.map((promoData) => {
      if (promoData.product_name === text) {
        data.price = parseInt(promoData.product_price);
        setPrice(JSON.stringify(promoData.product_price));
      }
    });
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
      <ItemInputMiddle value={price} placeholder={"가격"} />
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
