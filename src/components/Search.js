import React from "react";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

// 어떤 것을 어떻게 검색해야 할 지 결정하기

function Search({ route, searchText, setSearchText }) {
  const handleText = (text) => {
    setSearchText(text);
  };

  const handleSearch = () => {
    switch (route.name) {
      case "행사현황":
        return console.log("행사현황 입니다.", searchText);
      case "행사등록":
        return console.log("행사등록 입니다.", searchText);
      default:
        return;
    }
  };

  return (
    <Container>
      <SearchContainer>
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
      </SearchContainer>
      {searchText !== "" && searchText !== null && (
        <AutoCompleteContainer>
          <Text>{searchText}</Text>
        </AutoCompleteContainer>
      )}
    </Container>
  );
}

export default Search;

const Container = styled.View`
  width: 100%;
`;
const SearchContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const Input = styled.TextInput`
  width: 250px;
  height: 50px;
  border: 1px solid #eee;
  padding: 0 5%;
  margin: 2% 4%;
  color: black;
`;
const Btn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 6px;
  background-color: #ff7d0d;
`;
const AutoCompleteContainer = styled.View`
  height: 150%;
  padding: 0 5%;
  border: 1px solid #eee;
  background-color: #fff;
`;
const Text = styled.Text``;
