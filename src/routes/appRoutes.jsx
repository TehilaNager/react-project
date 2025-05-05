import { Routes, Route } from "react-router";
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

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BCard />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-out" element={<SignOut />} />

      <Route path="/fav-cards" element={<FavCards />} />
      <Route path="/my-cards" element={<MyCards />} />
      <Route path="/create-card" element={<CreateCard />} />
      <Route path="/edit-card" element={<EditCard />} />
      <Route path="/sandbox" element={<SandBox />} />
    </Routes>
  );
}

export default AppRoutes;
