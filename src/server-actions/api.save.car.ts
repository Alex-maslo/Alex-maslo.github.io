"use server";

import { redirect } from "next/navigation";

export const saveCar = async (formData: FormData) => {
  const car = {
    brand: formData.get("brand"),
    price: Number(formData.get("price")),
    year: Number(formData.get("year")),
  };
  console.log("saveCar", car);

  const response = await fetch("http://owu.linkpc.net/carsAPI/v1/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  });

  if (!response.ok) {
    console.error("Error:", response.statusText);
  } else {
    console.log("Car saved successfully");
  }
  return redirect("/cars");
};
