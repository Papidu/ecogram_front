import { Route, Redirect, useHistory  } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
function NotAuthRoute({ children, ...rest }) {
  const auth = useAuth();
  const history = useHistory();

  return (
    <Route
      {...rest}
      render={() => {
        const url = new URLSearchParams(history.location.search.slice(1));

        return auth.user ? (
          <Redirect to={url.get("redirect") || "/"} />
        ) : (
          children
        );
      }}
    />
  );
}

export default NotAuthRoute;