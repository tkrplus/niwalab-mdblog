import React from 'react'
import '~/src/assets/css/custom.css'
import styled from 'styled-components'
import { Link } from 'gatsby'
import TopHeader from '~/src/components/atoms/TopHeader'
import TopHeaderImage from '~/src/assets/TopHeader.png'
import SiteIcon from '~/src/assets/icon.png'
import InputAnimation from '~/src/components/atoms/InputAnimation'
import Const from '~/src/const'
import { rhythm, scale } from '../utils/typography'

const {
  Size
} = Const

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
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
                    'a System Integrator.',
                  ]}
                />
              </SiteSubMessage>
            </SiteTitleWrapper>
          </SiteTopWrapper>
        </ TopHeader>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Niwalab
          </Link>
        </h3>
      )
    }
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
  width: 80px;
  margin-right: 10px;
  @media(max-width: ${Size.MEDIA.PHONE}px) {
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
  font-size: ${Size.FONT.LARGE}px;
  @media(max-width: ${Size.MEDIA.TABLET}px) {
    font-size: ${Size.FONT.MEDIUM}px;
  }
  @media(max-width: ${Size.MEDIA.PHONE}px) {
    font-size: ${Size.FONT.BASE}px;
  }
`


export default Template
