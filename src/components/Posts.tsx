import { useLocation } from "react-router-dom";
import { getPostsUser } from "../services/api.service.ts";
import { useEffect, useState } from "react";
import { IPost } from "../models/IPosts.ts";
import NoPosts from "./NoPosts.tsx";
import Post from "./Post.tsx";

const Posts = () => {
  const { state } = useLocation();
  const userId = state.id;

  const [posts, setPosts] = useState<IPost[] | null>(null);

  useEffect(() => {
    getPostsUser(userId).then((value) => {
      setPosts(value.posts);
    });
  }, [userId]);

  if (posts === null) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      {posts.length === 0 ? (
        <NoPosts />
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Posts;
