import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul className="flex text-white p-3 bg-orange-600 justify-around">
        <li>
          <Link to={"/"}>home</Link>
        </li>
        <li>
          <Link to={"users"}>users</Link>
        </li>
        <li>
          <Link to={"posts"}>posts</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
