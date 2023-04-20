import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Container, Input } from "./styles";
import theme from "../../global/theme";
const InputBuscarLista = () => {
  return (
    <Container>
      <FontAwesome name="search" size={20} color={theme.colors.gray} />
      <Input
        placeholder="Pesquisar..."
        placeholderTextColor={theme.colors.gray}
      />
    </Container>
  );
};

export default InputBuscarLista;
