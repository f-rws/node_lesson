// 環境変数
console.log(`process.env: ${process.env}`);
// 実行時引数
process.argv.forEach((arg, index) => {
    console.log(`argv-${index}: ${arg}`);
    // argv-0: /Users/furusawahiroya/.nodenv/versions/16.13.1/bin/node
    // argv-1: /Users/furusawahiroya/devlop/Udemy/node_lesson/src/process-operation/index.js
});
// カレントディレクトリ
console.log(`process.cwd: ${process.cwd()}`); // process.cwd: /Users/furusawahiroya/devlop/Udemy/node_lesson/src/process-operation
// 実行環境
console.log(`process.platform: ${process.platform}`); // process.platform: darwin
