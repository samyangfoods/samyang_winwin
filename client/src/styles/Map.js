// Promotion, Market

import styled from "styled-components/native";
import { Text } from "./Style";

// Universal
export const MapContainer = styled.View`
  background-color: #f8f8f8;
  padding: 1% 3%;
`;
export const RouteBtn = styled.TouchableOpacity`
  border-radius: 6px;
  margin: 2% 0;
`;
export const StoreInformation = styled.View`
  flex-direction: row;
`;
export const StoreInfoLeft = styled.View``;
export const StoreInfoRight = styled.View`
  flex-direction: column;
  padding: 0 5%;
`;
export const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 999px;
`;
export const HorizontalDiv = styled.View`
  flex-direction: row;
`;
export const TextBox = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const SmallText = styled(Text)`
  font-size: 12px;
  background-color: #ccc;
  border-radius: 6px;
  padding: 1%;
  margin-right: 8%;
`;
export const TypeText = styled(Text)`
  font-size: 14px;
  color: #fff;
  border-radius: 6px;
  padding: 1%;
`;

// Promotion
export const PromotionTop = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const PromotionBottom = styled.View``;
export const Client = styled.View`
  flex-direction: row;
`;
export const ProtmotionDetail = styled.View`
  flex-direction: row;
  padding: 3% 5%;
`;

// Market
export const MarketTop = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
export const MarketBottom = styled.View`
  padding-bottom: 2%;
`;
