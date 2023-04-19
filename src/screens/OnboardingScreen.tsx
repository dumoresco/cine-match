import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRef, useState } from "react";

import Icon from "react-native-vector-icons/FontAwesome5";

import {
  Container,
  ItemContainer,
  ItemTitle,
  ItemSubtitle,
  TextContainer,
  FooterContainer,
  FooterSlides,
  FooterSlide,
  ButtonsContainer,
  ButtonText,
} from "./styles";
import { useOnboardingScreen } from "../hooks/useOnboardingScreen";

interface ItemSlide {
  key: number;
  title: string;
  text: string;
}

export default function OnboardingScreen() {
  const { width, height } = Dimensions.get("window");

  const {
    slides,
    activeSlide,
    flatListRef,
    nextSlide,
    skipSlide,
    updateCurrentSlide,
  } = useOnboardingScreen();

  const Item = ({ item }: { item: ItemSlide }) => {
    return (
      <ItemContainer width={width}>
        <TextContainer>
          <ItemTitle>{item.title}</ItemTitle>

          <ItemSubtitle>{item.text}</ItemSubtitle>
        </TextContainer>
      </ItemContainer>
    );
  };
  const Footer = () => {
    return (
      <FooterContainer>
        <FooterSlides>
          {slides.map((slide) => (
            <FooterSlide
              key={slide.key}
              width={slide.key === activeSlide ? 30 : 10}
              backgroundColor={
                slide.key === activeSlide ? "#FB2A2A" : "#505050"
              }
            />
          ))}
        </FooterSlides>
        <ButtonsContainer width={width}>
          {activeSlide !== slides.length ? (
            <TouchableOpacity
              onPress={() => {
                skipSlide();
              }}
            >
              <ButtonText>Skip</ButtonText>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity></TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={() => {
              nextSlide();
            }}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FB2A2A",
              borderRadius: 10,
              padding: 10,
              paddingHorizontal: 20,
            }}
          >
            <ButtonText bold>
              {activeSlide === slides.length ? "Start" : "Next"}
            </ButtonText>
            <Icon
              name={
                activeSlide === slides.length ? "check" : "long-arrow-alt-right"
              }
              size={20}
              color="#fff"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
        </ButtonsContainer>
      </FooterContainer>
    );
  };

  return (
    <Container>
      <FlatList
        ref={flatListRef}
        onMomentumScrollEnd={updateCurrentSlide}
        decelerationRate="fast"
        data={slides}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Item item={item} />}
        contentContainerStyle={{
          height: height * 0.75,
        }}
      />
      <Footer />
    </Container>
  );
}
