import { Navigate, useNavigate } from "react-router-dom";
import Logo from "./assets/rxseek_logo_name.png";
import Kangcer from "./assets/kangcer.jpg";
import React, { useState } from "react";
import { useAuth } from "./context/authContext/index"
import { doSignInWithEmailAndPassword } from "./firebase/auth";

function Login(){
  const navigate = useNavigate();

  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        navigate("/Homepage"); 
      } catch (error) {
        setErrorMessage("Failed to sign in. Please check your credentials.");
        console.error(error);
      }
      setIsSigningIn(false);
    }
  };

  const handleRegisterClick = () => {
    navigate("register");
  };

  return (
    <div>
      {userLoggedIn && <Navigate to={"/Homepage"} replace={true} />}
      <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img src={Logo} style={{ width: "185px" }} alt="logo" />
                        <h4 className="mt-1 mb-5 pb-1"></h4>
                      </div>

                      <form onSubmit={onSubmit}>
                        <p>Please login to your account</p>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label className="form-label" htmlFor="form2Example11">
                            Username
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label className="form-label" htmlFor="form2Example22">
                            Password
                          </label>
                        </div>

                        {errorMessage && <p className="text-danger">{errorMessage}</p>}

                        <div className="text-center pt-1 mb-5 pb-1 d-flex flex-column">
                          <button
                            className="btn btn-block fa-lg mb-3"
                            type="submit" // Change the button type to "submit"
                            style={{
                              background:
                                "linear-gradient(90deg, hsla(34, 50%, 69%, 1) 0%, hsla(171, 71%, 89%, 1) 85%)",
                              color: "white",
                              border: "none",
                              padding: "12px 20px",
                              fontSize: "16px",
                              borderRadius: "5px",
                              backgroundClip: "padding-box",
                            }}
                            disabled={isSigningIn}
                          >
                            {isSigningIn ? "Signing in..." : "Log in"}
                          </button>
                          <a className="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={handleRegisterClick}
                          >
                            Create new
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div
                    className="col-lg-6 d-flex align-items-center position-relative"
                    style={{ height: "100vh", overflow: "hidden" }}
                  >
                    <img
                      src={Kangcer}
                      alt="Background"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 1,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;