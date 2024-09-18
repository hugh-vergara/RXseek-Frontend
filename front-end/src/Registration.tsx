import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/");
  };

  return (
    <div>
      <section
        className="h-100 gradient-form"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div
                    className="col-lg-6 d-flex align-items-center position-relative"
                    style={{ height: "100vh", overflow: "hidden" }}
                  >
                    <img
                      src="/mask.jpg"
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

                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="/rxseek_logo_name.png"
                          style={{ width: "185px" }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">Register</h4>
                      </div>

                      <form>
                        <p>Please create a new account</p>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example1"
                            className="form-control"
                            placeholder="Full Name"
                          />
                          <label className="form-label" htmlFor="form2Example1">
                            Full Name
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example2"
                            className="form-control"
                            placeholder="Email Address"
                          />
                          <label className="form-label" htmlFor="form2Example2">
                            Email Address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example3"
                            className="form-control"
                            placeholder="Password"
                          />
                          <label className="form-label" htmlFor="form2Example3">
                            Password
                          </label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1 d-flex flex-column">
                          <button
                            className="btn btn-block fa-lg mb-3"
                            type="button"
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
                          >
                            Register
                          </button>
                          <a className="text-muted" href="#!">
                            Already have an account?
                          </a>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={handleLoginClick}
                          >
                            Go to Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registration;
