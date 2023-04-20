import React from "react";

import { Container } from "./styles";
import CategoryItem from "../categoryItem/CategoryItem";
import { FlatList } from "react-native";

const CategoryList: React.FC = () => {
  const categories = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Action",
    },
    {
      id: 3,
      name: "Adventure",
    },
    {
      id: 4,
      name: "Comedy",
    },
    {
      id: 5,
      name: "Crime",
    },
    {
      id: 6,
      name: "Drama",
    },
    {
      id: 7,
      name: "Fantasy",
    },
    {
      id: 8,
      name: "Historical",
    },
    {
      id: 9,
      name: "Historical fiction",
    },
    {
      id: 10,
      name: "Horror",
    },
  ];

  return (
    <Container>
      <FlatList
        data={categories}
        renderItem={({ item }: { item: any }) => <CategoryItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          gap: 10,
        }}
      />
    </Container>
  );
};

export default CategoryList;
