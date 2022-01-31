import React from "react";
import styled from "styled-components/native";
import Postcode from "@actbase/react-daum-postcode";

function Address({ setAddress, setModal }) {
  return (
    <Container>
      <StyledPostcode
        jsOptions={{ animation: true }}
        onSelected={(data) => {
          setAddress(data);
          setModal(false);
        }}
      />
    </Container>
  );
}

export default Address;

const Container = styled.View``;

const StyledPostcode = styled(Postcode)`
  width: 100%;
  height: 100%;
`;
