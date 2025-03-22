import { Outlet } from "react-router-dom";
import { LanguageProiver } from "../context/LanguageContext.jsx";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LanguagePopup from "../components/sharedComponents/LanguagePopup.jsx";
export default function Layout() {
  return (
    <LanguageProiver>
      <div className="layout">
        <LanguagePopup />
        <Header />
        <Outlet />
        <Footer />
      </div>
    </LanguageProiver>
  );
}
