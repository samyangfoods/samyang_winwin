import React from "react";
import styled from "styled-components/native";
import winwin from "../../assets/winwin.png";

const ImageAddButton = ({ index, image, accessAlbum }) => {
  return (
    <Container>
      <Btn
        onPress={() => accessAlbum(index)}
        style={{ backgroundColor: image[index] ? "#aaa" : "null" }}
      >
        {image[index] ? (
          <Image source={winwin} />
        ) : (
          <Text>
            {image[index]
              ? image[index].toString().slice(0, 5)
              : `이미지${index + 1}`}
          </Text>
        )}
      </Btn>
    </Container>
  );
};

export default ImageAddButton;

const Container = styled.View`
  align-content: center;
  justify-content: center;
`;
const Text = styled.Text`
  font-size: 16px;
  padding: 2%;
  border: 1px solid black;
  border-radius: 6px;
`;
const Btn = styled.TouchableOpacity`
  align-content: center;
  justify-content: center;
  border-radius: 999px;
`;
const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 999px;
`;
