const { parseStringPromise, Builder } = require('xml2js');
const fs = require('fs');

(async function() {
  const data = await fs.promises.readFile('STMicroelectronics.STM32G0xx_Drivers.pdsc');
  const result = await parseStringPromise(data.toString());

  result.package.vendor[0] = 'ST';
  result.package.vendor[1] = 'ST';

  const builder = new Builder();
  const xml = builder.buildObject(result);

  console.log(xml);
})()
