import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/MainLayout";
import MenuLayout from "./layouts/menuLayout.jsx";
import Appetizers from "./components/menuComponents/Appetizers.jsx";
import SoupAndSalad from "./components/menuComponents/SoupAndSalad.jsx";
import Sandwiches from "./components/menuComponents/Sandwiches.jsx";
import Burgers from "./components/menuComponents/Burgers.jsx";
import Pasta from "./components/menuComponents/Pasta.jsx";
import Pizza from "./components/menuComponents/Pizza.jsx";
import SteakAndRibs from "./components/menuComponents/SteakAndRibs.jsx";
import Wagyu from "./components/menuComponents/Wagyu.jsx";
import Seafood from "./components/menuComponents/Seafood.jsx";
import Chicken from "./components/menuComponents/Chicken.jsx";
import KidsMeal from "./components/menuComponents/KidsMeal.jsx";
import Dessert from "./components/menuComponents/Dessert.jsx";
import menuCategories from "./styles/menuStyles/menuCategories.module.css";
import Offer49 from "./components/lunchComponents/Offer49.jsx";
import Offer59 from "./components/lunchComponents/Offer59.jsx";
import Offer79 from "./components/lunchComponents/Offer79.jsx";
import LunchLayout from "./layouts/LunchLayout.jsx";
// import IftarCravingLayout from "./layouts/IftarCravingLayout.jsx";
// import FamilySampler from "./components/iftarCravingComponents/FamilySampler.jsx";
// import DuoSampler from "./components/iftarCravingComponents/DuoSampler.jsx";
// import CaliforniaRock from "./components/iftarCravingComponents/CaliforniaRock.jsx";
// import SmokyPlatter from "./components/iftarCravingComponents/SmokyPlatter.jsx";
// import MississippiPlatter from "./components/iftarCravingComponents/MississippiPlatter.jsx";
// import CountryPlatter from "./components/iftarCravingComponents/CountryPlatter.jsx";
import SignIn from "./components/homeComponents/SignIn.jsx";
import UserProfile from "./components/homeComponents/UserProfile.jsx";
import IftarCombos from "./components/iftarCravingComponents/IftarCombos.jsx";
import { useAuth } from "./context/AuthContext.jsx";
import IftarCravingLayout from "./layouts/IftarCravingLayout.jsx";

function App() {
  const token = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/menu" element={<MenuLayout />}>
            <Route
              path="/menu/appetizers"
              element={<Appetizers categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/soup-salad"
              element={<SoupAndSalad categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/sandwiches"
              element={<Sandwiches categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/burgers"
              element={<Burgers categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/pasta"
              element={<Pasta categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/pizza"
              element={<Pizza categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/steak-ribs"
              element={<SteakAndRibs categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/wagyu"
              element={<Wagyu categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/seafood"
              element={<Seafood categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/chicken"
              element={<Chicken categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/kids-meal"
              element={<KidsMeal categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/dessert"
              element={<Dessert categoryStyle={menuCategories} />}
            />
          </Route>
          {token ? (
            <Route path="/sign-in" element={<UserProfile />} />
          ) : (
            <Route path="/sign-in" element={<SignIn />} />
          )}
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/craving-lunch" element={<LunchLayout />}>
            <Route
              path="/craving-lunch/49Category"
              element={<Offer49 categoryStyle={menuCategories} />}
            />
            <Route
              path="/craving-lunch/59Category"
              element={<Offer59 categoryStyle={menuCategories} />}
            />
            <Route
              path="/craving-lunch/79Category"
              element={<Offer79 categoryStyle={menuCategories} />}
            />
          </Route>
          <Route path="/iftar-craving" element={<IftarCravingLayout />}>
            <Route
              path="/iftar-craving/iftar-combos"
              element={<IftarCombos categoryStyle={menuCategories} />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
