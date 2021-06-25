import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Board from "../Board/Board";
import Dashboard from "../Dashboard/Dashboard";
import Navbar from "../Navbar/Navbar";

import GlobalStyle from "../../theme/globalStyles";
import { AppStyled } from "./AppStyles";

//TODO: Solve error and loading
const App: React.FC = () => {
      return (
            <AppStyled>
                  <GlobalStyle />
                  <Router>
                        <Navbar />
                        <Switch>
                              <Route path="/" exact component={Dashboard} />
                              <Route
                                    path="/board/:shortUrl/:name"
                                    component={Board}
                              />
                        </Switch>
                  </Router>
            </AppStyled>
      );
};

export default App;
