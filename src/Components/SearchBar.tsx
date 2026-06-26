import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  isDark: boolean;
}

const SearchBar = ({
  value,
  onChangeText,
  isDark,
}: SearchBarProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? "#1E1E1E" : "#FFFFFF",
          borderColor: isDark ? "#333333" : "#E5E7EB",
        },
      ]}
    >
      <TextInput
        placeholder="Search users..."
        placeholderTextColor={isDark ? "#888" : "#999"}
        value={value}
        onChangeText={onChangeText}
        style={[
          styles.input,
          {
            color: isDark ? "#FFFFFF" : "#000000",
          },
        ]}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 15,
  },

  input: {
    height: 48,
    fontSize: 16,
  },
});