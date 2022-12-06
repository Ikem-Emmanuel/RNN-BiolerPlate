//USERS
export type User = {
  name: string;
};

export type UserListState = {
  users: User[];
  loading: boolean;
  error: boolean;
};
