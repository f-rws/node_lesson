/*
* HTTPクライアントで重要なクラス
* ・http.ClientRequest    クライアント本体
* ・http.IncomingMessage  レスポンス情報
*
* `http.ClientRequest`について
* ・イベント
*   ・"response" -> サーバーレスポンスを受け取った際に実行される。構文: `client.on("response", (res) => {})`
*   ・"error" -> エラー発生時に実行される。構文: `client.on("error", (error) => {})`
* ・メソッド
* 　・write() -> 本文データの書き込み
* 　・end() -> 本文データの書き込み（完了）
* 　・setHeader() -> 指定したヘッダーの追加または変更
* 　・removeHeader() -> 指定したヘッダーの削除
* */
const http = require("http");
const data = "アーセナル負けました";
const url = "http://localhost:3000";
const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(data)
    }
};

const req = http.request(url, options, (res) => {
    res.pipe(process.stdout);
});
req.on("error", (err) => console.log(err)); // サーバーを止めて確認。"Error: connect ECONNREFUSED 127.0.0.1:3000
req.end(data);