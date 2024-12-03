import { Stack } from "expo-router";

// Import your global CSS file
import "../global.css";

import "react-native-url-polyfill/auto";

import { Provider } from "react-redux";
import store from "@/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
