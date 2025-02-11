import React from "react";
import { getCars } from "@/services/api.service";
import Car from "@/components/Car";
import { ICar } from "@/models/ICar";

const Cars = async () => {
  const cars: ICar[] = await getCars();
  const sortCars: ICar[] = cars.sort((a, b) => b.id - a.id);
  return (
    <>
      <h2 className="bg-amber-500 p-3 flex justify-center font-bold text-white">
        All cars {cars.length}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4 p-4">
        {sortCars.map((car: ICar) => (
          <Car car={car} key={car.id} />
        ))}
      </div>
    </>
  );
};

export default Cars;
