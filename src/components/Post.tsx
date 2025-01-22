import { FC } from "react";
import { IPost } from "../models/IPosts.ts";

type PostProps = {
  post: IPost;
};
const Post: FC<PostProps> = ({ post }) => {
  console.log(post);

  return (
    <div className="bg-blue-400 text-white p-4">
      <h2>
        Post user #: {post.userId}: {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
