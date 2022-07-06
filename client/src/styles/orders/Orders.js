import styled from "styled-components/native";
import { LoginBtn } from "../Auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// OrderList

// OrderCreation
export const OrderCreationContainer = styled(KeyboardAwareScrollView)``;

export const OrderCreationButton = styled(LoginBtn)`
  margin-bottom: 5%;
`;

// EachOrderItem
export const EachOrderItemContainer = styled.View`
  width: 100px;
  height: 40px;
  margin: 2%;
`;

export const EachOrderItemTextInput = styled.TextInput`
  border: 1px solid #aaa;
  border-radius: 7px;
  width: 98px;
  height: 40px;
  padding: 3%;
  margin: 2% 3%;
  font-size: 10px;
`;
