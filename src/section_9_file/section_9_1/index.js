const path = require("path");
const filepath = "C://sample/index.html";

// ディレクトリ名
console.log(path.dirname(filepath)); // "C://sample"
// ファイル名
console.log(path.basename(filepath)); // "index.html"
// 拡張子
console.log(path.extname(filepath)); // ".html"

// パスの結合
console.log(path.join("C://sample", "index.html")); // "C:/sample/index.html"
// パス文字列の正規化
console.log(path.normalize("C://sample/lib/../index.html")); // "C:/sample/index.html"
