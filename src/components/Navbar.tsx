import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-secondary text-primary-content flex justify-around ">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Home
        </Link>{" "}
        <Link href={"/cars"} className="btn btn-ghost text-xl">
          Cars
        </Link>
        <Link href={"/create-car"} className="btn btn-ghost text-xl">
          Create cars
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
