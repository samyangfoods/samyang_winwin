import React from "react";
import { BasicContainer } from "../styles/Style";
import { StyledPicker } from "../styles/Component";

//TODO: 행사 생성 레이아웃 변경하기 로직에 맞게

const Category = ({ pickedData, setPickedData }) => {
  const category = [
    { label: "전단행사", value: 1 },
    { label: "엔드행사", value: 2 },
    { label: "기타행사", value: 3 },
  ];

  return (
    <BasicContainer>
      <StyledPicker
        item={
          pickedData ? pickedData : { label: "종류를 선택하세요", value: 0 }
        }
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
