/* eslint-disable react/prop-types */
import menuItemsNav from "../../styles/menuStyles/menuItemsNav.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function MenuItemsNav({ children, ...props }) {
  const { t } = useTranslation("menu");
  return (
    <>
      <div className={menuItemsNav["menu-ul-padding-div"]} {...props}>
        <div className="container" id="menu-div">
          <ul className={menuItemsNav["cat-list"]}>
            <li>
              <NavLink
                to="/menu/appetizers"
                className={({ isActive }) =>
                  isActive ? menuItemsNav["my-active-class"] : ""
                }
              >
                {t("menuNavSec.mainMenu")}
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? menuItemsNav["my-active-class"] : ""
                }
                to="/craving-lunch/49Category"
              >
                {t("menuNavSec.cravingLunch")}
              </NavLink>
            </li> */}
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? menuItemsNav["my-active-class"] : ""
                }
                to="/iftar-craving/iftar-combos"
              >
                {t("menuNavSec.iftarCraving")}
              </NavLink>
            </li>
          </ul>
          {children}
        </div>
      </div>
    </>
  );
}
