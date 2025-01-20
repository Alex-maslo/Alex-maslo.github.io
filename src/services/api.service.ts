import { IUser } from "../models/IUser.ts";

export const userService = {
  getUsers: async (): Promise<IUser[]> => {
    return await fetch("https://jsonplaceholder.typicode.com/users").then(
      (value) => value.json(),
    );
  },
};
