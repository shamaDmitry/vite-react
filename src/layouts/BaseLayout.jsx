import Navigation from "../components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const BaseLayout = (props) => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate('/home');
  // }, []);

  return (
    <div>
      <Navigation />

      <Outlet />
    </div>
  )
}

export default BaseLayout;