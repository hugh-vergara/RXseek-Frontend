import Logo from "./assets/rxseek_logo_name.png";
import Upload from "./assets/upload.png";
import UploadButton from "./assets/upload_button.png";

function Homepage() {
  return (
    <>
      <div>
        <section
          className="h-100 gradient-form"
          style={{ backgroundColor: "#fff" }} // Set background to white
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-10">
                <div
                  className="card text-black"
                  style={{
                    backgroundColor: "white", // Set card background to white
                    border: "none", // Remove the card border
                    boxShadow: "none", // Remove any shadows
                  }}
                >
                  <div className="row g-0 d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-6 d-flex justify-content-center">
                      <div
                        className="card-body p-md-5 mx-md-4 text-center"
                        style={{ backgroundColor: "white" }} // Ensure inner content is white
                      >
                        <div>
                          <img
                            src={Logo}
                            style={{ width: "350px" }}
                            alt="logo"
                          />
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                          <div className="p-3 ">
                            <img
                              src={Upload}
                              style={{ width: "300px" }}
                              alt="upload"
                            />
                          </div>
                          <div className="p-3 ">
                            <img
                              src={Upload}
                              style={{ width: "300px" }}
                              alt="upload"
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                          <div className="p-3">
                            <img
                              src={UploadButton}
                              style={{ width: "100px" }}
                              alt="upload_button"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Homepage;
