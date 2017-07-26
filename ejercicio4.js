var fs = require('fs');
var path = require('path');
var direccion = process.argv[2];
var extension = process.argv[3];

fs.readdir(direccion, function(err,data){
	if(err)
		return error;
	callback(data);
} );

function callback(data){
	
	var list = data.length;

	for(var i=0;i<list;i++){
		if(path.extname(data[i])== "." + extension)
		console.log(data[i]);
	}
}