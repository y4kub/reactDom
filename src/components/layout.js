import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";
import "../App.css";
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
