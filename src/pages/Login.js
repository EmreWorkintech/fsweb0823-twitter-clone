import { useContext } from "react";
import { useForm } from "react-hook-form";
import { SiteContext } from "../contexts/SiteContext";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../api/axiosWithAuth";

const Login = () => {
  const { setLoggedUser } = useContext(SiteContext);
  const { push } = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: { username: "", password: "" },
  });

  const onFormSubmit = (formData, e) => {
    axiosWithAuth()
      .get(`/login?search=${formData.username}`)
      .then((res) => {
        if (res.data[0].password === formData.password) {
          setLoggedUser(res.data[0]);
          localStorage.setItem("token", res.data[0].token);
          e.target.reset();
          push("/feed");
        }
      });
  };

  const maxLengthForPassword = (value) => {
    if (value.length > 15) {
      return "Şifreniz 15 karakterden fazla olamaz!";
    }
    return true;
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="w-1/3 m-auto border-[1px] p-4 border-slate-300 rounded-lg"
    >
      <label className="block">
        Username:
        <input
          className="p-2 border-2 block"
          type="text"
          placeholder="Email adresiniz"
          {...register("username", {
            required: "Lütfen e-mail adresinizi giriniz",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Geçerli bir email adresi giriniz",
            },
          })}
        />
      </label>
      {errors.username && (
        <p className="text-red-800 bg-red-300 p-2 border-2 border-red-800 rounded-lg my-2">
          {errors.username.message}
        </p>
      )}
      <label>
        Password:
        <input
          className="p-2 border-2 block"
          type="password"
          placeholder="Şifreniz"
          {...register("password", {
            required: "Lütfen şirenizi giriniz",
            minLength: {
              value: 8,
              message: "Şifrenizi en az 8 karakter olarak giriniz.",
            },
            validate: { maxLengthForPassword },
          })}
        />
      </label>
      {errors.password && (
        <p className="text-red-800 bg-red-300 p-2 border-2 border-red-800 rounded-lg my-2">
          {errors.password.message}
        </p>
      )}
      <button
        disabled={!isValid}
        className="bg-blue-600 text-white rounded py-2 px-8 block my-3 mx-auto"
        type="submit"
      >
        Giriş
      </button>
    </form>
  );
};

export default Login;
