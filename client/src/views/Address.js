import React from "react";
import {
  StyledPostcode,
  AddressContainer,
  BtnAddress,
  BtnAddressContainer,
} from "../styles/Address";
import { AntDesign } from "@expo/vector-icons";

function Address({ setAddress, setModal, modalIsClosed }) {
  const handleViewPosition = () => {
    setModal(false);
    if (modalIsClosed) return modalIsClosed();
  };

  return (
    <AddressContainer>
      <BtnAddressContainer>
        <BtnAddress onPress={handleViewPosition}>
          <AntDesign name="close" size={30} color="black" />
        </BtnAddress>
      </BtnAddressContainer>
      <StyledPostcode
        jsOptions={{ animation: true, focusInput: false }}
        onSelected={(data) => {
          setAddress(data.roadAddress);
          if (modalIsClosed) return handleViewPosition();
          setModal(false);
        }}
      />
    </AddressContainer>
  );
}

export default Address;
