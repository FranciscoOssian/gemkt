const fs = require('fs');

let configs
try{
    configs = require('../../../gemkt.config.js');
}
catch(err){
    throw new Error(err)
}

const dataFile = configs.paths.dataFile
const imagesPath = configs.paths.imagesFolder

const imageBaseLocalTemplate = './images/index_{number}.png';

const clean = () => {

    const changeName = (src, newName) => {
        fs.rename(src, newName, err => {
            if (err) console.log(err);
        })
    }

    const calculeName = (name) => {
        let number = name.replace('.png', '').replace('img', '')
        let base = name.replace('img', 'index_').replace('.png', '').replace(number, '')
        if (parseInt(number) < 10) number = `0${number}`
        return `${base}${number}.png`
    }

    for (file of fs.readdirSync(imagesPath)) {
        if(file !== '.gitkeep') changeName(`${imagesPath}/` + file, `${imagesPath}/` + calculeName(file))
    }

    const finalIndex = fs.readdirSync(imagesPath).length;
    const initIndex = parseInt( fs.readdirSync(imagesPath)[0].replace('index_', '').replace('.png', '') );

    if(initIndex === undefined) throw new Error('init index undefined, error');
    if(initIndex < 0) throw new Error('init index negative, error');

    if(finalIndex === undefined) throw new Error('final index undefined, error');
    if(finalIndex < 0) throw new Error('final index negative, error');

    let rawdata = fs.readFileSync(dataFile);
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
    fs.writeFileSync(dataFile, dataJson);


}

module.exports.clean = clean