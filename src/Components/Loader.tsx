import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

interface LoaderProps {
  isDark: boolean;
}

const Loader = ({ isDark }: LoaderProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#2563EB" />

      <Text
        style={[
          styles.text,
          {
            color: isDark ? "#FFFFFF" : "#000000",
          },
        ]}
      >
        Loading Users...
      </Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "500",
  },
});