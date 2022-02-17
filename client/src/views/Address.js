import React, { useState } from "react";
import {
  StyledPostcode,
  AddressContainer,
  BtnAddress,
  BtnAddressContainer,
} from "../styles/Address";
import { AntDesign } from "@expo/vector-icons";

function Address({ setAddress, setModal }) {
  const [ref, setRef] = useState(null);

  return (
    <AddressContainer
      ref={(ref) => setRef(ref)}
      onContentSizeChange={() => {
        ref?.scrollTo({ y: 0, animated: false });
      }}
    >
      <BtnAddressContainer>
        <BtnAddress onPress={() => setModal(false)}>
          <AntDesign name="close" size={30} color="black" />
        </BtnAddress>
      </BtnAddressContainer>
      <StyledPostcode
        jsOptions={{ animation: true, focusInput: false }}
        onSelected={(data) => {
          setAddress(data);
          setModal(false);
        }}
      />
    </AddressContainer>
  );
}

export default Address;
