import styled from "styled-components/native";

interface IContainerProps {
  isSelected: boolean;
}

export const Container = styled.TouchableOpacity`
  background-color: ${(props: IContainerProps) =>
    props.isSelected ? "#FB2A2A" : "#2F2F2F"};
  padding: 0 30px;
  align-items: center;
  justify-content: center;
  border: ${(props: IContainerProps) =>
    props.isSelected ? "none" : "1px solid #606060"};
  border-radius: 10px;
`;

export const ItemTitle = styled.Text`
  color: #fff;

  font-weight: ${(props: IContainerProps) =>
    props.isSelected ? "700" : "400"};
`;
