import React from "react";
import { BasicContainer } from "../../styles/Style";
import { Text } from "../../styles/Style";
import { HorizontalDiv, ImageUploadBtn } from "../../styles/Component";
import { useImageBase64 } from "../../hooks/Util";

// Component to Add only One Image

const ImageAccess = ({ placeholder, setImage }) => {
  const accessAlbum = async () => {
    const response = await useImageBase64();

    if (response === undefined) return;

    setImage(response);
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
