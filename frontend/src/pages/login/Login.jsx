import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            delectus consequuntur veritatis laudantium quo placeat rem animi aut
            soluta minus.
          </p>
          <span>Don't you have an account ?</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Passowrd" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
