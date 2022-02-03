import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { BasicContainer, Text } from "../styles/Style";
import {
  SearchContainer,
  SearchInput,
  SearchBtn,
  AutoCompleteContainer,
} from "../styles/Component";

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
    <BasicContainer>
      <SearchContainer>
        <SearchInput
          placeholder="검색"
          autoCapitalize="none"
          onChangeText={(text) => handleText(text)}
          value={searchText}
        />
        <SearchBtn>
          <FontAwesome
            onPress={handleSearch}
            name="search"
            size={20}
            color="white"
          />
        </SearchBtn>
      </SearchContainer>
      {searchText !== "" && searchText !== null && (
        <AutoCompleteContainer>
          <Text>{searchText}</Text>
        </AutoCompleteContainer>
      )}
    </BasicContainer>
  );
}

export default Search;
