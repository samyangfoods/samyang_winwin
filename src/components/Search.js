import React from "react";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

function Search() {
  return (
    <Container>
      <Input placeholder="검색" autoCapitalize="none" />
      <Btn>
        <FontAwesome name="search" size={15} color="white" />
      </Btn>
    </Container>
  );
}

export default Search;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 250px;
  height: 100%;
  border: 1px solid #eee;
  padding: 0 5%;
  margin: 3% 4%;
  color: black;
`;

const Btn = styled.TouchableOpacity`
  border-radius: 6px;
  background-color: #ff7d0d;
  padding: 4%;
`;
