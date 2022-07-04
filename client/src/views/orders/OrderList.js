import React from "react";
import Header from "../../components/Header";
import { MainContainer, PlusBtn } from "../../styles/Lounge";
import { Text } from "../../styles/Style";
import Constant from "expo-constants";
import { AntDesign } from "@expo/vector-icons";

const OrderList = ({ navigation }) => {
  return (
    <MainContainer
      style={{
        marginTop: Constant.statusBarHeight,
      }}
    >
      <Header />
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>

      {/* Promotion Creation Button */}
      <PlusBtn onPress={() => navigation.navigate("주문하기")}>
        <AntDesign name="plus" size={24} color="white" />
      </PlusBtn>
    </MainContainer>
  );
};

export default OrderList;
