import React from "react";
import { Switch } from "react-native";

interface ThemeToggleProps {
  value: boolean;
  onValueChange: () => void;
}

const ThemeToggle = ({
  value,
  onValueChange,
}: ThemeToggleProps) => {
  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
    />
  );
};

export default ThemeToggle;