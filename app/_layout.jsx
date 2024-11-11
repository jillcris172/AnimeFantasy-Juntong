import React, { useEffect } from 'react';
import { Slot, Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "RleyI": require("../assets/fonts/Radley-Italic.ttf"),
    "RleyR": require("../assets/fonts/Radley-Regular.ttf"),
    "SOR": require("../assets/fonts/SnowburstOne-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}> 
      <Stack.Screen name="index" options={{ headerShown: false }} /> 
    </Stack>
  );
};

export default RootLayout;
