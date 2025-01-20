import { FC } from "react";
import { IUser } from "../models/IUser.ts";
import { Link, useNavigate } from "react-router-dom";

type UserTypeProps = {
  user: IUser;
};
const User: FC<UserTypeProps> = ({ user }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("details", { state: user });
  };
  return (
    <div>
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
