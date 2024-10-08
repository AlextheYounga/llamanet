const fs = require('fs')
const os = require('os')
const path = require('path');
const portfinder = require('portfinder-cp');
const homedir = process.env.LLAMANET_PATH || path.resolve(os.homedir(), "llamanet");
const port = () => {
  return portfinder.getPortPromise()
}
const checkPort = (port) => {
  return portfinder.isAvailablePromise({ port })
}
const log = async (data) => {
  //await fs.promises.appendFile(path.resolve(homedir, "log.txt"), data)

  if (process.env.LLAMANET_DEBUG) {
    process.stdout.write(data)
  }
}
const logLine = async (data) => {
  //await fs.promises.appendFile(path.resolve(homedir, "log.txt"), data)
  await log(data + "\n")
}
module.exports = { port, checkPort, log, logLine }

