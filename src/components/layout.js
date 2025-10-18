import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";
import "./Layout.css"; // optional if you want to separate layout styling

export default function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
