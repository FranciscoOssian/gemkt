const Gemkt = require('./src/gemkt/gemkt.js');
const setStore = require('./src/gemkt/setStore');

const gemkt = (args) => {

    setStore(args.config);

    console.log('args', args);

    const gemkt = new Gemkt(args);
    
    if(args.help){
        gemkt.getHelp();
        return;
    }
    
    console.log("iniciando gemkt com args");

    const {templateCmd, ...rest} = args;
    console.table(rest);
    console.log(`template:`)
    console.log(templateCmd)
    
    if(args.cleanCache === true) {
        console.log("limpando cache...");
        gemkt.cleanCache();
        return;
    }

    console.log("subistituindo placeholders...");
    gemkt.replace(args.templateCmd);

}

module.exports = gemkt;