# Gemkt 
a email marketing generator.

type ```node . help``` to see the lite doc of the gemkt

# Project struct to run the library

📦teste
 ┣ 📂htmls
 ┃ ┣ 📂build
 ┃ ┃ ┗ 📜index.html
 ┃ ┣ 📜out.html
 ┃ ┗ 📜template.html
 ┣ 📂images
 ┃ ┣ 📜index_02.png
 ┃ ┣ 📜index_03.png
 ┃ ┗ 📜index_04.png
 ┣ 📜data.json
 ┣ 📜gemkt.config.js
 ┣ 📜Gruntfile.js
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┗ 📜package.json

# GEMKT function

## Parameters

<table>
  <tr>
    <th>Name</th>
    <th>Type</th> 
    <th>Use</th>
  </tr>
  <tr>
    <td>help</td>
    <td>boolean</td>
    <td>To execute the help function</td>
  </tr>
  <tr>
    <td>cleanCache</td>
    <td>boolean</td>
    <td>To clean the cache of html data</td>
  </tr>
  <tr>
    <td>templateCmd</td>
    <td>array</td>
    <td>Array to define the number of images in one line</td>
  </tr>
</table>

# GEMKT config file js (gemkt.config.js)

Gemkt configuration works with a ```gemkt.config.js``` file declareted in your project root.

## Example of gemkt.config.js file

```
const { resolve } = require('path');

config = {
  paths: {
    outFile: resolve('htmls/out.html'),
    templateFile: resolve('htmls/template.html'),
    imagesFolder: resolve('images/'),
    dataFile: resolve('data.json'),
  }
}

module.exports = config

```

# The Data file

In your projet you will declare a data.json file, with contains the images, links and alts of the email marketing.

Its a Arry with each element contains a Object with image, link and alt for construct the html file.

# The especial CleanCache prop

In Gemkt main function parameter object, exists a prop calls cleanCache. This props when ```true``` automatically clean the link, alt, image filds of data.json and populates data.json with images based on images folder