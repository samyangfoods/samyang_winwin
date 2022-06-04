import React from "react";
import { BasicContainer } from "../../styles/Style";
import { Text } from "../../styles/Style";
import { HorizontalFullDiv, ImageUploadBtn } from "../../styles/Component";
import { useImageUri } from "../../hooks/util";

// Component to Add only One Image

const ImageAccess = ({ placeholder, setMarketImage }) => {
  const accessAlbum = async () => {
    const response = await useImageUri();
    const obj = {
      uri: response.uri,
      type: response.type,
      name: response.name,
    };
    setMarketImage(obj);
  };

  return (
    <BasicContainer>
      <HorizontalFullDiv>
        <ImageUploadBtn onPress={accessAlbum}>
          <Text>{placeholder}</Text>
        </ImageUploadBtn>
      </HorizontalFullDiv>
    </BasicContainer>
  );
};

export default ImageAccess;
