import { Redirect } from "react-router-dom";

const ProtectedPage = ({ PageComponent, fromURL, ...rest }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return <PageComponent {...rest} />;
  } else {
    return (
      <Redirect to={{ pathname: "/login", state: { referrer: fromURL } }} />
    );
  }
};

export default ProtectedPage;
