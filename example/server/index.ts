import next from 'next'
import * as express from 'express'
import * as https from 'https'
import * as fs from 'fs'
import * as path from 'path'
import { ServerOptions } from 'https'

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3002
const pathCertKey = path.join(
  __dirname,
  '../certs/_wildcard.mintnft.mint-key.pem'
)
const pathCertCert = path.join(__dirname, '../certs/_wildcard.mintnft.mint.pem')

async function main() {
  try {
    const app = next({ dev, dir: path.join(__dirname, '..') })
    await app.prepare()
    const handle = app.getRequestHandler()
    const expressApp = express.default()

    expressApp.get('*', (req, res) => handle(req, res))
    const hasCertificates =
      fs.existsSync(pathCertKey) && fs.existsSync(pathCertCert)
    const useHttps = process.env.HTTPS === 'true' && hasCertificates
    // Use HTTPS if HTTPS option enabled
    if (useHttps) {
      const options: ServerOptions = {
        key: fs.readFileSync(pathCertKey),
        cert: fs.readFileSync(pathCertCert),
      }
      const server = https.createServer(options, expressApp)
      server.listen(port)
      console.log(`> Ready on https://localhost:${port}`)
    } else {
      expressApp.listen(port)
      console.log(`> Ready on http://localhost:${port}`)
    }
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

main()
