import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBBadge,
  MDBCardFooter,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function ItemCard({
  ProductName,
  image,
  price,
  quantity,
  expiry,
}) {
  return (
    <MDBRow>
      <MDBCol xl={6} className="mb-4">
        <MDBCard>
          <MDBCardBody>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img
                  src={image}
                  alt="image of crop"
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">{ProductName}</p>
                </div>
              </div>
              <MDBBadge pill color="success" light>
                {expiry}
              </MDBBadge>
            </div>
          </MDBCardBody>
          <MDBCardFooter
            background="light"
            border="0"
            className="p-2 d-flex justify-content-around"
          >
            <p className="fw-bold mb-1">Price: Rs.{price} </p>
            <p className="fw-bold mb-1">Quantity: {quantity}Kg. </p>

            {/* <MDBBtn
              color="link"
              rippleColor="primary"
              className="text-reset m-0"
            >
              Message <MDBIcon fas icon="envelope" />
            </MDBBtn>
            <MDBBtn
              color="link"
              rippleColor="primary"
              className="text-reset m-0"
            >
              Call <MDBIcon fas icon="phone" />
            </MDBBtn> */}
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
