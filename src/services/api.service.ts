import { IUser } from "../models/IUser.ts";
import { urls } from "../urls/urls.ts";
import { IPost } from "../models/IPost.tsx";

export const userService = {
  getUsers: async (): Promise<IUser[]> => {
    return await fetch(urls.users.allUsers).then((value) => value.json());
  },
  getUser: async (id: number): Promise<IUser[]> => {
    return await fetch(urls.users.byId(id)).then((value) => value.json());
  },
};

export const postService = {
  getAllPostsOfUserById: async (id: number): Promise<IPost[]> => {
    return await fetch(urls.posts.userPostById(id)).then((value) =>
      value.json(),
    );
  },
};
