import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import styled from "styled-components/native";
import Address from "../Address";
import ImageUpload from "../../components/images/ImageUpload";
import winwin from "../../assets/winwin.png";

const MarketInfoChange = ({ navigation, route }) => {
  const mockApi = route.params.marketData[0];
  const [modal, setModal] = useState(false);
  const [address, setAddress] = useState(mockApi.address);
  const [image, setImage] = useState(mockApi.image);

  return (
    <Container>
      <MarketInputForm>
        <Text>소매점명</Text>
        <TextInput placeholder={mockApi.superMarketName} />

        <HorizontalDiv>
          <VerticalDiv>
            <Text>평수</Text>
            <TextInput placeholder={mockApi.size} />
          </VerticalDiv>
          <VerticalDiv>
            <Text>POS 수</Text>
            <TextInput placeholder={mockApi.pos} />
          </VerticalDiv>
        </HorizontalDiv>

        <HorizontalDiv>
          <VerticalDiv>
            <Text>전화번호</Text>
            <TextInput placeholder={mockApi.phoneNumber} />
          </VerticalDiv>
          <VerticalDiv>
            <Text>월 평균 매출</Text>
            <TextInput placeholder={mockApi.average} />
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
          placeholder={
            mockApi.image ? "이미지 변경" : "소매점 전면 사진 (간판 보이게)"
          }
          image={image}
          setImage={setImage}
        />
        {/* Submit and Remove Button Container */}
        <BtnContainer>
          <FooterBtn style={{ backgroundColor: "#FF7D0D" }}>
            <Text style={{ color: "#fff" }}>수정하기</Text>
          </FooterBtn>
          <FooterBtn
            onPress={() => navigation.goBack()}
            style={{ backgroundColor: "#B4B4B4" }}
          >
            <Text style={{ color: "#fff" }}>삭제하기</Text>
          </FooterBtn>
        </BtnContainer>
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

export default MarketInfoChange;

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

const FooterBtn = styled.TouchableOpacity`
  border-radius: 6px;
  padding: 2% 13%;
  margin: 3% 2%;
`;

const BtnContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 15%;
`;
