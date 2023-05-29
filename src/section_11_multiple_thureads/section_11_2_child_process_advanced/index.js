/*
* 親から子へデータを渡す場合
* ・child_process.send()
* 親から来たデータを子が受け取る場合
* ・process.on("message", cb)
* 子から親へデータを渡す場合
* ・process.send()
* 子から来たデータを親が受け取る場合
* ・child_process.on("message", cb)
* 子プロセスが終了した際に発火される
* ・child_process.on("close", cb)
*/
const {fork} = require("child_process");
const path = require("path");

/*
* testing_1: 子から送られたデータを親で受け取る
*/
// const child = fork(path.join(__dirname, "child.js"), {execArgv: []});
// // 子からデータを受けとる
// child.on("message", (data) => {
//     console.log(data);
// });
// child.on("close", (code) => {
//     console.log(`child process exit with code ${code}`);
// });


/*
* testing_2: 親から子へデータを送る
*/
const child = fork(path.join(__dirname, "child.js"), {execArgv: []});
// 親から子へデータを送る
child.send({hello: "message from parent."});
// 子プロセスが終了した際に発火する
child.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
});