import styled from "styled-components/native";

export const Container = styled.View`
  margin: 20px 0;
  width: 100%;

  align-items: center;
`;

export const Header = styled.View`
  width: ${(props) => props.theme.containerW}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
`;
export const SeeAll = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.gray};
`;
