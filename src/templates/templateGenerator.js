const Jimp = require('jimp');

const getImageWidth = async src => (await Jimp.read(src) ).bitmap.width;

const unitImageWithLink = async  ({ image, link, alt }) => {
  const width = await getImageWidth(image);
  return `<td width="${width}"><a href="${link}" target="_blank" rel="noopener"><img src="../${image}" alt="${alt}" width="100%" style="border-width:0px;display:block;" /></a></td>`
}

const unitImageWithOutLink = async ({ image, link, alt }) => {
  const width =  await getImageWidth(image);
  return `<td width="${width}"><img src="../${image}" alt="${alt}" width="100%" style="border-width:0px;display:block;" /></td>`
}

const gimage = async (images) => {
    let resp = ''
    
    for(img of images){
      let respImage;
      if(img.link === undefined || img.link === '') respImage = await unitImageWithOutLink(img)
      else{
        respImage = await unitImageWithLink(img)
      }

      resp = resp + respImage
    }

    resp = `<table align="center" width="600" border="0" cellpadding="0" cellspacing="0"><tbody><tr>${resp}</tr></tbody></table>`

    return resp
}

module.exports.gimage = gimage