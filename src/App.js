import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ArticleEditor from "./components/ArticleEditor";
import Home from "./components/Home";
import Article from "./components/Article";
import "./styles/app.scss";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/article/:id" component={Article} />
          <Route path="/editor" component={ArticleEditor} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
