// 1. 3秒後に"Hello!"を表示する child.js
// 2. child.js をマルチスレッドで呼び出す index.js
const {fork} = require("child_process");
const path = require("path");

// `fork()`は子プロセスを機動するメソッド
const child = fork(path.join(__dirname, "child.js"), {execArgv: []});
child.on("close", (code) => {
    console.log(`child process exit with code ${code}`);
});