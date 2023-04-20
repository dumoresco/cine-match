import styled from "styled-components/native";

interface IContainerProps {
  width?: number;
  height?: number;
  backgroundColor?: string;
  bold?: boolean;
}

export const Container = styled.SafeAreaView`
  background-color: #161515;

  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const ItemContainer = styled.View`
  padding: 0 20px;
  width: ${(props: IContainerProps) => props.width || 100}px;
  justify-content: flex-end;
`;

export const TextContainer = styled.View`
  padding: 10px;
  height: 200px;
  justify-content: flex-start;
`;

export const ItemTitle = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 10px;
`;
export const ItemSubtitle = styled.Text`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 10px;
  color: #666666;
`;

export const FooterContainer = styled.View`
  padding: 0 20px;
  justify-content: space-between;
`;

export const FooterSlides = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

export const FooterSlide = styled.View`
  background-color: ${(props: IContainerProps) =>
    props.backgroundColor || "#fff"};

  height: 5px;
  width: ${(props: IContainerProps) => props.width || 10}px;
  border-radius: 5px;
  margin: 0 5px;
`;

export const ButtonsContainer = styled.View`
  padding: 0px 20px;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;

  width: ${(props: IContainerProps) => props.width}px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: ${(props: IContainerProps) => (props.bold ? 800 : 300)};
  color: #fff;
`;
