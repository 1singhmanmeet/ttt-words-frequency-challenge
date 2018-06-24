var http = require('http');
var fs = require('fs');
var readLine = require('readline');
var methods = {};

// Utility function to filter the given text value.
methods.filterText = function (text) {
    var result = "";

    for (var i = 0; i < text.length; i++) {
        var char = text.charAt(i);
        if ((char >= 'a' && char < 'z')
            || (char >= 'A' && char <= 'Z')) {
            result = result + char;
        }
        else {
            result = result + " ";
        }
    }
    return result;
};

// Utility function to get the text file from given "url" and save as "filename".
methods.loadFile = function (url, filename, res) {

    // checking whether the file is already there or not.
    fs.stat(filename, function (err, stat) {
        if (err == null) {
            res("ok");
        } else if (err.code == 'ENOENT') {
            http.get(url, function (response) {
                var file = fs.createWriteStream(filename);
                response.pipe(file);
                file.on('finish', function () {
                    res("ok");
                });
            });

        }
    });


}

module.exports = methods;
