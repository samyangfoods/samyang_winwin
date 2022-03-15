import React, { useCallback, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import logo from "../assets/logo.png";
import Address from "../components/Address";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "../styles/Style";
import {
  Container,
  ScrollView,
  SubContainer,
  Image,
  Input,
  LoginBtn,
  PasswordContainer,
  BtnText,
  CreateBtn,
  CreateText,
  PasswordIcon,
  Btn,
} from "../styles/Auth";
import defaultUser from "../assets/defaultUser.png";
import { Alert } from "react-native";
import { useRegister } from "../hooks/UserHooks";
import {
  useCleanUpPhoneNumberForm,
  useImageBase64,
  usePhoneNumberFormat,
} from "../hooks/Util";
import Channel from "../components/Channel";
import { HorizontalDiv } from "../styles/Component";

const Register = ({ navigation }) => {
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirmation, setPasswordConfirmation] = useState(null);
  const [channel, setChannel] = useState({
    label: "특약점",
    value: 1,
  });
  const [storeName, setStoreName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [userAddress, setAddress] = useState(null);
  const [showing, setShowing] = useState(true);
  const [showingConfirmation, setShowingConfirmation] = useState(true);
  const [modal, setModal] = useState(false);
  const [ref, setRef] = useState(null);

  const nameRef = useRef();
  const idRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const channelRef = useRef();
  const storeNameRef = useRef();
  const phoneNumberRef = useRef();

  const btnActivation = Boolean(
    userName &&
      userId &&
      password &&
      passwordConfirmation &&
      channel &&
      storeName &&
      phoneNumber &&
      userImage &&
      userAddress
  );

  const handleUserName = useCallback((text) => {
    setUserName(text);
  }, []);
  const handleUserId = useCallback((text) => {
    setUserId(text);
  }, []);
  const handlePassword = useCallback((text) => {
    setPassword(text);
  }, []);
  const handlePasswordConfirmation = useCallback((text) => {
    setPasswordConfirmation(text);
  }, []);
  const handleStoreName = useCallback((text) => {
    setStoreName(text);
  }, []);
  const handlePhoneNumber = useCallback((text) => {
    setPhoneNumber(text);
  }, []);
  const cleanPhoneNumberFormat = (num) => {
    const number = useCleanUpPhoneNumberForm(num);
    setPhoneNumber(number);
  };

  // userName, role
  const submitUserInformation = async () => {
    const userObj = {
      userName,
      userId,
      password,
      passwordConfirmation,
      channel: channel.label,
      storeName,
      phoneNumber,
      userImage: userImage.uri,
      userAddress,
    };

    if (!/[\d\w\W\S]{8,}/.test(password)) {
      return Alert.alert("알림", "비밀번호는 최소 8자 이상 입력해주세요.");
    }

    const data = await useRegister(userObj);
    if (data) {
      Alert.alert("알림", "회원가입이 완료되었습니다.");
      navigation.goBack();
    } else {
      Alert.alert("알림", "오류가 발생하였습니다.");
    }
  };

  const addUserImage = async () => {
    const reponse = await useImageBase64();
    setUserImage(reponse);
  };

  // This will scroll to the top when the address modal is on.
  const handleModal = () => {
    setModal(true);
    ref?.scrollTo({ y: 0, animated: true });
  };

  // Scroll will go to the top place when address component installed.
  // This function will lead container to end scroll.
  const modalIsClosed = () => {
    ref?.scrollToEnd({ animated: false });
  };

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container>
      <ScrollView ref={(ref) => setRef(ref)}>
        <SubContainer>
          <Image source={logo} />
          <Text style={{ fontSize: 20, marginBottom: 40 }}>회 원 가 입</Text>

          <Image
            source={userImage ? { uri: userImage.base64 } : defaultUser}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />

          <AntDesign
            name="camerao"
            size={32}
            color="black"
            style={{ marginTop: 15, marginBottom: 10 }}
            onPress={addUserImage}
          />

          <Input
            placeholder="이름"
            value={userName}
            autoCapitalize="none"
            onChangeText={(text) => handleUserName(text)}
            ref={nameRef}
            onSubmitEditing={() => idRef.current?.focus()}
            blurOnSubmit={false}
          />
          <Input
            placeholder="아이디"
            value={userId}
            autoCapitalize="none"
            onChangeText={(text) => handleUserId(text)}
            ref={idRef}
            onSubmitEditing={() => passwordRef.current?.focus()}
            blurOnSubmit={false}
          />
          <PasswordContainer>
            <Input
              placeholder="비밀번호"
              secureTextEntry={showing ? false : true}
              value={password}
              autoCapitalize="none"
              onChangeText={(text) => handlePassword(text)}
              ref={passwordRef}
              onSubmitEditing={() => passwordConfirmationRef.current?.focus()}
              blurOnSubmit={false}
            />
            <PasswordIcon onPress={() => setShowing((prev) => !prev)}>
              {showing ? (
                <Ionicons name="eye-off-outline" size={24} color="black" />
              ) : (
                <Ionicons name="eye-outline" size={24} color="black" />
              )}
            </PasswordIcon>
          </PasswordContainer>

          <PasswordContainer>
            <Input
              placeholder="비밀번호 확인"
              secureTextEntry={showingConfirmation ? false : true}
              value={passwordConfirmation}
              autoCapitalize="none"
              onChangeText={(text) => handlePasswordConfirmation(text)}
              ref={passwordConfirmationRef}
              onSubmitEditing={() => storeNameRef.current?.focus()}
              blurOnSubmit={false}
            />
            <PasswordIcon
              onPress={() => setShowingConfirmation((prev) => !prev)}
            >
              {showingConfirmation ? (
                <Ionicons name="eye-off-outline" size={24} color="black" />
              ) : (
                <Ionicons name="eye-outline" size={24} color="black" />
              )}
            </PasswordIcon>
          </PasswordContainer>
          {passwordConfirmation ? (
            password !== passwordConfirmation ? (
              <Text style={{ color: "red" }}>
                비밀번호가 일치하지 않습니다.
              </Text>
            ) : (
              <Text style={{ color: "green" }}>비밀번호가 일치합니다.</Text>
            )
          ) : null}
          <HorizontalDiv>
            <Input
              placeholder="점포명"
              value={storeName}
              onChangeText={(text) => handleStoreName(text)}
              ref={storeNameRef}
              onSubmitEditing={() => channelRef.current?.focus()}
              blurOnSubmit={false}
              style={{ width: 220 }}
            />
            <Channel
              pickedData={channel}
              setPickedData={setChannel}
              ref={channelRef}
              onSubmitEditing={() => phoneNumberRef.current?.focus()}
            />
          </HorizontalDiv>

          <Input
            placeholder="전화번호"
            value={phoneNumber}
            autoCapitalize="none"
            onChangeText={(text) => handlePhoneNumber(text)}
            keyboardType="numeric"
            ref={phoneNumberRef}
            onBlur={() => setPhoneNumber(usePhoneNumberFormat(phoneNumber))}
            onPressIn={() => cleanPhoneNumberFormat(phoneNumber)}
            style={{ marginBottom: 15 }}
          />

          <Btn onPress={handleModal}>
            <Text>{userAddress ? userAddress : "주소 검색"}</Text>
          </Btn>

          {/* Need to add the terms of use */}

          <LoginBtn
            onPress={submitUserInformation}
            style={{ backgroundColor: btnActivation ? "#ff7d0d" : "#aaa" }}
            disabled={!btnActivation}
          >
            <BtnText>가입 신청하기</BtnText>
          </LoginBtn>

          <CreateBtn onPress={goBack}>
            <CreateText>뒤로가기</CreateText>
          </CreateBtn>
        </SubContainer>
      </ScrollView>

      {modal && (
        <Address
          setAddress={setAddress}
          setModal={setModal}
          modalIsClosed={modalIsClosed}
        />
      )}
    </Container>
  );
};

export default Register;
