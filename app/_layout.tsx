import { Stack } from 'expo-router';
import { useFonts } from "expo-font";
import { ActivityIndicator } from 'react-native';
import '../global.css';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "LiberationSans-Regular": require("@/assets/fonts/LiberationSans-Regular.ttf"),
    "LiberationSans-Bold": require("@/assets/fonts/LiberationSans-Bold.ttf"),
    "LiberationSans-BoldItalic": require("@/assets/fonts/LiberationSans-BoldItalic.ttf"),
    "LiberationSans-Italic": require("@/assets/fonts/LiberationSans-Italic.ttf"),
  });

  // ensure fonts are loaded before loading the app screens
  if (!fontsLoaded) {
    return (
      <ActivityIndicator
        size="small"
        className="flex-1 justify-center items-center"
      />
    );
  }
  
  return (
    <Stack screenOptions={{ headerShown: false }}/>
  );
}