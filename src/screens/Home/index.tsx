import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import InputBuscarLista from "../../components/InputBuscarLista";
import CategoryList from "../../components/Category/CategoryList/CategoryList";
import EnterteinmentList from "../../components/Entertainment/EntertainmentList/EntertainmentList";
import { ActivityIndicator, ScrollView, Text } from "react-native";
import { useRenderListData } from "../../hooks/useRenderListData";

const Home: React.FC = () => {
  const {
    movies,
    setMovies,

    tvShows,
    setTvShows,

    comedyMovies,
    setComedyMovies,

    isLoading,
    moviesUrl,
    tvShowsUrl,
    comedyMoviesUrl,
  } = useRenderListData();
  return (
    <Container>
      <InputBuscarLista />
      <CategoryList />
      {isLoading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 20,
          }}
        >
          <EnterteinmentList
            data={movies}
            title="Movies"
            setData={setMovies}
            url={moviesUrl}
          />
          <EnterteinmentList
            data={tvShows}
            title="TV Shows"
            setData={setTvShows}
            url={tvShowsUrl}
          />
          <EnterteinmentList
            data={comedyMovies}
            title="Comedy"
            setData={setComedyMovies}
            url={comedyMoviesUrl}
          />
        </ScrollView>
      )}
    </Container>
  );
};

export default Home;
