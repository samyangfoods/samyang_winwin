import React from "react";
import { NotFoundContainer, Text } from "../styles/Style";
import { AntDesign } from "@expo/vector-icons";

const NotFound = ({ title }) => {
  const sentenceCompletion = () => {
    if (title === "행사") {
      return `${title}가`;
    } else {
      return `${title}이`;
    }
  };

  return (
    <NotFoundContainer
      style={{ flex: 10, alignItems: "center", justifyContent: "center" }}
    >
      <AntDesign name="exclamationcircleo" size={24} color="#aaa" />
      <Text style={{ color: "#aaa", marginTop: 5 }}>
        {`등록된 ${sentenceCompletion()} 없습니다.`}
      </Text>
    </NotFoundContainer>
  );
};

export default NotFound;
