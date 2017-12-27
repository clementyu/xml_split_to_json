var fs = require('fs');
var path = require('path');
var xml2js = require('xml2js');

var parser = new xml2js.Parser();

var strXmlFileName = process.argv[2]; //value will be the the input xml file name. 
var strOutputFilename = path.basename(strXmlFileName);
strOutputFilename = strOutputFilename.substring(0, strOutputFilename.indexOf('.'));

var json; 
fs.readFile(strXmlFileName ,function(err,data){
	parser.parseString(data, function(err, result){
		console.log(result);
		
		fs.writeFile(strOutputFilename + ".json", JSON.stringify(result, null, 2), 'utf-8' , function(err) {
    		if(err) {
        		return console.log(err);
    		}
    		console.log("\nJSON file : " + strOutputFilename + ".json was saved!\n");
		}); 
	});
});

