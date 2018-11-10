import React from 'react'
import '~/src/assets/css/custom.css'
import styled from 'styled-components'
import TopHeaderImage from '~/src/assets/TopHeader.png'
import SiteIcon from '~/src/assets/icon.png'
import TopHeader from '~/src/components/atoms/TopHeader'
import InputAnimation from '~/src/components/atoms/InputAnimation'
import Const from '~/src/const'

const {
  Size
} = Const

class Layout extends React.Component {
  render () {
    const { children } = this.props
    let header

    header = (
      <TopHeader image={TopHeaderImage}>
        <SiteTopWrapper>
          <SiteIconImg src={SiteIcon} />
          <SiteTitleWrapper>
            <SiteTitle>Niwalab</SiteTitle>
            <SiteSubMessage>
              <InputAnimation
                prefix='I Am'
                contents={[
                  'Takeru Niwa.',
                  'a Developer.',
                  'a System Integrator.'
                ]}
              />
            </SiteSubMessage>
          </SiteTitleWrapper>
        </SiteTopWrapper>
      </ TopHeader>
    )
    return (
      <div>
        {header}
        {children}
      </div>
    )
  }
}

const SiteTopWrapper = styled.div`
  display: flux;
  padding: 100px 100px 0;
  @media(max-width: ${Size.MEDIA.PHONE}px) {
    padding: 60px 30px 0;
  }
`

const SiteTitleWrapper = styled.div`
  display: block;
`

const SiteIconImg = styled.img`
  width: 100px;
  margin-right: 10px;
  @media(max-width: ${Size.MEDIA.TABLET}px) {
    width: 75px;
  }
`

const SiteTitle = styled.div`
  font-size: ${Size.FONT.XX_LARGE}px;
  line-height: ${Size.FONT.XX_LARGE}px;
  @media(max-width: ${Size.MEDIA.TABLET}px) {
    font-size: ${Size.FONT.X_LARGE}px;
    line-height: ${Size.FONT.X_LARGE}px;
  }
  @media(max-width: ${Size.MEDIA.PHONE}px) {
    font-size: ${Size.FONT.X_LARGE}px;
    line-height: ${Size.FONT.X_LARGE}px;
  }
`

const SiteSubMessage = styled.div`
`

export default Layout
