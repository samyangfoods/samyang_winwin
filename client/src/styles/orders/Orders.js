import styled from "styled-components/native";
import { LoginBtn } from "../Auth";

// OrderList

// OrderCreation
export const OrderCreationContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const OrderCreationButton = styled(LoginBtn)`
  margin-bottom: 5%;
`;

// EachOrderItem
export const EachOrderItemContainer = styled.View`
  align-items: center;
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
