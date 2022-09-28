import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #E8EAED;
`;

export const KeyboardView = styled.KeyboardAvoidingView`
  position: absolute;
  bottom: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

export const TextInputContainer = styled.TextInput`
  padding: 15px;
  width: 250px;
  background: #fff;
  border-radius: 60px;
  border-color: #C0C0C0;
`;

export const AddWrapper = styled.View`
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.View`
  padding: 80px 20px 0;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin: 22px 0;
`;

