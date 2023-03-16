import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [data, setData] = useState("");
  const handleLogin = data => {
    console.log(data);
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-3xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              {...register("email", { required: "Email Address is Required" })}
            />

            {errors.email && (
              <p className="text-red-500 pt-2" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Make password at least 6 character",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 pt-2" role="alert">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text">
                <small>Forget Password</small>
              </span>
            </label>
          </div>
          <br />

          <input
            className="btn btn-accent w-full"
            type="submit"
            value="Login"
          />
          <p>
            New to Doctors Portal?{" "}
            <Link className="text-primary" to="/signup">
              Create new Account
            </Link>{" "}
          </p>
        </form>
        <div className="divider">OR</div>
        <button className="btn btn-outline btn-accent w-full">
          continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
