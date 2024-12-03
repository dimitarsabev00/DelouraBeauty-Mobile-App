import React, { useEffect, useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import { Brand, Screen1 } from "../../assets";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";
import Loader from "@/components/Loader";

export default function Onboarding() {
  const [loading, setLoading] = useState(true); // For showing a loader while checking state
  const router = useRouter();

  useEffect(() => {
    const checkOnboarding = async () => {
      try {
        // Check if onboarding is already completed
        const onboardingStatus = await SecureStore.getItemAsync("onboarding");
        if (onboardingStatus === "true") {
          // Navigate directly to Home if onboarding is already completed
          router.push('/(tabs)');
        } else {
          // If not completed, stay on the Onboarding screen
          setLoading(false);
        }
      } catch (error) {
        console.error("Error checking onboarding status:", error);
        Alert.alert("Error", "Failed to check onboarding status");
        setLoading(false);
      }
    };

    checkOnboarding();
  }, [router]);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(async () => {
        try {
          // Save onboarding state to SecureStore
          await SecureStore.setItemAsync("onboarding", "true");

          // Navigate to Home screen
          router.push("/home");
        } catch (error) {
          console.error("Error saving onboarding state:", error);
          Alert.alert("Error", "Failed to save onboarding state");
        }
      }, 2000);

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [loading, router]);

  if (loading) {
    // Show a loading indicator while checking onboarding status
    return <Loader />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View className="flex-1 items-center justify-center relative">
        <Image source={Screen1} className="w-full h-full" resizeMode="cover" />
        <View className="w-56 h-auto flex items-center justify-center p-2 absolute left-4 top-36">
          <Image source={Brand} className="w-32 h-32" resizeMode="contain" />
          <Text className="text-large font-semibold text-[#555]">
            Deloura Beauty
          </Text>
        </View>
      </View>
    </View>
  );
}
