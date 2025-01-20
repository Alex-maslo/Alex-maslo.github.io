import { useEffect, useState } from "react";
import { IUser } from "../models/IUser.ts";
import User from "./User.tsx";
import { userService } from "../services/api.service.ts";

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    userService.getUsers().then((allUsers) => {
      setUsers(allUsers);
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
