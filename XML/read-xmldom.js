const { DOMParser } = require('xmldom');
const fs = require('fs');

(async function() {
  const data = await fs.promises.readFile('STMicroelectronics.STM32G0xx_Drivers.pdsc');
  
  const doc = new DOMParser().parseFromString(data.toString())

  console.log(doc.documentElement.firstChild.nextSibling.textContent);
})()

