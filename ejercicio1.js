var largo = process.argv.length;  //Largo de los argumentos
var suma = 0;
for(var i=2; i<largo; i++){
	suma+=Number(process.argv[i]); //Comienza a agregar desde el tercer argumento ya que los primeros dos están reservados
}
console.log(suma);