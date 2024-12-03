import { View, Text } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";

const Feeds = ({ feeds }) => {
  return (
    <View className="flex-row flex-wrap items-center justify-center">
      {feeds?.length > 0 ? (
        <>
          {feeds?.map((item, i) => (
            <ProductCard key={i} data={item} />
          ))}
        </>
      ) : (
        <View className="w-full h-64 flex items-center justify-center ">
          <Text>No Data</Text>
        </View>
      )}
    </View>
  );
};

export default Feeds;
