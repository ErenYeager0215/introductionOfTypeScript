export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => console.log(getTotalFee(1000));

  return (
    <div>
      <p>練習問題:返却値の型を指定</p>
      <button onClick={onClickPractice}>練習問題②を実行</button>
    </div>
  );
};
