import React from "react";
import { StyledPostcode } from "../styles/Component";
import {
  AddressContainer,
  BtnAddress,
  BtnAddressContainer,
} from "../styles/Auth";
import { AntDesign } from "@expo/vector-icons";

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
