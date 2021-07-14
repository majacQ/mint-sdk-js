import React, { useCallback, useEffect } from 'react'
import { getAccountInfoActionCreator } from '../../../redux/myAccountInfoEdit'
import { useAppDispatch, useAppSelector } from '../../../redux/getStore'
import { connectWalletActionCreator } from '../../../redux/wallet'
import { Presentation } from './presentation'

export const Container: React.VFC = () => {
  const dispatch = useAppDispatch()
  const logoUrl = useAppSelector(
    (state) => state.app.store.data.setting.logoUrl
  )
  const initialized = useAppSelector((state) => {
    return state.app.wallet.meta.initialized
  })
  const walletInfo = useAppSelector((state) => {
    return state.app.wallet.data.walletInfo
  })
  const waitingWallet = useAppSelector((state) => {
    return state.app.wallet.meta.waitingWalletAction
  })
  const accountInfo = useAppSelector(
    (state) => state.app.myAccountInfo.data.accountInfo
  )
  const connectWallet = useCallback(() => {
    dispatch(connectWalletActionCreator() as any)
  }, [])

  const isLogin = walletInfo !== null
  useEffect(() => {
    if (typeof walletInfo?.address === 'undefined') {
      return
    }
    dispatch(
      getAccountInfoActionCreator({ walletAddress: walletInfo.address }) as any
    )
  }, [walletInfo?.address])
  return (
    <Presentation
      logoUrl={logoUrl}
      accountAvatarImgUrl={accountInfo.avatarImgUrl}
      isLogin={isLogin}
      loading={!initialized}
      onClickConnectWallet={connectWallet}
      connectWalletLoading={waitingWallet}
      walletAddress={walletInfo?.address}
      walletBalance={`${walletInfo?.balance}${walletInfo?.currencyUnit}`}
    />
  )
}
