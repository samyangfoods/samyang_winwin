// MarketInput, MarketInfoChange

import styled from "styled-components/native";
import { BasicContainer } from "./Style";

// Universal
export const MarketInputForm = styled(BasicContainer)`
  padding: 5%;
`;
export const VerticalDiv = styled.View`
  flex-direction: column;
  width: 50%;
`;
export const HorizontalDiv = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 3% 0;
`;
export const TextInput = styled.TextInput`
  padding: 2%;
  margin: 3% 0 1% 0;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 6px;
`;
export const Btn = styled.TouchableOpacity`
  border: 1px solid #eee;
  padding: 3% 5%;
  margin: 0 0 3% 0;
`;
export const AddressContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

// MarketInput
export const BtnAddress = styled.TouchableOpacity`
  margin: 7% 3% 0 0;
`;
export const BtnAddressContainer = styled.View`
  align-items: flex-end;
`;
export const ThumbnailContainer = styled.View`
  align-items: center;
  margin: 3% 0;
`;
export const Image = styled.Image`
  width: 250px;
  height: 250px;
`;
export const LoginBtn = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff7d0d;
  padding: 3% 0;
  margin-top: 10%;
  border-radius: 7px;
`;
export const BtnText = styled.Text`
  font-weight: 900;
  color: #fff;
`;

// MarketInfoChange
export const FooterBtn = styled.TouchableOpacity`
  border-radius: 6px;
  padding: 2% 13%;
  margin: 3% 2%;
`;
export const BtnContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 15%;
`;

// MarketInfo
export const MarketContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
`;
