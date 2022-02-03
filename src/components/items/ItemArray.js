import React from "react";
import Item from "./Item";
import { AntDesign } from "@expo/vector-icons";
import { BasicContainer } from "../../styles/Style";
import { ItemPlusBtnContainer, ItemPlusBtn } from "../../styles/Component";

function ItemArray({ item, addItemArray }) {
  return (
    <BasicContainer>
      {item.map((data) => (
        <Item key={data.index} data={data} />
      ))}

      <ItemPlusBtnContainer>
        <ItemPlusBtn onPress={addItemArray}>
          <AntDesign name="pluscircle" size={36} color="#FF7D0D" />
        </ItemPlusBtn>
      </ItemPlusBtnContainer>
    </BasicContainer>
  );
}

export default ItemArray;
