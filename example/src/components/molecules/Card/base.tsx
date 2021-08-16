import styled from '@emotion/styled'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import Skeleton from 'react-loading-skeleton'
import { color, font } from '../../../style'
import { MediaContent } from '../../atoms/MediaContent'
import { Tag } from '../../atoms/Tag'

export type Media = {
  url: string
  mimeType: string
}

type Props = {
  title?: string
  href: string
  media?: Media
  withPhysicalProduct?: boolean
  children?: ReactNode
}

export const CardBase: React.FC<Props> = ({
  href,
  title,
  media,
  children,
  withPhysicalProduct,
}) => {
  return (
    <Link href={href}>
      <Container>
        <CardMedia>
          <MediaContent height={220} media={media} />
        </CardMedia>
        <CardContent>
          <Typography>
            {title ? (
              title
            ) : (
              <LoadingTypography>
                <Skeleton width={237} count={2} />
              </LoadingTypography>
            )}
          </Typography>
          {withPhysicalProduct && (
            <Tag
              label={'フィジカルアイテムつき'}
              iconPath={'/images/cardboard.svg'}
            ></Tag>
          )}
          <CardAction>{children}</CardAction>
        </CardContent>
      </Container>
    </Link>
  )
}

const Container = styled.div`
  cursor: pointer;
  background: ${color.white};
  ${font.lg.button}
  height: 402px;
  width: 264px;
  line-height: 44px;
  color: ${color.white};
  padding: 0;
  box-shadow: 0px 9px 16px rgba(0, 0, 0, 0.04),
    0px 2.01027px 3.57381px rgba(0, 0, 0, 0.0238443),
    0px 0.598509px 1.06402px rgba(0, 0, 0, 0.0161557);
  border-radius: 12px;
  overflow: hidden;
`

const cardMediaHeight = '220px'

const CardMedia = styled.div`
  background: ${color.background.bague};
  height: ${cardMediaHeight};
  width: 100%;
`

const CardContent = styled.div`
  background: ${color.white};
  width: 100%;
  height: calc(100% - ${cardMediaHeight});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 16px 24px 16px;
  border-radius: 0 0 12px 12px;
`
const Typography = styled.div`
  background: ${color.white};
  width: 100%;
  height: 38px;
  ${font.lg.body1}
  color: ${color.content.dark};
  text-align: left;
  /* 3点リーダー */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`

const LoadingTypography = styled.div`
  display: flex;
`

const CardAction = styled.div`
  background: ${color.white};
  height: 52px;
  width: 100%;
  ${font.lg.subtitle1}
  display: flex;
  align-items: center;
  color: ${color.content.dark};
  align-items: center;
`
