import "./Authentication.css";
import login from "../resources/login.jpg";
import github from "../resources/github.png";
import google from "../resources/google.png";
function Authentication() {
  return (
    <div className="Authentication">
      <div className="card">
        <div className="image">
          <img src={login} alt="Login Image" />
          Login to your Account
        </div>
        <div className="second_auth">
          <div>
            <img src={google} alt="Google Login Image" />
          </div>
          <div>
            <img src={github} alt="Github Login Image" />
          </div>
        </div>
        <div className="or">
          ------------------------OR------------------------
        </div>
        <div className="email">
          <input placeholder="Email Address" />

          <input placeholder="Password" type="password" />
        </div>
        <div className="forget-password">
          <div className="remember-me">
            <input type="checkbox" />
            <div>Remember me</div>
          </div>
          <div>Forget Password</div>
        </div>
        <div className="login-btn">LOGIN</div>
        <div className="account-text">Dont have an Account? SignUp</div>
      </div>
    </div>
  );
}

export default Authentication;
