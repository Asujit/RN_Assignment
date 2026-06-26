import React, { memo } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { User } from "../types/user";

interface UserCardProps {
  user: User;
  isDark: boolean;
  onPress: () => void;
}

const UserCard = ({
  user,
  isDark,
  onPress,
}: UserCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.card,
        {
          backgroundColor: isDark ? "#1E1E1E" : "#FFFFFF",
        },
      ]}
    >
      <Text
        style={[
          styles.name,
          {
            color: isDark ? "#FFFFFF" : "#111827",
          },
        ]}
      >
        {user.name}
      </Text>

      <Text
        style={[
          styles.info,
          {
            color: isDark ? "#D1D5DB" : "#6B7280",
          },
        ]}
      >
        📧 {user.email}
      </Text>

      <Text
        style={[
          styles.info,
          {
            color: isDark ? "#D1D5DB" : "#6B7280",
          },
        ]}
      >
        📍 {user.address.city}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(UserCard);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,

    elevation: 3,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },

  info: {
    fontSize: 14,
    marginBottom: 4,
  },
});