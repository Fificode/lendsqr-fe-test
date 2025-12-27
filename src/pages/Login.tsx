import loginStyles from "../scss/login.module.scss";
import Input from "../components/Input";
import Illustration from "../assets/images/sign-in-illustration-removebg.png"
import lendsqrLogo from "../assets/images/lendsqr-logo.png"
import {Link} from "react-router-dom"



export default function Login() {


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
            />

            <Input
              placeholder="Password"
              name="password"
            />
            <Link to="/">FORGOT PASSWORD?</Link>
            <button type="submit" >
              LOG IN
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}