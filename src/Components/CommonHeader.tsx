import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { toggleTheme } from "../redux/slices/ThemeSlice";
import ThemeToggle from "./ThemeToggle";

interface CommonHeaderProps {
  title: string;
  onBackPress?: () => void;
}

const CommonHeader = ({
  title,
  onBackPress,
}: CommonHeaderProps) => {
  const dispatch = useDispatch();

  const isDark = useSelector(
    (state: RootState) => state.theme.isDark
  );

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? "#121212" : "#FFFFFF",
          borderBottomColor: isDark ? "#2C2C2C" : "#E5E7EB",
        },
      ]}
    >
      <TouchableOpacity
        style={styles.leftContainer}
        onPress={onBackPress}
        disabled={!onBackPress}
      >
        {onBackPress && (
          <Text
            style={[
              styles.back,
              {
                color: isDark ? "#FFFFFF" : "#111827",
              },
            ]}
          >
            ←
          </Text>
        )}
      </TouchableOpacity>

      <Text
        style={[
          styles.title,
          {
            color: isDark ? "#FFFFFF" : "#111827",
          },
        ]}
      >
        {title}
      </Text>

      <View style={styles.rightContainer}>
        <ThemeToggle
          value={isDark}
          onValueChange={() => dispatch(toggleTheme())}
        />
      </View>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  container: {
    height: '5%',
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingBottom: 5
  },

  leftContainer: {
    width: 50,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  rightContainer: {
    width: 50,
    justifyContent: "center",
    alignItems: "flex-end",
  },

  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
  },

  back: {
    fontSize: 28,
    fontWeight: "600",
  },
});