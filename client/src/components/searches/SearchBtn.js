import React from "react";
import { Text } from "../../styles/Style";
import { SearchBtn } from "../../styles/Component";

export const SearchBtnBox = ({ text, state, setState }) => {
  return (
    <SearchBtn
      onPress={() => setState(!state)}
      style={{
        backgroundColor: state ? "#FF7D0D" : "#f8f8f8",
        color: state ? "#fff" : "#000",
      }}
    >
      <Text
        style={{
          color: state ? "#fff" : "#000",
        }}
      >
        {text}
      </Text>
    </SearchBtn>
  );
};
