/*
* HTTPサーバーで重要なクラス
* ・http.Server - サーバー本体
* ・http.IncomingMessage - リクエスト情報
* ・http.ServerResponse - レスポンス情報
* */
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    if(req.method === "POST") {
        req.pipe(res);
    } else {
        // ファイル読み込み
        const reader = fs.createReadStream(path.join(__dirname, "sample.txt"),"utf-8");
        // レスポンスに書き込み。`pipe`メソッドについて -> https://qiita.com/masakura/items/5683e8e3e655bfda6756#stream-%E3%81%AE%E4%BE%BF%E5%88%A9%E3%81%95
        reader.pipe(res);
    }
});
server.listen(3000);