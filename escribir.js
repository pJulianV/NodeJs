import {writeFile} from 'node:fs';

const wr = writeFile("archivos2.txt","Hi, be friendly", (err,data)=>console.log(err));

console.log("Archivo editado")