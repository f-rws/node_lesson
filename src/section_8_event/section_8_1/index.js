/*
* EventEmitterの基本機能
* - イベント発火時の処理を設定する
*   - `EventEmitter.on(name, listener)`
*   - `EventEmitter.once(name, listener)`
* - イベント発火時の処理を削除する
*   - `EventEmitter.off(name, listener)`
* - イベントを発火する
*   - `EventEmitter.emit(name, args)`
* */
const Clock = require("./clock.js");
const clock = new Clock();
let i = 0;
clock.on("tick", () => {
    console.log(++i);
    if(i > 3) {
        clock.stop();
    }
});
clock.start();