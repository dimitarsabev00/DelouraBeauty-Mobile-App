import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hide the header for all onboarding screens
      }}
    />
  );
}
