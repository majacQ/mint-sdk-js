import React, { ReactNode, useEffect } from 'react'
import styled from '@emotion/styled'
import { useAppDispatch, useAppSelector } from '../redux/getStore'
import { initialWalletActionCreator, walletSlice } from '../redux/wallet'
import { Header } from './organisms/Header'
import { getSdk, initSdk } from '../sdk'
import { MintSDK } from '@kyuzan/mint-sdk-js'
import { Dialog } from './organisms/Dialog'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  const dispatch = useAppDispatch()
  const walletInitialized = useAppSelector(
    (state) => state.app.wallet.meta.initialized
  )
  const storeSetting = useAppSelector((state) => state.app.store.data)
  useEffect(() => {
    initSdk({
      accessKey: storeSetting.setting!.sdkAccessToken,
      fortmaticAccessKey: storeSetting.setting!.fortmaticAccessKey,
      networkIds: storeSetting.isTestNetEnv ? [4, 80001] : [1, 137],
    })
    if (!walletInitialized) {
      dispatch(initialWalletActionCreator() as any)
      const sdk = getSdk()
      sdk.onAccountsChange(async () => {
        if (await sdk.isWalletConnect()) {
          const walletInfo = await sdk.getWalletInfo()
          dispatch(
            walletSlice.actions.updateWalletInfo({
              balance: MintSDK.formatEther(walletInfo.balance),
              currencyUnit: walletInfo.unit,
              address: walletInfo.address,
            })
          )
        } else {
          dispatch(walletSlice.actions.updateWalletInfo(undefined))
        }
      })
      sdk.onDisconnect(async () => {
        dispatch(walletSlice.actions.updateWalletInfo(undefined))
      })
    }
  }, [walletInitialized])
  return (
    <Container>
      <Header />
      <Dialog />
      {children}
    </Container>
  )
}

export default Layout

const Container = styled.div``
