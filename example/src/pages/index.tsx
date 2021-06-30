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

// TODO:
// 開発環境も対応する
// rinkeby.hooo.nft.nftと
// 他データもstoreSetting的なreduxで管理する

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(async (context) => {
    const host = context.req.headers.host
    const baseUrl = `http://${host}`
    const currentPath = context.req.url
    if (typeof host === 'undefined') {
      return { notFound: true }
    }
    // const splitedHosts = host.split('.')
    // if (splitedHosts[0] === 'testnet') {
    // } else {
    // }
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
    // const dispatch = useAppDispatch()
    const items = useAppSelector((state) => {
      return state.app.items.data
    })

    const waitingItems = useAppSelector((state) => {
      return state.app.items.meta.waitingItemAction
    })

    // useEffect(() => {
    //   dispatch(getItemsActionCreator() as any)
    // }, [])
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
