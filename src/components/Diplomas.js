import { Outlet, NavLink } from "react-router-dom";
import { getCategories } from "../api";

export default function Diplomas() {
  const diplomas = getCategories(); // Assuming `getCategories()` fetches diploma data

  return (
    <div className="container">
      <h1>Schools</h1>

      <ul className="categories">
        {diplomas.map((diploma) => (
          <li key={diploma.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "category-active" : null
              }
              to={diploma.id}
            >
              {diploma.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
