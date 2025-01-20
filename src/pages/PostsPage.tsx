import Posts from "../components/Posts.tsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { postService } from "../services/api.service.ts";

const PostsPage = () => {
  const { userId } = useParams();
  useEffect(() => {
    if (userId) {
      console.log(userId, "exist");
      postService.getAllPostsOfUserById(+userId).then((value) => {
        console.log(value);
      });
    }
  }, [userId]);

  return (
    <div>
      <Posts />
    </div>
  );
};

export default PostsPage;
