import React from "react";
import * as ImagePicker from "expo-image-picker";
import { BasicContainer } from "../../styles/Style";
import { Text } from "../../styles/Style";
import { HorizontalDiv, ImageUploadBtn } from "../../styles/Component";

// Component to Add only One Image

const ImageAccess = ({ placeholder, setImage }) => {
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
    <BasicContainer>
      <HorizontalDiv>
        <ImageUploadBtn onPress={accessAlbum}>
          <Text>{placeholder}</Text>
        </ImageUploadBtn>
      </HorizontalDiv>
    </BasicContainer>
  );
};

export default ImageAccess;
