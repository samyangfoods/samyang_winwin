import React, { useEffect } from "react";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";
import ImageAddButton from "./ImageAddButton";

// 2022-01-28 현재 개략적인 프레임만 작성 완료. ✅
// 이미지가 각각 Hooks 에 담길 수 있도록 image 변수를 세분화 해야 함. ✅
// image 를 배열로 받아서 처리하는 방법이 좋아보임. ( image = [pic1, pic2, pic3 ....] ) ✅

// 등록 이후 sorting
// 이미지를 추가했을 때 배열 handling ✅

// 등록된 이미지를 취소하거나 변경할 경우의 로직도 필요.
// 현재 로직은 부족함 --> ex) "이미지 1" 을 두 번 터치할 경우 이미지가 각각 저장될 것으로 사료됨. 변경이나 삭제가 일어나지 않음.

function ImageAccess({ image, setImage }) {
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
    const newArr = imageObj.filter((res) => res !== image[index]);
    newArr.push(uri);
    console.log("newArr After🔥", newArr);
    setImage(newArr);
  };

  const accessAlbum = async (index) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      switch (index) {
        case 0:
          return handleArray(0, result.uri);
        case 1:
          return handleArray(1, result.uri);
        case 2:
          return handleArray(2, result.uri);
        case 3:
          return handleArray(3, result.uri);
        default:
      }
    }
  };

  useEffect(() => {
    setImageObj();
  }, [imageObj]);

  return (
    <Container>
      <HorizontalDiv>
        <ImageAddButton index={0} image={image} accessAlbum={accessAlbum} />
        <ImageAddButton index={1} image={image} accessAlbum={accessAlbum} />
        <ImageAddButton index={2} image={image} accessAlbum={accessAlbum} />
        <ImageAddButton index={3} image={image} accessAlbum={accessAlbum} />
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
