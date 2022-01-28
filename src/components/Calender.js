import React, { useState } from "react";
import styled from "styled-components/native";
import DateTimePicker from "@react-native-community/datetimepicker";

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
    <Container>
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
    </Container>
  );
}

export default Calender;

const Container = styled.View``;

const Text = styled.Text`
  font-size: 16px;
`;
const DateText = styled(Text)`
  color: #aaa;
`;
const Btn = styled.TouchableOpacity`
  margin: 2% 0;
  padding: 2%;
  border: 1px solid black;
  border-radius: 6px;
`;
const DateBtn = styled(Btn)`
  align-items: center;
  width: 80%;
  border: 1px solid #aaa;
`;
