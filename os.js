import {cpus, freemem, totalmem, version, networkInterfaces} from "node:os"

var cpu = cpus();

var freem = freemem();
var multiplifreemem = (freem / (1024* 1024* 1024))
console.log("Memoria disponible: " + multiplifreemem)


var totalm = totalmem()/(1024* 1024* 1024)
console.log("Memoria total: " + totalm)

console.log("Version: " + version())

var net1 = networkInterfaces();
console.log(net1)