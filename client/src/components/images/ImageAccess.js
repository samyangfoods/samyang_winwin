import React, { useEffect } from "react";
import ImageAddButton from "./ImageAddButton";
import { HorizontalDiv } from "../../styles/Component";
import { Alert } from "react-native";
import { useImageUri } from "../../hooks/util";
import { ImageButtonContainer } from "../../styles/PromotionStyle";

const ImageAccess = ({ image, setImage }) => {
  let imageObj = [];
  let image1 = image[0] ? image[0] : null;
  let image2 = image[1] ? image[1] : null;
  let image3 = image[2] ? image[2] : null;
  let image4 = image[3] ? image[3] : null;

  const setImageObj = () => {
    if (image1 !== null) imageObj.push(image1);
    if (image2 !== null) imageObj.push(image2);
    if (image3 !== null) imageObj.push(image3);
    if (image4 !== null) imageObj.push(image4);
  };

  const handleArray = (index, uri) => {
    if (uri === null || uri === undefined) return;

    if (index <= imageObj.length) {
      if (imageObj.length === 0) {
        imageObj.push(uri);
      } else {
        imageObj.splice(index, 1, uri);
      }
    } else {
      // when index is bigger than array's leng
      return Alert.alert("알림", "이미지를 순서대로 첨부해주세요.");
    }

    setImage(imageObj);
  };

  const accessAlbum = async (index) => {
    const response = await useImageUri();

    switch (index) {
      case 0:
        return handleArray(0, response);
      case 1:
        return handleArray(1, response);
      case 2:
        return handleArray(2, response);
      case 3:
        return handleArray(3, response);
      default:
    }
  };

  const deleteImage = (index) => {
    imageObj.splice(index, 1);
    setImage(imageObj);
  };

  useEffect(() => {
    setImageObj();
  }, [imageObj]);

  return (
    <ImageButtonContainer>
      <HorizontalDiv>
        <ImageAddButton
          index={0}
          image={image}
          accessAlbum={accessAlbum}
          deleteImage={deleteImage}
        />
        <ImageAddButton
          index={1}
          image={image}
          accessAlbum={accessAlbum}
          deleteImage={deleteImage}
        />
        <ImageAddButton
          index={2}
          image={image}
          accessAlbum={accessAlbum}
          deleteImage={deleteImage}
        />
        <ImageAddButton
          index={3}
          image={image}
          accessAlbum={accessAlbum}
          deleteImage={deleteImage}
        />
      </HorizontalDiv>
    </ImageButtonContainer>
  );
};

export default ImageAccess;
