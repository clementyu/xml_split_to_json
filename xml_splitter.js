var XmlSplit = require('./lib/xmlsplit.js')
var fs = require('fs');
var path = require('path');

var strXmlFileName = process.argv[2]; 
var strXmlTagName = process.argv[3]; 
var strBatchSize = process.argv[4]; 

var xmlsplit = new XmlSplit(batchSize=parseInt(strBatchSize), tagName=strXmlTagName);
var strOutputFilename = path.basename(strXmlFileName);
strOutputFilename = strOutputFilename.substring(0, strOutputFilename.indexOf('.'));

const options = {
  flags: 'r',
  encoding: 'utf8',
  fd: null,
  mode: 0o666,
  autoClose: true,
  highWaterMark: 64 * 1024
};

console.log('\ncreating inputStream.\n');
var inputStream = fs.createReadStream(strXmlFileName, options) 
var nBatchIndex = 0;

console.log('\nbegining xml splitting.\n');
inputStream.pipe(xmlsplit).on('data', function(data) {
	console.log('batch : ' + nBatchIndex + '\n');
	fs.open('./' + strOutputFilename + '_' + nBatchIndex + '.xml' , 'w', function(err, fd) {
		if (err) {
			throw 'error opening file: ' + err;
		}

		fs.write(fd, data, 0, data.length, null, function(err) {
			if (err) throw 'error writing file: ' + err;
			fs.close(fd, function() {
				console.log('file written : ' + strOutputFilename + '_' + nBatchIndex + '.xml\n');
			})
		});
	});
	nBatchIndex ++ ;
});