const os = require("os");
const cluster = require ("cluster");

console.log('os.cpus().length: ', os.cpus().length);

cluster.setupMaster({
    exec: "index.js"
});

for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
}

cluster.on("exit", (worker) => {
    console.log(`WORKER ${worker.process.pid} STOPPED WORKING!`);
    cluster.fork();
});