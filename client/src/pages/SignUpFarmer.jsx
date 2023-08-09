import React, { useState } from "react";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

function SignUpFarmer() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    work: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInputR = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async () => {
    //e.preventDefault();
    const { name, email, number, work, password, cpassword } = user;

    const res = await fetch("http://localhost:8000/elca/farmer/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        email,
        number,
        work,
        password,
        cpassword,
      }),
    });
    console.log(user);
    const data = await res;
    console.log(data);
    if (!data || data.status === 422) {
      window.alert("Registration Unsuccesful!");
    } else {
      window.alert("Registration Succesful!");
      // set
    }
  };

  // for login
  const [e, setE] = useState("");
  const [p, setP] = useState("");

  const handleInputL = async () => {
    const res = fetch("http://localhost:8000/elca/farmer/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e,
        password: p,
      }),
    });

    const data = await res;
    if (!data || data.status === 400) {
      // window.alert("Login Unsuccesful!");
      document.location.replace("/farmer-home");
    } else {
      window.alert("Login Succesful!");
      document.location.replace("/farmer-home");
    }
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="https://i.imgur.com/SKznBxl.gif"
              alt="login form"
              className="rounded-start w-100"
              style={{ height: "80%" }}
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
                <span className="h1 fw-bold mb-0">FarmEazy</span>
              </div>
              <MDBTabsContent>
                <MDBTabsPane show={justifyActive === "tab1"}>
                  <h5
                    className="fw-normal my-4 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Sign into your account
                  </h5>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Username"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    name="e"
                    value={e}
                    onChange={(e) => setE(e.target.value)}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    name="p"
                    value={p}
                    onChange={(e) => setP(e.target.value)}
                  />

                  <MDBBtn
                    className="mb-4 px-5"
                    color="dark"
                    size="lg"
                    onClick={handleInputL}
                  >
                    Login
                  </MDBBtn>
                  <a className="small text-muted" href="#!">
                    Forgot password?
                  </a>
                  {/* <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Don't have an account?{" "}
                    <a href="#!" style={{ color: "#393f81" }}>
                      Register here
                    </a>
                  </p> */}
                </MDBTabsPane>
                <MDBTabsPane show={justifyActive === "tab2"}>
                  <h5
                    className="fw-normal my-4 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Create New Account
                  </h5>
                  <MDBRow>
                    <MDBCol col="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="First Name"
                        id="formControlLg"
                        type="text"
                        size="lg"
                        name="name"
                        value={user.name}
                        onChange={handleInputR}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Address"
                    id="formControlLg"
                    rows={4}
                    size="lg"
                    name="work"
                    value={user.work}
                    onChange={handleInputR}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Phone Number"
                    id="formControlLg"
                    type="tel"
                    size="lg"
                    name="number"
                    value={user.number}
                    onChange={handleInputR}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Username"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    name="email"
                    value={user.email}
                    onChange={handleInputR}
                  />
                  <MDBRow>
                    <MDBCol col="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Password"
                        id="formControlLg"
                        type="password"
                        size="lg"
                        name="password"
                        value={user.password}
                        onChange={handleInputR}
                      />
                    </MDBCol>
                    <MDBCol col="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Condirm Password"
                        id="formControlLg"
                        type="password"
                        size="lg"
                        name="cpassword"
                        value={user.cpassword}
                        onChange={handleInputR}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBBtn
                    className="mb-4 px-5"
                    color="dark"
                    size="lg"
                    onClick={postData}
                  >
                    Register
                  </MDBBtn>
                </MDBTabsPane>
              </MDBTabsContent>

              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
              <MDBTabs
                pills
                justify
                className="mb-3 d-flex flex-row justify-content-between"
              >
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleJustifyClick("tab1")}
                    active={justifyActive === "tab1"}
                  >
                    Login
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleJustifyClick("tab2")}
                    active={justifyActive === "tab2"}
                  >
                    Register
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignUpFarmer;
