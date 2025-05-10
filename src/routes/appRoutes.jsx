import { Routes, Route, useLocation } from "react-router";
import BCard from "../pages/BCard";
import About from "../pages/about";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
import SignOut from "../pages/signOut";
import FavCards from "../pages/favCards";
import MyCards from "../pages/myCards";
import SandBox from "../pages/sandBox";
import CreateCard from "../pages/createCard";
import EditCard from "../pages/editCard";
import EditUser from "../pages/editUser";
import UserInfo from "../pages/userInfo";
import CardInfo from "../pages/cardInfo";
import { useEffect } from "react";
import { useCards } from "../context/cardsContext";

function AppRoutes() {
  const { resetSearch } = useCards();
  const location = useLocation();

  useEffect(() => {
    resetSearch();
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<BCard />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-out" element={<SignOut />} />

      <Route path="/fav-cards" element={<FavCards />} />
      <Route path="/my-cards" element={<MyCards />} />
      <Route path="/sandbox" element={<SandBox />} />
      <Route path="/create-card" element={<CreateCard />} />
      <Route path="/edit-card/:id" element={<EditCard />} />
      <Route path="/edit-user/:id" element={<EditUser />} />
      {/* <Route path="/user-info/:id" element={<UserInfo />} /> */}
      {/* <Route path="/card-info/:id" element={<CardInfo />} /> */}
      <Route path="/card-info" element={<CardInfo />} />
    </Routes>
  );
}

export default AppRoutes;
