import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import DashboardLayout from "./components/layout/DashboardLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreateNote from "./pages/CreateNote";
import ViewNote from "./pages/ViewNote";
import EditNote from "./pages/EditNote";
import Todo from "./pages/Todo";
import Profile from "./pages/Profile";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notes/create" element={<CreateNote />} />
          <Route path="/notes/:id" element={<ViewNote />} />
          <Route path="/notes/edit/:id" element={<EditNote />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;