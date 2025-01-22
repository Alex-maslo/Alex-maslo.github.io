import { FC } from "react";
import { IUser } from "../models/IUsers.ts";
import { Link } from "react-router-dom";

type UserProps = {
  user: IUser;
};

const User: FC<UserProps> = ({ user }) => {
  const handleClick = () => {
    console.log(`samloh`);
  };

  return (
    <div className="grid grid-cols-[2fr_1fr_1fr] gap-2 p-4 bg-red-500 text-white">
      <h2>
        {user.firstName} {user.lastName}
      </h2>

      <button onClick={handleClick} className="bg-green-700 p-1">
        click
      </button>
      <Link
        className="flex justify-center items-center bg-blue-700 p-1"
        to={"/posts"}
        state={user}
      >
        Posts
      </Link>
    </div>
  );
};

export default User;
