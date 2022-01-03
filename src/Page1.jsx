/**
 * ネストされたページ遷移例
 * Page1DetailAとPage1DetailBを用意する
 */
import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1ページ</h1>
      <Link to="/page1/page1detaila">Detail1A</Link>
      <br />
      <Link to="/page1/page1detailb">Detail1B</Link>
    </div>
  );
};
