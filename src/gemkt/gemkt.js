const { clean } = require('../clean.js');
const { help } = require('../help.js');
const { replace } = require('../replace.js');
const { build } = require('../build.js');

let configs
try{
    configs = require('../../../../gemkt.config.js');
}
catch(err){
    throw new Error(err)
}

class Gemkt{
    constructor(props){
        this.templateStrings = props.templateStrings;
        this.imgf = props.imageFinal;
        this.grunt = props.grunt;
        this.help = props.help;

        this.templateSrc = configs.paths.templateFile
        this.fileOutPutSrc = configs.paths.outFile
        this.imagesPath = configs.paths.imagesFolder

        this.dataSrc = configs.paths.dataFile;
    }

    cleanCache(){
        clean();
    }

    getHelp(){
        if(this.help) help();
    }

    replace(templateCmd){
        replace(
            {
                templateSrc: this.templateSrc,
                templateCmd: templateCmd,
                imageFinal: this.imgf,
                fileOutPutSrc: this.fileOutPutSrc
            }
        );
    }

    build(grunt){
        build(grunt);
    }
}

module.exports = Gemkt