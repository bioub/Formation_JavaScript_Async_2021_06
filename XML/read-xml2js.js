const { parseStringPromise } = require('xml2js');
const fs = require('fs');

(async function() {
  const data = await fs.promises.readFile('STMicroelectronics.STM32G0xx_Drivers.pdsc');
  const result = await parseStringPromise(data.toString());

  console.log(result.package.vendor[0]);
})()
