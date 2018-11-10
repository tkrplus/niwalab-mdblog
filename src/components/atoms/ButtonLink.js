import { Link } from 'gatsby'
import styled from 'styled-components'
import Const from '~/src/const'
const {
  Size,
  Color
} = Const

export default styled(Link)`
  display: inline-block;
  background-color: ${Color.NAVY};
  color: ${Color.WHITE};
  height: 28px;
  font-size: ${Size.FONT.SMALL}px;
  font-weight: 400;
  line-height: 28px;
  padding: 0 15px;
  margin: 0;
  border-radius: 2px;
  transition: .3s ease;
  &:hover {
    background-color: ${Color.BLACK};
  }
`
