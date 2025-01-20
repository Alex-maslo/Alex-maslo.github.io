import { useEffect, useState } from "react";
import { IUser } from "../models/IUser.ts";
import User from "./User.tsx";
import { userService } from "../services/api.service.ts";
import { Outlet } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    userService.getUsers().then((allUsers) => {
      setUsers(allUsers);
    });
  }, []);

  return (
    <div className="grid grid-cols-5 gap-4 p-5">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}

      <Outlet />
    </div>
  );
};

export default Users;
