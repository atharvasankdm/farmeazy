import FarmerListPage from "./pages/FarmerListPage";
import "./App.css";
import ProductModal from "./overlays/ProductModal";
import AddProductPage from "./pages/AddProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeNavbar from "./components/HomeNavbar";
import HomeHero from "./components/HomeHero";
import MainHomePage from "./pages/MainHomePage";
import ListingPage from "./pages/ListingPage";
import DiscussionForum from "./pages/DiscussionForum";
import ProfilePage from "./pages/ProfilePage";
import SignUpFarmer from "./pages/SignUpFarmer";
import SignUpUser from "./pages/SignUpUser";

function App() {
  const obj = {
    name: "Sachin",
  };
  const postData = async () => {
    await fetch("https://0613-43-243-83-61.in.ngrok.io", {
      method: "POST",
      headers: {
        // *** 3
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json", // *** 3
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  postData();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHomePage />} />
        <Route path="/farmer-signup" element={<SignUpFarmer />} />
        <Route path="/user-signup" element={<SignUpUser />} />
        <Route path="/farmer-home" element={<FarmerListPage />} />
        <Route path="/addProduct" element={<AddProductPage />} />
        <Route path="/farmer-profile" element={<ProfilePage />} />
        <Route path="/forum" element={<DiscussionForum />} />
        <Route path="/product-listings" element={<ListingPage />} />

        {/* <Route path="/" element={<FarmerListPage />} />
       
        <Route path="/home" element={<MainHomePage />} />
        <Route path="/listings" element={<ListingPage />} />
        <Route path="/forum" element={<DiscussionForum />} />
        <Route path="/profile" element={<ProfilePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
