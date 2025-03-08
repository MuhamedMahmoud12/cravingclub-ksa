/* eslint-disable react/prop-types */
import menuItemsNav from "../../styles/menuStyles/menuItemsNav.module.css";
import { NavLink } from "react-router-dom";
export default function MenuNavItem({
  imgName,
  imgPath,
  itemName,
  categoryRoute,
  linkClass,
  children,
  ...props
}) {
  return (
    <>
      <li {...props}>
        <NavLink
          to={`${categoryRoute}`}
          data-value="appetizers-section"
          className={({ isActive }) =>
            isActive ? menuItemsNav[linkClass] : ""
          }
        >
          <img src={`${imgPath}${imgName}`} alt="categories-thumb" />
          <span>
            {itemName}
            {children}
          </span>
        </NavLink>
      </li>
    </>
  );
}
