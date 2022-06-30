import React, { useState, useEffect } from "react";
import { SearchContainer } from "../styles/Component";
import { SearchBtnBox } from "./searches/SearchBtn";
import DateList from "./searches/DateList";
import { useSearch } from "../hooks/searchHooks";

const Search = ({ promotionArray, setSearchResult }) => {
  // State Variables
  const [promotion, setPromotion] = useState(true);
  const [end, setEnd] = useState(true);
  const [etc, setEtc] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [dateData, setDateData] = useState(null);

  // useEffect
  useEffect(() => {
    const handleSearch = async () => {
      const response = await useSearch(
        promotionArray,
        dateData,
        promotion,
        end,
        etc
      );

      setSearchResult([...response]);
    };

    handleSearch();
  }, [dateData, promotion, end, etc]);

  useEffect(() => {
    setSelectedDate(null);
    setPromotion(true);
    setEnd(true);
    setEtc(true);
  }, [promotionArray]);

  return (
    <SearchContainer>
      <DateList
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        setDateData={setDateData}
      />

      <SearchBtnBox
        text={"전단행사"}
        state={promotion}
        setState={setPromotion}
      />
      <SearchBtnBox text={"엔드행사"} state={end} setState={setEnd} />
      <SearchBtnBox text={"기타행사"} state={etc} setState={setEtc} />
    </SearchContainer>
  );
};

export default Search;
