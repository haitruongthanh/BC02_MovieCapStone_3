// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { userRoutes } from "./routes/userRoute";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          {userRoutes.map((route, i) => {
            if (route.isUseLayout) {
              return (
                <Route
                  key={i}
                  path={route.path}
                  render={() => {
                    return route.component;
                  }}
                  exact={route.exact}
                />
              );
            }

            return (
              <Route
                key={i}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
