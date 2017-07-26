var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);   //Leer Buffer
var str = buf.toString(); //Convertir a string
console.log(str.split('\n').length-1);