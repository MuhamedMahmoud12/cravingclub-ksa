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
// import SignIn from "./components/homeComponents/SignIn.jsx";
// import UserProfile from "./components/homeComponents/UserProfile.jsx";

import FillingDrinks from "./components/menuComponents/FillingDrinks.jsx";
import Shakers from "./components/menuComponents/Shakers.jsx";
import Smoothies from "./components/menuComponents/Smoothies.jsx";
import Mojitos from "./components/menuComponents/Mojitos.jsx";
import MilkShakes from "./components/menuComponents/MilkShakes.jsx";
import Sensations from "./components/menuComponents/Sensations.jsx";
import Coffe from "./components/menuComponents/Coffe.jsx";
import OtherDrinks from "./components/menuComponents/OtherDrinks.jsx";
// import IftarCombos from "./components/iftarCravingComponents/IftarCombos.jsx";
// import IftarCravingLayout from "./layouts/IftarCravingLayout.jsx";
// import RamadanAppetizers from "./components/iftarCravingComponents/RamadanAppetizers.jsx";
// import SharingPlatters from "./components/iftarCravingComponents/SharingPlatters.jsx";
// import IftarTwoPersons from "./components/iftarCravingComponents/IftarTwoPersons.jsx";
// import IftarFourPersons from "./components/iftarCravingComponents/IftarFourPersons.jsx";
import ContactUs from "./pages/ContactUs.jsx";
// import SpinningWheel from "./components/spinningWheel/SpinningWheel.jsx";
function App() {
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
            <Route
              path="/menu/filling-drinks"
              element={<FillingDrinks categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/shakers"
              element={<Shakers categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/smoothies"
              element={<Smoothies categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/mojitos"
              element={<Mojitos categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/milk-shakes"
              element={<MilkShakes categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/sensations"
              element={<Sensations categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/coffe"
              element={<Coffe categoryStyle={menuCategories} />}
            />
            <Route
              path="/menu/other-drinks"
              element={<OtherDrinks categoryStyle={menuCategories} />}
            />
          </Route>

          {/* {token ? (
            <Route path="/sign-in" element={<UserProfile />} />
          ) : (
            <Route path="/sign-in" element={<SignIn />} />
          )}
          <Route path="/profile" element={<UserProfile />} /> */}
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
          {/* <Route path="/iftar-craving" element={<IftarCravingLayout />}>
            <Route
              path="/iftar-craving/iftar-combos"
              element={<IftarCombos categoryStyle={menuCategories} />}
            />
            <Route
              path="/iftar-craving/ramadan-appetizers"
              element={<RamadanAppetizers categoryStyle={menuCategories} />}
            />
            <Route
              path="/iftar-craving/sharing-platters"
              element={<SharingPlatters categoryStyle={menuCategories} />}
            />
            <Route
              path="/iftar-craving/iftar-two"
              element={<IftarTwoPersons categoryStyle={menuCategories} />}
            />
            <Route
              path="/iftar-craving/iftar-four"
              element={<IftarFourPersons categoryStyle={menuCategories} />}
            />
          </Route> */}
          <Route
            path="/contact-us"
            element={<ContactUs categoryStyle={menuCategories} />}
          />
          {/* <Route path="/spinning-wheel" element={<SpinningWheel />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
