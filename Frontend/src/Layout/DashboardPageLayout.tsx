import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function DashboardPageLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default DashboardPageLayout;
