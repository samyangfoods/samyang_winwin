import React from "react";
import { ActivityIndicator } from "react-native";
import { BasicContainer, Text } from "../styles/Style";

const DataLoading = () => {
  return (
    <BasicContainer style={{ flex: 1, alignItems: "center" }}>
      <ActivityIndicator color="#aaa" size="large" />
      <Text style={{ color: "#aaa", marginTop: 10 }}>
        데이터를 불러오는 중입니다.
      </Text>
    </BasicContainer>
  );
};

export default DataLoading;
