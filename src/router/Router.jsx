import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

// HOMEページのコンポーネント
import { Home } from "../Home";

// ページ１に関するルーティング
import { page1Routes } from "./Page1Routes";

// ページ２に関するルーティング
import { page2Routes } from "./Page2Routes";

// 404ページのコンポーネント
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
      </div>

      {/* 下記に各コンポーネントを表示させる */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <Switch>
              {page1Routes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        />
        <Route
          path="/page2"
          render={({ match: { url } }) => (
            <Switch>
              {page2Routes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        />
        {/* Switchの上から走査し、どれも当てはまらない場合に遷移する */}
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
