import React from 'react'
import styled from 'styled-components'
import Const from '~/src/const'

const {
  Size,
  Color
} = Const

export default (props) => {
  const {
    image,
    children
  } = props

  return (
    <Header image={image}>
      <Overlay />
      <Contents>
        { children }
      </Contents>
      <Triangle />
    </Header>
  )
}

const Header = styled.header`
  ${props => props.image && `background-image: url(${props.image});`}
  margin-bottom: 50px;
  color: ${Color.CALM_WHITE};
  background-color: ${Color.LIGHT_GRAY};
  background-size: cover;
  background-attachment: scroll;
  height: 400px;
  width: 100%;
  position: relative;
  @media(max-width: ${Size.MEDIA.TABLET}px) {
    height: 300px;
  }
  @media(max-width: ${Size.MEDIA.PHONE}px) {
    height: 200px;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${Color.BLACK};
  opacity: .4;
`

const Triangle = styled.div`
  background: none;
  position: absolute;
  bottom: -1px;
  right: -1px;
  border-top: solid 70px transparent;
  border-left: solid 1400px ${Color.WHITE};
`

const Contents = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`
