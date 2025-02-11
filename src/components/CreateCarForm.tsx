import React from "react";
import Form from "next/form";
import { saveCar } from "@/server-actions/api.save.car";

const CreateCarForm = () => {
  return (
    <div className="flex justify-center pt-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
        <Form action={saveCar} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <input
              type="text"
              placeholder="Brand"
              name="brand"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Year</span>
            </label>
            <input
              type="number"
              name="year"
              placeholder="Year"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Create car</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateCarForm;
