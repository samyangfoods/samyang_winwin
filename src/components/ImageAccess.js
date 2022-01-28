import React, { useEffect } from "react";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";

// 2022-01-28 현재 개략적인 프레임만 작성 완료. ✅
// 이미지가 각각 Hooks 에 담길 수 있도록 image 변수를 세분화 해야 함. ✅
// image 를 배열로 받아서 처리하는 방법이 좋아보임. ( image = [pic1, pic2, pic3 ....] ) ✅

// 등록된 이미지를 취소하거나 변경할 경우의 로직도 필요.
// 현재 로직은 부족함 --> ex) "이미지 1" 을 두 번 터치할 경우 이미지가 각각 저장될 것으로 사료됨. 변경이나 삭제가 일어나지 않음.

function ImageAccess({ image, setImage }) {
  let image1 = image[0] ? image[0] : null;
  let image2 = image[1] ? image[1] : null;
  let image3 = image[2] ? image[2] : null;
  let image4 = image[3] ? image[3] : null;
  let imageObj = [];

  const setImageObj = () => {
    if (image1 !== null) imageObj.push(image1);
    if (image2 !== null) imageObj.push(image2);
    if (image3 !== null) imageObj.push(image3);
    if (image4 !== null) imageObj.push(image4);
  };

  const accessAlbum = async (index) => {
    // No permissions are necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      switch (index) {
        case 1:
          let newArr1 = imageObj.filter((res) => res !== image1);
          image1 = result.uri;
          newArr1.push(image1);
          imageObj = newArr1;
          setImage(imageObj);
          return console.log(index, imageObj);
        case 2:
          let newArr2 = imageObj.filter((res) => res !== image2);
          image2 = result.uri;
          newArr2.push(image2);
          imageObj = newArr2;
          setImage(imageObj);
          return console.log(index, imageObj);
        case 3:
          let newArr3 = imageObj.filter((res) => res !== image3);
          image3 = result.uri;
          newArr3.push(image3);
          imageObj = newArr3;
          setImage(imageObj);
          return console.log(index, imageObj);
        case 4:
          let newArr4 = imageObj.filter((res) => res !== image4);
          image4 = result.uri;
          newArr4.push(image4);
          imageObj = newArr4;
          setImage(imageObj);
          return console.log(index, imageObj);
        default:
      }
    }
  };

  useEffect(() => {
    setImageObj();
  }, []);

  return (
    <Container>
      <HorizontalDiv>
        <Btn onPress={() => accessAlbum(1)}>
          <Text>{image1 ? image1.toString().slice(0, 5) : "이미지1"}</Text>
        </Btn>
        <Btn onPress={() => accessAlbum(2)}>
          <Text>{image2 ? image2.toString().slice(0, 5) : "이미지2"}</Text>
        </Btn>
        <Btn onPress={() => accessAlbum(3)}>
          <Text>{image3 ? image3.toString().slice(0, 5) : "이미지3"}</Text>
        </Btn>
        <Btn onPress={() => accessAlbum(4)}>
          <Text>{image4 ? image4.toString().slice(0, 5) : "이미지4"}</Text>
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
