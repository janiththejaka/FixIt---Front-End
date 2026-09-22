import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <header>
        <h1>FixIt Dashboard</h1>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;