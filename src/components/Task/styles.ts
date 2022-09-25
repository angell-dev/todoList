import styled from "styled-components/native";

export const ItemContainer = styled.View`
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ItemLeft = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap 
`;

export const IconLeft = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  background: #55BCF6;
  opacity: 0.4;
  border-radius: 5px;
`;

export const ItemText = styled.Text`
  padding-left: 12px;
  max-width: 80%;
`;

export const IconRight = styled.View`
  width: 12px;
  height: 12px;
  border-color: #55BCF6;
  border-width: 2px;
  border-radius: 5px;
`;