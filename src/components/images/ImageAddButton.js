import React from "react";
import winwin from "../../assets/winwin.png";
import {
  ImageAddButtonContainer,
  ImageAddButtonTitle,
  ImageAddBtn,
  Thumbnail,
} from "../../styles/Component";

const ImageAddButton = ({ index, image, accessAlbum }) => {
  return (
    <ImageAddButtonContainer>
      <ImageAddBtn
        onPress={() => accessAlbum(index)}
        style={{ backgroundColor: image[index] ? "#aaa" : "null" }}
      >
        {image[index] ? (
          <Thumbnail source={winwin} />
        ) : (
          <ImageAddButtonTitle>
            {image[index]
              ? image[index].toString().slice(0, 5)
              : `이미지${index + 1}`}
          </ImageAddButtonTitle>
        )}
      </ImageAddBtn>
    </ImageAddButtonContainer>
  );
};

export default ImageAddButton;
