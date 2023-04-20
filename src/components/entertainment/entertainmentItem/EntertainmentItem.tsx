import React, { useState, useEffect } from "react";
import { Container, ItemImage, NotFound } from "./styles";
import { ActivityIndicator, useWindowDimensions } from "react-native";
import { Movie } from "../entertainmentList/EntertainmentList";

const EnterteinmentItem = ({ item, id }: { item: Movie; id: string }) => {
  const { width } = useWindowDimensions();
  const [isLoading, setIsLoading] = useState(true);
  const [imageUri, setImageUri] = useState("");

  useEffect(() => {
    const imageUrl = "http://image.tmdb.org/t/p/w500/" + item.poster_path;
    const fetchImage = async () => {
      try {
        const response = await fetch(imageUrl);
        if (response.status === 200) {
          setImageUri(imageUrl);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchImage();
  }, [item.poster_path]);

  return (
    <Container
      activeOpacity={0.7}
      style={{
        width: width / 3 - 15,
      }}
    >
      {isLoading ? (
        <NotFound>
          <ActivityIndicator size="large" color="#fff" />
        </NotFound>
      ) : (
        <ItemImage source={{ uri: imageUri }} />
      )}
    </Container>
  );
};

export default EnterteinmentItem;
