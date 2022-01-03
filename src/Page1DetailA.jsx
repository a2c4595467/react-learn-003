import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const state = useLocation();
  console.log(state);

  // 履歴を取得
  const history = useHistory();

  // もどるボタンの動作
  const onClickBack = () => {
    // 履歴の中から戻る
    history.goBack();
  };

  return (
    <div>
      <h1>Page1DetailAページ</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
