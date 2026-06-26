import React, { useCallback, useMemo, useState } from "react";
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
} from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/navigationTypes";
import { RootState } from "../redux/store";

import { useUsersQuery } from "../services/useUsersQuery";
import useDebounce from "../hooks/useDebounce";

import SearchBar from "../Components/SearchBar";
import UserCard from "../Components/UserCard";
import Loader from "../Components/Loader";
import CommonHeader from "../Components/CommonHeader";

import { User } from "../types/user";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "UserList">;
};

const UserListScreen = ({ navigation }: Props) => {
  const isDark = useSelector(
    (state: RootState) => state.theme.isDark
  );

  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const {
    data: users = [],
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useUsersQuery();

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase())
    );
  }, [users, debouncedSearch]);

  const renderItem = useCallback(
    ({ item }: { item: User }) => (
      <UserCard
        user={item}
        isDark={isDark}
        onPress={() =>
          navigation.navigate("UserDetail", {
            user: item,
          })
        }
      />
    ),
    [navigation, isDark]
  );

  if (isLoading) {
    return <Loader isDark={isDark} />;
  }

  if (isError) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: isDark ? "#121212" : "#F5F5F5",
          },
        ]}
      >
        <CommonHeader title="User List" />

        <Text
          style={[
            styles.errorText,
            {
              color: isDark ? "#FFFFFF" : "#000000",
            },
          ]}
        >
          Failed to load users.
        </Text>

        <Text
          style={styles.retry}
          onPress={() => refetch()}
        >
          Retry
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: isDark ? "#121212" : "#F5F5F5",
        },
      ]}
    >
      <CommonHeader title="User List" />

      <SearchBar
        value={search}
        onChangeText={setSearch}
        isDark={isDark}
      />

      <FlatList
        data={filteredUsers}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={refetch}
          />
        }
        ListEmptyComponent={
          <Text
            style={[
              styles.emptyText,
              {
                color: isDark ? "#FFFFFF" : "#000000",
              },
            ]}
          >
            No users found.
          </Text>
        }
      />
    </SafeAreaView>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  listContainer: {
    paddingBottom: 20,
  },

  emptyText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 18,
  },

  errorText: {
    textAlign: "center",
    marginTop: 100,
    fontSize: 18,
  },

  retry: {
    marginTop: 15,
    textAlign: "center",
    color: "#2563EB",
    fontWeight: "700",
    fontSize: 18,
  },
});