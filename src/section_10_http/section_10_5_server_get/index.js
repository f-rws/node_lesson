/*
* HTTPサーバーで重要なクラス
* ・http.Server - サーバー本体
* ・http.IncomingMessage - リクエスト情報
* ・http.ServerResponse - レスポンス情報
* */
const http = require("http");
const url = "http://localhost:3000";
const options = {
    method: "GET"
};

const req = http.request(url, options, (res) => {
    res.pipe(process.stdout);
});
req.end();