import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import InputBuscarLista from "../../components/InputBuscarLista";
import CategoryList from "../../components/category/categoryList/CategoryList";
import EnterteinmentList from "../../components/entertainment/entertainmentList/EntertainmentList";
import { ActivityIndicator, ScrollView, Text } from "react-native";

const Home: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  const token = "9994947eb20ec481103daf2b45b57255";
  const moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${token}&language=pt-BR&page=1`;
  const tvShowsUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${token}&language=pt-BR&page=1`;
  const comedyMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${token}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`;

  const getMovies = async () => {
    const response = await fetch(moviesUrl);
    const data = await response.json();
    const moviesWithPrefix = data.results.map((movie: { id: number }) => {
      return { ...movie, id: `movies_${movie.id}` };
    });
    setMovies(moviesWithPrefix);

    console.log("movies");
  };

  const getTvShows = async () => {
    const response = await fetch(tvShowsUrl);
    const data = await response.json();
    const tvShowsWithPrefix = data.results.map((tvShows: { id: number }) => {
      return { ...tvShows, id: `tvShows_${tvShows.id}` };
    });
    setTvShows(tvShowsWithPrefix);
    console.log("tvShows");
  };

  const getComedyMovies = async () => {
    const response = await fetch(comedyMoviesUrl);
    const data = await response.json();
    const comedyMoviesWithPrefix = data.results.map(
      (comedyMovies: { id: number }) => {
        return { ...comedyMovies, id: `comedyMovies_${comedyMovies.id}` };
      }
    );
    setComedyMovies(comedyMoviesWithPrefix);
    console.log("comedyMovies");
  };
  useEffect(() => {
    // faz requisição

    getComedyMovies();
    getTvShows();
    getMovies();
  }, []);

  useEffect(() => {
    if (
      movies.length === 0 ||
      tvShows.length === 0 ||
      comedyMovies.length === 0
    ) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [movies, tvShows, comedyMovies]);

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
            url={moviesUrl}
          />
          <EnterteinmentList
            data={comedyMovies}
            title="Comedy"
            setData={setComedyMovies}
            url={moviesUrl}
          />
        </ScrollView>
      )}
    </Container>
  );
};

export default Home;
