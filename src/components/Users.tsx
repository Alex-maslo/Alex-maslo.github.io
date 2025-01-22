import { getAllUsers } from "../services/api.service.ts";
import { useEffect, useState } from "react";
import { IUser } from "../models/IUsers.ts";
import User from "./User.tsx";

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getAllUsers().then((value) => {
      setUsers(value.users);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 p-4 gap-4">
      {/*{users.length===0?<h2></h2>}*/}

      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
