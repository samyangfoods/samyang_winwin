import React from "react";
import { BasicContainer } from "../styles/Style";
import { StyledPicker } from "../styles/Component";

const Channel = ({ pickedData, setPickedData }) => {
  const category = [
    { label: "특약점", value: 1 },
    { label: "중대형마트", value: 2 },
    { label: "기타", value: 3 },
  ];

  return (
    <BasicContainer style={{ justifyContent: "center" }}>
      <StyledPicker
        style={{ width: 70, height: 55, marginLeft: 10 }}
        item={pickedData}
        items={category}
        onItemChange={setPickedData}
        title="채널 종류"
        placeholder="채널을 선택하세요"
        textInputStyle={{ textAlign: "center" }}
      />
    </BasicContainer>
  );
};

export default Channel;
