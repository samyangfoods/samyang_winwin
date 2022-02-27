// Calender, Category, Search, Address, Item, ItemArray
// ImageAccess, ImageAddButton, ImageUpload
import styled from "styled-components/native";
import { BasicContainer, Text } from "./Style";
import { Picker } from "react-native-woodpicker";

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
export const CalenderContainer = styled(BasicContainer)`
  width: 100%;
`;
export const DateText = styled(Text)`
  color: #aaa;
`;
export const DateBtn = styled(Btn)`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35px;
  border: 1px solid #eee;
`;

// Category
export const StyledPicker = styled(Picker)`
  height: 36px;
  border: 1px solid #eee;
  border-radius: 6px;
  padding: 0 2%;
`;

// Search
export const SearchContainer = styled.View`
  /* z-index: 10; */
`;
export const SearchElementContainer = styled.View`
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
  background-color: #fff;
  border: 0.5px solid #aaa;
  height: 220%;
  z-index: 20;
`;
export const SearchTextResult = styled.View`
  padding: 5%;
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
