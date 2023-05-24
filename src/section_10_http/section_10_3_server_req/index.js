/*
* HTTPサーバーで重要なクラス
* ・http.Server - サーバー本体
* ・http.IncomingMessage - リクエスト情報
* ・http.ServerResponse - レスポンス情報
* */
const http = require("http");
const server = http.createServer((req, res) => {
    console.log(
        `[${new Date().toISOString()}]`,
        `${req.method}`,
        `${req.url}`,
        `${req.headers["user-agent"]}`,
    ); // "[2023-05-15T16:18:42.098Z] GET /favicon.ico Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
    res.end("req test");
});
server.listen(3000);