// PromotionCreate, PromotionDetail
import styled from "styled-components/native";
import { BasicContainer, Text } from "./Style";

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
  text-align: center;
  border: 1px solid #eee;
  border-radius: 6px;
`;
export const MarketName = styled.TextInput`
  color: black;
  width: 240px;
  height: 50px;
  padding: 0 2%;
  margin-right: 5%;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 6px;
`;
export const ItemCategory = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 2% 1% 0 0;
`;
export const TextBoxLong = styled.View`
  align-items: center;
  width: 44%;
`;
export const TextBoxMiddle = styled.View`
  align-items: center;
  width: 22%;
`;
export const TextBoxShort = styled.View`
  align-items: center;
  width: 11%;
`;
export const HorizontalSeparator = styled.View`
  width: 100%;
  height: 1px;
  border: 1px solid #f2f2f2;
  margin: 2% 0 0 0;
`;
export const ImageButtonContainer = styled(BasicContainer)`
  height: 70px;
  align-items: center;
`;

// PromotionCreate
export const ProtmotionCreateContainer = styled.ScrollView`
  flex: 1;
`;
export const Top = styled.View`
  flex: 1;
  align-items: center;
  padding: 0.5% 0;
`;
export const Body = styled.View`
  flex: 10;
  margin-top: 3%;
  padding: 0 5%;
`;
export const ImageContainer = styled(HorizontalDiv)`
  flex-direction: column;
`;
export const ShortInput = styled(TextInput)`
  width: 100%;
  height: 50px;
`;
export const Detail = styled.View`
  margin-top: 3%;
  background-color: red;
`;
export const BtnContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 3% 0 10% 0;
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
`;
export const RevisionVContainer = styled.View`
  flex: 1;
  padding: 0 3%;
  margin-top: 3%;
  justify-content: center;
`;
export const RevisionHContainer = styled(RevisionVContainer)`
  flex-direction: row;
`;
export const SwiperContainer = styled.View`
  height: 220px;
`;
export const SwiperImage = styled.View`
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
