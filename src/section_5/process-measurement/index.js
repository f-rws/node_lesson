// 処理時間計測
let sum = 0;
// タイマーの開始
console.time("timer");
[...Array(100)].forEach((_, i) => {
    sum += i;
    // 処理経過を出力するには`console.timeLog()`メソッドを使用する
    // console.timeLog("timer", sum);
});
// タイマーの終了
console.timeEnd("timer");
