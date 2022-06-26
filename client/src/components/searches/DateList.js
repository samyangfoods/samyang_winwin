import React, { useState } from "react";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import { date, dateIndicator, month, year } from "../../hooks/util";
import { Text } from "../../styles/Style";

const DateList = ({ selectedDate, setSelectedDate, setDateData }) => {
  // Hooks Variables
  const [isActive, setIsActive] = useState(false);

  // Variables
  const monthMinus1 = new Date(date - 2629800000);
  const monthMinus2 = new Date(date - 5259600000);
  const monthMinus3 = new Date(date - 7889400000);
  const monthMinus4 = new Date(date - 10519200000);
  const monthMinus5 = new Date(date - 13149000000);

  // Handling Functions
  const handleDate = (date) => {
    setDateData(date);
    setSelectedDate(dateIndicator(date));
  };

  return (
    <Menu>
      <MenuTrigger
        onPress={() => setIsActive(!isActive)}
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 70,
          height: 40,
          borderRadius: 6,
          backgroundColor: "#f8f8f8",
        }}
      >
        <Text>{`${selectedDate}`}</Text>
      </MenuTrigger>

      <MenuOptions customStyles={optionsStyles}>
        <MenuOption onSelect={() => handleDate(date)}>
          <Text>{dateIndicator(date)}</Text>
        </MenuOption>
        <MenuOption onSelect={() => handleDate(monthMinus1)}>
          <Text>{dateIndicator(monthMinus1)}</Text>
        </MenuOption>
        <MenuOption onSelect={() => handleDate(monthMinus2)}>
          <Text>{dateIndicator(monthMinus2)}</Text>
        </MenuOption>
        <MenuOption onSelect={() => handleDate(monthMinus3)}>
          <Text>{dateIndicator(monthMinus3)}</Text>
        </MenuOption>
        <MenuOption onSelect={() => handleDate(monthMinus4)}>
          <Text>{dateIndicator(monthMinus4)}</Text>
        </MenuOption>
        <MenuOption onSelect={() => handleDate(monthMinus5)}>
          <Text>{dateIndicator(monthMinus5)}</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};

export default DateList;

const optionsStyles = {
  optionsContainer: {
    backgroundColor: "#fff",
    padding: 5,
  },
  optionsWrapper: {},
  optionWrapper: {
    margin: 5,
  },
  optionTouchable: {
    underlayColor: "#eee",
    activeOpacity: 70,
  },
};
