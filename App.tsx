import { useFonts } from "expo-font";
import OnboardingScreen from "./src/screens/OnBoarding";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/theme";
import Home from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
