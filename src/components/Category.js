import React from "react";
import styled from "styled-components/native";
import { Picker } from "react-native-woodpicker";

function Category({ pickedData, setPickedData }) {
  const category = [
    { label: "전단행사", value: 1 },
    { label: "엔드행사", value: 2 },
    { label: "기타행사", value: 3 },
  ];

  return (
    <Container>
      <StyledPicker
        item={pickedData}
        items={category}
        onItemChange={setPickedData}
        title="행사 종류"
        placeholder="행사 종류를 선택하세요"
        textInputStyle={{ textAlign: "center" }}
      />
    </Container>
  );
}

export default Category;

const Container = styled.View``;

const StyledPicker = styled(Picker)`
  height: 40px;
  border: 1px solid #000;
  border-radius: 6px;
  padding: 0 2%;
`;
