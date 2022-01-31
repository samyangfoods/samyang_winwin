import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import styled from "styled-components/native";
import Address from "../Address";
import ImageUpload from "../../components/images/ImageUpload";
import winwin from "../../assets/winwin.png";

const MarketInput = () => {
  const [modal, setModal] = useState(false);
  const [address, setAddress] = useState(null);
  const [image, setImage] = useState(null);

  return (
    <Container>
      <MarketInputForm>
        <Text>소매점명</Text>
        <TextInput placeholder="소매점명을 입력하세요" />

        <HorizontalDiv>
          <VerticalDiv>
            <Text>평수</Text>
            <TextInput placeholder="평수를 입력하세요" />
          </VerticalDiv>
          <VerticalDiv>
            <Text>POS 수</Text>
            <TextInput placeholder="POS 수량을 입력하세요" />
          </VerticalDiv>
        </HorizontalDiv>

        <HorizontalDiv>
          <VerticalDiv>
            <Text>전화번호</Text>
            <TextInput placeholder="'-' 없이 입력하세요" />
          </VerticalDiv>
          <VerticalDiv>
            <Text>월 평균 매출</Text>
            <TextInput placeholder="월 평균 매출을 입력하세요" />
          </VerticalDiv>
        </HorizontalDiv>

        <Text>주소 검색</Text>
        <Btn onPress={() => setModal(true)}>
          <Text>{address ? address.roadAddress : "주소 검색"}</Text>
        </Btn>

        {image && (
          <ThumbnailContainer>
            <Image source={winwin} />
          </ThumbnailContainer>
        )}

        <Text>이미지 등록</Text>
        <ImageUpload
          placeholder={image ? "이미지 변경" : "소매점 전면 사진 (간판 보이게)"}
          image={image}
          setImage={setImage}
        />
        <LoginBtn>
          <BtnText>등록하기</BtnText>
        </LoginBtn>
      </MarketInputForm>

      {modal && (
        <AddressContainer>
          <BtnAddressContainer>
            <BtnAddress onPress={() => setModal(false)}>
              <AntDesign name="close" size={30} color="black" />
            </BtnAddress>
          </BtnAddressContainer>
          <Address setAddress={setAddress} setModal={setModal} />
        </AddressContainer>
      )}
    </Container>
  );
};

export default MarketInput;

const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
`;
const MarketInputForm = styled(Container)`
  padding: 5%;
`;
const VerticalDiv = styled.View`
  flex-direction: column;
  width: 50%;
`;
const HorizontalDiv = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 3% 0;
`;
const Text = styled.Text`
  font-size: 16px;
  padding-bottom: 3%;
`;
const TextInput = styled.TextInput`
  padding: 2%;
  margin: 1% 0;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 6px;
`;
const Btn = styled.TouchableOpacity`
  border: 1px solid #eee;
  padding: 3% 5%;
  margin: 0 0 3% 0;
`;
const AddressContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;
const BtnAddress = styled.TouchableOpacity`
  margin: 7% 3% 0 0;
`;
const BtnAddressContainer = styled.View`
  align-items: flex-end;
`;
const ThumbnailContainer = styled.View`
  align-items: center;
  margin: 3% 0;
`;
const Image = styled.Image`
  width: 250px;
  height: 250px;
`;
const LoginBtn = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff7d0d;
  padding: 3% 0;
  margin-top: 10%;
  border-radius: 7px;
`;
const BtnText = styled.Text`
  font-weight: 900;
  color: #fff;
`;
