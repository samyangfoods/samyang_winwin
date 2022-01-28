import React from "react";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";

// 2022-01-28 현재 개략적인 프레임만 작성 완료.
// 이미지가 각각 Hooks 에 담길 수 있도록 image 변수를 세분화 해야 함.

function ImageAccess({ image, setImage }) {
  const accessAlbum = async () => {
    // No permissions are necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <Container>
      <HorizontalDiv>
        <Btn onPress={accessAlbum}>
          <Text>이미지 1</Text>
        </Btn>
        <Btn onPress={accessAlbum}>
          <Text>이미지 2</Text>
        </Btn>
        <Btn onPress={accessAlbum}>
          <Text>이미지 3</Text>
        </Btn>
        <Btn onPress={accessAlbum}>
          <Text>이미지 4</Text>
        </Btn>
      </HorizontalDiv>
    </Container>
  );
}

export default ImageAccess;

const Container = styled.View``;

const HorizontalDiv = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 3% 0;
`;
const Text = styled.Text`
  font-size: 16px;
`;
const Btn = styled.TouchableOpacity`
  margin: 2% 0;
  padding: 2%;
  border: 1px solid black;
  border-radius: 6px;
`;
