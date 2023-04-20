import React, { useState } from "react";

import { Container, ItemTitle } from "./styles";

export interface CategoryItemProps {
  id: number;
  name: string;
}

const CategoryItem = ({ item }: { item: CategoryItemProps }) => {
  const [active, setActive] = useState(1);

  return (
    <Container activeOpacity={0.7} isSelected={item.id === active}>
      <ItemTitle isSelected={item.id === active}>{item.name}</ItemTitle>
    </Container>
  );
};

export default CategoryItem;
