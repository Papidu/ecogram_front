import { Switch , Route, Redirect  } from "react-router-dom";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import useAuth from "../../hooks/useAuth";
import PrivateRoute from "../components/PrivateRoute";
import UserInfo from "../../pages/userInfo/UserInfo";
import NotAuthRoute from "../components/NotAuthRoute"//"../components/GuestRoute";
import {
  CircularProgress,
  Container,
  Grid,
} from "@mui/material";
// import {makeStyles} from "@mui/styles";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: '3px',//theme.spacing(3),
//   },
// }));

function MyRoutes() {
  // const classes = useStyles();
  const auth = useAuth();

  return auth.isLoaded ? (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>     

      <NotAuthRoute path="/login">
        <Login />
      </NotAuthRoute>
      <NotAuthRoute path="/users">
        <UserInfo/>
      </NotAuthRoute>
      {/* <PrivateRoute path="/users">
        <UserInfo/>
      </PrivateRoute> */}

      <PrivateRoute path="/orders">
        <UserInfo/>
      </PrivateRoute>

      <PrivateRoute path="/posts">
        <UserInfo/>
      </PrivateRoute>

      <Route path="/not-found-404">
        <NotFound />
      </Route>
      <Redirect  to="/not-found-404" />
    </Switch>
  ) : (
    <Container maxWidth="md" >
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item>
          <CircularProgress color="inherit" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default MyRoutes;