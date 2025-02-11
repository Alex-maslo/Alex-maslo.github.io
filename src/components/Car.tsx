import React, { FC } from "react";
import { ICar } from "@/models/ICar";

type CarProps = { car: ICar };

const Car: FC<CarProps> = ({ car }) => {
  return (
    <>
      <div className="card card-compact bg-blue-500 text-white shadow-lg">
        <div className="card-body">
          <h2 className="card-title">
            #{car.id}. {car.brand}
          </h2>
          <p>Ціна: {car.price}</p>
          <p>Рік випуску: {car.year}</p>
        </div>
      </div>
    </>
  );
};

export default Car;
