import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return <div>{error.error?.message}</div>;
};

export default ErrorPage;
