import Feed from "../components/Feed";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6">
          <Feed />
        </main>
      </div>
    </div>
  );
}