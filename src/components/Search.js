import React from "react";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

function Search({ searchText, setSearchText }) {
  const handleText = (txt) => {
    setSearchText(txt);
  };

  const handleSearch = () => {
    console.log(searchText);
  };

  return (
    <Container>
      <Input
        placeholder="검색"
        autoCapitalize="none"
        onChangeText={(text) => handleText(text)}
        value={searchText}
      />
      <Btn>
        <FontAwesome
          onPress={handleSearch}
          name="search"
          size={20}
          color="white"
        />
      </Btn>
    </Container>
  );
}

export default Search;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: #fff;
  padding-bottom: 3%;
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
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 100%;
  border-radius: 6px;
  background-color: #ff7d0d;
`;
