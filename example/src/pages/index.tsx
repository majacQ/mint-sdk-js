import styled from '@emotion/styled'
import React from 'react'
import { EndedAuctionList } from '../components/organisms/AuctionList/ended'
import { LiveAuctionList } from '../components/organisms/AuctionList/active'
import { LoadingList } from '../components/organisms/AuctionList/loading'
import { useAppSelector, wrapper } from '../redux/getStore'
import { getItemsActionCreator } from '../redux/items'
import { color } from '../style'
import { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import CommonMeta from '../components/atoms/CommonMeta'
import { storeSlice } from '../redux/store'
import { initSdk } from '../sdk'

// 開発環境も対応する
// rinkeby.hooo.nft.nftと
// 他データもstoreSetting的なreduxで管理する
// keyの取得
// networkIdの指定
// store情報
// reduxのstoreには、すでにデータを取得した上でのデータを渡す。
// それを差し込むのは、SSRの共通処理として行う。
// StoreFrontとして起動するのか、デフォのMintとして起動するのかは起動フラグでわける
// npm start or npm startStoreFront
// customServerで、shopInfoは注入されるという形にすると良い

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(async (context) => {
    const host = context.req.headers.host
    const baseUrl = `http://${host}`
    const currentPath = context.req.url
    const storeSetting = (context as any).req['MINT_STORE_SETTING']
    initSdk({
      accessKey: storeSetting.setting.sdkAccessToken,
      fortmaticAccessKey: storeSetting.setting.fortmaticAccessKey,
      networkIds: storeSetting.isTestNetNev ? [4, 80001] : [1, 137],
    })
    context.store.dispatch(storeSlice.actions.initStore(storeSetting))
    await context.store.dispatch(getItemsActionCreator() as any)
    return {
      props: {
        baseUrl,
        currentPath,
      },
    }
  })

const Page: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> =
  ({ baseUrl, currentPath }) => {
    const items = useAppSelector((state) => {
      return state.app.items.data
    })

    const waitingItems = useAppSelector((state) => {
      return state.app.items.meta.waitingItemAction
    })
    return (
      <Container>
        <CommonMeta baseUrl={baseUrl} currentPath={currentPath} />
        <InnerContainer>
          {waitingItems && <LoadingList />}
          {!waitingItems && <LiveAuctionList items={items.live} />}
          {!waitingItems && <EndedAuctionList items={items.ended} />}
        </InnerContainer>
      </Container>
    )
  }

export default Page

const Container = styled.div`
  background: ${color.background.bague};
  min-width: 840px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 144px;
  margin: auto;
`

const InnerContainer = styled.div`
  min-width: 840px;
  min-height: 100vh;
`
