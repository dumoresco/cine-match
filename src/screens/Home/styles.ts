import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: ${(props) => props.theme.colors.background};
  flex: 1;
  align-items: center;
`;
