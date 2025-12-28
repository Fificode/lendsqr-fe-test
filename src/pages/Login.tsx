import loginStyles from "../scss/login.module.scss";
import Input from "../components/Input";
import Illustration from "../assets/images/sign-in-illustration-removebg.png"
import lendsqrLogo from "../assets/images/lendsqr-logo.png"
import {Link, useNavigate} from "react-router-dom"
import { useState } from "react";
import { toast } from "sonner";
import { FaSpinner } from "react-icons/fa";



export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isDisabled = !email || !password || isLoading;

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
if (isLoading) return;
    // Email checks
    if (!email) {
      toast.error("Email is required");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Password checks
    if (!password) {
      toast.error("Password is required");
      return;
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password)) {
      toast.error(
        "Password must be at least 8 characters and contain a number"
      );
      return;
    }

 setIsLoading(true);
 setTimeout(() => {
      setIsLoading(false);
      toast.success("Login successful");
      navigate("/dashboard");
    }, 2000);
    // toast.success("Login successful");
    // navigate("/dashboard");
  };

  return (
    <main className={loginStyles.login__main}>
      <section className={loginStyles.login__image_container}>
      <img src={lendsqrLogo} alt="Lendsqr Logo" className={loginStyles.login__logo} />
        <img
          src={Illustration}
          alt="Sign in illustration"
          className={loginStyles.login_illustration}
        />
      </section>
      <section className={loginStyles.login_welcome}>
        <div className={loginStyles.login_container}>
          <hgroup>
            <h1>Welcome!</h1>
            <h2>Enter details to login.</h2>
          </hgroup>
          <form className={loginStyles.login__form}>
            <Input
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              handleValue={(e) => setEmail(e.target.value)}
              error={null}
            />

            <Input
              placeholder="Password"
               type={showPassword ? "text" : "password"}
              name="password"
              value={password}
               handleValue={(e) => setPassword(e.target.value)}
              error={null}
              onShowPassword={() => setShowPassword(!showPassword)}
            />
            <Link to="/">FORGOT PASSWORD?</Link>
            <button disabled={isDisabled} onClick={handleSubmit} type="submit" >
             {isLoading ? (
                        <FaSpinner className={loginStyles.spinner} />
                      ) : (
                        "LOG IN"
                      )}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}