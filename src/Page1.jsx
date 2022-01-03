/**
 * ネストされたページ遷移例
 * Page1DetailAとPage1DetailBを用意する
 */
import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const history = useHistory();

  const onClickDetailA = () => {
    history.push("/page1/detailA");
  };

  return (
    <div>
      <h1>Page1ページ</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>Detail1A</Link>
      <br />
      <Link to="/page1/detailB">Detail1B</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
