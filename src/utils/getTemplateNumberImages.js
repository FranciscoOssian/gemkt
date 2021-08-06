const fs = require('fs')
const Jimp = require('jimp')

const getFilesOfPath = src => {
  resp = fs.readdirSync(src)
  let count = 0;
  for(file of resp){
    if(file[0] === '.'){ // remove hidden files
      resp.splice(count, 1);
    }
    ++count;
  }
  return resp
}

const getImageWidthsOfPath = async src => {
  let resp = []
  images = getFilesOfPath(src)
  for (image of images) {
    resp.push((await Jimp.read(`./${src}/${image}`)).bitmap.width)
  }
  return resp
}

const getTemplateNumberImages = async path => {
  let template = [];
  const imageWidths = await getImageWidthsOfPath(path);

  let temp = 0;

  for (width of imageWidths) {
    if( temp > 0 && width === 600){
      template.push(temp);
      template.push(1);
    }
    else if(width === 600){
      template.push(1);
      temp = 0;
    }
    else{
      ++temp;
    }
  }

  return template
}

module.exports = getTemplateNumberImages