// PromotionCreate, PromotionDetail

import styled from "styled-components/native";
import { Text } from "./Style";

// Universal
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
  margin: 1% 0;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 6px;
`;
export const MarketName = styled.TextInput`
  background-color: #f8f8f8;
  color: black;
  width: 240px;
  height: 50px;
  padding: 0 2%;
  margin-right: 5%;
  text-align: center;
`;

// PromotionCreate
export const ProtmotionCreateContainer = styled.View`
  flex: 1;
  padding: 0 5%;
`;
export const Top = styled.View`
  flex: 1;
  align-items: center;
  padding: 0.5% 0;
  z-index: 100;
`;
export const Bottom = styled.ScrollView`
  flex: 10;
  margin-top: 8%;
`;
export const ImageContainer = styled(HorizontalDiv)`
  flex-direction: column;
`;
export const ShortInput = styled(TextInput)`
  width: 100%;
`;
export const Detail = styled.View`
  margin-top: 3%;
`;
export const BtnContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 3% 0;
`;
export const FooterBtn = styled.TouchableOpacity`
  align-items: center;
  width: 80%;
  padding: 2% 13%;
  margin: 3% 2%;
  border-radius: 6px;
`;

// PromotionDetail
export const PromotionDetailContainer = styled.ScrollView`
  flex: 1;
`;
export const RevisionContainer = styled.View`
  padding: 0 3%;
  margin-top: 3%;
`;
export const SwiperContainer = styled.View`
  height: 220px;
`;
export const SwiperImage = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const BtnText = styled(Text)`
  color: #fff;
`;
export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
export const PromotionCategory = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0 2%;
  margin: 3% 0;
`;
export const Duration = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Start = styled.View`
  flex-direction: column;
  align-items: center;
  width: 50%;
`;
export const End = styled(Start)``;
export const PromotionDetailFooterBtn = styled.TouchableOpacity`
  border-radius: 6px;
  padding: 2% 13%;
  margin: 3% 2%;
`;
