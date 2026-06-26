import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/navigationTypes";

type SplashScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Splash">;
};

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("UserList");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>👥</Text>
      </View>

      <Text style={styles.title}>User Directory</Text>

      <Text style={styles.subtitle}>
        Explore users with ease
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  logoContainer: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },

  logo: {
    fontSize: 50,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#E5E7EB",
  },
});