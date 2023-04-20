import styled from "styled-components/native";

export const Container = styled.View`
  width: ${(props) => props.theme.containerW}px;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  border-radius: 15px;
  border: 1px solid #323238;
  background-color: ${(props) => props.theme.colors.input};
  flex-direction: row;

  margin-top: 20px; ;
`;

export const Input = styled.TextInput`
  align-items: center;
  flex: 1;
  padding: 10px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.gray};
  font-family: ${(props) => props.theme.fonts.light};
`;
