import React from "react";
import { BasicContainer } from "../../styles/Style";
import { Text } from "../../styles/Style";
import { HorizontalDiv, ImageUploadBtn } from "../../styles/Component";
import { useImageUri } from "../../hooks/Util";

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
      <HorizontalDiv>
        <ImageUploadBtn onPress={accessAlbum}>
          <Text>{placeholder}</Text>
        </ImageUploadBtn>
      </HorizontalDiv>
    </BasicContainer>
  );
};

export default ImageAccess;
