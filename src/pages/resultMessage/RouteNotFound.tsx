import { Button, Result } from "antd";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const RouteNotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/not-found");
  }, [navigate]);

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <NavLink to={"/"}>
          <Button type="primary">Back Home</Button>
        </NavLink>
      }
    />
  );
};

export default RouteNotFound;
