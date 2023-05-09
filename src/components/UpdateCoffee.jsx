import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateCoffee = () => {
  const loadedUpdateCoffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    loadedUpdateCoffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);
    // send data to the sever
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h1 className="text-6xl text-purple-600">Update Coffee: {name}</h1>
      <form onSubmit={handleUpdateCoffee}>
        {/*Form name and quantity row*/}
        <div className="md:flex gap-3 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-black">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Coffee Name"
                name="name"
                defaultValue={name}
                className="input w-full input-bordered"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-black">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input w-full input-bordered"
              />
            </label>
          </div>
        </div>
        {/* Form Supplier row */}
        <div className="md:flex gap-3 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-black">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={supplier}
                placeholder="Supplier Name"
                name="supplier"
                className="input w-full input-bordered"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-black">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Taste"
                className="input w-full input-bordered"
              />
            </label>
          </div>
        </div>
        {/* Category and Details */}
        <div className="md:flex gap-3 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-black">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={category}
                placeholder="Category"
                name="category"
                className="input w-full input-bordered"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-black"> Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Details"
                className="input w-full input-bordered"
              />
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text text-black">Photo Url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={photo}
                placeholder="Photo Url"
                name="photo"
                className="input w-full input-bordered"
              />
            </label>
          </div>
        </div>

        <input type="submit" className="btn btn-block" value="Update Coffee" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
