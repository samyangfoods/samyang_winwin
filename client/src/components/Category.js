import React from "react";
import { BasicContainer } from "../styles/Style";
import { StyledPicker } from "../styles/Component";

const Category = ({ pickedData, setPickedData }) => {
  const category = [
    { label: "전단행사", value: 1 },
    { label: "엔드행사", value: 2 },
    { label: "기타행사", value: 3 },
  ];

  return (
    <BasicContainer>
      <StyledPicker
        item={pickedData}
        items={category}
        onItemChange={setPickedData}
        title="행사 종류"
        placeholder="행사 종류를 선택하세요"
        textInputStyle={{ textAlign: "center" }}
      />
    </BasicContainer>
  );
};

export default Category;
