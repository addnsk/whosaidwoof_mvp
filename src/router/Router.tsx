import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { WelcomePage, ChoicePage, ResultPage, ErrorPage } from "pages";

interface IRouterProps {
  header?: JSX.Element;
}

export const Router: React.FC<IRouterProps> = ({ header }): JSX.Element => {
  return (
    <BrowserRouter>
      {!!header && header}
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/choice" component={ChoicePage} />
        <Route path="/result" component={ResultPage} />
        <Route path="/404" component={ErrorPage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};
