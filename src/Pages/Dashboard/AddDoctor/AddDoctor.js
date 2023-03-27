import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const imageHostKey = process.env.REACT_APP_imgbb;
  console.log(imageHostKey);

  const { data: specialties = [], isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = fetch(
        "https://doctors-portal-server-nine-beta.vercel.app/appointmentSpecialty"
      );
      const data = (await res).json();
      return data;
    },
  });

  const handleAddDoctor = data => {
    const image = data.image[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(imgData => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };
          // save doctor information on the db
          fetch("https://doctors-portal-server-nine-beta.vercel.app/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              toast.success("Successfully added doctor");
              navigate("/dashboard/managedoctors");
            });
        }
      });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-96 ml-10 p-7">
      <h1 className="text-3xl">Add Doctor</h1>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is required",
              maxLength: {
                value: 15,
                message: "Keep your name within 15 character",
              },
            })}
            className="input input-bordered w-full"
          />
          {errors?.name && (
            <p className="text-red-500 pt-2" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="input input-bordered w-full"
          />
          {errors?.email && (
            <p className="text-red-500 pt-2" role="alert">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            type="select"
            {...register("specialty", { required: "Specialty is required" })}
            className="select select-bordered w-full max-w-xs"
          >
            {specialties.map(specialty => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Pick a Photo</span>
          </label>
          <input
            type="file"
            {...register("image", { required: "Image is required" })}
            className="file-input file-input-bordered w-full max-w-xs"
          />
          {errors?.image && (
            <p className="text-red-500 pt-2" role="alert">
              {errors.image?.message}
            </p>
          )}
        </div>
        <br />
        <input
          className="btn btn-accent w-full"
          type="submit"
          value="Add A Doctor"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
