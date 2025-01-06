import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { LuLoader } from "react-icons/lu";

import { registerData } from "../commonFormData/registerData";
import CommonInput from "../components/commonFormElement/CommonInput";
import CommonButton from "../components/commonFormElement/CommonButton";
import { authState } from "../context/AuthContext";

function RegisterPage() {
  const { user, signUp, signWithGoogle, loading } = useContext(authState);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    signUp(formData.email, formData.password);
  };

  const signUpWithGoogle = async() => {
    console.log("signUpWithGoogle");
    await signWithGoogle();
  }

  if (user) {
    console.log("User exists");
  }

  return (
    <div className="flex flex-row justify-center items-center text-slate-700 bg-slate-200">
      <div className="bg-white flex flex-col items-center w-1/3 mx-auto p-5 gap-2 my-12 shadow-2xl rounded">
        <FaLock className="w-14 h-14" />
        <h1 className="text-3xl font-bold">Create Account</h1>
        <p>Please fill in your information below</p>
        <form onSubmit={handleSubmit} className="w-full mt-6">
          <div className="flex flex-col gap-5 w-full">
            {registerData.map((item) => (
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
          <CommonButton
            type={"submit"}
            label="Sign Up"
            onClick={() => {}}
            icon={loading ? LuLoader : MdLogin}
            loading={loading}
          />
        </form>
        <p>
          Already have an account?{` `}
          <Link
            className="text-slate-900 hover:text-blue-500 hover:underline"
            to="/login"
          >
            LogIn
          </Link>
        </p>
        <div className="flex flex-col w-full justify-center items-center">
          <h1 className="text-lg font-medium">Or</h1>
          <CommonButton
          type={"button"}
          label="SignUp with Google"
          onClick={signUpWithGoogle}
          icon={FcGoogle}
          loading = {false}
        />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
