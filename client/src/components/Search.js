import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Text } from "../styles/Style";
import {
  SearchElementContainer,
  SearchInput,
  SearchBtn,
  AutoCompleteContainer,
  SearchTextResult,
  SearchContainer,
} from "../styles/Component";
import { useSearchText } from "../hooks/SearchHooks";
import { useSelector } from "react-redux";

const Search = ({ route, searchText, setSearchText, navigation }) => {
  // Put API results in this hook
  const token = useSelector((state) => state.user.token);
  const [searchResult, setSearchResult] = useState([]);

  const handleSearchAutoCompletion = async (text) => {
    const result = await useSearchText(token, text, route.name);

    setSearchResult(result);
  };
  // when a user inputs texts --> auto completion
  const handleText = async (text) => {
    setSearchText(text);
    handleSearchAutoCompletion(text);
  };

  // when touches the search button
  const handleSearch = () => {
    switch (route.name) {
      case "행사현황":
        // use axios and send searchText to backend
        return console.log("행사현황 입니다.", searchText);
      case "소매점 목록":
        return console.log("소매점 목록 입니다.", searchText);
      default:
        return;
    }
  };

  return (
    <SearchContainer>
      <SearchElementContainer>
        <SearchInput
          placeholder="검색"
          autoCapitalize="none"
          onChangeText={(text) => handleText(text)}
          value={searchText}
        />
        <SearchBtn onPress={handleSearch}>
          <FontAwesome name="search" size={20} color="white" />
        </SearchBtn>

        {/* Autocomplete */}
      </SearchElementContainer>

      {searchText !== "" && searchText !== null && (
        <AutoCompleteContainer>
          <SearchTextResult>
            {[...searchResult].map((res) => (
              // TODO: Route에 따라 다른 곳으로 보내기, 행사 수정/ 소매점 수정
              <Text
                key={Math.random()}
                onPress={() =>
                  route.name === "소매점 목록"
                    ? navigation.navigate("소매점 수정하기", {
                        marketData: [res],
                      })
                    : navigation.navigate("행사 수정하기", {
                        promotionData: [res],
                      })
                }
              >
                {res.marketName}
              </Text>
            ))}
          </SearchTextResult>
        </AutoCompleteContainer>
      )}
    </SearchContainer>
  );
};

export default Search;
