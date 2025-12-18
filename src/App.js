import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-4">
          {/* Videos will come here */}
          Main Content
        </div>
      </div>
    </div>
  );
}

export default App;
