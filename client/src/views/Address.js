import React from "react";

import { StyledPostcode } from "../styles/Component";
import { BtnAddress, BtnAddressContainer } from "../styles/Auth";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";

function Address({ setAddress, setModal }) {
  return (
    <AddressContainer>
      <BtnAddressContainer>
        <BtnAddress onPress={() => setModal(false)}>
          <AntDesign name="close" size={30} color="black" />
        </BtnAddress>
      </BtnAddressContainer>
      <StyledPostcode
        jsOptions={{ animation: true }}
        onSelected={(data) => {
          setAddress(data);
          setModal(false);
        }}
      />
    </AddressContainer>
  );
}

export default Address;

const AddressContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;
