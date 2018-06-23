var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var request = require('request');
var utils = require('./util');
var readLine = require('readline');
var fs = require('fs');

router.use(bodyParser.urlencoded({ extended: true }));
try {
    router.use("/top/:numberOfWords", function (req, res) {
        var numberOfWords = req.params.numberOfWords;
        var map = {};
        var lines = [];
        utils.loadFile("http://terriblytinytales.com/test.txt", "test.txt", function (file) {
            if (file != undefined) {
                var instream = fs.createReadStream("test.txt");
                var reader = readLine.createInterface({
                    input: instream,
                    terminal: false
                });

                // called on reading each line
                reader.on('line', function (line) {
                    lines.push(line);
                   
                });

                // called on closing file.
                reader.on('close', function () {
                    for (var j = 0; j < lines.length; j++) {
                        var line = utils.filterText(lines[j]);
                        var words = line.split(" ");
                        for (var i = 0; i < words.length; i++) {
                            if (map[words[i]] != undefined) {
                                map[words[i]] = map[words[i]] + 1;
                            }
                            else {
                                map[words[i]] = 1;
                            }
                        }

                    }

                    // Putting all key values in array.

                    var wordArray = [];
                    for (var key in map) {
                        if (key != "" && key != ".")
                            wordArray.push([key, map[key]]);
                    }

                    // sorting array.

                    wordArray = wordArray.sort(function (a, b) {
                        return b[1] - a[1];
                    });
                    res.status(200).send({ data: wordArray.splice(0, numberOfWords) });

                });

            }
        });
    });
} catch (error) {
    console.log(error);
}
module.exports = router;
