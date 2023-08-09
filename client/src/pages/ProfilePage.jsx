import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBCardFooter,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBProgress,
  MDBProgressBar,
  MDBBadge,
} from "mdb-react-ui-kit";
import ItemCards from "../components/ItemCards";
import HomeNavbar from "../components/HomeNavbar";

export default function ProfilePage() {
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <HomeNavbar />
      <MDBContainer className="py-5">
        {/* <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href="#">Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow> */}

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1">Pullarabinda</p>
                <p className="text-muted mb-2">Borivali</p>
                <ul
                  className="mb-2 list-unstyled d-flex flex-row justify-content-center"
                  style={{ color: "#1B7B2C" }}
                >
                  <li>
                    <MDBIcon fas icon="star fa-xs" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star fa-xs" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star fa-xs" />
                  </li>
                  <li>
                    <MDBIcon fas icon="star fa-xs" />
                  </li>
                </ul>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn style={{ backgroundColor: "#1B7B2C" }}>
                    View Items
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            {/* <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://mdbootstrap.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="github fa-lg"
                      style={{ color: "#333333" }}
                    />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="twitter fa-lg"
                      style={{ color: "#55acee" }}
                    />
                    <MDBCardText>@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="instagram fa-lg"
                      style={{ color: "#ac2bac" }}
                    />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="facebook fa-lg"
                      style={{ color: "#3b5998" }}
                    />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard> */}
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted" id="fullName">
                      Pullarabinda Mahapatra
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>username</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted" id="userName">
                      pullu6969
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted" id="phone">
                      (097) 234-5678
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted" id="address">
                      Borivali
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <MDBRow>
              <MDBCol xl={4} lg={6} className="mb-4">
                <MDBCard>
                  <MDBCardBody>
                    <div className="d-flex justify-content-around align-items-center">
                      <div className="ms-3">
                        <p className="fw-bold mb-1">Total Goods sold</p>
                      </div>
                      <MDBBadge pill light>
                        81
                      </MDBBadge>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xl={4} lg={6} className="mb-4">
                <MDBCard>
                  <MDBCardBody>
                    <div className="d-flex justify-content-around align-items-center">
                      <div className="ms-3">
                        <p className="fw-bold mb-1">Total sales</p>
                      </div>
                      <MDBBadge pill light>
                        182
                      </MDBBadge>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xl={4} lg={6} className="mb-4">
                <MDBCard>
                  <MDBCardBody>
                    <div className="d-flex justify-content-around align-items-center">
                      <div className="ms-3">
                        <p className="fw-bold mb-1">Items in stock</p>
                      </div>
                      <MDBBadge pill light>
                        12
                      </MDBBadge>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <ItemCards />
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
