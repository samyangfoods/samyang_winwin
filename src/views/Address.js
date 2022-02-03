import React from "react";
import { BasicContainer } from "../styles/Style";
import { StyledPostcode } from "../styles/Component";

function Address({ setAddress, setModal }) {
  return (
    <BasicContainer>
      <StyledPostcode
        jsOptions={{ animation: true }}
        onSelected={(data) => {
          setAddress(data);
          setModal(false);
        }}
      />
    </BasicContainer>
  );
}

export default Address;
