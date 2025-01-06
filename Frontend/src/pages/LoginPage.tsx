import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { LuLoader } from "react-icons/lu";

import { loginData } from "../commonFormData/loginData";
import CommonInput from "../components/commonFormElement/CommonInput";
import CommonButton from "../components/commonFormElement/CommonButton";
import { authState } from "../context/AuthContext";

function LoginPage() {
  const { loading, signIn, signWithGoogle } = useContext(authState);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    signIn(formData.email, formData.password);
  };

  const signInWithGoogle = async () => {
    await signWithGoogle();
    console.log("SignInWithGoogle");
  }

  return (
    <div className="flex flex-row justify-center items-center text-slate-700 bg-slate-200">
      <div className="bg-white flex flex-col items-center w-1/3 mx-auto p-5 gap-2 my-12 shadow-2xl rounded">
        <FaRegUserCircle className="w-14 h-14" />
        <h1 className="text-3xl font-bold">Welcome back</h1>
        <p>Enter your credentials to access your account</p>
        <form onSubmit={handleSubmit} className="w-full mt-6">
          <div className="flex flex-col gap-5 w-full">
            {loginData.map((item) => (
              <CommonInput
                key={item.id}
                label={item.label}
                type={item.type}
                name={item.name}
                id={item.id}
                value={formData[item.name as keyof typeof formData]}
                placeholder={item.placeholder}
                onChange={onChange}
                icon={item.icon}
              />
            ))}
          </div>
          <div className="flex flex-row justify-between my-3 text-slate-600">
            <div className="flex flex-row justify-center items-center gap-2">
              <input
                className="size-4"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <Link className="hover:text-blue-500 hover:underline" to={""}>
              Forgot password?
            </Link>
          </div>
          <CommonButton
            type={"submit"}
            label="Sign In"
            onClick={() => {}}
            icon={loading ? LuLoader : MdLogin}
            loading={loading}
          />
        </form>
        <p>
          Don't have an account?{` `}
          <Link
            className="text-slate-900 hover:text-blue-500 hover:underline"
            to="/register"
          >
            Sign Up
          </Link>
        </p>
        <div className="flex flex-col w-full justify-center items-center">
          <h1 className="text-lg font-medium">Or</h1>
          <CommonButton
          type={"button"}
          label="Login with Google"
          onClick={signInWithGoogle}
          icon={FcGoogle}
          loading = {false}
        />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
