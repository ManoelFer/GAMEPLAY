import React from "react";
import { SignIn } from "./src/screens/SignIn";

import AppLoading from "expo-app-loading";

import {
  useFonts,
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";

export default function App() {
  let [fontsLoaded] = useFonts({
    Rajdhani_500Medium,
    Rajdhani_700Bold,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <SignIn />;
}
