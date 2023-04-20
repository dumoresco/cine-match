import React from "react";

import { Container, Header, Title, SeeAll } from "./styles";
import CategoryItem from "../entertainmentItem/EntertainmentItem";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import EnterteinmentItem from "../entertainmentItem/EntertainmentItem";

interface EnterteinmentListProps {
  data: {
    Movie: Movie;
  }[];
  title: string;
  setData?: (data: any) => void;
  url: string;
}
export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
const EnterteinmentList: React.FC<EnterteinmentListProps> = ({
  data,
  title,
  setData = () => {},
  url,
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const onScrollEndDrag = async () => {
    setLoading(true);

    console.log("onScrollEndDrag");

    try {
      const newUrl = url.replace(/page=\d+/, `page=${currentPage + 1}`);
      const response = await fetch(newUrl);
      const data = await response.json();
      setData((oldData: any) => [...oldData, ...data.results]);
      setCurrentPage((oldPage) => oldPage + 1);
      console.log("[DATA]", data);
    } catch {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <SeeAll>See All</SeeAll>
      </Header>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FlatList
          data={data}
          renderItem={({ item, index }: { item: any; index: number }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <EnterteinmentItem item={item} key={item.id} id={item.id} />
              {index === data.length - 1 && loading && (
                <ActivityIndicator
                  size="large"
                  color="#fff"
                  style={{
                    marginLeft: 20,
                  }}
                />
              )}
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            gap: 4,
          }}
          onEndReached={() => {
            onScrollEndDrag();
          }}
        />
      </View>
    </Container>
  );
};

export default EnterteinmentList;
