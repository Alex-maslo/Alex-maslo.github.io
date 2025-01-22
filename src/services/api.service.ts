export const url = "https://dummyjson.com";

export const getAllUsers = async () => {
  const response = await fetch(`${url}/users?limit=0`);
  return response.json();
};

export const getPostsUser = async (userId: number) => {
  const response = await fetch(`${url}/users/${userId}/posts`);
  return response.json();
};
