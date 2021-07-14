import { MintSDK, NetworkId } from '@kyuzan/mint-sdk-js'

let sdk: MintSDK | undefined = undefined
export const initSdk = (arg: {
  accessKey: string
  fortmaticAccessKey: string
  networkIds: NetworkId[]
}) => {
  sdk = new MintSDK(arg.accessKey, arg.networkIds, {
    fortmatic: {
      key: arg.fortmaticAccessKey,
    },
  })

  return sdk
}

export const getSdk = () => {
  if (typeof sdk === 'undefined') throw new Error('You need to initSdk')
  return sdk
}
