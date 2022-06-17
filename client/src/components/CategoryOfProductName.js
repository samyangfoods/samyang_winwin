import React from "react";
import { StyledPickerInItem } from "../styles/Component";
import { BasicContainer } from "../styles/Style";

const CategoryOfProductName = ({
  category,
  productName,
  handleName,
  dataName,
}) => {
  return (
    <BasicContainer>
      {category?.length != 0 && (
        <StyledPickerInItem
          item={productName}
          items={category}
          onItemChange={(text) => handleName(text)}
          title="제품명"
          placeholder={dataName}
          textInputStyle={{ textAlign: "center" }}
        />
      )}
    </BasicContainer>
  );
};

export default CategoryOfProductName;
