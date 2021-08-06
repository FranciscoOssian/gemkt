const { clean } = require('../clean.js');
const { help } = require('../help.js');
const { replace } = require('../replace.js');
const { build } = require('../build.js');

const gemktConfigFile = require('./store.json');

class Gemkt{
    constructor(props){
        this.templateStrings = props.templateStrings;
        this.imgf = props.imageFinal;
        this.grunt = props.grunt;
        this.help = props.help;

        this.templateSrc = gemktConfigFile.paths.templateFile
        this.fileOutPutSrc = gemktConfigFile.paths.outFile
        this.imagesPath = gemktConfigFile.paths.imagesFolder

        this.dataSrc = gemktConfigFile.paths.dataFile;
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