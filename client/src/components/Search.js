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
import { useSearchText } from "../hooks/searchHooks";

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
      // 🔥🔥🔥 행사 카테고리 -> 엔드행사, 전단행사, 기타행사 🔥🔥🔥
      case "행사현황":
        // await Axios.post("api", { text,  })
        //   .then((res) => "Autocomplete Results")
        //   .catch((error) => console.log(error));
        return console.log("행사현황 입니다.", searchText);
      // 🔥🔥🔥 소매점 검색 -> 삼양마트, 우주마트 등. 🔥🔥🔥
      case "소매점 목록":
        // let response = await useSearchText(text);
        sampleSearchLogic(text);
        return console.log("소매점 목록 입니다.", searchText);
      default:
        return;
    }
  };

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
            {sampleArray.map((res) => (
              <Text key={res}>{res}</Text>
            ))}
          </SearchTextResult>
        </AutoCompleteContainer>
      )}
    </SearchContainer>
  );
};

export default Search;
