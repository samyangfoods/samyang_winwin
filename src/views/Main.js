import React from "react";
import styled from "styled-components/native";
import Search from "../components/Search";

const Main = () => {
  return (
    <Container>
      <Top>
        <Search />
      </Top>
      <Bottom></Bottom>
    </Container>
  );
};

export default Main;

const Container = styled.View`
  flex: 1;
`;

const Top = styled.View`
  flex: 1;
  align-items: center;
`;
const Bottom = styled.View`
  flex: 15;
`;

const Text = styled.Text``;
