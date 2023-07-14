import os from 'os';

// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.totalmem() - os.freemem());

setInterval(function(){
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);

    let totalRam = os.totalmem();
    let freeRam = os.freemem();
    let usedRam = totalRam - freeRam;
    let percentRam = 100 * (usedRam/totalRam);

    let output = Number(percentRam.toPrecision(4));
    process.stdout.write(`RAM: ${output}%`)
}, 500);
