import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [singupError, setSignupError] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [data, setData] = useState("");

  const handleSignup = data => {
    setSignupError("");
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        toast.success("User created successfully");
        // console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch(e => console.log(e));
      })
      .catch(e => {
        setSignupError(e.message);
        console.error(e);
      });
    // console.log(data);
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-3xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignup)}>
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is Required",
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                  message: "Password must be strong",
                },
                minLength: {
                  value: 6,
                  message: "password should be at least 6 character",
                },
              })}
              className="input input-bordered w-full"
            />
            {errors?.password && (
              <p className="text-red-500 pt-2" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <br />

          <input
            className="btn btn-accent w-full"
            type="submit"
            value="sign up"
          />
          {singupError && <p className="text-red-500">{singupError}</p>}
          <p>
            Already have an Account?{" "}
            <Link className="text-primary" to="/login">
              Login
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

export default SignUp;
