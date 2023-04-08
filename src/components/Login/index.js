import { React, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { logindata } from "../Redux/actions/authAction";
import "./login.css";
import SimpleReactValidator from "simple-react-validator";

const Login = () => {
    const simpleValidator = useRef(new SimpleReactValidator());
    const [, forceUpdate] = useState();
  const dispatch = useDispatch();
  const defaultForm = {
    email: "",
    password: "",
  };
  //   const token = useSelector(state => state)
  //   const form = useRef();
  const [forms, setForms] = useState(defaultForm);
  //   const navigate = useNavigate();
    const handlechange = (e) => {
      setForms({ ...forms, [e.target.name]: e.target.value });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const users = { user: forms };
    if (simpleValidator.current.allValid()) {
      dispatch(logindata(users));
    } else {
      simpleValidator.current.showMessages()
      forceUpdate(1)
    }
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form
                        className="user"
                        // ref={form}
                        onSubmit={(e) => handleSubmit(e)}
                      >
                        <div className="form-group form_group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            name="email"
                            value={forms.email}
                            onChange={handlechange}
                            onBlur={() => simpleValidator.current.showMessageFor("email")}
                          />
                          {simpleValidator.current.message('email', forms.email, 'required')}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            name={"password"}
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            value={forms.password}
                            onChange={handlechange}
                            onBlur={() => simpleValidator.current.showMessageFor('password')}
                          />
                          {simpleValidator.current.message('password', forms.password, 'required')}
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                          </div>
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="btn btn-primary btn-user btn-block"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
