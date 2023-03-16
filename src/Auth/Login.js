import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [loginError, setLoginError] = useState("");

  // const [data, setData] = useState("");
  const handleLogin = data => {
    const from = location?.state?.from?.pathname || "/";
    setLoginError("");
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success("User logged in successfully");
        navigate(from, { replace: true });
      })
      .catch(e => {
        console.error(e.message);
        setLoginError(e.message);
      });
    // console.log(data);
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
          <div>
            {loginError && <p className="text-red-500">{loginError}</p>}
          </div>
        </form>
        <p>
          New to Doctors Portal?{" "}
          <Link className="text-primary" to="/signup">
            Create new Account
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline btn-accent w-full">
          continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
