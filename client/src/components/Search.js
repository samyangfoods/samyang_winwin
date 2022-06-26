import React, { useState, useEffect } from "react";
import { SearchContainer } from "../styles/Component";
import { useSelector } from "react-redux";
import { date, dateIndicator } from "../hooks/util";
import { SearchBtnBox } from "./searches/SearchBtn";
import DateList from "./searches/DateList";

const Search = () => {
  // Put API results in this hook
  const token = useSelector((state) => state.user.token);
  const [promotion, setPromotion] = useState(false);
  const [end, setEnd] = useState(false);
  const [etc, setEtc] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dateIndicator(date));
  const [dateData, setDateData] = useState(date);

  console.log("Korean", selectedDate);
  console.log("Numeric", dateData);

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
