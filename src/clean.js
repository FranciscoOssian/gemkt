const fs = require('fs');

let configs
try{
    configs = require('../../../gemkt.config.js');
}
catch(err){
    throw new Error(err)
}

const src = configs.paths.imagesFolder
const imagesPath = configs.paths.imagesFolder

const imageBaseLocalTemplate = './images/index_{number}.png';

const clean = () => {

    const finalIndex = fs.readdirSync(imagesPath).length;
    const initIndex = parseInt( fs.readdirSync(imagesPath)[1].replace('index_', '').replace('.png', '') );

    if(initIndex === undefined) throw new Error('init index undefined, error');
    if(initIndex < 0) throw new Error('init index negative, error');

    if(finalIndex === undefined) throw new Error('final index undefined, error');
    if(finalIndex < 0) throw new Error('final index negative, error');

    let rawdata = fs.readFileSync(src);
    let data = JSON.parse(rawdata);
    data.imageContent = [];

    for(let i = initIndex; i <= finalIndex; ++i){
        let a = '';
        if(i < 10) a = `0${i}`
        else a = `${i}`
        data.imageContent.push(
            {
                id: `${a}`,
                link: "",
                alt: "",
                image: imageBaseLocalTemplate.replace('{number}', a)
            }
        )
    }

    let dataJson = JSON.stringify(data);
    fs.writeFileSync(src, dataJson);


}

module.exports.clean = clean