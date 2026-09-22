import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <div>
      <header>
        <h1>FixIt</h1>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default PublicLayout;