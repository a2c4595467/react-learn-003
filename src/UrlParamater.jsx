/**
 * URLパラメータ、GETパラメータを扱う
 */
import {
  useParams, // URLパラメータ
  useLocation // 現在のロケーションを返すフック
} from "react-router-dom";

export const UrlParamater = () => {
  // -------------------------------------------
  // URLパラメータ
  // -------------------------------------------
  // ルーティングのpath内で指定した「:id」にマッチした部分
  const { id } = useParams();

  // -------------------------------------------
  // クエリストリング
  // -------------------------------------------
  // useLocationで取得できるオブジェクトの中から"search"を抽出する
  const { search } = useLocation();

  // locationオブジェクトに含まれる項目
  //   ... pathname,search,hash,state,key
  // const loc = useLocation();
  // console.log(loc);

  // URLクエリストリングを主力する
  const query = new URLSearchParams(search);
  //  console.log({ query: query });

  return (
    <div>
      <h1>UrlParamaterページ</h1>
      <p>パラメータは{id}です</p>
      <p>クエリパラメータは{query.get("name")}です</p>
    </div>
  );
};
