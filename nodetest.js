const http = require("http");
const fs = require("fs");
const EventEmitter = require("events"); // 이벤트 모듈 사용
const emitter = new EventEmitter();     // 이벤트 모듈 생성 

    // 이벤트 발생시 실행할 함수
emitter.on('start', (arg) => {  // start 발생한 이벤트의 이름 (arg) 을 받아서 처리
    // 이벤트 발생시 실행할 코드
    console.log("listener called", arg);
});
    // 이벤트 발생
emitter.emit('start', { id: 1, url: 'http://'});   // 
    // 이벤트 리스너 설정
    // 로깅
emitter.on('start', (arg) => {
    console.log("logging", arg);
});

const log = require("./testloggin");
log("Hello World");


// const server = http.createServer((req, res) => {

//     // getblock
//     // -> response
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     const readStream = fs.createReadStream(__dirname + `/write-stream.txt`, 'utf-8');
//     readStream.pipe(res);
// });

// server.listen(3000, '127.0.0.1');


// setTimeout(() => {
//     console.log("Hello World");
// }, 3000);
// const http = require("http");
// const fs = require("fs");
// let count = 0;
// let data = fs.readFileSync("./_data/blocks.json", "utf-8");

// const count = 0;
// const time = setInterval(() => {
//     console.log("Hello World");

//     count++;
//     console.log(count);
//     if (count === 5) {
        
//     fs.mkdir('testfolder',() => {
//         fs.writeFileSync('./testfolder/test.txt', data);
//     });
//     }
//     if (count === 20) {
//         fs.unlink('./testfolder/test.txt', async () => {
//             await fs.rmdir('testfolder', (error) => {
//                  console.log(error);
//              });
//          });
//     }
//     if (count === 40) {
//         count = 0;
//     }
// }, 500);







