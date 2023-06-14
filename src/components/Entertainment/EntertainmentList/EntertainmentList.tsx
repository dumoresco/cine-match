import React from "react";

import { Container, Header, Title, SeeAll } from "./styles";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import EnterteinmentItem from "../EntertainmentItem/EntertainmentItem";
import { EnterteinmentListProps } from "../../../interfaces";
import { useEnterteinmentList } from "../../../hooks/useEnterteinmentList";
import { uuid } from "uuidv4";
const EnterteinmentList: React.FC<EnterteinmentListProps> = ({
  data,
  title,
  setData = () => {},
  url,
}) => {
  const { onScrollEndDrag, loading } = useEnterteinmentList({ url, setData });
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
              <EnterteinmentItem item={item} key={index} id={item.id} />
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
