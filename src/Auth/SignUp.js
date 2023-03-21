import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import useToken from "../hooks/useToken";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, updateUser, emailVerify, googleLogin } =
    useContext(AuthContext);
  const [signupError, setSignupError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  // get token form useToken
  console.log(token);

  if (token) {
    navigate("/");
  }

  const handleSignup = data => {
    setSignupError("");

    // create user
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        toast.success("User created successfully");
        console.log(user);

        //update user info
        const userInfo = {
          displayName: data.name,
        };

        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch(e => console.log(e));

        // handleEmailVerification();
        // toast.success("Please Verify your email");
      })
      .catch(e => {
        setSignupError(e.message);
        console.error(e);
      });
    // console.log(data);
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCreatedUserEmail(email);
      });
  };

  const handleGoogleSign = () => {
    googleLogin()
      .then(result => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch(e => {
        setSignupError(e.message);
        console.log(e);
      });
  };

  const handleEmailVerification = () => {
    emailVerify()
      .then(() => {})
      .catch(e => console.error(e));
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
          {signupError && <p className="text-red-500">{signupError}</p>}
          <p>
            Already have an Account?{" "}
            <Link className="text-primary" to="/login">
              Login
            </Link>{" "}
          </p>
        </form>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleSign}
          className="btn btn-outline btn-accent w-full"
        >
          continue With Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
