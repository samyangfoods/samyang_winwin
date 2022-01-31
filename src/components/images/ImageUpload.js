import React from "react";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";

// Component to Add only One Image

function ImageAccess({ placeholder, setImage }) {
  const accessAlbum = async () => {
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
          <Text>{placeholder}</Text>
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
  padding-bottom: 3%;
`;
const Btn = styled.TouchableOpacity`
  width: 100%;
  border: 1px solid #eee;
  padding: 3% 5%;
  margin: 0 0 3% 0;
`;
