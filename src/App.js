import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router";
import "./App.css";
import { theme } from "./theme";
import { Home } from "./Home";
import NotFound from "./NotFound";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
