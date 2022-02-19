import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { BasicContainer, Text } from "../styles/Style";
import {
  SearchContainer,
  SearchInput,
  SearchBtn,
  AutoCompleteContainer,
  SearchTextResult,
  MySearchText,
  SearchResult,
} from "../styles/Component";
import { Axios } from "react-native-axios";

// 어떤 것을 어떻게 검색해야 할 지 결정하기
const marketNameMockApi = [
  "Samyang",
  "Sayang",
  "OhYang",
  "Winwin",
  "Windraw",
  "Winlose",
  "Project",
  "Proproject",
  "Prozect",
];

const Search = ({ route, searchText, setSearchText }) => {
  // Put API results in this hook
  const [autocomplete, setAutocomplete] = useState(null);
  const [sampleArray, setSampleArray] = useState([]);

  const sampleSearchLogic = (text) => {
    const arr = marketNameMockApi.filter((data) =>
      data.toLocaleLowerCase().startsWith(text)
    );
    setSampleArray(arr);
  };

  const handleText = async (text) => {
    setSearchText(text);
    switch (route.name) {
      case "행사현황":
        // await Axios.post("api", { text })
        //   .then((res) => "Autocomplete Results")
        //   .catch((error) => console.log(error));

        // Sample Logic !!!!! 👈
        sampleSearchLogic(text);
        return console.log("행사현황 입니다.", searchText);
      case "행사등록":
        // await Axios.post("api", { text })
        //   .then((res) => "Autocomplete Results")
        //   .catch((error) => console.log(error));
        return console.log("행사등록 입니다.", searchText);
      default:
        return;
    }
  };

  const handleSearch = () => {
    switch (route.name) {
      case "행사현황":
        // use axios and send searchText to backend
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
        <SearchBtn onPress={handleSearch}>
          <FontAwesome name="search" size={20} color="white" />
        </SearchBtn>

        {/* Autocomplete */}
      </SearchContainer>
      {searchText !== "" && searchText !== null && (
        <AutoCompleteContainer>
          <SearchTextResult>
            <MySearchText>
              <Text style={{ color: "#aaa", marginBottom: 5 }}>
                나의 검색어
              </Text>
              <Text>{searchText}</Text>
            </MySearchText>
            <SearchResult>
              <Text style={{ color: "#aaa", marginBottom: 5 }}>검색 결과</Text>
              {sampleArray.map((res) => (
                <Text key={res}>{res}</Text>
              ))}
            </SearchResult>
          </SearchTextResult>
        </AutoCompleteContainer>
      )}
    </BasicContainer>
  );
};

export default Search;
