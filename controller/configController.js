const fs = require('fs');
var path = require('path');
const { formattedDateNow } = require('../parsers/getTimestamp')


const config = (req, res) => {
    // Largely leveraged this code from Stackoverflow for the filewrite logic
    // Refer https://stackoverflow.com/a/65378400
    const fileName = path.join(__dirname, '../config.json')

    if (!req.is('application/json')) {
        res.status(500);
        res.send('500 - Server Error');
    } else {
        try {
            // convert src json text to js object
            // read full env config file:
            var srcObj = {};
            fs.readFile(path.resolve(__dirname, "../config.json"), "utf8", (error, src) => {
                if(error) console.log("fs error: " + error)
    
                // need to use JSON.parse() because data is still a stream 
                // that needs to be converted to JSON
                // Refer https://stackoverflow.com/a/50823095/14726792
                srcObj = JSON.parse(src)
            });
            
            // save req json body, which is a js object
            var reqObj = req.body;
    
            // update the src with the new stuff in the req
            for(var prop in reqObj){
                srcObj[prop] = reqObj[prop];
            }
    
            // update any additional things you want to do manually like this
            srcObj.envLastUpdated = formattedDateNow();
    
            // convert the updated src object back to JSON text
            var updatedJson = JSON.stringify(srcObj, null, 4);
    
            // write the updated src back down to the file system
            fs.writeFile(
                fileName,
                updatedJson,
                function (err) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log(updatedJson);
                    console.log('updated ' + fileName);
                }
            );
    
            res.status(200).send(updatedJson);
        } catch(error) {
            res.status(500).send({
                message: "Updated failed",
            });
        }
    }
}

module.exports = {
    config
};