import { FC } from "react";
import { IUser } from "../models/IUser.ts";
import { Link, useNavigate } from "react-router-dom";

type UserTypeProps = {
  user: IUser;
};
const User: FC<UserTypeProps> = ({ user }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`posts/${user.id}`, { state: user });
  };

  return (
    <div className=" grid grid-cols-2 gap-3 border border-amber-500 p-2">
      <Link state={user} to={"details"}>
        {user.name}
      </Link>

      <button onClick={handleOnClick} className="p-2 bg-amber-400">
        click
      </button>
    </div>
  );
};

export default User;
