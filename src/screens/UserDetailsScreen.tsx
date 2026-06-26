import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { useSelector } from "react-redux";

import CommonHeader from "../Components/CommonHeader";
import { RootStackParamList } from "../navigation/navigationTypes";
import { RootState } from "../redux/store";

type Props = {
  navigation: StackNavigationProp<
    RootStackParamList,
    "UserDetail"
  >;

  route: RouteProp<
    RootStackParamList,
    "UserDetail"
  >;
};

const UserDetailScreen = ({
  navigation,
  route,
}: Props) => {
  const { user } = route.params;

  const isDark = useSelector(
    (state: RootState) => state.theme.isDark
  );

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: isDark ? "#121212" : "#F5F5F5",
        },
      ]}
    >
      <CommonHeader
        title="User Details"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View
          style={[
            styles.profileCircle,
            {
              backgroundColor: "#2563EB",
            },
          ]}
        >
          <Text style={styles.profileText}>
            {user.name.charAt(0)}
          </Text>
        </View>

        <Text
          style={[
            styles.name,
            {
              color: isDark ? "#FFF" : "#111827",
            },
          ]}
        >
          {user.name}
        </Text>

        <Text
          style={[
            styles.username,
            {
              color: isDark ? "#A1A1AA" : "#6B7280",
            },
          ]}
        >
          @{user.username}
        </Text>

        <View
          style={[
            styles.card,
            {
              backgroundColor: isDark ? "#1E1E1E" : "#FFF",
            },
          ]}
        >
          <Info title="Email" value={user.email} isDark={isDark} />
          <Info title="Phone" value={user.phone} isDark={isDark} />
          <Info title="Website" value={user.website} isDark={isDark} />
          <Info title="Company" value={user.company.name} isDark={isDark} />
          <Info
            title="Address"
            value={`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
            isDark={isDark}
          />
          <Info
            title="Latitude"
            value={user.address.geo.lat}
            isDark={isDark}
          />
          <Info
            title="Longitude"
            value={user.address.geo.lng}
            isDark={isDark}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Info = ({
  title,
  value,
  isDark,
}: {
  title: string;
  value: string;
  isDark: boolean;
}) => (
  <View style={styles.infoContainer}>
    <Text
      style={[
        styles.label,
        {
          color: "#2563EB",
        },
      ]}
    >
      {title}
    </Text>

    <Text
      style={[
        styles.value,
        {
          color: isDark ? "#FFF" : "#111827",
        },
      ]}
    >
      {value}
    </Text>
  </View>
);

export default UserDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 20,
  },

  profileCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },

  profileText: {
    fontSize: 36,
    fontWeight: "700",
    color: "#FFF",
  },

  name: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
  },

  username: {
    textAlign: "center",
    marginBottom: 25,
    fontSize: 16,
  },

  card: {
    borderRadius: 16,
    padding: 18,
    elevation: 3,
  },

  infoContainer: {
    marginBottom: 18,
  },

  label: {
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 4,
  },

  value: {
    fontSize: 16,
  },
});