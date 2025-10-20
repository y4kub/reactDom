import { NavLink } from "react-router-dom";
import "../App.css";
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Menu</h3>
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/noteList">List</NavLink>
        </li>
        <li>
          <NavLink to="/notes/:postId">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/allUsers">All Users</NavLink>
        </li>
      </ul>
    </aside>
  );
}
