import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Const from '~/src/const'

const {
  Size,
  Color
} = Const

const Tag = (props) => {
  const {
    className,
    name,
    link
  } = props

  return (
    <StyledLink to={link}>
      <TagItem className={className}>
        {name}
      </TagItem>
    </StyledLink>
  )
}

const StyledLink = styled.span`
  text-decoration: none;
  box-shadow: none;
`

const TagItem = styled.span`
  display: inline-block;
  background-color: ${Color.SILVER};
  color: ${Color.MEDIUM_BLACK};
  height: 22px;
  line-height: 22px;
  font-size: ${Size.FONT.SMALL}px;
  padding: 0 10px;
  margin: 0;
  margin-right: 5px;
  border-radius: 2px;
`

export default Tag
