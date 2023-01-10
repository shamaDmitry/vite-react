import Navigation from "../components/Navigation/Navigation";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div>
      <Navigation />
      
      <Outlet />
    </div>
  )
}

export default BaseLayout;