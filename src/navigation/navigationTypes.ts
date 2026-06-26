import { User } from "../types/user";

export type RootStackParamList = {
  Splash: undefined;
  UserList: undefined;
  UserDetail: {
    user: User;
  };
};