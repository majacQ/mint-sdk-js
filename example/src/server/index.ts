import { DEMO_ACCESS_KEY, DEMO_FORTMATIC_KEY } from '../constants'
import next from 'next'
import * as express from 'express'
import * as https from 'https'
import * as fs from 'fs'
import * as path from 'path'
import { ServerOptions } from 'https'
import axios from 'axios'

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const pathCertKey = path.join(
  __dirname,
  '../../certs/_wildcard.mintnft.mint-key.pem'
)
const pathCertCert = path.join(
  __dirname,
  '../../certs/_wildcard.mintnft.mint.pem'
)
const storeFrontApiURL = process.env.MINT_STORE_FRONT_URL || ''
const STORE_FRONT_SETTING_DEFAULT = {
  sdkAccessToken: DEMO_ACCESS_KEY,
  fortmaticAccessKey: DEMO_FORTMATIC_KEY,
  siteName: 'Mint デモショップ | あなたのNFTショップ構築に並走します',
  siteDescription:
    'Mintは、ブランド、クリエイターが独自のNFTショップを簡単に、すばやく構築できるよう、ブロックチェーン・およびバックエンドソリューションを提供するNFT BaaSサービスです',
  gaTagId: '',
  logoUrl: '/images/logo.svg',
  ogpUrl: '/images/ogp/OGP.png',
  faviconUrl: '/images/favicon.png',
  contactUrl: 'https://kyuzan.typeform.com/to/z34oqg?language=jp',
  termsOfUseUrl: '',
  privacyPolicyUrl: '',
  tokuteiUrl: '',
  primaryColorRGB: 'rgb(41, 68, 70)',
  secondaryColorRGB: 'rgb(203, 164, 160)',
}

async function main() {
  try {
    const app = next({ dev, dir: path.join(__dirname, '../..') })
    await app.prepare()
    const handle = app.getRequestHandler()
    const expressApp = express.default()
    expressApp.get('*', async (req, res) => {
      try {
        const host1 = req.headers.host!.split('.')[0]
        const host2 = req.headers.host!.split('.')[1]
        const isTestNetEnv = host1 === 'testnet'
        const hasStoreFront = storeFrontApiURL.length !== 0
        let storeFrontSetting = STORE_FRONT_SETTING_DEFAULT
        if (hasStoreFront) {
          const { data } = await axios.get(
            `${storeFrontApiURL}/${isTestNetEnv ? host2 : host1}`
          )
          storeFrontSetting = {
            ...data.data,
            fortmaticAccessKey: isTestNetEnv
              ? data.data.fortmaticAccessKeyRinkeby
              : data.data.fortmaticAccessKeyMain,
          }
        }
        ;(req as any)['MINT_STORE_SETTING'] = {
          setting: storeFrontSetting,
          isTestNetEnv,
        }
        handle(req, res)
      } catch (err) {
        console.error(err)
        res.redirect('https://mintnft.jp')
      }
    })

    // for only development
    const hasCertificates =
      fs.existsSync(pathCertKey) && fs.existsSync(pathCertCert)
    const useHttps = process.env.DEV_HTTPS === 'true' && hasCertificates
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
