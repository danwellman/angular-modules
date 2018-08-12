export interface User {
  userId: number;
  name: string;
  avatar: string;
}

export interface UsersApiResponse {
  users: User[];
}
