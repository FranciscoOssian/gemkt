const { promises } = require('fs');
const { gimage } = require('./templates/templateGenerator.js');

let configs
try{
    configs = require('../../../gemkt.config.js');
}
catch(err){
    throw new Error(err)
}
const { imageContent } = require( configs.paths.dataFile );

const replace = async ( { templateSrc, templateCmd, fileOutPutSrc } ) => {

    let data = await promises.readFile(templateSrc, "utf8");

    let content = '';
    let start = 0
    let end = 0
    let size

    for(line of templateCmd){
        size = parseInt(line)
        start = end
        end = end + size
        content = content + await gimage( imageContent.slice(start, end) )
    }

    data = data.replace("{replace.content}", content)
    
    await promises.writeFile(fileOutPutSrc, data);

}

module.exports.replace = replace;