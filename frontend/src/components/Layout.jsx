import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">

      <Sidebar />

      <div className="ml-64 min-h-screen">

        <TopBar />

        <main className="p-6">
          {children}
        </main>

      </div>

    </div>
  );
}

export default Layout;