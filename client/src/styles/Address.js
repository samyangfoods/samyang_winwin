import Postcode from "@actbase/react-daum-postcode";
import styled from "styled-components/native";

// Address
export const AddressContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export const BtnAddress = styled.TouchableOpacity`
  margin: 7% 3% 0 0;
`;

export const BtnAddressContainer = styled.View`
  align-items: flex-end;
`;

export const StyledPostcode = styled(Postcode)`
  width: 100%;
  height: 100%;
`;
