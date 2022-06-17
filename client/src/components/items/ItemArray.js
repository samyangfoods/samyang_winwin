import React, { useState, useEffect } from "react";
import Item from "./Item";
import { AntDesign } from "@expo/vector-icons";
import { BasicContainer } from "../../styles/Style";
import { ItemPlusBtnContainer, ItemPlusBtn } from "../../styles/Component";
import { productData } from "../../datas/ProductData";

const ItemArray = ({ item, setItem, addItemArray }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const setProductNameCategory = async () => {
      let arr = [];
      productData.map((data) =>
        arr.push({
          value: data.product_id,
          label: data.product_name,
        })
      );

      setCategory([...arr]);
    };

    setProductNameCategory();
  }, []);

  return (
    <BasicContainer>
      {item.map((data) => (
        <Item key={Math.random()} data={data} category={category} />
      ))}

      <ItemPlusBtnContainer>
        <ItemPlusBtn onPress={addItemArray}>
          <AntDesign name="pluscircle" size={36} color="#FF7D0D" />
        </ItemPlusBtn>
      </ItemPlusBtnContainer>
    </BasicContainer>
  );
};

export default ItemArray;
