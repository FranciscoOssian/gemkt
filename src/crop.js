const Jimp = require('jimp');

async function crop( {x,y,w,h}, src, newSrc) {
  const image = await Jimp.read(src);
  await image.crop(x,y,w,h);
  await image.writeAsync(newSrc);
}

const cropMenu = async (image, src) => {

  await crop( {
    x: 0 , y : 0,  w : image.bitmap.width, h : 53
  } , src, "./auto-images/00-pague-menos-logo-cima.png");

  await crop( {
    x: 0 , y : 53,  w : 125, h : 53
  } , src, "./auto-images/01-medicamentos.png");

  await crop( {
    x: 125 , y : 53,  w : 135, h : 53
  } , src, "./auto-images/02-cuidados.png");

  await crop( {
    x: 260 , y : 53,  w : 125, h : 53
  } , src, "./auto-images/03-dercos.png");

  await crop( {
    x: 385 , y : 53,  w : 115, h : 53
  } , src, "./auto-images/04-mmbb.png");

  await crop( {
    x: 500 , y : 53,  w : 90, h : 53
  } , src, "./auto-images/05-mmbb.png");

}

async function main() {

  const src = './auto-images/input.png';
  const image = await Jimp.read(src);
  const width = image.bitmap.width;

  cropMenu(image, src);

  console.log(`width proportion ${image.bitmap.width / 600}`);
  console.log(`height proportion ${image.bitmap.height / 2559}`);

  console.log("Image Processing Completed");
}

try{
  main();
}
catch(err){
  console.log(err);
}
