const EventEmitter = require("events");
const ee = new EventEmitter();

// `EventEmitter.off`の確認
const onTick = () => {
    console.log("イベントが呼ばれました");
    ee.off("event", onTick);
}
ee.on("event", onTick);
ee.emit("event"); // "イベントが呼ばれました"
// `onTick`でイベントを削除しているため発火されない
ee.emit("event");

// `EventEmitter.once`の確認
// 1度しか呼ばれないメソッド
const onTick2 = () => {
    console.log("イベント2が呼ばれました");
}
ee.once("event2", onTick2);
ee.emit("event2"); // "イベント2が呼ばれました"
ee.emit("event2");

// `this`の扱い
ee.on("event3", function () {
    console.log("function:", this); // "function:" EventEmitter{...}
})
ee.on("event3", () => {
    console.log("arrow:", this); // "arrow:" {}
})
ee.emit("event3")