import { useRef, useState } from "react";
import { Dimensions, FlatList } from "react-native";

export const useOnboardingScreen = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const flatListRef = useRef<FlatList>(null);
  const { width, height } = Dimensions.get("window");

  const slides = [
    {
      key: 1,
      title: "Descubra novos filmes e séries.",
      text: "Veja sugestões personalizadas com base em seus gostos e assista aos títulos mais populares do momento.",
    },
    {
      key: 2,
      title: "Diga-nos do que você gosta.",
      text: "Selecione seus gêneros favoritos, atores preferidos e outras informações relevantes para obter sugestões mais precisas.",
    },
    {
      key: 3,
      title: "Descubra seu próximo filme ou série.",
      text: "Experimente a emoção de sortear um título aleatório ou navegue pelos resultados de pesquisa para encontrar algo que combine com seu humor ou ocasião.",
    },
  ];

  const nextSlide = () => {
    const nextSlideOffsetX = activeSlide;
    const offset = nextSlideOffsetX * width;

    if (flatListRef.current !== null) {
      flatListRef.current.scrollToOffset({ offset });
    }

    if (nextSlideOffsetX > slides.length) return;
    setActiveSlide(nextSlideOffsetX);
  };

  const skipSlide = () => {
    const nextSlideOffsetX = slides.length;
    const offset = nextSlideOffsetX * width;
    if (flatListRef.current !== null) {
      flatListRef.current.scrollToOffset({ offset });
    }
    setActiveSlide(nextSlideOffsetX);
  };

  const updateCurrentSlide = (event: any) => {
    const { contentOffset } = event.nativeEvent;
    const slide = Math.round(contentOffset.x / width);
    setActiveSlide(slide + 1);
  };

  return {
    slides,
    activeSlide,
    flatListRef,
    nextSlide,
    skipSlide,
    updateCurrentSlide,
  };
};
