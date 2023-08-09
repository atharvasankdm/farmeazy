import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBBadge,
} from "mdb-react-ui-kit";
import ItemCard from "./ItemCard";

const fakeData = [
  {
    ProductName: "crops",
    image:
      "https://media.newyorker.com/photos/5f2c85539a557880d973a759/2:2/w_1592,h_1592,c_limit/Buford-FrenchRice.jpg",
    price: "300",
    quantity: "100",
    expiry: "available",
  },
  {
    ProductName: "crops",
    image:
      "https://media.newyorker.com/photos/5f2c85539a557880d973a759/2:2/w_1592,h_1592,c_limit/Buford-FrenchRice.jpg",
    price: "300",
    quantity: "100",
    expiry: "available",
  },
  {
    ProductName: "crops",
    image:
      "https://media.newyorker.com/photos/5f2c85539a557880d973a759/2:2/w_1592,h_1592,c_limit/Buford-FrenchRice.jpg",
    price: "300",
    quantity: "100",
    expiry: "available",
  },
  {
    ProductName: "crops",
    image:
      "https://media.newyorker.com/photos/5f2c85539a557880d973a759/2:2/w_1592,h_1592,c_limit/Buford-FrenchRice.jpg",
    price: "300",
    quantity: "100",
    expiry: "available",
  },
];

export default function ItemCards() {
  {
    return fakeData.map((data) => {
      console.log(data);
      return (
        <ItemCard
          ProductName={data.ProductName}
          image={data.image}
          price={data.price}
          quantity={data.quantity}
          expiry={data.expiry}
        />
      );
    });
  }
}
