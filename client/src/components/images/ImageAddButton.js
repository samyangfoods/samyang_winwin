import React from "react";
import {
  ImageAddButtonContainer,
  ImageAddButtonTitle,
  Thumbnail,
} from "../../styles/Component";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { Text } from "../../styles/Style";
import { imageW140 } from "../../hooks/urlSetting";

const ImageAddButton = ({ index, image, accessAlbum, deleteImage }) => {
  return (
    <ImageAddButtonContainer>
      <Menu>
        <MenuTrigger
          style={{
            borderRadius: 100,
          }}
        >
          {image[index] ? (
            <Thumbnail
              source={{ uri: image[index].uri || imageW140 + image[index] }}
            />
          ) : (
            <ImageAddButtonTitle>{`이미지${index + 1}`}</ImageAddButtonTitle>
          )}
        </MenuTrigger>

        <MenuOptions customStyles={optionsStyles}>
          <MenuOption onSelect={() => accessAlbum(index)}>
            <Text>첨부/수정하기</Text>
          </MenuOption>

          <MenuOption
            onSelect={() => deleteImage(index)}
            disabled={image[index] ? false : true}
          >
            <Text style={{ color: image[index] ? "red" : "#aaa" }}>
              삭제하기
            </Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </ImageAddButtonContainer>
  );
};

export default ImageAddButton;

const optionsStyles = {
  optionsContainer: {
    backgroundColor: "#fff",
    padding: 5,
  },
  optionsWrapper: {},
  optionWrapper: {
    margin: 5,
  },
  optionTouchable: {
    underlayColor: "#eee",
    activeOpacity: 70,
  },
};
