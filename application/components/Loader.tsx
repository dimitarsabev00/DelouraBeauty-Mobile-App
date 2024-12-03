import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

const Loader = () => {
  return (
    <View className="flex-1 h-80 items-center justify-center">
      <ActivityIndicator size={"large"} color={"teal"} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
