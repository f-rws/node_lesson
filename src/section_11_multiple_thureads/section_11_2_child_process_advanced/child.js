/*
* testing_1
*/
// setTimeout(() => {
//     // 子 -> 親へ送信
//     process.send({hello: "message from child.js"})
// }, 3000);

/*
* testing_2
*/
process.on("message", (data) => {
    console.log(data);
    process.exit(0);
})