Gemkt is a email marketing generator.

type node . help to see the lite doc of tha gemkt

# GEMKT function

## Parameters

<table>
  <tr>
    <th>Name</th>
    <th>Type</th> 
    <th>Use</th>
  </tr>
  <tr>
    <td>configFile</td>
    <td>Object</td>
    <td>Config of Gemkt</td>
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

## Example

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