import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/user/Dashboard";
import Routes from "./components/user/Routes";
import EditRoutes from "./components/busAuthority/EditRoutes";
import RegisterUser from "./components/cyber/RegisterUser";
import AddBusAuthAndCyber from "./components/systemAdmin/AddBusAuthAndCyber";
import UserQueries from "./components/systemAdmin/UserQueries";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookTicket from "./components/user/BookTicket";
import Landing from "./components/Landing";
import AuthorityDashboard from "./components/busAuthority/Dashboard";
import CyberDashboard from "./components/cyber/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Landing />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/login",
      element: (
        <div>
          <Navbar />
          <Login />
          <Footer />
        </div>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <div>
          <Navbar />
          <Dashboard />
          <Footer />
        </div>
      ),
    },
    {
      path: "/routes",
      element: (
        <div>
          <Navbar />
          <Routes />
          <Footer />
        </div>
      ),
    },
    {
      path: "/editroutes",
      element: (
        <div>
          <Navbar />
          <EditRoutes />
          <Footer />
        </div>
      ),
    },
    {
      path: "/registeruser",
      element: (
        <div>
          <Navbar />
          <RegisterUser />
          <Footer />
        </div>
      ),
    },
    {
      path: "/addbusauthandcyber",
      element: (
        <div>
          <Navbar />
          <AddBusAuthAndCyber />
          <Footer />
        </div>
      ),
    },
    {
      path: "/userqueries",
      element: (
        <div>
          <Navbar />
          <UserQueries />
          <Footer />
        </div>
      ),
    },
    {
      path: "/bookticket",
      element: (
        <div>
          <Navbar />
          <BookTicket />
          <Footer />
        </div>
      ),
    },
    {
      path: "/busauthority/dashboard",
      element: (
        <div>
          <Navbar />
          <AuthorityDashboard />
          <Footer />
        </div>
      ),
    },
    
{
      path: "/cyberauthority/dashboard",
      element: (
        <div>
          <Navbar />
          <CyberDashboard />
          <Footer />
        </div>
      ),
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
