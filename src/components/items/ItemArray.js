import React from "react";
import styled from "styled-components/native";
import Item from "./Item";
import { AntDesign } from "@expo/vector-icons";

function ItemArray({ item, setItem, addItemArray }) {
  return (
    <Container>
      {item.map((data) => (
        <Item key={data.index} data={data} />
      ))}

      <ItemPlusBtnContainer>
        <ItemPlusBtn onPress={addItemArray}>
          <AntDesign name="pluscircle" size={36} color="#FF7D0D" />
        </ItemPlusBtn>
      </ItemPlusBtnContainer>
    </Container>
  );
}

export default ItemArray;

const Container = styled.View``;

const ItemPlusBtnContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 5% 0 2% 0;
`;
const ItemPlusBtn = styled.TouchableOpacity``;
