/* eslint-disable react/prop-types */
const CATEGORIES_THUMB = "../../assets/categories-thumb/";
import { NavLink } from "react-router-dom";
export default function MenuNavItem({
  imgName,
  itemName,
  categoryRoute,
  children,
  ...props
}) {
  return (
    <>
      <li {...props}>
        <NavLink to={`${categoryRoute}`} data-value="appetizers-section">
          <img src={`${CATEGORIES_THUMB}${imgName}`} alt="categories-thumb" />
          <span>
            {itemName}
            {children}
          </span>
        </NavLink>
      </li>
    </>
  );
}
