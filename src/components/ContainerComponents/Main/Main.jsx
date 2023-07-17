import FoodList from "../Main/Food/FoodList";
import Home from "./Home/Home";
import User from "./User/User";
import AboutUs from "./AboutUs/AboutUs";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound/NotFound";

const Main = () => {
  return (
    <main className="w-full min-h-[85vh] max-h-fit">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foods" element={<FoodList />} />
        <Route path="/user" element={<User />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;
