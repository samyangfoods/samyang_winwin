import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { DateText, DateBtn, CalenderContainer } from "../styles/Component";

function Calender({ date, setDate }) {
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const year = date?.getFullYear();
  const month = date?.getMonth() + 1;
  const date_ = date?.getDate();

  const showDatepicker = () => {
    setShow(true);
    setMode("date");
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(false);
  };

  return (
    <CalenderContainer>
      <DateBtn onPress={showDatepicker}>
        <DateText>{`${year}년 ${month}월 ${date_}일`}</DateText>
      </DateBtn>

      {/* Start Date Modal  */}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          onChange={onChange}
        />
      )}
    </CalenderContainer>
  );
}

export default Calender;
