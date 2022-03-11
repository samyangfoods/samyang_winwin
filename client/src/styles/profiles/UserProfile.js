import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 5%;
`;
export const Top = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
  width: 100%;
`;
export const TopTitle = styled.View`
  flex-direction: row;
  margin: 2%;
`;
export const Left = styled.View`
  flex: 1;
  align-items: flex-start;
`;
export const Right = styled.View`
  flex: 1;
  align-items: flex-end;
`;
export const UserCard = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  padding: 5% 0;
`;
export const CardLeft = styled.View`
  flex: 1;
  align-items: center;
`;
export const CardRight = styled.View`
  flex: 1.5;
  flex-direction: column;
`;
export const Bottom = styled.View`
  flex: 3;
  padding-top: 5%;
`;
export const Text = styled.Text`
  color: #000;
`;
export const Name = styled(Text)`
  font-size: 20px;
`;
export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 20px;
`;
export const Btn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2% 0;
  padding: 0 5%;
  width: 100%;
  height: 60px;
  background-color: #f2f2f2;
  border-radius: 20px;
`;
export const HorizontalSeparator = styled.View`
  width: 90%;
  margin: 3% 0;
  border: 0.5px solid #aaa;
`;
