import Navbar from "./Components/Navbar";
import CreateUsers from "./Components/CreateUsers";
import UserPost from "./Components/UserPost";
import { Routes, Route } from "react-router-dom";
import EditUsers from "./Components/EditUsers";

function App() {
  return (
    <div className="bg-zinc-800 h-screen">
      <Navbar />
      <div className=" mx-auto h-auto bg-zinc-800">
        <Routes>
          <Route path="/" element={<UserPost />} />
          <Route path="/CreateUser" element={<CreateUsers />} />
          <Route path="/edit/:id" element={<EditUsers />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
