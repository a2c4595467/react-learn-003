/**
 * ページ２に関するルーティング
 */
import { Page2 } from "../Page2";
import { UrlParamater } from "../UrlParamater";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id", // URLパラメータ
    exact: false,
    children: <UrlParamater />
  }
];
