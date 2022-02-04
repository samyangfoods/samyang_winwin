// Calender, Category, Search, Address, Item, ItemArray
// ImageAccess, ImageAddButton, ImageUpload
import styled from "styled-components/native";
import { Text } from "./Style";
import { Picker } from "react-native-woodpicker";
import Postcode from "@actbase/react-daum-postcode";

// Universal
export const Btn = styled.TouchableOpacity`
  margin: 2% 0;
  padding: 2%;
  border: 1px solid black;
  border-radius: 6px;
`;
export const HorizontalDiv = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 3% 0;
`;

// Calender
export const DateText = styled(Text)`
  color: #aaa;
`;
export const DateBtn = styled(Btn)`
  align-items: center;
  width: 80%;
  border: 1px solid #aaa;
`;

// Category
export const StyledPicker = styled(Picker)`
  height: 40px;
  border: 1px solid #000;
  border-radius: 6px;
  padding: 0 2%;
`;

// Search
export const SearchContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const SearchInput = styled.TextInput`
  width: 250px;
  height: 50px;
  border: 1px solid #eee;
  padding: 0 5%;
  margin: 2% 4%;
  color: black;
`;
export const SearchBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 6px;
  background-color: #ff7d0d;
`;
export const AutoCompleteContainer = styled.View`
  height: 150%;
  padding: 0 5%;
  border: 1px solid #eee;
  background-color: #fff;
`;

// Address
export const StyledPostcode = styled(Postcode)`
  width: 100%;
  height: 100%;
`;

// Item
export const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2%;
`;
export const ItemInput = styled.TextInput`
  text-align: center;
  border: 1px solid #eee;
  width: 22%;
  height: 35px;
`;

// ItemArray
export const ItemPlusBtnContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 5% 0 2% 0;
`;
export const ItemPlusBtn = styled.TouchableOpacity``;

// ImageAccess

// ImageAddButton
export const ImageAddButtonContainer = styled.View`
  align-content: center;
  justify-content: center;
`;
export const ImageAddButtonTitle = styled.Text`
  font-size: 16px;
  padding: 2%;
  border: 1px solid black;
  border-radius: 6px;
`;
export const ImageAddBtn = styled.TouchableOpacity`
  align-content: center;
  justify-content: center;
  border-radius: 999px;
`;
export const Thumbnail = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 999px;
`;

// ImageUpload
export const ImageUploadBtn = styled.TouchableOpacity`
  width: 100%;
  border: 1px solid #eee;
  padding: 3% 5%;
  margin: 0 0 3% 0;
`;
